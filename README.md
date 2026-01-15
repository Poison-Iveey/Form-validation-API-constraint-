# Form Validation Web App

## Project Overview
This is a lightweight, client side form validation web application. 
It validates user input in real time and ensures that all form fields meet defined requirements before submission. 
The project demonstrates proficiency in HTML, CSS, JavaScript, and containerized deployment using Docker.

## Features
- Real-time input validation for email, password, postal code, and country fields.
- User-friendly error messages.
- Fully static website, no backend required.
- Dockerized deployment for portability and consistency.
- Optional CI/CD automation via Jenkins.

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)
- Docker
- Jenkins for CI/CD

## Architecture
- Front-end validation occurs directly in the browser using JavaScript.
- HTML/CSS provides the form structure and styling.
- Docker container hosts the static files and exposes a port to the public.
- Azure VM runs Docker to host the container, providing a live deployment.

## Deployment
The project is deployed on an Azure VM in a Docker container. The container exposes port 84 for the form application.

**Live Demo:** [http://20.93.139.231:84](http://20.93.139.231:84)
   git clone <your-repo-url>
   cd Form-validation-API-constraint-
