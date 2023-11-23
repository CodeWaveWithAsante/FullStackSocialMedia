Full-Stack Social Media Application using ReactJs, and Tailwind CSS for the front end and NodeJs, ExpressJs and MongoDb for backend.
This App is fully responsive. This project includes for frontend (UI Design) and Backend (Server).

# Functionalities:
1. #User Authentication and Authorisation
2. #Email Verification
3. #Password reset
4. #Create Post
5. #Advance Comment system (comments with sub coments)
6. #Like post and comments 
7. #Delete post
8. #Friend Request (send request, accept or deby)
and others.....


# Getting Started

# SERVER OR BACKEND
Firstly move to the server directory eg: cd server

1. Create a `.env` file
    The .env file will contain the following:
    i. MONGODB_URL = `database connection string`
    ii. JWT_SECRET_KEY = `your secreate key`
    iii. PORT = `8800`
    iv. AUTH_EMAIL= `email address`
    v. AUTH_PASSWORD= `email access password`
    vi. APP_URL = `http://localhost:8800`

    Note: I used hotmail account to send verification email, so you can just create one because hotmail account is reliable in product and has no configuration.

    Alos, change `API_URL` when you deploy your app else use localhost with the appropriate `port number`

2. Run `npm install` to install the packages
3. Run `npm start` to start the server

# VIEWS FILE
In the view are the static html files to be use for `email verfication` and `password reset`.

1. This folder is a React App
2. navigate in the folder and install it dependencies
3. make changes to suit your preference and run build
4. copy the build folder into the view folder in the server folder

**Override the existing one.**
NOTE: During deployment make sure you change the various links in the view file and build it again and replace the files in the view folder of the server folder.


# CLINET SIDE

The client or frontend also has .env filde in the root folder. 
Create an environment variable of name `REACT_APP_CLOUDINARY_ID`.
This will store the cloudinary cloud name

This side also has and env file with `REACT_APP_CLOUDINARY_ID`
