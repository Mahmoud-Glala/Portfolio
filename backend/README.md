# Mahmoud Glala's Portfolio - Backend

This directory contains the backend application for Mahmoud Glala's personal portfolio website. It is part of a larger monorepo that also includes the frontend application. It provides a robust API for managing personal information, projects, skills, and messages, accessible through an administration panel. The backend is built with Flask, a Python web framework, and uses SQLAlchemy for database interactions.

## 🌟 Features

- **RESTful API:** Provides endpoints for managing portfolio data.
- **Admin Panel:** Secure administration interface for content management.
- **User Authentication:** Secure login for the admin panel.
- **Database Integration:** Uses SQLite for data storage (can be easily configured for other databases).
- **Content Management:** CRUD operations for personal info, projects, skills, and messages.

## 🛠️ Technologies Used

- **Flask:** A micro web framework for Python.
- **SQLAlchemy:** An SQL toolkit and Object-Relational Mapper (ORM).
- **SQLite:** A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.
- **Werkzeug:** A comprehensive WSGI web application library.
- **Jinja2:** A modern and designer-friendly templating language for Python.
- **Flask-CORS:** A Flask extension for handling Cross Origin Resource Sharing (CORS), making cross-domain AJAX possible.

## 📋 Getting Started

To get a copy of the project up and running on your local machine for development and testing purposes, follow these steps:

### Prerequisites

Make sure you have Python 3.x installed on your system.

- [Python](https://www.python.org/downloads/) (v3.8 or higher)

### Installation

1.  **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2.  **Create a virtual environment:**

    ```bash
    python3 -m venv venv
    ```

3.  **Activate the virtual environment:**

    -   **On macOS and Linux:**

        ```bash
        source venv/bin/activate
        ```

    -   **On Windows (Command Prompt):**

        ```bash
        venv\Scripts\activate.bat
        ```

    -   **On Windows (PowerShell):**

        ```bash
        .\venv\Scripts\Activate.ps1
        ```

4.  **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

### Running the Application

1.  **Set Flask environment variables:**

    ```bash
    export FLASK_APP=src/main.py
    export FLASK_ENV=development
    ```
    (On Windows, use `set` instead of `export`)

2.  **Run the Flask application:**

    ```bash
    flask run
    ```

    The backend will typically run on `http://localhost:5000`.

## 📁 Project Structure

```
.github/
src/
├── main.py
├── models/
│   └── portfolio.py
├── routes/
│   ├── admin.py
│   └── portfolio.py
└── static/
    └── admin-panel.html
requirements.txt
venv/
README.md
LICENSE
.gitignore
```

## 🔑 Admin Panel Access

- **Username:** `admin`
- **Password:** `admin123`

## 🤝 Contributing

Contributions are welcome! Please refer to the main repository's `README.md` for general contribution guidelines.

## 📄 License

This project is licensed under the MIT License - see the main repository's [LICENSE](LICENSE) file for details.

## 📞 Contact

For any inquiries, please contact Mahmoud Glala.

## 🙏 Acknowledgements

- [Flask Documentation](https://flask.palletsprojects.com/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [Flask-CORS Documentation](https://flask-cors.readthedocs.io/)


