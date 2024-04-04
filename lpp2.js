document.addEventListener('DOMContentLoaded', function() {
    //tests
    const draggableElements = document.querySelectorAll('.draggable');
    const container = document.getElementById('container');
    const messageElement = document.getElementById('message');
    const correctOrder = ['Object 1', 'Object 2', 'Object 3', 'Object 4', 'Object 5'];
  
    let dragSrcEl = null;
  
    draggableElements.forEach((elem) => {
      elem.addEventListener('dragstart', handleDragStart);
      elem.addEventListener('dragover', handleDragOver);
      elem.addEventListener('drop', handleDrop);
    });
  

    shuffleElements();
  
    function handleDragStart(e) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
      dragSrcEl = this;
    }
  
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault(); 
      }
      e.dataTransfer.dropEffect = 'move';
      return false;
    }
  
    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation(); 
      }
      if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
        checkOrder();
      }
      return false;
    }
  
    function checkOrder() {
      const currentOrder = Array.from(container.querySelectorAll('.draggable')).map(elem => elem.innerHTML);
      if (arraysEqual(currentOrder, correctOrder)) {
        setTimeout(() => {
          messageElement.innerHTML = 'Congratulations! You arranged the objects correctly.';
        }, 500); 
      }
    }
  
    function arraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) return false;
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
      }
      return true;
    }
  
    function shuffleElements() {
      const elements = Array.from(container.querySelectorAll('.draggable'));
      for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [elements[i].innerHTML, elements[j].innerHTML] = [elements[j].innerHTML, elements[i].innerHTML];
      }
    }
  });
  //laiks
  