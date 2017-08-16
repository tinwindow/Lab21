var express = require("express");
var app = express();
var quotes = [ "You've been getting dressed for three hours and you still look like a bloated citrus fruit",
                    "Never mind, too late to flush her now", "No one knows. Mother was such a slut.",
                   "Sweetie, it is simply the extrication of myself from the burden of sexual norms, and the restoration of my own powerful, and integrated sexuality.",
                   "Put that book down, you're not showing me up.", "She's so cold, I bet she has her period in cubes",
                   "Hi, hi, hi! I want you to know I am in complete control. I know exactly what I'm doing.", "You know my baby was so big it treated my inside like a smorgasbord, it picked my bones clean. I was a baby buffet. I was so long in labour they had to shave me twice."];


app.use(express.static(__dirname + "/public"));

/*app.get("/api/quotes", function (req, res){

    var quotes = [ "You've been getting dressed for three hours and you still look like a bloated citrus fruit",
                        "Never mind, too late to flush her now", "No one knows. Mother was such a slut.",
                       "Sweetie, it is simply the extrication of myself from the burden of sexual norms, and the restoration of my own powerful, and integrated sexuality.",
                       "Put that book down, you're not showing me up.", "She's so cold, I bet she has her period in cubes",
                       "Hi, hi, hi! I want you to know I am in complete control. I know exactly what I'm doing.", "You know my baby was so big it treated my inside like a smorgasbord, it picked my bones clean. I was a baby buffet. I was so long in labour they had to shave me twice."];

    res.send(quotes);
});*/

app.get("/api/random-quote", function (req, res){
  function randomQuote() {
    return quotes [Math.floor(Math.random() * 8)];
    };
    res.send(randomQuote());
});



var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
