# Assignment-1
 Project Title: Todo List API with Node.js & Express
For this assignment, I created a basic RESTful API for a Todo List using Node.js and Express. The goal was to implement the core functionalities of any task management system—adding, viewing, and deleting tasks—while learning how APIs are structured and tested in real-world applications.
________________________________________
What I Learned:
Through this project, I gained practical experience working with backend development and got more comfortable using Express.js to build APIs. I learned how to define routes for different HTTP methods like POST, GET, and DELETE, and how to test these endpoints using Postman.
It also taught me how to validate user input, manage in-memory data, and return appropriate HTTP responses. Most importantly, I now better understand how frontend and backend communicate through APIs.
________________________________________
Steps I Followed:
1.	Setting up the server
I used Express to set up a local server on port 5500. I created an array to store tasks temporarily (since no database was required).
2.	Building Endpoints
o	POST /addTask: Accepts a task name and adds it to the list.
o	GET /tasks: Retrieves all existing tasks.
o	DELETE /task/:id: Deletes a task by its ID.
3.	Testing the API in Postman
o	I added a task named “Learn Python” using a POST request and confirmed the response showed the task with a unique ID.
o	I used a GET request to fetch the list of tasks, which displayed the expected results.
o	I also tested a DELETE request to remove a task by ID, and Postman returned a success message confirming the deletion.
________________________________________
Outcome:
By the end of this project, I had a fully functional API that could add, retrieve, and delete tasks. The experience gave me confidence in working with backend routes and helped me understand the flow of data between client and server. It also introduced me to best practices like proper status codes and input validation. I now feel much more comfortable working with APIs and using Postman for testing.
 

