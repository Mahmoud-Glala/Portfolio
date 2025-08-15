from flask import Blueprint, request, jsonify
from src.models.portfolio import (
    db, PersonalInfo, Experience, Project, Skill, Education, 
    Language, ContactMessage
)

portfolio_bp = Blueprint('portfolio', __name__)

# Public routes for frontend
@portfolio_bp.route('/personal-info', methods=['GET'])
def get_personal_info():
    try:
        info = PersonalInfo.query.first()
        if not info:
            return jsonify({
                'success': True,
                'data': {
                    'name': 'Mahmoud Glala',
                    'title': 'Full Stack Developer & UI/UX Enthusiast',
                    'email': 'mahmoud.glala@example.com',
                    'phone': '+20 123 456 7890',
                    'location': 'Egypt',
                    'summary': 'Highly motivated and results-oriented Full Stack Developer with a strong passion for creating innovative and user-centric web applications.'
                }
            })
        
        return jsonify({
            'success': True,
            'data': {
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

@portfolio_bp.route('/projects', methods=['GET'])
def get_projects():
    try:
        featured_only = request.args.get('featured', 'false').lower() == 'true'
        
        if featured_only:
            projects = Project.query.filter_by(is_featured=True).order_by(Project.order_index).all()
        else:
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
                'is_featured': p.is_featured
            } for p in projects]
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@portfolio_bp.route('/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    try:
        project = Project.query.get_or_404(project_id)
        
        return jsonify({
            'success': True,
            'data': {
                'id': project.id,
                'title': project.title,
                'subtitle': project.subtitle,
                'description': project.description,
                'long_description': project.long_description,
                'technologies': project.get_technologies(),
                'features': project.get_features(),
                'image_url': project.image_url,
                'live_url': project.live_url,
                'github_url': project.github_url,
                'status': project.status,
                'is_featured': project.is_featured
            }
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@portfolio_bp.route('/skills', methods=['GET'])
def get_skills():
    try:
        skills = Skill.query.order_by(Skill.category, Skill.order_index).all()
        
        # Group skills by category
        skills_by_category = {}
        for skill in skills:
            if skill.category not in skills_by_category:
                skills_by_category[skill.category] = []
            skills_by_category[skill.category].append({
                'id': skill.id,
                'name': skill.name,
                'level': skill.level,
                'description': skill.description
            })
        
        return jsonify({
            'success': True,
            'data': skills_by_category
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@portfolio_bp.route('/experience', methods=['GET'])
def get_experience():
    try:
        experiences = Experience.query.order_by(Experience.order_index, Experience.created_at.desc()).all()
        
        return jsonify({
            'success': True,
            'data': [{
                'id': e.id,
                'title': e.title,
                'company': e.company,
                'period': e.period,
                'location': e.location,
                'description': e.description,
                'responsibilities': e.get_responsibilities(),
                'projects': e.get_projects()
            } for e in experiences]
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@portfolio_bp.route('/education', methods=['GET'])
def get_education():
    try:
        education = Education.query.order_by(Education.order_index, Education.created_at.desc()).all()
        
        return jsonify({
            'success': True,
            'data': [{
                'id': e.id,
                'degree': e.degree,
                'field': e.field,
                'institution': e.institution,
                'period': e.period,
                'description': e.description
            } for e in education]
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@portfolio_bp.route('/languages', methods=['GET'])
def get_languages():
    try:
        languages = Language.query.order_by(Language.order_index).all()
        
        return jsonify({
            'success': True,
            'data': [{
                'id': l.id,
                'name': l.name,
                'level': l.level
            } for l in languages]
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@portfolio_bp.route('/contact', methods=['POST'])
def submit_contact():
    try:
        data = request.get_json()
        
        if not all(key in data for key in ['name', 'email', 'subject', 'message']):
            return jsonify({'success': False, 'message': 'All fields are required'}), 400
        
        message = ContactMessage(
            name=data['name'],
            email=data['email'],
            subject=data['subject'],
            message=data['message']
        )
        
        db.session.add(message)
        db.session.commit()
        
        return jsonify({'success': True, 'message': 'Message sent successfully'})
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500

