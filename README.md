# JWT-Authentication-NodeJS
NodeJS authentication system powered by logic of JSON Web Tokens.

Simple frontend connected with REST API. The focus is on the implementation of an authentication system. Here, that is done with JWT tokens. On top of that, it's really important to have custom error handling implemented into your APIs because it will be very difficult to cope if our app keeps on scaling larger. And that is what this project is all about.

If you want to try this code on your local setup, you can simply clone this repository. You will need to create a .env file in the projects root directory and add the JWT_SECRET variable into it, something like this:

JWT_SECRET=jwtSecret

After that, in the projects root directory run the command:

npm install

After that you can spin up the server by running:

npm start

Now you should be good to go.
