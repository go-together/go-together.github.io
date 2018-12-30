var myButton = document.querySelector('button');

myButton.onclick = function(){
	setUserName();
}

var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Doge is cool, ' + myName;
}

// name init

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Doge is cool, ' + storedName;
}

// image flip
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/doge.jpg') {
      myImage.setAttribute('src', 'images/doge2.jpg');
    } else {
      myImage.setAttribute('src', 'images/doge.jpg');
    }
}




