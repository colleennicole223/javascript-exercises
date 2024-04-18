//Reference div container that already exists
const container = document.querySelector("#container");

//Create a div and store variable in content
const content = document.createElement("div");
//Add a class and text to the content div and append 
content.classList.add("content");
content.textContent = "Very fancy content!";
container.appendChild(content);

//Create a div and store variable in p
const p = document.createElement("div");
//Add p to a class, update text style, and append
p.classList.add("p");
p.textContent = "I am red";
p.style.color = "red";
container.appendChild(p);

//Create a div and store h3 variable
const h3 = document.createElement("h3");
//Add a class and text to the h3 div and append to container
h3.classList.add("h3");
h3.textContent = "I am blue";
h3.style.color = "blue";
container.appendChild(h3);

//Create a div and store div in it 
const div = document.createElement("div");
div.classList.add("div");
div.style.border = "2px solid";
div.style.backgroundColor = "pink";
container.appendChild(div);

//Create a h1
const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "I am div";
div.appendChild(h1);


//Create a p
const p2 = document.createElement("p");
p2.classList.add("p");
p2.textContent = "Me too!";
div.appendChild(p2);

const btn = document.querySelector("#btn");
btn.onclick = () => alert('Hello World!')

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert('HELLO WORLDS');
});


//Created a callback, when a function is passed into another
btn2.addEventListener("click", function (e) {
    console.log(e.target.style.background = "blue");
});

//e
//e.target = which node was pressed 
// or change the background once clicked 


//buttons is a node list 
const buttons =  document.querySelectorAll("button");

//we use the .forEach method to iterate through each
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
