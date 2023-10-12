# Backend | Server side


**Here is a list of models that are used to represent the data for a tourism website:*

# 1.User:
        This model will represent the user data such as name, email, password, and other user-related information.
# 2.Package:
        This model will represent the package data such as package name, package details, package prices, and package availability.
# 3.Wishlist:
        This model will represent the user's wishlist data such as package id's, package names, package prices, and package details.
# 4.Agent:
        This model will represent the agent data such as name, email, and other agent-related information.
# 5.Comment:
        This model will represent the comments data such as package id, user id, comment text, and other comment-related information.
# 6.Booking:
        This model will represent the booking data such as package id, user id,	booking date, and other booking-related information.
# 7. Hotel:
        This model represents a hotel that is available for booking. It contains information such as the name, location, description, rating, images, and available rooms of the hotel. 
# 8. Room:
        This model represents the individual rooms of a hotel that are available for booking. It contains information such as the room type, room number, capacity, and availability of the room.


**Here is a list of controllers:*

# 1.User controller:
 - getAllUsers: to get all users list
 - signup: for creating a new user
 - login: for logging in an existing user
 - getProfile: for fetching the profile of the logged-in user
 - updateProfile: for updating the profile of the logged-in user
 - addToWishlist: for adding a specified package to the wishlist of the logged-in user
 - removePackageFromCart: for removing a specified package from the cart of the logged-in user
 - viewCart: for viewing the cart of the logged-in user
 - bookPackage: for booking a package in the cart of the logged-in user

# 2.Package controller:
 - getAllPackages: for fetching all the packages
 - getPackage: for fetching a specific package
 - searchPackages: for searching packages based on certain criteria
 - addPackage: for adding a new package
 - updatePackage: for updating an existing package
 - deletePackage: for deleting an existing package

# 3.Comment controller:
 - addComment: for adding a comment on a package
 - updateComment: for updating an existing comment
 - deleteComment: for deleting an existing comment

# 4.Booking controller:
 - getAllBookings: for fetching all the bookings
 - getBooking: for fetching a specific booking
 - addBooking: for adding a new booking
 - updateBooking: for updating an existing booking
 - deleteBooking: for deleting an existing booking

# 5.Agent controller:
 - getAllAgents: for fetching all the agents
 - getAgent: for fetching a specific agent
 - addAgent: for adding a new agent
 - updateAgent: for updating an existing agent
 - deleteAgent: for deleting an existing agent

# 6.Hotel controller:
 - getAllHotels: for fetching all the Hotels
 - getHotel: for fetching a specific Hotels
 - addHotel: for adding a new Hotels
 - updateHotel: for updating an existing Hotels
 - deleteHotel: for deleting an existing Hotels

# 7. Room Controller:
 - getAllRooms: for fetching all the Rooms
 - getRoom: for fetching a specific Room
 - addRoom: for adding a new Room
 - updateRoom: for updating an existing Room
 - deleteRoom: for deleting an existing Room


**Here is a list of routers for a tourism website, along with their functionality:*

# 1.User router:
 - /signup: for handling signup requests
 - /login: for handling login requests
 - /profile: for handling requests to fetch or update the profile of the logged-in user
 - /cart: for handling requests related to adding, removing, viewing, and booking packages in the cart of the logged-in user

# 2.Package router:
 - /: for handling requests to fetch all packages or add a new package
 - /:id: for handling requests to fetch a specific package, update or delete a package
 - /search: for handling requests to search for packages based on certain criteria

# 3.Comment router:
 - /: for handling requests to add, update or delete a comment

# 4.Booking router:
 - /: for handling requests to fetch all bookings, add a new booking or delete a booking
 - /:id: for handling requests to fetch a specific booking or update a booking

# 5.Agent router:
 - /: for handling requests to fetch all agents, add a new agent or delete an agent
 - /:id: for handling requests to fetch a specific agent or update an agent

# 6.Hotel Router: 
 - /:id 
 - /search

# 7.Rooms router:
 - /:id
 - /search



**Summary**

**Models :**
1.  User
2.  Package
3.  Comment
4.  Booking
5.  Agent
6.  Hotel
7.  Room
8.  Wishlist

**Controllers :**

1.  User controller
        signup
        login
        getProfile
        updateProfile
        addPackageToCart
        removePackageFromCart
        viewCart
        bookPackage
        bookHotel
        removeHotelFromCart
        viewBookedHotels

2.  Package controller
        getAllPackages
        getPackage
        searchPackages
        addPackage
        updatePackage
        deletePackage

3.  Comment controller
        addComment
        updateComment
        deleteComment

4.  Booking controller
        getAllBookings
        getBooking
        addBooking
        updateBooking
        deleteBooking

5.  Agent controller
        getAllAgents
        getAgent
        addAgent
        updateAgent
        deleteAgent

6.  Hotel controller
        getAllHotels
        getHotel
        searchHotels
        addHotel
        updateHotel
        deleteHotel      


**Routers:**

1.  User router
        /signup
        /login
        /profile
        /cart
        /bookedHotels

2.  Package router
        /
        /:id
        /search

3.  Comment router
        /

4.  Booking router
        /
        /:id

5.  Agent router
        /
        /:id

6.  Hotel router
        /
        /:id
        /search
