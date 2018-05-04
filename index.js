var express = require("express");
var bodyParser = require('body-parser');
var app = express();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(process.env.PORT || 3000);

app.get("/", function(req, res){
	res.render("trangchu");
});

app.post('/phimmoi',urlencodedParser, function (req, res) {
  var mahoa_nhan = req.body.mahoa;
  res.send(unpack(mahoa_nhan));

});


 function unpack(mahoa){
    var c=mahoa;
    var a=10,x=1;
    while(x<a){
        c=unescape(c);
        if(/eval\(+function\(/.test(c))
        {
            c=depack(c);x++
        }else{break}
    };
    c=unescape(c);
    return c
}




function depack(p)
{if(p!=""){c=unescape(p);var _e=eval,s="eval=function(v){c=v;};"+c+";eval=_e;";eval(s)}else{c=p};return c}

