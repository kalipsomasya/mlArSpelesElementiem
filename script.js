

window.onload = function(){
    window.setInterval(function(){
         var now = new Date();
          var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
   };


   function moveButton() {
    const button = document.querySelector('.runaway-button');
    const container = document.querySelector('.container');
  
    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;
  
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
  
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }