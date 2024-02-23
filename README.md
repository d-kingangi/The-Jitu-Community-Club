# Jitu Community Club Backend

This project serves as the backend for the Jitu Community Club, allowing members to register, update their details, fetch individual members, and delete members.

## Setup

- Clone the repository: `git clone https://github.com/yourusername/jitu-community-club-backend.git`
- Install dependencies: `npm install`

## Configuration

Ensure you have a valid MSSQL database connection configured. Update the `sqlConfig` in `member.controller.ts` accordingly.

## Running the Tests

Run the unit tests using: `npm test`

## Endpoints

- `POST /register`: Register a new member
- `PUT /update/:id`: Update member details
- `GET /members/:id`: Fetch details of a single member
- `DELETE /delete/:id`: Delete a member

## Usage

- Start the server: `npm start`

...

