This project contains a simple TODO Application and these are it's features:

1. Anyone can create a todo
2. Anyone can see their existing todos
3. Anyone can mark a todo as done

//initialized a node project
//put a package.json(metadata)
//data is posted to a route(endpoint) of todo.
//difference between route and middleware:
Route determines what to do when a user visits a URL with methods ( GET, POST, PUT, DELETE)

Middleware is the function that has access to the request and response objects and the next middleware in the req-res cycle. It is the pre-processing layer between client request and route logic - It helps in 1. Parsing the body of requests, 2. Logging request details 3. Setting headers or modifying the request or response objects.
Without middleware we have to handle this in every route and create repetition.
It ensures things like, 1. Is the request data properly formatted (eg, is it JSON?) 2. Should the request be authenticated? 3. Are there any general tasks we need to run?(eg, logging and checking if the login is already done)

What is an API?
In express the route is the specific endpoint that an API exposes. When a client makes an HTTP request to the endpoint, the route handles the request and returns a response. These routes makeup the API of your webpage. Basically it is the entire collection of routes.
#   p o r t f o l i o _ p r o j e c t s  
 