//EXAMINE THE DOCUMENT OBJECT

//console.dir(document);

/* console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);

console.log(document.images);
 */
//-----------------------------------------------------------------------------------------

//GETELEMENTBYID
//console.log(document.getElementById('header-title'));

// var HeaderTitle = document.getElementById('header-title');
// var Header = document.getElementById('main-header');

/*
 console.log(HeaderTitle);

HeaderTitle.textContent = "GoodBye";
HeaderTitle.innerText = "Hello";
HeaderTitle.innerHTML = '<h3>Hello</h3>';
 */
// HeaderTitle.style.borderBottom = 'solid 3px #000';
// Header.style.borderBottom = 'solid 3px #000';

//------------------------------------------------------------------------------------------

//GETELEMENTBYCLASSNAME

/* var items = document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[1]);

items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = '#f4f4f4';  //gives error

for(var i=0; i<items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
} */

//-----------------------------------------------------------------------------------------

//GETELEMENTBYTAGNAME

/* var li = document.getElementsByTagName('li');

console.log(li);
console.log(li[1]);

li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';


for(var i=0; i<items.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}
 */

//-----------------------------------------------------------------------------------------

//QUERYSELECTOR

/* var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #000';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
 */
//-----------------------------------------------------------------------------------------

//QUERYSELECTALL

var titles = document.querySelectorAll('.title');

console.log(titles);

titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');


for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#4f4f4';
    even[i].style.backgroundColor = '#ccc';
}









