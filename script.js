
const supabaseUrl = "https://ffvknewokvkgipzcacwk.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdmtuZXdva3ZrZ2lwemNhY3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMjc1NDIsImV4cCI6MjA4ODgwMzU0Mn0.z2U-WyFLL3_tFT845W32u0M0C_i3bH8cFJuwDQkblGk"

const client = supabase.createClient(supabaseUrl, supabaseKey)


// LOAD COURSES
async function loadCourses(){

const container=document.getElementById("courses")
if(!container) return

const { data } = await client
.from("courses")
.select("*")

let html=""

data.forEach(c=>{

html+=`

<div class="course-card">

<a href="${c.link}" target="_blank">
<img src="${c.image}" class="course-img">
</a>

<h3 class="text-xl font-bold mt-3">
${c.title}
</h3>

</div>

`

})

container.innerHTML=html

}


// LOAD JOBS
async function loadJobs(){

const container=document.getElementById("jobs")
if(!container) return

const { data } = await client
.from("jobs")
.select("*")

let html=""

data.forEach(j=>{

html+=`

<div class="glass p-6">

<h3 class="text-xl font-bold">
${j.title}
</h3>

<p class="text-gray-400">
${j.company}
</p>

<a href="${j.apply_link}" target="_blank" class="text-green-400">
Apply Now
</a>

</div>

`

})

container.innerHTML=html

}


// LOAD RESOURCES
async function loadResources(){

const container=document.getElementById("resources")
if(!container) return

const { data } = await client
.from("resources")
.select("*")

let html=""

data.forEach(r=>{

html+=`

<div class="glass p-6">

<h3 class="font-bold">
${r.title}
</h3>

<a href="${r.file_link}" target="_blank" class="text-blue-400">
Download
</a>

</div>

`

})

container.innerHTML=html

}


// RUN ALL
loadCourses()
loadJobs()
loadResources()
