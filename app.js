// load http module, needed for running node web server
// load fs module, needed for reading and writing files 
var http = require('http');
var fs = require('fs');
// run the web server using http module
server = http.createServer(function (request, response){
  // log the URL visited by the client
  console.log('Request', request.url);
  // check the url visited and load the corresponding file
  switch(request.url){
        case '/':
            filename = 'views/index.html';
        break;
        case '/cars/index.html':
            filename = 'views/cars.html'; 
        break;
        case '/cats/index.html':
            filename = 'views/cats.html'; 
        break;
        case '/style.css': 
            filename = './styles/style.css'; 
        break;
        case '/images/cats_1.jpg': 
            filename = './images/cats_1.jpg'; 
        break;
        case '/images/cars_1.jpg': 
            filename = './images/cars_1.jpg'; 
        break;
        default: 
            filename = null;
        break;
    }
    //load the file and render the page
    if(filename != null){
        fs.readFile(filename, function (errors, contents){
            response.write(contents);
            response.end();
        }); 
    }
    else{
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(7707);
console.log("Running in localhost at port 7707");















// // fs module allows us to read and write content for responses!!
// var fs = require('fs');
// var http = require('http');
// // creating a server using http module:
// var server = http.createServer(function (request, response){
//     // see what URL the clients are requesting:
//     console.log('client request URL: ', request.url);
//     // this is how we do routing:
//     if(request.url === '/cars') {
//         fs.readFile('cars.html', 'utf8', function (errors, contents){
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             response.write(JSON.stringify(contents)); 
//             response.end();
//         });
//     }
//     else if (request.url === "/cats") {
//          fs.readFile('cats.html', 'utf8', function (errors, contents){
//              response.writeHead(200, {'Content-type': 'text/html'});
//              response.write(contents); 
//              response.end();
//          });
//     }
//      else if (request.url === "/cars/new") {
//          fs.readFile('form.html', 'utf8', function (errors, contents){
//              response.writeHead(200, {'Content-type': 'text/html'});
//              response.write(contents); 
//              response.end();
//          });
//     }
//         else if(request.url === '/stylesheets/style.css'){
//         fs.readFile('./styles/style.css', 'utf8', function(errors, contents){
//          response.writeHead(200, {'Content-type': 'text/css'});
//          response.write(contents);
//          response.end();
//         })
//       }
//           else if(request.url === '/images/pizza.jpg'){
//             // notice we won't include the utf8 encoding
//             fs.readFile('./images/pizza.jpg', function(errors, contents){
//                 response.writeHead(200, {'Content-type': 'image/jpg'});
//                 response.write(contents);
//                 response.end();
//             })
//           }
//     // request didn't match anything:
//     else {
//         response.end('File not found!!!');
//     }
// });
// // tell your server which port to run on
// server.listen(7077);
// // print to terminal window
// console.log("Running in localhost at port 7077");
// console.log("run");