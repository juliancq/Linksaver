let myLeads = [];

const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const clearBtn = document.querySelector("#clear-btn");
const listEl = document.querySelector("#list-el");


/* LocalStorage Manage */
// Override "url_list" on every add Event
// Load myLeads from localStorage("url_list")

start();


function start(){
	myLeads = JSON.parse(localStorage.getItem("url_list")) ? JSON.parse(localStorage.getItem("url_list")) : [];
	console.log(myLeads);
	if(myLeads){
		renderList();
	}
}


function renderList(){

	listEl.innerHTML= "";

	for(let i = 0; i < myLeads.length; i++){

		listEl.innerHTML += `<li>
								<a target= '_blank' href= '${myLeads[i]}'>
									${myLeads[i]} 
								</a>
							</li>`;
	}
}


/* Event => Click on save Button */
inputBtn.addEventListener("click", (event)=> {

	event.target.innerText = "Saving...";
	
	if(inputEl.value != ""){

		myLeads.push(inputEl.value);
		localStorage.setItem("url_list", JSON.stringify(myLeads));
		
		inputEl.value = "";
		
		renderList();
	}
	
	setTimeout(()=>{
		event.target.innerText = "Save"
		}, 250);
});


/* Event => Pressed Enter Key*/
inputEl.addEventListener("keyup", (event)=>{
	
	
	if(inputEl.value != "" && event.keyCode == 13){

		event.target.innerText = "Saving...";

		myLeads.push(inputEl.value);
		localStorage.setItem("url_list", JSON.stringify(myLeads));
		
		inputEl.value = "";
		
		renderList();
	}
	
	setTimeout(()=>{
		event.target.innerText = "Save"
		}, 250);
});

/* Event => Pressed Clear Button */
clearBtn.addEventListener("click", (event)=>{

	myLeads = [];

	localStorage.clear();
	listEl.innerHTML = "";
})





