
const supabaseUrl = "https://ffvknewokvkgipzcacwk.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdmtuZXdva3ZrZ2lwemNhY3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMjc1NDIsImV4cCI6MjA4ODgwMzU0Mn0.z2U-WyFLL3_tFT845W32u0M0C_i3bH8cFJuwDQkblGk"

const client = supabase.createClient(supabaseUrl, supabaseKey)

async function loadCourses(){

const { data } = await client
.from("courses")
.select("*")

let html=""

data.forEach(c=>{

html+=`
<div class="bg-white p-4 rounded shadow">
<h3 class="font-bold">${c.title}</h3>
<a href="${c.link}" class="text-blue-600">Open Course</a>
</div>
`

})

const container=document.getElementById("courses")

if(container){
container.innerHTML=html
}

}

async function addCourse(){

let title=document.getElementById("title").value
let link=document.getElementById("link").value

await client.from("courses").insert({
title:title,
link:link
})

alert("Course added")

}

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

loadCourses()
