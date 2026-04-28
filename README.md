# Content Broadcasting System

## Tech Stack

* Node.js (Express)
* MySQL
* Sequelize

## Setup Instructions

1. Install dependencies:
   npm install

2. Start server:
   npm run dev

## Features

* JWT Authentication
* Role-based access (Teacher / Principal)
* Content Upload (Image)
* Approval Workflow
* Scheduling System
* Public API

## API Endpoints

### Auth

POST /auth/register
POST /auth/login

### Content

POST /content (Teacher)
POST /content/:id/approve (Principal)
POST /content/:id/reject (Principal)
GET /content/live/:teacherId

## Business Logic

* Content must be approved before display
* Content visible only between start_time and end_time
* Rotation logic applied using duration

## Edge Cases

* No content → returns "No content available"
* Invalid subject → returns empty response
* Unapproved content → not visible
