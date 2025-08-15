import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS
from werkzeug.security import generate_password_hash
from src.models.portfolio import db, AdminUser, PersonalInfo, Project, Skill, Language
from src.routes.user import user_bp
from src.routes.admin import admin_bp
from src.routes.portfolio import portfolio_bp

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'

# Enable CORS for all routes
CORS(app, supports_credentials=True)

# Register blueprints
app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(admin_bp, url_prefix='/api/admin')
app.register_blueprint(portfolio_bp, url_prefix='/api/portfolio')

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

def init_default_data():
    """Initialize default data for the portfolio"""
    
    # Create default admin user
    if not AdminUser.query.filter_by(username='admin').first():
        admin = AdminUser(
            username='admin',
            password_hash=generate_password_hash('admin123'),
            email='admin@mahmoudglala.com',
            is_active=True
        )
        db.session.add(admin)
    
    # Create default personal info
    if not PersonalInfo.query.first():
        personal_info = PersonalInfo(
            name='Mahmoud Glala',
            title='Full Stack Developer & UI/UX Enthusiast',
            email='mahmoud.glala@example.com',
            phone='+20 123 456 7890',
            location='Egypt',
            summary='Highly motivated and results-oriented Full Stack Developer with a strong passion for creating innovative and user-centric web applications. Proficient in both frontend and backend technologies, with a keen eye for creative UI/UX design and a commitment to delivering high-quality, scalable solutions. Adept at working under pressure and leveraging AI tools to enhance productivity and stay abreast of market trends.'
        )
        db.session.add(personal_info)
    
    # Create default projects
    if not Project.query.first():
        projects = [
            {
                'title': 'Roo Florals',
                'subtitle': 'Online Flower Shop',
                'description': 'A comprehensive e-commerce platform for a flower shop featuring product catalog, shopping cart, order management, and admin panel.',
                'long_description': 'Developed a beautiful and modern online flower shop with complete e-commerce functionality. The platform includes a responsive product catalog, shopping cart with quantity management, secure checkout process, and comprehensive admin panel for managing products, orders, and settings. Features include coupon system, branch management, contact forms, and Telegram integration for order notifications.',
                'technologies': ['Flask', 'Python', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'Telegram Bot API'],
                'features': ['Product catalog with search and filtering', 'Shopping cart and checkout system', 'Admin panel for content management', 'Order tracking and management', 'Telegram bot integration', 'Coupon and discount system', 'Branch management', 'Responsive design'],
                'live_url': 'https://rooflorals.com',
                'github_url': '#',
                'status': 'Live',
                'is_featured': True,
                'order_index': 1
            },
            {
                'title': 'MG Store',
                'subtitle': 'E-commerce Platform',
                'description': 'A robust e-commerce platform with modern React frontend, Flask backend, and comprehensive admin panel.',
                'long_description': 'Engineered a full-stack e-commerce solution with a modern React.js frontend and robust Flask backend. The platform features comprehensive API endpoints for products, categories, orders, authentication, and payment processing. Implemented advanced security measures including CSRF protection, rate limiting, and secure logging. The admin panel provides rich UI for managing all aspects of the store.',
                'technologies': ['React.js', 'Flask', 'SQLAlchemy', 'Python', 'REST API', 'CSRF Protection', 'Rate Limiting'],
                'features': ['Modern React.js frontend', 'RESTful API architecture', 'Advanced security measures', 'Rate limiting and CSRF protection', 'Comprehensive admin panel', 'Payment processing integration', 'User authentication system', 'Scalable database design'],
                'live_url': '#',
                'github_url': '#',
                'status': 'In Development',
                'is_featured': True,
                'order_index': 2
            },
            {
                'title': 'Nexus Agency',
                'subtitle': 'Agency Website',
                'description': 'A modern agency website showcasing services, portfolio, and team.',
                'long_description': 'Created a sophisticated agency website that effectively showcases the company\'s services, portfolio, and team. The site features modern design principles, smooth animations, and optimized performance. Implemented SEO best practices and ensured excellent user experience across all devices.',
                'technologies': ['React.js', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'SEO Optimization'],
                'features': ['Modern responsive design', 'Smooth animations and transitions', 'SEO optimized', 'Performance optimized', 'Portfolio showcase', 'Contact forms', 'Team profiles', 'Service pages'],
                'live_url': 'https://nexusagencyeg.com',
                'github_url': '#',
                'status': 'Live',
                'is_featured': True,
                'order_index': 3
            }
        ]
        
        for project_data in projects:
            project = Project(**{k: v for k, v in project_data.items() if k not in ['technologies', 'features']})
            project.set_technologies(project_data['technologies'])
            project.set_features(project_data['features'])
            db.session.add(project)
    
    # Create default skills
    if not Skill.query.first():
        skills = [
            {'name': 'Python', 'category': 'Backend', 'level': 90},
            {'name': 'Flask', 'category': 'Backend', 'level': 85},
            {'name': 'JavaScript', 'category': 'Frontend', 'level': 88},
            {'name': 'React.js', 'category': 'Frontend', 'level': 85},
            {'name': 'HTML5', 'category': 'Frontend', 'level': 95},
            {'name': 'CSS3', 'category': 'Frontend', 'level': 90},
            {'name': 'SQLite', 'category': 'Database', 'level': 80},
            {'name': 'SQLAlchemy', 'category': 'Database', 'level': 75},
            {'name': 'REST APIs', 'category': 'Backend', 'level': 85},
            {'name': 'Git', 'category': 'Tools', 'level': 80},
            {'name': 'UI/UX Design', 'category': 'Design', 'level': 85}
        ]
        
        for skill_data in skills:
            skill = Skill(**skill_data)
            db.session.add(skill)
    
    # Create default languages
    if not Language.query.first():
        languages = [
            {'name': 'Arabic', 'level': 'Native', 'order_index': 1},
            {'name': 'English', 'level': 'Fluent', 'order_index': 2}
        ]
        
        for lang_data in languages:
            language = Language(**lang_data)
            db.session.add(language)
    
    db.session.commit()

with app.app_context():
    db.create_all()
    init_default_data()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
            return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            return send_from_directory(static_folder_path, 'index.html')
        else:
            return "index.html not found", 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
