
//decrement
function decrement(event) {
   let count = parseInt(document.getElementById("taskCount").innerText.trim());
   count--;
   document.getElementById("taskCount").innerText = '0'+count;
   if(count <= 0){
      window.alert("congratulation !!  You hve completed all the tasks");
   }

   event.target.disabled = true;
   event.target.style.backgroundColor = '#333333';   
}
//increament
function increment(event) {
   let count = parseInt(document.getElementById("incr").innerText.trim());
   count++;
   document.getElementById("incr").innerText = count;
}
//add activity
function addActivity(text){
   const now = new Date();
   const formattedTime = now.toLocaleTimeString('en-US', { hour12: true });

   text = "You have complete The Task "+ text + "at "+formattedTime;
   let activities = document.getElementById("activities");
   let p = document.createElement('p');
   p.innerText = text;
   p.setAttribute("class"," p-4 rounded-md bg-slate-200 mb-6 text-sm")
   activities.appendChild(p);
}

//clear history

function clearHistory(event){
    let activities = document.getElementById("activities").innerHTML = "";
}
//......................................................................................

function call(e,text){
    console.log(text, e);
    increment(e);
    decrement(e);
    addActivity(text)
}

//shop task
let shopBtn = document.getElementById('shopBtn');
let shopText = document.getElementById('shoptext').textContent;
shopBtn.addEventListener('click',()=>alert("Board Updated Successfully!"));
shopBtn.addEventListener('click',(event) => call(event, shopText));

//

let cloudBtn = document.getElementById('cloudBtn');
let cloudText = document.getElementById('cloudtext').textContent;
cloudBtn.addEventListener('click',()=>alert("Board Updated Successfully!"));
cloudBtn.addEventListener('click',(event) => call(event, cloudText));

//

let swiftBtn = document.getElementById('swiftBtn');
let swiftText = document.getElementById('swifttext').textContent;
swiftBtn.addEventListener('click',()=>alert("Board Updated Successfully!"));
swiftBtn.addEventListener('click',(event) => call(event, swiftText));
// 


let metaBtn = document.getElementById('metaBtn');
let metaText = document.getElementById('metatext').textContent;
metaBtn.addEventListener('click',()=>alert("Board Updated Successfully!"));
metaBtn.addEventListener('click',(event) => call(event, metaText));

// 


let googleBtn = document.getElementById('googleBtn');
let googleText = document.getElementById('googletext').textContent;
googleBtn.addEventListener('click',()=>alert("Board Updated Successfully!"));
googleBtn.addEventListener('click',(event) => call(event, googleText));

//

let glassBtn = document.getElementById('glassBtn');
let glassText = document.getElementById('glasstext').textContent;
glassBtn.addEventListener('click',()=>alert("Board Updated Successfully!"));
glassBtn.addEventListener('click',(event) => call(event, glassText));

//clear history

document.getElementById("clear-btn").addEventListener('click',clearHistory);

//current date

let date = document.getElementById('date');
let day = document.getElementById("day");
let today = new Date();
let weekday = today.toLocaleDateString('en-US', { weekday: 'short' });

let formattedDate = today.toLocaleDateString('en-US', { 
    month: 'short',  
    day: '2-digit',  
    year: 'numeric'  
}).replace(',', '');

console.log("Weekday:", weekday);        
console.log("Formatted Date:", formattedDate); 
date.textContent =formattedDate;
day.textContent = weekday+" ,";

//color change
const colors = [
    "#F8C471","#F5B7B1","#AED6F1","#F9E79F","#D7BDE2",
    "#A3E4D7","#FAD7A0","#E2E8F0","#85C1E9","#A2D9CE",
    "#F8C471", "#85C1E9", "#E59866", "#A2D9CE", "#D7BDE2",
    "#F5B7B1", "#AED6F1", "#F9E79F", "#A3E4D7", "#FAD7A0",
    "#C39BD3", "#7FB3D5", "#76D7C4", "#F7DC6F", "#E6B0AA",
    "#D5DBDB", "#A9CCE3", "#A3E4D7", "#F0B27A", "#D4EFDF",
    "#E59866", 
  ];
  
   function setColor(){
     let color = colors[ Math.floor(Math.random() * colors.length)];
     document.getElementById("body").style.backgroundColor = color;
   }

   document.getElementById("changeBg").addEventListener("click",setColor);

   // navigate other pages
   document.getElementById("question").addEventListener("click",()=>{
     document.location.href = "./ques.html";
   });

   

 