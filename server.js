var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config {
    user: 'sairohithareti',
    database: 'sairohithareti',
    host:'db.imad.hasura.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};


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
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool=new Pool(config)
app.get('/test_db'),function(req,res){
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
        res.status(500).send(err.toString());
        }
        else{ 
            res.send(JSON.stringify(result));
        
    });
    
});

app.get('/article-one',function(req, res) {
  res.send(createtemplete(articleone));
});
 var counter=0;
app.get('/counter',function(req, res) {
    counter=counter+1;
  res.send(counter.toString());
});

app.get('/article-two',function(req, res) {
  res.sendFile(path.join(__dirname, 'ui','article-two.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
