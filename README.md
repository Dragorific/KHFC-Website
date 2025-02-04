# KHFC Site

KHFC Site is a Django-based web application designed for managing and showcasing my take-out/catering business. It features a dynamic front-end for user interaction with plans for a back-end in the near future.

## Features

- Django-based backend with SQLite database (to be used later)
- Dynamic routing and templating
- Local development and deployment support

## Installation

To set up and run the project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Python (>= 3.8)
- pip
- virtualenv (optional but recommended)

### Steps to Deploy Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/khfc_site.git
   cd khfc_site
   ```
2. **Create a virtual environment (optional but recommended)**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
4. **Apply migrations**
   ```bash
   python manage.py migrate
   ```
5. **Create a superuser (for Django admin access)**
   ```bash
   python manage.py createsuperuser
   ```
6. **Run the development server**
   ```bash
   python manage.py runserver
   ```
   The website will be available at `http://127.0.0.1:8000/`.

## License

This project is licensed under the MIT License.
