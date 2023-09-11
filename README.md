# Restaurant Reservaation System

### Summary 

* <strong>Make Reservations:</strong> Secure a table at your preferred date and time, ensuring a seamless dining experience for you and your party.
* <strong>Cancel Reservations:</strong> If your plans change, no worries! Easily cancel your reservation, freeing up the table for others, and allowing you to adjust your dining schedule as needed.
* <strong>Add Tables:</strong> For restaurant staff, managing table availability is a breeze. You can easily add and configure tables, optimizing your restaurant's seating arrangements.
* <strong>Search Reservations:</strong> Whether you're a user or restaurant staff, quickly locate existing reservations using various criteria such as date, time, party size, or customer name.
* <strong>View Existing Tables and Reservations:</strong> Get a comprehensive overview of your restaurant's operations by viewing all existing tables and reservations. Keep your establishment running smoothly.
* <strong>Free Up Tables on Completion:</strong> When a reservation is completed, the system automatically frees up the table, ensuring efficient use of restaurant resources.

### Live Application
You can access the live application by following this link: [Restaurant Reservation System](https://capstone-restaurant-reservation-sysytem-obql.onrender.com)

### Dashboard
<img width="1703" alt="Screenshot 2023-09-08 at 3 35 12 PM" src="https://github.com/natali-a-lvarez/Capstone-Restaurant-Reservation-System/assets/112902224/e0691be6-fbed-474e-94ff-d62c54d62789">

### Search
<img width="1701" alt="Screenshot 2023-09-08 at 3 45 19 PM" src="https://github.com/natali-a-lvarez/Capstone-Restaurant-Reservation-System/assets/112902224/ef0e91a6-e24a-4753-b6fa-1f0b5199380e">

### New Reservation
<img width="1664" alt="Screenshot 2023-09-08 at 3 47 03 PM" src="https://github.com/natali-a-lvarez/Capstone-Restaurant-Reservation-System/assets/112902224/6528a3d1-0f94-46fb-9a93-c1cf982ea3c9">

### New Table
<img width="1693" alt="Screenshot 2023-09-08 at 3 49 20 PM" src="https://github.com/natali-a-lvarez/Capstone-Restaurant-Reservation-System/assets/112902224/646e47c6-064a-4cd0-a2d5-3e6fc30afd7c">

### API
Request | Path | Description
| :--- |:--- | :---
GET  | /reservations | list all reservations, sorted by time
POST| /reservations | create a new reservation
GET  | reservations/:reservation_id | read a reservation by reservation_id
PUT  | reservations/:reservation_id  | update a reservation by reservation_id
PUT  | reservations/:reservation_id/status | update a reservation status by reservation_id
GET  | /reservations?mobile_number=XXXXXXXXXX | list all reservations for one mobile number, sorted by time
GET  | /reservations?date=XXXX-XX-XX | list all reservations for one date, sorted by time
GET  | /tables | list all tables, sorted by table name
PUT  | /tables | create a new table
POST  | /tables/:table_id/seat | update a table and assign it to a reservation
DELETE  | /tables/:table_id/seat | free an occupied table by deleting assigned reservation_id

### Installation
1. Fork and clone this repository.
2. Run cp ./back-end/.env.sample ./back-end/.env.
3. Update the ./back-end/.env file with the connection URL's to your ElephantSQL database instance.
4. Run cp ./front-end/.env.sample ./front-end/.env.
5. You should not need to make changes to the ./front-end/.env file unless you want to connect to a backend at a location other than http://localhost:5000.
6. Run npm install to install project dependencies.
7. Run npm run start:dev to start your server in development mode.


### Built with
[![My Skills](https://skillicons.dev/icons?i=js,html,css)](https://skillicons.dev)

### Credits
* [Thinkful](https://thinkful.com/) 

