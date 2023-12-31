# Tour ET.
  #### (MERN-Stack)
# Introduction
Welcome to the Tour ET. App - a state-of-the-art tour and travel  interactive and comprehensive online system. Built with MERN full stack.

# Some UI Preview

**Sign-up/sign-in page**
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(611).png" height="auto" width="600"/>

**Home page**
###### Users can see recent package and most popular package lists and also search by location or name
<p align="center">
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(595).png" alt="Course Page" height="auto" width="400" />
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(596).png" alt="Course Page" height="auto" width="400" />
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(597).png" alt="Course Page" height="auto" width="400" />
</p>

**Package page**
###### Users can see packages and also can filter using different parametes
<p align="center">
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(598).png" alt="Course Page" height="auto" width="500" />
</p>

**Package detail page**
###### Users can see package's description, reviews, location, can add to cart, book the package, 
<p align="center">
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(599).png" alt="Course Page" height="auto" width="500" />
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(602).png" alt="Course Page" height="auto" width="500" />
</p>

**Review page**
###### Authenticated user can give review/comment, rate the package, like/dislike other's review
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(601).png" alt="Course Page" height="auto" width="500" />


**Book page**
###### Customers check out payment, choose hotel, and room
<p align="center">
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(603).png" alt="Course Page" height="auto" width="500" />
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(604).png" alt="Course Page" height="auto" width="500" />
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(605).png" alt="Course Page" height="auto" width="500" />
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(606).png" alt="Course Page" height="auto" width="500" />
</p>

**Witshlist page**
###### Customers can see packages stored in wishlist, remove from here, book here
<p align="center">
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(607).png" alt="Course Page" height="auto" width="500" />
</p>

**Contact page**
###### Customers can reach us 
<img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(608).png" alt="Course Page" height="auto" width="500" />


**About page**
###### users can know about us
<p align="center">
  <img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(609).png" alt="Course Page" height="auto" width="500" />
  <img src="https://github.com/bemnet16/Tour_ET--MERN--/blob/UI-Preview/screenshots/Screenshot%20(610).png" alt="Course Page" height="auto" width="500" />
</p>


# Key Features
Dynamic Course Creation & Management: Easily create and manage course content, including images and attachments.
Robust Authentication: Secure user authentication using Clerk.
Interactive Video Playback & Upload: Integrated with Mux for a smooth video experience.
Secure Payments: Stripe integration for handling course payments and subscriptions.
User-Friendly Interface: Modern, responsive design with Tailwind CSS.
Document and Image Uploads: Utilizing UploadThing for hassle-free file management.

# Technologies Used

## Frontend

**Technologies Used:**

- React *18.2.0*
- Next.js *13.4.12*
- Tailwind CSS *3.3.5*
- React Hook Form *7.48.2*
- React-Quill *2.0.0*
- Recharts *2.10.3*
- Lucide-React *0.294.0*

**Key Libraries:**

- **@clerk/nextjs** *4.27.2*: For secure user authentication.
- **@mux/mux-node** and **@mux/mux-player-react** *7.3.3* & *2.3.0*: For video playback and uploads.
- **@uploadthing/react** *6.0.2*: For handling document and image uploads.
- **react-hot-toast** *2.4.1*: For elegant notifications.
- **zustand** *4.4.7*: State management.

**UI/UX Enhancements:**

- **Tailwind Merge** *2.0.0*: For optimizing Tailwind CSS classes.
- **cmdk** *0.2.0*: Command menu interface.
- **react-dropzone** *14.2.3*: Drag and drop file uploads.
- **@tanstack/react-table** *8.10.7*: For building and managing tables.
- **@radix-ui/react-dialog**, **@radix-ui/react-dropdown-menu**, etc., for advanced UI components.

**Features:**

- Interactive and user-friendly interface.
- Seamless integration with video streaming and file upload services.
- Comprehensive course creation and management tools.
- Responsive design ensuring compatibility across various devices.

**Development Tools:**

- **eslint** *8.54.0*: For code linting.
- **postcss** *8.4.31* and **autoprefixer** *10.4.16*: For CSS processing.
- **typescript** *5.3.2*: For type-checking.


## Backend

**Main Technologies:**

- Express.js *4.18.2*: The backbone of the server, handling routing and middleware.
- Mongoose *8.0.2*: ODM for MongoDB, simplifying database interactions.
- Node.js: The runtime environment for executing JavaScript on the server side.

**Database:**

- MongoDB: NoSQL database used for storing application data.

**Key Libraries and Middleware:**

- **dotenv** *16.3.1*: For managing environment variables.
- **nodemon** *3.0.2* (Development): For automatically restarting the server during development.

**Features:**

- Robust REST API endpoints for data retrieval and manipulation.
- Secure connection to the database with efficient query handling.
- Scalable architecture suitable for expanding features and user base.

**Security and Authentication:**

- Integrated security measures for API endpoints.
- Authentication and authorization logic to protect user data.

**Development Tools:**

- Various NPM packages for enhancing functionality and efficiency.
- Postman for testing and validating API endpoints.

**Integrations:**

- **Stripe** for payment processing: Integrated with Stripe's webhooks for handling transactions.
- Other third-party services as required by the application.


