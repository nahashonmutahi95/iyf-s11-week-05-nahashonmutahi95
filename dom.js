
// getElementById
const header = document.getElementById("main-header");
console.log(header);

// getElementsByClassName
const contents = document.getElementsByClassName("content");
console.log(contents);

// getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// querySelector
const firstLink = document.querySelector(".nav-link");
console.log(firstLink);

// querySelectorAll
const allLinks = document.querySelectorAll(".nav-link");
console.log(allLinks);

// Practice

// 1
const h1 = document.querySelector("h1");

// 2
const allContent = document.querySelectorAll(".content");

// 3
const form = document.getElementById("contact-form");

// 4
const emailInput = document.getElementById("email");

// 5
const navItems = document.querySelectorAll("nav li");

// 6
const firstNavLink = document.querySelector(".nav-link");

// 7
const lastParagraph = document.querySelector("article p:last-of-type");

console.log(h1);
console.log(allContent);
console.log(form);
console.log(emailInput);
console.log(navItems);
console.log(firstNavLink);
console.log(lastParagraph);

/*Task 9.2 */
const nav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);

// Children
console.log(nav.children);
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);

// Siblings
const article = document.querySelector("article");

console.log(article.nextElementSibling);
console.log(article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");

console.log(navLinks);

// Practice

const headerElement = document.getElementById("main-header");
console.log(headerElement.querySelector("nav"));

const firstNav = document.querySelector(".nav-link");
console.log(firstNav.parentElement);

console.log(article.nextElementSibling);

const ul = document.querySelector("ul");
console.log(ul.children);

const footer = document.querySelector("footer");
console.log(footer.parentElement);

/*task 9.3*/
const title = document.querySelector("h1");

console.log(title.textContent);
console.log(title.innerText);

title.textContent = "Welcome to DOM Manipulation";

const articleElement = document.querySelector("article");

articleElement.innerHTML = `
<h2>Updated Article</h2>
<p>This content has been updated.</p>
`;

const link = document.querySelector(".nav-link");

console.log(link.getAttribute("href"));

link.setAttribute("href","https://example.com");

const container = document.querySelector(".container");

container.style.backgroundColor="#f0f0f0";
container.style.padding="30px";
container.style.borderRadius="10px";

/*task 9.4*/

const newParagraph=document.createElement("p");

newParagraph.textContent="This is a new paragraph.";
newParagraph.className="content highlight";

const article2=document.querySelector("article");

article2.appendChild(newParagraph);

const footer2=document.querySelector("footer");


/*task 10.1 event Listener*/
const button=document.createElement("button");

button.textContent="Click Me";

document.body.appendChild(button);

button.addEventListener("click",function(){

alert("Button clicked!");

});

/*Click Counter*/
let count=0;

const counter=document.createElement("h2");

counter.textContent=count;

document.body.appendChild(counter);

const plus=document.createElement("button");
plus.textContent="+";

const minus=document.createElement("button");
minus.textContent="-";

const reset=document.createElement("button");
reset.textContent="Reset";

document.body.append(plus,minus,reset);

plus.addEventListener("click",()=>{

count++;

counter.textContent=count;

});

minus.addEventListener("click",()=>{

if(count>0){

count--;

counter.textContent=count;

}

});

reset.addEventListener("click",()=>{

count=0;

counter.textContent=count;

});

/*task 10.2 event object*/
document.addEventListener("click",(event)=>{

console.log(event.target);

console.log(event.type);

});

document.addEventListener("keydown",(event)=>{

console.log(event.key);

});

/*task 10.3*/
document.getElementById("grandparent").addEventListener("click",()=>{

console.log("Grandparent");

});

document.getElementById("parent").addEventListener("click",()=>{

console.log("Parent");

});

document.getElementById("child").addEventListener("click",()=>{

console.log("Child");

});

/*task 10.4*/
const contactForm=document.getElementById("contact-form");

contactForm.addEventListener("submit",(event)=>{

event.preventDefault();

const formData=new FormData(contactForm);

const data=Object.fromEntries(formData);

console.log(data);

alert("Form Submitted Successfully!");

contactForm.reset();

});

  
// footer2.remove();

const navItem=document.querySelector(".nav-link").parentElement;

const clone=navItem.cloneNode(true);

clone.querySelector("a").textContent="Blog";

document.querySelector(".nav-list").appendChild(clone);
