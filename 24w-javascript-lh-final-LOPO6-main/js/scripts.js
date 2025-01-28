// Observe the html script first...

// Question 1 - The html is not attached to the script file, add the script info in header of html --- 1 mark

// Question 2 - Create a constant to hold your first name and store it in firstName
const firstName = "Logan";

// Create a constant to get the paragraph from question 2 html and store it in question2Text
const firstNamePara = document.getElementById('myFirstName');
// Output your first name stored in firstName to question2Text p tag --- 3 marks
firstNamePara.textContent=firstName;
// Question 3 - Have a close look at the following code:
let employee = {
    name: ['Biff', 'Henderson'],
    employeeNumber: 30573,
    department: 'Repossesions',
    interests: ['the Mob', 'fast cars', 'baseball'],
    active: true
    
};
const question3Para = document.querySelector(".question3")
question3Para.textContent = `This is ${employee.name[0]} ${employee.name[1]}. His employee number is ${employee.employeeNumber} and he works in ${employee.department}. He likes ${employee.interests[0]}, ${employee.interests[1]}, and ${employee.interests[2]}. He is also active.`



/* Write a short script that creates an interesting sentence by concatenating members of the above employee 
    object together (using either dot notation or bracket notation). Include as much information about the employee as you can. 
    Output the resulting content as text inside the question3 paragraph element. --- 5 marks */
    
    

// Question 4 - Consider the following block of code:
const question4Para = document.querySelector('#question4');
class Coffee {
    constructor(type, size) {
        this.type = type;
        this.size = size;
    };

    // Method to order a coffee
    coffeeOrder() {
        question4Para.textContent = `You have ordered a ${this.size} ${this.type} coffee.`;
    };
};

// Continue with the JavaScript portion of this code above to do the following, making use of the Coffee class above:
// Create a new instance of the Coffee object, picking whatever type of coffee you like(latte, espresso, americano, etc.), 
// and whatever size you like(extra large, large, medium, small, etc.).

// Call the coffeeOrder method to output your coffee order to the screen as text inside the paragraph element(represented by const question4Para).
// Comment and format your above code appropriately. --- 5 marks
let loganCoffee = new Coffee("large","latte");
loganCoffee.coffeeOrder()
// Question 5 - Consider the following JavaScript:
let sandwich3 = {
    bread: 'multigrain',
    meat: 'sliced turkey',
    vegetables: {
        tomatoes: 'roma',
        lettuce: 'romaine',
        pickles: 'kosher dill'
    },
    spread: 'garlic mayonnaise'
};

// Write a snippet of code which would point to the type of tomatoes used to make the sandwich3 object
const tomatoes =sandwich3.vegetables.tomatoes;
const question5para = document.querySelector('.question5');
question5para.textContent = tomatoes;
// Qutput the result of tomatoes. i.e. "roma" in this case to the question5 paragraph --- 2 marks

// Question 6 - Given the below JavaScript object, car1, 
let car1 = {
    type: 'coupe',
    color: 'red',
    fuelType: 'battery electric',
    wheelType: '17" aluminum alloy',
    description: function () {
        alert(`This car is a ${this.color} ${this.fuelType} powered ${this.type}.`);
    }
};
// add information about the wheel type (17" aluminum alloy) to the above object? --- 2 marks

// Question 7a - Use the below API to generate a url with your student id as the api key
// Base URL - https://lamp.computerstudi.es/~Priyansh001/jslh/test2/api/users.php
// Parameter: api_key = {your student id}
// Sample/example: https://lamp.computerstudi.es/~Priyansh001/jslh/test2/api/users.php?api_key=1234
// Note - The final URL generated will be different for each student in the class and response received will also be different.
//          There is no point in using other student's url, you might receive 0 from this step ahead + academic misconduct!!!
const api_key = 1226100;
const baseUrl =  "https://lamp.computerstudi.es/~Priyansh001/jslh/test2/api/users.php"
// Create your personalized URL and store it in a const/variable below --- 2 marks
const url = `${baseUrl}?api_key=${api_key}`;


// Question 7b - Use the above URL to create a fetch request and log the response to your console --- 4 marks
fetch(url).then(response => response.json()).then(json => jsonMaker(json));
// Take a break, drink some water and observe your response in any json reader or postman or your browser...

// Question 7c - Create a function that receives the above response as a parameter --- 1 mark
//               You can use this function for next two steps
const question7d = document.getElementById('question7d')
const question7e = document.getElementById('question7e')
function jsonMaker(json){
    console.log(json)
    let h2 = document.createElement("h2")
    h2.textContent = json.id_20538;
    question7d.appendChild(h2)
    let h3 = document.createElement("h3")
    h3.textContent = json.first_name_6024a;
    question7d.appendChild(h3)
    let h32 = document.createElement("h3")
    h32.textContent = json.last_name_fa6d2;
    question7d.appendChild(h32)
    let img = document.createElement("img")
    img.setAttribute("src", json.image_7a702);
    question7d.appendChild(img)
    
    const jsonArray = json.Bna;
    let tbody = document.createElement("tbody")
    question7e.appendChild(tbody)

    for (let i = 0; i < jsonArray.length; i++) {
        console.log(jsonArray[i]);

        // create the elemets for the table
        const tableRow = document.createElement("tr");
        const name = document.createElement("td"); // <tr></tr>
        const gender = document.createElement("td"); // <td></td>
        const company = document.createElement("td"); // <td></td>
        const  email = document.createElement("td"); // <td></td>
        const  phone = document.createElement("td"); // <td></td>

        // add data to my td tags
        name.textContent = jsonArray[i]["randomName-c51"];//first name;
        gender.textContent = jsonArray[i]["randomGender-615"]//last name;
        company.textContent = jsonArray[i]["randomCompany-98d"]
        //number;
        email.textContent = jsonArray[i]["randomEmail-b15"]//number;
        phone.textContent = jsonArray[i]["randomPhone-02c"] //number;

        
        //IMPORTANT: CREATE TBODY


        // adding data to table body
        tableRow.appendChild(name);
        tableRow.appendChild(gender);
        tableRow.appendChild(company);
        tableRow.appendChild(email);
        tableRow.appendChild(phone);

        tbody.appendChild(tableRow);
    }
}



// Question 7d - Dynamically create the following tags, store the received data and append everyting to question7d div
// Received Personal ID - h2 tag
// Received Personal First Name - h3 tag
// Received Personal Last Name - h3 tag
// Received Personal Image - img tag  --- 5 marks

// Question 7e - For the received random data, create a loop, create appropriate table tags(td|tr|th|tbody), 
//               and similarly like previous question append everything to question7e div --- 10 marks
// Tip - You may want to use associative array to access the values of the object

// Question 8 - Create an external css file, store in folder and connect with html - 3 marks
// It's fine if the file has just one style in it...
