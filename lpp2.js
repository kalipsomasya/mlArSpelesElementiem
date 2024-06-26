


document.addEventListener('DOMContentLoaded', function() {
  //tests
  const draggableElements = document.querySelectorAll('.draggable');
  const container = document.getElementById('container');
  const messageElement = document.getElementById('message');
  const correctOrder = ['Izpēte', 'Problēmas definēšana', 'Ideju izstrāde', 'Prototipēšana', 'Testēšana'];

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
    const currentOrder = Array.from(container.querySelectorAll('.draggable')).map(elem => elem.textContent);
    if (arraysEqual(currentOrder, correctOrder)) {
      setTimeout(() => {
        messageElement.innerHTML = 'Apsveicu! Tu pareizi sakārtoji posmus.';
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

  function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector('#datetime').textContent = currentDateTime;
  };
  setInterval(updateDateTime, 1000);

  //massivs padomi
const padomi = {
  "prototipēšana": "Prototipu operatīvi uzlabo, ņemot vērā saņemto atgriezenisko saiti.",
  "ideju izstrāde": "Secīgi izvērtēte idejas un izvēlies labākās, kas turpmākajā procesā tiks prototipētas.",
  "izpēte": "Sākot jebkura pakalpojuma vai produkta dizaina procesu, ļoti svarīgi ir nesteigties ar pārsteidzīgiem spriedumiem par problēmu un tās cēloņiem.",
  "testēšana": "Lai gūtu lietderīgu atgriezenisko saiti, kas palīdzēs uzlabot prototipu, ir svarīgi, lai testā piedalītos prototipa mērķiem atbilstīga lietotāju grupa/-as.",
  "problēmas definēšana": "Jo skaidrāka, specifiskāka un pilnīgāka būs definētā problēmas hipotēze, jo raitāks un produktīvāks būs turpmākais darbs.",
};


function mekletais() {
  const posms = document.getElementById('ievade').value.trim().toLowerCase();

  if (padomi.hasOwnProperty(posms)) {
      alert(padomi[posms]);
  } else {
      alert("Parliecinies ka uzrakstīi posma nosaukumu grammatiski pareizi.");
  }
}
