var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    
    //create a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        
        if(request.readyState==XMLHttpRequest.DONE){
            //take some action
            if(request.status==200)
            {
                 var counter=request.responseText;
                 var span=document.getElementById('count');
                 span.innerHTML=counter.toString();
            }
        }
        //not done yet
    };
    //make the request
    request.open("GET", "http://anishsamant97.imad.hasura-app.io/counter", true);
    request.send(null);
};

//submit name
var inputButton=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementByid('submit_btn');
submit.onclick=function(){
    //make request to the server and send the name
    //capture a list of names and render it as a list
    
};
