

var button=document.getElementById('counter');
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange =function(){
        if(request.readyState===XMLHttpRequest.DONE)
        { 
        if(request.status===200) 
         {
        var counter=request.responseText;
         var span=document.getElementById('count');
         span.innerHTML=counter.toString();
        }
      }    
    };
 request.open('GET','http://sairohithareti.imad.hasura-app.io/counter',true);
 request.send(null);
    
};  

var nameinput=document.getElementById('name');
var name=nameinput.value
var submit=document.getElementById('submit_btn');
submit.onclick=function(){ 
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
        
    }
    var ul=document.getElementById('fuck');
    ul.innerHTML=list;
    
};
var button=document.getElementById('submit_btnn');
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange =function(){
        if(request.readyState===XMLHttpRequest.DONE)
        { 
        if(request.status===200) {
           console.log('userlogged in!');
           alert('logged in successfully');
            }
            else if(request.status===403){
                alert('username/password is incorrect');
        }
        else if(request.status===500){
            alert('something went wrong!!');
        }
      }    
    };
   
    var password= getElementById('password').value;
     var name= getElementById('username').value;
    console.log(username);
    console.log(password);
    var nameInput=nameInput.value;
     request.open('POST','http://sairohithareti.imad.hasura-app.io/login',true);
     request.setRequestHeader('Content-Type','application/json');
     request.send(JSON.stringify({name:name ,password:password}));
    
};  
