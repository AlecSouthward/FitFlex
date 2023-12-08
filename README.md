# FitFlex

FitFlex is a dynamic full-stack web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This platform is your go-to destination for premium fitness essentials, providing a user-friendly experience with features like user authentication, product browsing, and an admin panel for product management.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Pages](#pages)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Public Website:** The public website can be found **[here](https://fit-flex-04679b9ca957.herokuapp.com/)**.
- **User Authentication:** Secure sign-in and sign-up functionality for users.
- **Product Showcase:** Browse a curated selection of top-quality fitness gear.

- **Admin Panel:** Manage and edit products effortlessly with an intuitive admin interface.

- **Responsive Design:** Ensures a seamless experience across devices.

- **About, Contact, Home Pages:** Learn more about FitFlex, get in touch, and explore the home page.

## Deployment

The FitFlex website has been deployed to Heroku, with both the client and server.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AlecSouthward/fitflex.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd fitflex
   ```

3. **Install dependencies:**

   Navigate to the client directory and run...

   ```bash
   npm run install-client && npm run install-server
   ```

4. **Set up environment variables:**

   - Go to the `server` folder, and open up `server.js`.
   - All of the environment variables that you might need to change
     are there.

5. **Run the application:**

   ```bash
   npm start
   ```

   This launches _both_ the client and the server at the same time using concurrently.

   The app will be accessible at `http://localhost:3000`.

   While the server/api will be accessible at `http://localhost:8080`.

   If you however want to run the client or server seperately,
   you can do it like this...

   ```bash
   npm run start-client

   npm run start-server
   ```

## Usage

1. Visit the FitFlex **[website](https://fit-flex-04679b9ca957.herokuapp.com/)**.
2. Explore the different pages: About, Contact, Home, Sign In, Sign Up, Products, and the Admin page for product management.
3. Enjoy a seamless fitness shopping experience!

## Testing

To test the client app while in the client directory run...

```bash
npm run test-client
```

To test the server, navigate to the server directory and run...

```bash
npm run test-server
```

## Technologies Used

- **Frontend:**

  - React.js
  - Redux (if applicable)

- **Backend:**

  - Node.js
  - Express.js

- **Database:**

  - MongoDB

- **Authentication:**

  - JSON Web Tokens (JWT)

- **Styling:**
  - CSS or SCSS

## Pages

1. **Home Page:** Welcome to FitFlex with featured products and highlights.
2. **About Page:** Learn about the mission and values behind FitFlex.
3. **Contact Page:** Get in touch with our team for inquiries or assistance.
4. **Sign In/Sign Up Pages:** User authentication for a personalized experience.
5. **Products Page:** Explore and purchase top-quality fitness essentials.
6. **Admin Page:** Manage and edit products efficiently.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
