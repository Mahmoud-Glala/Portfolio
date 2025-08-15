from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import json

db = SQLAlchemy()

class PersonalInfo(db.Model):
    __tablename__ = 'personal_info'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, default='Mahmoud Glala')
    title = db.Column(db.String(200), nullable=False, default='Full Stack Developer & UI/UX Enthusiast')
    email = db.Column(db.String(100), nullable=False, default='mahmoud.glala@example.com')
    phone = db.Column(db.String(20), nullable=False, default='+20 123 456 7890')
    location = db.Column(db.String(100), nullable=False, default='Egypt')
    summary = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Experience(db.Model):
    __tablename__ = 'experience'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    company = db.Column(db.String(100), nullable=False)
    period = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    responsibilities = db.Column(db.Text)  # JSON string
    projects = db.Column(db.Text)  # JSON string
    order_index = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def get_responsibilities(self):
        if self.responsibilities:
            try:
                return json.loads(self.responsibilities)
            except:
                return []
        return []
    
    def set_responsibilities(self, responsibilities_list):
        self.responsibilities = json.dumps(responsibilities_list)
    
    def get_projects(self):
        if self.projects:
            try:
                return json.loads(self.projects)
            except:
                return []
        return []
    
    def set_projects(self, projects_list):
        self.projects = json.dumps(projects_list)

class Project(db.Model):
    __tablename__ = 'projects'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    subtitle = db.Column(db.String(200))
    description = db.Column(db.Text, nullable=False)
    long_description = db.Column(db.Text)
    technologies = db.Column(db.Text)  # JSON string
    features = db.Column(db.Text)  # JSON string
    image_url = db.Column(db.String(500))
    live_url = db.Column(db.String(500))
    github_url = db.Column(db.String(500))
    status = db.Column(db.String(50), default='Live')
    is_featured = db.Column(db.Boolean, default=False)
    order_index = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def get_technologies(self):
        if self.technologies:
            try:
                return json.loads(self.technologies)
            except:
                return []
        return []
    
    def set_technologies(self, tech_list):
        self.technologies = json.dumps(tech_list)
    
    def get_features(self):
        if self.features:
            try:
                return json.loads(self.features)
            except:
                return []
        return []
    
    def set_features(self, features_list):
        self.features = json.dumps(features_list)

class Skill(db.Model):
    __tablename__ = 'skills'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    level = db.Column(db.Integer, default=50)  # 0-100
    description = db.Column(db.Text)
    order_index = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Education(db.Model):
    __tablename__ = 'education'
    
    id = db.Column(db.Integer, primary_key=True)
    degree = db.Column(db.String(100), nullable=False)
    field = db.Column(db.String(100), nullable=False)
    institution = db.Column(db.String(200), nullable=False)
    period = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text)
    order_index = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Language(db.Model):
    __tablename__ = 'languages'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    level = db.Column(db.String(50), nullable=False)  # Native, Fluent, Intermediate, Basic
    order_index = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class ContactMessage(db.Model):
    __tablename__ = 'contact_messages'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    subject = db.Column(db.String(200), nullable=False)
    message = db.Column(db.Text, nullable=False)
    is_read = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class AdminUser(db.Model):
    __tablename__ = 'admin_users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    last_login = db.Column(db.DateTime)

