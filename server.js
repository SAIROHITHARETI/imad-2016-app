var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:'article-one| sairohith',
    heading:'article one',
    date:'sept 5',
    content: ` <p>
              this is my first webpage.my name is sairohith.just started learning the things
              </p>  
              <p>
              this is my first webpage.my name is sairohith.just started learning the things
             </p>     
              <p>
              this is my first webpage.my name is sairohith.just started learning the things
             </p>   `
    
};
function createtemplete(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;



var htmltemplate=`
<html>
  <head>
     <title>
        ${title}
     </title>
     <meta name="viewport" context="width=device-width,inital-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
     
  </head>  
  <body>
      <div>
          <a href="/">Home</a>
      </div>
      <h>
         ${heading}
      </h>
      <div>
         ${date}
      </div>
      <div class="container">
         
          ${content}
      </div>      
  </body>
</html>
`;
return htmltemplete;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req, res) {
  res.send(createtemplete(articleone));
});

app.get('/article-two',function(req, res) {
  res.sendFile(path.join(__dirname, 'ui','article-two.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
