var http = require('http');
var fs = require('fs');

function routeFiles(res, path, contentType, resCode) {
    if(!resCode) {resCode = 200;}
    fs.readFile(__dirname + path, function(err, data) {
        if (err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("500 - Internal Error");
        }
        else {
            res.writeHead(resCode, {'Content-Type': contentType});
            res.end(data);
        }
    })
}

http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path){
        case '/style.css':
            routeFiles(res, '/style.css', 'text/css');
            break;
        case '/video/memes.mp4':
            routeFiles(res, '/video/students/memes.mp4', 'MPEG-4');
            break;
        case '':
            routeFiles(res, "/index.html", "text/html");
            break;
        case '/':
            routeFiles(res, "/index.html", "text/html");
            break;
        case '/about':
            routeFiles(res, '/about.html', 'text/html');
            break;
        case '/img/gallery/graduation':
            routeFiles(res, '/img/gallery/graduation.jpg', 'image/jpeg');
            break;
        case '/img/gallery/study':
            routeFiles(res, '/img/gallery/study.jpg', 'image/jpeg');
            break;
        case '/img/welcome.jpg':
            routeFiles(res, '/img/welcome.jpg', 'image/jpeg');
            break;
        case '/img/about.jpg':
            routeFiles(res, '/img/about.jpg', 'image/jpeg');
            break;
        case '/img/cry.jpg':
            routeFiles(res, '/img/cry.jpg', 'image/jpeg');
            break;
        default:
            routeFiles(res, '/error.html', 'text/html');
            break;
    }
}).listen(3000);
console.log("Listening to localhost:3000/")