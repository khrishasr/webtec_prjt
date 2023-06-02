const http = require('http')
const querystring = require('querystring')
var qs, name, email
const port = 8888
http.createServer((req, res) => {
    var value = ""
    req.on('data', (ch) => {
        console.log(ch)
        value += ch
        console.log("readable data " + value)
    });
    req.on('end', () => {
        qs = querystring.parse(value)
        console.log(qs)
        name = qs['username']
        email = qs['email']
        res.write("hello " + name + " your email is " + email)
        res.end()
    });
}).listen(port, (error) => {
    if (error) {
        console.log("error occures")
    }
    else {
        console.log("server listening on " + port)
    }
});

