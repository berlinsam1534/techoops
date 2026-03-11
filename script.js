
const supabaseUrl = "https://ffvknewokvkgipzcacwk.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdmtuZXdva3ZrZ2lwemNhY3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMjc1NDIsImV4cCI6MjA4ODgwMzU0Mn0.z2U-WyFLL3_tFT845W32u0M0C_i3bH8cFJuwDQkblGk"

const client = supabase.createClient(supabaseUrl, supabaseKey)


// LOAD COURSES FROM DATABASE

async function loadCourses(){

const { data, error } = await client
.from("courses")
.select("*")

if(error){
console.log(error)
return
}

let html=""

data.forEach(c=>{

let image = c.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c"

html+=`

<div class="course-card">

<a href="${c.link}" target="_blank">

<img src="${image}" class="course-img">

</a>

<h3 class="text-xl font-bold mt-3">
${c.title}
</h3>

<p class="text-gray-400">
Click image to open course
</p>

</div>

`

})

const container=document.getElementById("courses")

if(container){
container.innerHTML=html
}

}


// ADD COURSE (ADMIN)

async function addCourse(){

let title=document.getElementById("title").value
let link=document.getElementById("link").value
let image=document.getElementById("image").value

const { error } = await client
.from("courses")
.insert({
title:title,
link:link,
image:image
})

if(error){

alert("Error adding course")

}else{

alert("Course added successfully")

loadCourses()

}

}


// LOGIN SYSTEM

async function login(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

const { error } = await client.auth.signInWithPassword({
email:email,
password:password
})

if(error){

alert("Login failed")

}else{

window.location="dashboard.html"

}

}


// LOAD COURSES WHEN PAGE OPENS

loadCourses()
