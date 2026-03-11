```javascript
let courses=[]

function addCourse(){

let title=document.getElementById("title").value
let link=document.getElementById("link").value

courses.push({
title:title,
link:link
})

alert("Course added")

}

function login(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

if(email=="admin@skilllaunch.com" && password=="1234"){

window.location="dashboard.html"

}
else{

alert("Invalid login")

}

}
```
