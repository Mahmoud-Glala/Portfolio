from flask import Blueprint, request, jsonify, session
from werkzeug.security import check_password_hash, generate_password_hash
from src.models.portfolio import (
    db, PersonalInfo, Experience, Project, Skill, Education, 
    Language, ContactMessage, AdminUser
)
from functools import wraps
import json

admin_bp = Blueprint('admin', __name__)

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'admin_id' not in session:
            return jsonify({'success': False, 'message': 'Authentication required'}), 401
        return f(*args, **kwargs)
    return decorated_function

# Authentication routes
@admin_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        
        if not username or not password:
            return jsonify({'success': False, 'message': 'Username and password required'}), 400
        
        admin = AdminUser.query.filter_by(username=username, is_active=True).first()
        
        if admin and check_password_hash(admin.password_hash, password):
            session['admin_id'] = admin.id
            session['admin_username'] = admin.username
            return jsonify({
                'success': True, 
                'message': 'Login successful',
                'admin': {
                    'id': admin.id,
                    'username': admin.username,
                    'email': admin.email
                }
            })
        else:
            return jsonify({'success': False, 'message': 'Invalid credentials'}), 401
            
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@admin_bp.route('/logout', methods=['POST'])
@login_required
def logout():
    session.clear()
    return jsonify({'success': True, 'message': 'Logged out successfully'})

@admin_bp.route('/check-auth', methods=['GET'])
def check_auth():
    if 'admin_id' in session:
        admin = AdminUser.query.get(session['admin_id'])
        if admin and admin.is_active:
            return jsonify({
                'success': True,
                'authenticated': True,
                'admin': {
                    'id': admin.id,
                    'username': admin.username,
                    'email': admin.email
                }
            })
    
    return jsonify({'success': True, 'authenticated': False})

# Dashboard
@admin_bp.route('/dashboard', methods=['GET'])
@login_required
def dashboard():
    try:
        stats = {
            'total_projects': Project.query.count(),
            'featured_projects': Project.query.filter_by(is_featured=True).count(),
            'total_skills': Skill.query.count(),
            'unread_messages': ContactMessage.query.filter_by(is_read=False).count(),
            'total_messages': ContactMessage.query.count()
        }
        
        recent_messages = ContactMessage.query.order_by(ContactMessage.created_at.desc()).limit(5).all()
        
        return jsonify({
            'success': True,
            'stats': stats,
            'recent_messages': [{
                'id': msg.id,
                'name': msg.name,
                'email': msg.email,
                'subject': msg.subject,
                'created_at': msg.created_at.isoformat(),
                'is_read': msg.is_read
            } for msg in recent_messages]
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

# Personal Info routes
@admin_bp.route('/personal-info', methods=['GET'])
@login_required
def get_personal_info():
    try:
        info = PersonalInfo.query.first()
        if not info:
            # Create default personal info
            info = PersonalInfo(
                name='Mahmoud Glala',
                title='Full Stack Developer & UI/UX Enthusiast',
                email='mahmoud.glala@example.com',
                phone='+20 123 456 7890',
                location='Egypt',
                summary='Highly motivated and results-oriented Full Stack Developer with a strong passion for creating innovative and user-centric web applications.'
            )
            db.session.add(info)
            db.session.commit()
        
        return jsonify({
            'success': True,
            'data': {
                'id': info.id,
                'name': info.name,
                'title': info.title,
                'email': info.email,
                'phone': info.phone,
                'location': info.location,
                'summary': info.summary
            }
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@admin_bp.route('/personal-info', methods=['PUT'])
@login_required
def update_personal_info():
    try:
        data = request.get_json()
        info = PersonalInfo.query.first()
        
        if not info:
            info = PersonalInfo()
            db.session.add(info)
        
        info.name = data.get('name', info.name)
        info.title = data.get('title', info.title)
        info.email = data.get('email', info.email)
        info.phone = data.get('phone', info.phone)
        info.location = data.get('location', info.location)
        info.summary = data.get('summary', info.summary)
        
        db.session.commit()
        
        return jsonify({'success': True, 'message': 'Personal info updated successfully'})
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500

# Projects routes
@admin_bp.route('/projects', methods=['GET'])
@login_required
def get_projects():
    try:
        projects = Project.query.order_by(Project.order_index, Project.created_at.desc()).all()
        
        return jsonify({
            'success': True,
            'data': [{
                'id': p.id,
                'title': p.title,
                'subtitle': p.subtitle,
                'description': p.description,
                'long_description': p.long_description,
                'technologies': p.get_technologies(),
                'features': p.get_features(),
                'image_url': p.image_url,
                'live_url': p.live_url,
                'github_url': p.github_url,
                'status': p.status,
                'is_featured': p.is_featured,
                'order_index': p.order_index,
                'created_at': p.created_at.isoformat()
            } for p in projects]
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@admin_bp.route('/projects', methods=['POST'])
@login_required
def create_project():
    try:
        data = request.get_json()
        
        project = Project(
            title=data.get('title'),
            subtitle=data.get('subtitle'),
            description=data.get('description'),
            long_description=data.get('long_description'),
            image_url=data.get('image_url'),
            live_url=data.get('live_url'),
            github_url=data.get('github_url'),
            status=data.get('status', 'Live'),
            is_featured=data.get('is_featured', False),
            order_index=data.get('order_index', 0)
        )
        
        if data.get('technologies'):
            project.set_technologies(data['technologies'])
        if data.get('features'):
            project.set_features(data['features'])
        
        db.session.add(project)
        db.session.commit()
        
        return jsonify({'success': True, 'message': 'Project created successfully', 'id': project.id})
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500

@admin_bp.route('/projects/<int:project_id>', methods=['PUT'])
@login_required
def update_project(project_id):
    try:
        data = request.get_json()
        project = Project.query.get_or_404(project_id)
        
        project.title = data.get('title', project.title)
        project.subtitle = data.get('subtitle', project.subtitle)
        project.description = data.get('description', project.description)
        project.long_description = data.get('long_description', project.long_description)
        project.image_url = data.get('image_url', project.image_url)
        project.live_url = data.get('live_url', project.live_url)
        project.github_url = data.get('github_url', project.github_url)
        project.status = data.get('status', project.status)
        project.is_featured = data.get('is_featured', project.is_featured)
        project.order_index = data.get('order_index', project.order_index)
        
        if 'technologies' in data:
            project.set_technologies(data['technologies'])
        if 'features' in data:
            project.set_features(data['features'])
        
        db.session.commit()
        
        return jsonify({'success': True, 'message': 'Project updated successfully'})
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500

@admin_bp.route('/projects/<int:project_id>', methods=['DELETE'])
@login_required
def delete_project(project_id):
    try:
        project = Project.query.get_or_404(project_id)
        db.session.delete(project)
        db.session.commit()
        
        return jsonify({'success': True, 'message': 'Project deleted successfully'})
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500

# Skills routes
@admin_bp.route('/skills', methods=['GET'])
@login_required
def get_skills():
    try:
        skills = Skill.query.order_by(Skill.category, Skill.order_index).all()
        
        return jsonify({
            'success': True,
            'data': [{
                'id': s.id,
                'name': s.name,
                'category': s.category,
                'level': s.level,
                'description': s.description,
                'order_index': s.order_index
            } for s in skills]
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@admin_bp.route('/skills', methods=['POST'])
@login_required
def create_skill():
    try:
        data = request.get_json()
        
        skill = Skill(
            name=data.get('name'),
            category=data.get('category'),
            level=data.get('level', 50),
            description=data.get('description'),
            order_index=data.get('order_index', 0)
        )
        
        db.session.add(skill)
        db.session.commit()
        
        return jsonify({'success': True, 'message': 'Skill created successfully', 'id': skill.id})
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500

# Contact Messages routes
@admin_bp.route('/messages', methods=['GET'])
@login_required
def get_messages():
    try:
        messages = ContactMessage.query.order_by(ContactMessage.created_at.desc()).all()
        
        return jsonify({
            'success': True,
            'data': [{
                'id': m.id,
                'name': m.name,
                'email': m.email,
                'subject': m.subject,
                'message': m.message,
                'is_read': m.is_read,
                'created_at': m.created_at.isoformat()
            } for m in messages]
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@admin_bp.route('/messages/<int:message_id>/read', methods=['PUT'])
@login_required
def mark_message_read(message_id):
    try:
        message = ContactMessage.query.get_or_404(message_id)
        message.is_read = True
        db.session.commit()
        
        return jsonify({'success': True, 'message': 'Message marked as read'})
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500

