var numberOfButtons =  

    document.querySelectorAll(".button").length; 

  

for (var j = 0; j < numberOfButtons; j++) { 

  

  document.querySelectorAll(".button")[j] 

  .addEventListener("click", function() { 

  

    var buttonStyle = this.innerHTML; 

    sound(buttonStyle); 

    animation(buttonStyle); 

  }); 
} 

  

document.addEventListener("keypress", function(event) { 

  sound(event.key); 

  animation(event.key); 
}); 

  

function sound(key) { 

  switch (key) { 

    case "a": 

      var sound1 = new Audio("drum1.mp3"); 

      sound1.play(); 

      break; 

  

    case "b": 

      var sound2 = new Audio("drum2.mp3"); 

      sound2.play(); 

      break; 

  

    case "c": 

      var sound3 = new Audio('drum3.mp3'); 

      sound3.play(); 

      break; 

  

    case "d": 

      var sound4 = new Audio('drum4.mp3'); 

      sound4.play(); 

      break; 

  

    case "e": 

      var sound5 = new Audio('drum5.mp3'); 

      sound5.play(); 

      break; 

  

    case "f": 

      var sound6 = new Audio('drum6.mp3'); 

      sound6.play(); 

      break; 

  

    case "g": 

      var sound7 = new Audio('drum7.mp3'); 

      sound7.play(); 

      break; 

  

    default: console.log(key); 

  } 
} 

  

function animation(currentKey) { 

  var activeButton = document.querySelector("." + currentKey); 

  activeButton.classList.add("animation"); 

  

  setTimeout(function() { 

    activeButton.classList.remove("animation"); 

  }, 100); 
} 