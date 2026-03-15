
const supabaseUrl = "https://ffvknewokvkgipzcacwk.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdmtuZXdva3ZrZ2lwemNhY3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMjc1NDIsImV4cCI6MjA4ODgwMzU0Mn0.z2U-WyFLL3_tFT845W32u0M0C_i3bH8cFJuwDQkblGk"


const client = supabase.createClient(supabaseUrl, supabaseKey)


// LOAD COURSES
async function loadCourses(){

const { data } = await client
.from("courses")
.select("*")

let html=""

data.forEach(c=>{

html+=`
<div class="bg-white text-black p-4 rounded shadow">
<img src="${c.image_url}" class="w-full h-40 object-cover rounded mb-3">

<h3 class="font-bold">${c.title}</h3>

<a href="${c.link}" target="_blank" class="text-blue-600">
Open Course
</a>

</div>
`

})

const container=document.getElementById("courses")

if(container){
container.innerHTML=html
}

}



// LOAD RESOURCES
async function loadResources(){

const { data } = await client
.from("resources")
.select("*")

let html=""

data.forEach(r=>{

html+=`
<div class="bg-gray-800 p-6 rounded">

<h3 class="font-bold text-lg mb-3">${r.title}</h3>

<a href="${r.file_link}" 
target="_blank"
class="bg-blue-500 px-4 py-2 rounded">

View Resource

</a>

</div>
`

})

const container=document.getElementById("resources")

if(container){
container.innerHTML=html
}

}


// LOAD JOBS
async function loadJobs(){

const { data } = await client
.from("jobs")
.select("*")

let html=""

data.forEach(j=>{

html+=`
<div class="bg-gray-800 p-6 rounded">

<h3 class="font-bold">${j.title}</h3>

<p class="text-gray-400">${j.company}</p>

<a href="${j.link}" target="_blank" class="text-green-400">
Apply Now
</a>

</div>
`

})

const container=document.getElementById("jobs")

if(container){
container.innerHTML=html
}

}



// AUTO LOAD ON PAGE
loadCourses()
loadResources()
loadJobs()

