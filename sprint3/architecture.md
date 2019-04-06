# Program Organization
  ![](https://github.com/Stelthshield/COP4331_Spring2019_Group4/blob/master/sprint2/diagrams/COP4331C%20-%20Group%204-Software%20Architecture.png)
  - We have a React generated front end for our web interface, use Passport with OAuth as our authorization, then have business logic rules built into our schemas to reject noncompliant data that is then passed using an Express backend through Axios into our database which is ran using MongoDB. The database will hold all of our account information and venue information.
  - Web interface
    - User Stories: 000, 001, 002, 003, 004, 005, 006, 007, 008, 010, 011, 012, 013, 014, 015, 016, 018, 019, 020, 021
  - Authorization
    - User Stories: 007, 014
  - Business Logic
    - User Stories: 009
  - Data Accesss
    - User Stories: 000, 001, 002, 003, 007, 008, 013, 014, 016, 017, 019,
  - MongoDB
    - User Stories: 000, 001, 002, 003, 007, 008, 010, 011, 012, 013, 014, 015, 016, 017, 018, 019, 021
# Major Classes
  ![](https://i.imgur.com/mQal4pf.png)
 - User
   - This class holds the information for each user including the venues they own and their accound id.
   - User Stories: 002, 004, 005, 007, 008, 009, 010, 012, 014, 018
 - Venue
    - This is the class that is used most often by all the functions. It holds the information for the venue which allows it to be used by users and in the orders class.
    - User Stories: 000, 001, 003, 011, 013, 016, 019
 - Order
    - This class deals with payemnt and transaction processing for booking a venue between users.
    - User Stories: 004, 005
 - Database
    - This is the class that uses Axios calls to hit backend routes which makes requests to MongoDB using Mongoose.
    - User Stories: 000, 001, 002, 003, 004, 005, 006, 007, 008, 010, 011, 012, 013, 014, 015, 016, 018, 019, 021
# Data Design

- Models for users as well as venues will be stored in a MongoDB database. 
- Users can book or list multiple venues (user has many venues relationship)
- Internally to the client, data is stored within the state of the page.
- Externally, User data, Venue data, transactions and authentication details are stored in the mongoDB collections. 

# Business Rules

- Users are over 18 years old
- Reviewers can be under 18 years old
- Users must have valid payment option on their account such as credit card

# User Interface Design

![](https://raw.githubusercontent.com/Stelthshield/COP4331_Spring2019_Group4/master/sprint2/UI%20Diagram.png)
- The front end of the application will use React.js to render pages
- Aside from the login page, a main menu will be rendered at the top of all other pages

The workflow for the user interface begins on the splash page, where you can either login or create an account. After logging in, you are taken to the main page that has links to separate pages within our app satisfying different functionality - listing a venue, booking a venue, viewing your listed venues, viewing your booked listings, and viewing who has booked your listed venues.

- User story 007 - Creating an account is satisfied by the create account page in our app
- User story 001 - Listing a venue is satisfied by the list venue page and functionality
- User story 000 - Booking a venue is satisfied by the book venue page and functionality
- User story 003 - Viewing booked venues is satisfied by the my bookings page and functionality
- User story 013 - Deleting listings is satisfied by the My Venues page, where you can delete your listed venues
- User story 002 - Viewing those who booked your venues is satisfied by the My Venue Booking Info page and functionality

# Resource Management

# Security

- Users will be authenticated using a sql database containing registered users
- If time permits, OAuth or Passport can be used for more secure account authentication

