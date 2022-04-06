const express =  require('express');

const dotenv = require('dotenv');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(function(request, response, next){
    console.log("I am a a middleware");
    next();
});

app.get('/', function(request, response){  //forward slash is path for the method
    console.log("get method");      //prints on console
    response.send("Test nodemon");       //prints in browser
});

app.get('/second', function(request, response){
    response.send("This is second");    //to see this, go to: http://localhost:3000/second
})

// take a parameter from user
// where :fname refers to a request parameter:
// to see this, go to: http://localhost:3000/sayHello/Anniina
app.get('/sayHello/:fname', function(request, response){
    response.send("Hello " + request.params.fname);     //prints hello anniina
})

//so see this go to: http://localhost:3000/sayName/Jim&Jones
app.get('/sayName/:fname&:lname', function(request, response){
    response.send("Hello " + request.params.fname + request.params.lname);
});     //prints hello JimJones   

//here we cannot see outcome in browser, so
// use Postman application :)
app.post('/wholeName', function(request, response){
    response.send(request.body);
    console.log(request.body);
})

// const port = 3000;
// app.listen(port);
app.listen(process.env.PORT);