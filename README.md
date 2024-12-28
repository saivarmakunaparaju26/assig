Setup Instructions:
 install nodemon express sqlite sqlite3 path

To run the server :
    nodemon app.js

creating a .db file:
    first created a db server using the sqlite3 to create a file and if an error raises it will show using the err.message and if the server starts
    successfully a success message will show.

    Then using serilize and db we created.we created a products table having id,name,price and quality.

    After successfully creating table in .db file.The server is closed.

Initilizing a server:
    using the path and slite3 and open we create a server in localhost:3000 and run the server.

Inserting data into the Table:
    using the 'POST' method inserted some sample data into the table.

Returning the totalValue:
    using the get 'GET' first we get the entire data in the table.
    After getting the data we iterate over the data to get the price value and add the values to get the total value
    and send the data.