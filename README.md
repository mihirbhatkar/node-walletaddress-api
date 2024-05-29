
# NestJS API with PostgreSQL Database

This API project is built using NestJS and interacts with a PostgreSQL database to manage users and their associated wallet addresses.

## Entities/Schemas

### User Entity

The `User` entity represents a user in the system with the following attributes:

- `id`: Auto-generated unique identifier.
- `name`: Name of the user.
- `email`: Email address of the user (must be unique).
- `created_at`: Timestamp of when the user record was created.

### WalletAddress Entity

The `WalletAddress` entity represents a wallet address associated with a user:

- `id`: Auto-generated unique identifier.
- `address`: String representing the wallet address.
- `created_at`: Timestamp of when the wallet address record was created.
- `user`: Many-to-one relationship with the `User` entity, linking each wallet address to a user. If a user is deleted, all associated wallet addresses are also deleted (`ON DELETE CASCADE`).

## Relationship

- Each `User` can have multiple `WalletAddress` entries, as represented by the `OneToMany` relationship from `User` to `WalletAddress`.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL database server set up and running.

### Installation

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/your/repository.git
   ```

2. Navigate into the project directory:

   ```bash
   cd project-directory
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Database Configuration

1. Create a PostgreSQL database and configure its connection details in the `.env` file:

   ```plaintext
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   DB_DATABASE=my_database
   ```

   Adjust these values according to your PostgreSQL setup.

### Running the Application

1. Start the NestJS application:

   ```bash
   npm run start
   ```

   This command compiles the TypeScript code and starts the server.

2. The API should now be accessible at `http://localhost:3000` (or another port if specified).

### Using the API

- Use tools like Postman to interact with the API endpoints:
  
  - **Users**:
    - `GET /users`: Get all users.
    - `GET /users/:id`: Get a user by ID.
    - `POST /users`: Create a new user.
    - `PUT /users/:id`: Update a user by ID.
    - `DELETE /users/:id`: Delete a user by ID.
  
  - **Wallet Addresses**:
    - `GET /wallet-address`: Get all wallet addresses.
    - `GET /wallet-address/:id`: Get a wallet address by ID.
    - `POST /wallet-address`: Create a new wallet address.
    - `PUT /wallet-address/:id`: Update a wallet address by ID.
    - `DELETE /wallet-address/:id`: Delete a wallet address by ID.

