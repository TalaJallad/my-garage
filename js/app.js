'use strict'; 

//////////////////////////////////////////
///////////////Global Variables//////////
////////////////////////////////////////
var form = document.getElementById('inputForm');
var arrayOfCars =[];
var table = document.getElementById('carResult');



//////////////////////////////////////////
///////////////Functions//////////
////////////////////////////////////////
function Cars (theName, theCategory, theModel) {
    this.name = theName;
    this.category = theCategory;
    this.model = theModel; 
    this.logo ='img/'
    arrayOfCars.push(this);
    
}

function checkLocalStorage (){
    if (localStorage>0) {
        var carList = JSON.parse(localStorage.getItem('carList')); 
        renderCar();
        
    }
}


function handleCarChoice (event){
    event.preventDefault(); 
    var carName = event.target.name.value;
    var carCategory = event.target.category.value;
    var carModel = event.target.modelYear.value;
    new Cars (carName, carCategory, carModel); 
    localStorage.setItem('carList', JSON.stringify(arrayOfCars)); 



}

Cars.prototype.renderCar = function (){
 for (let index = 0; index < arrayOfCars.length; index++) {
     var row = document.createElement('tr');
     table.appendChild(row);
    //  var image = document.createElement('td')
    //  row.appendChild(image);
    var theCarName = document.createElement('td');
    theCarName.textContent='Car Name: ' + this.name; 
    row.appendChild(theCarName);
    var theModelYear = document.createElement('td');
    theModelYear.textContent='Model Year: ' + this.model; 
    row.appendChild(theCarName);





     
 }
}





///////////////////////////////////////////////////////////
///////////////functions call and event listeners//////////
/////////////////////////////////////////////////////////
form.addEventListener('submit', handleCarChoice); 
checkLocalStorage(); 
 