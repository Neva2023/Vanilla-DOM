const myMessage = document.querySelector('.myMessage');
myMessage.innerText = 'This is a message in the DOM'
const Message = document.querySelector('.Message');
const myMes = document.querySelector('.myMes');


setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
}, 3000 )

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    alert("button clicked!")
});

const theMsgButton = document.querySelector('.theMsgButton');
theMsgButton.addEventListener('click', function() {
    Message.innerText = 'Button pressed'
});

const theButton = document.querySelector('.theButton')
const inputBox = document.querySelector('.theInputValue');
theButton.addEventListener('click', function() {
    myMes.innerText = inputBox.value
})

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}