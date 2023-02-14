/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//Here is the client side code that would make a GET request to the animal info API: like lesson 6 & example of lesson 12 exactly
const baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
const apiKey = '&appid=0bbb44bdd153b2a144d851528f9d0bda&units=imperial';

document.getElementById('generate').addEventListener('click', performAction);

// to know zip and feelings from app
function performAction(e){
    // Select the actual value of the HTML input to include in POST.
    const zip = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;
    getTemp(baseURL, zip, apiKey)
    .then(function(data) {
        //add data
        console.log(data)
		//Add data to post request to server on route '/add'
        postData('/add', {date:d, temp:data.list[0].main.temp, content:content})
        //after finishing posting data, update UI of the app
        //we can do this because of async
        updateUI()
    })
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async function to get temp data from weather API by fetch (url+zip+key) like lesson 8 & 9 exactly.
const getTemp = async (baseURL, zip, key) => {
	//1.
    const res = await fetch(baseURL+zip+key)
	//2. Call API
    try{
        const data = await res.json();
        console.log(data)
        return data;
		// post('/add' , addData);
    }catch(error) {
        console.log("error", error);
	    // appropriately handle the error
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//async function to Post route to server as data object in projectData like lesson 2 async promises & lesson 9 exactly.
const postData = async ( url = '', data = {})=>{

      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

      try {
        const newData = await response.json();
               return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Update UI DEMO like (lesson 12) to get object data on routing '/all'
const updateUI = async () => {
    const request = await fetch ('/all');
    try{
        //record allData from the app in object form
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp + ' degrees';
        document.getElementById('content').innerHTML = allData.content;
    }catch(error){
        console.log("error", error)
    }
}
