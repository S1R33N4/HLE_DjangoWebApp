# C-PEITEL2B — Module 02 Source Code
## Laboratory Activity 01 — Dynamic Forms

This source code implements the Module 02 laboratory:

Form → POST Request → Django URL → View → Server-Side Processing → Dynamic Response

## Important

This is a sample project named:

FTL_DjangoWebApp

Students should replace `FTL` with their own initials when creating their semester project.

Example:

JDC_DjangoWebApp

The Django application created for Module 02 is:

home

Do NOT create a new Django root project for Module 02 if you are continuing from Module 01.

## Installation

Create/activate the virtual environment used by the course, then install Django:

```bash
pip install -r requirements.txt
```

## Run

```bash
python manage.py runserver
```

Open:

http://127.0.0.1:8000/dynamic-form/

## Expected workflow

1. User opens the Dynamic Form.
2. User enters a student name and program.
3. The form submits using POST.
4. Django routes the request to `home.views.dynamic_form`.
5. The view reads `request.POST`.
6. The view creates context data.
7. Django renders `home/welcome.html`.
8. The browser displays the submitted information.

## Module 02 Scope

No database model is required for this activity.

The purpose is to understand:

- HTML forms
- GET and POST
- Django URL routing
- Django views
- request.POST
- context data
- templates
- dynamic responses
- basic testing and debugging

Database and CRUD functionality will be introduced in a later module.
