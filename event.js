function querySelector(name){
  return document.querySelector(name)
}

const SwitchToggle=(()=>{
  let grey= '#f0eef1', blue= '#2192FF', black= '#242424', lightGreen= '#9fff9c', lightRed= '#ff9c9c';
  function changeBackground(element,color){
    element.style.background = color;
  };
  function changeColor(element,color){
    element.style.color = color;
  };
  querySelector('.checkbox').addEventListener('change', function () {  
    let body=document.body, 
        navbar=querySelector('.navbar'), 
        cardElements= document.querySelectorAll('.book-card'), 
        addBook=querySelector('.addBook');

    if (querySelector('.checkbox').checked) {
      // Set the dark mode
      changeBackground(body, black); changeBackground(navbar,'#2E4F4F'); 
      cardElements.forEach(card => { changeBackground(card,'#2C3333'); changeColor(card,grey); });
      changeColor(addBook,grey);
    } else {
      // Set the light mode
      changeBackground(body,grey); changeBackground(navbar,blue); 
      cardElements.forEach(card => {changeBackground(card,'white');changeColor(card,black); });
      changeColor(addBook,black)  
    }
  });
})()

const form=(()=>{
  // when btn addBook is clicked open form
  querySelector('.addBookBtn').addEventListener('click', () => { 
    querySelector('.popup').style.display='block';
  });
  //  if cliked out of form then close the form - change display value from block to none
  window.addEventListener('click',function(e){
    if(e.target===querySelector('.popup')) {closeForm()}
  });

  const cleanForm = () => {
    querySelector('#title').value = '';
    querySelector('#author').value = '';
    querySelector('#pages').value = '';
    querySelector('#isRead').checked = false;
  }

  const closeForm = () => {
    querySelector('.popup').style.display="none";
  }

  const submitForm = (() => {
    querySelector('form').addEventListener('submit', (e) => { 
      e.preventDefault();
      saveBook();
    });
  })()
  
 return{cleanForm,closeForm}  
})()


class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}
// get data from form
const saveBook = () => {
  const title_input = querySelector('#title').value;
  const author_input = querySelector('#author').value;
  const pages_input = querySelector('#pages').value;
  const isRead_input = querySelector('#isRead').checked;
  const NewBook= new Book (title_input, author_input, pages_input, isRead_input);
  createBookcard(NewBook);
  form.closeForm();
  form.cleanForm();
}


const createBookcard = (NewBook) => {
  let div = document.createElement('div');
  div.classList.add('book-card');
  let h1 = document.createElement('h1');
  h1.textContent = `${NewBook.title}`;
  div.appendChild(h1);
  let p = document.createElement('p');
  p.textContent = `By ${NewBook.author}`;
  div.appendChild(p);
  let p2 = document.createElement('p');
  p2.textContent = `${NewBook.pages} pages`;
  div.appendChild(p2);
  let btn = document.createElement('button');
  btn.classList.add('btn', 'btn-read');
  if (NewBook.isRead==true){btn.textContent = `Read`; btn.classList.add('green-background');}
  else {btn.textContent = `Not Read`; btn.classList.add('red-background');}
  div.appendChild(btn);
  let btn2 = document.createElement('button');
  btn2.classList.add('btn', 'btn-remove');
  btn2.textContent = `Remove`;
  div.appendChild(btn2);  
  querySelector('.book-grid').appendChild(div)
}

const bookGrid = document.querySelector('.book-grid');
bookGrid.addEventListener('click', (e) => {
  // Check if the clicked element is a "Remove" button
  if (e.target.classList.contains('btn-remove')) {
    // Get the parent element (book-card div) and remove it
    const bookCard = e.target.parentElement;
    bookCard.remove();
  }
  else if (e.target.classList.contains('btn-read') && e.target.classList.contains('green-background')) {
    // If the clicked button is "Read" with class green-background
    e.target.textContent = 'Not Read';
    e.target.classList.remove('green-background');
    e.target.classList.add('red-background');
  }
  else if (e.target.classList.contains('btn-read') && e.target.classList.contains('red-background')) {
    // If the clicked button is "Read" with class green-background
    e.target.textContent = 'Read';
    e.target.classList.remove('red-background');
    e.target.classList.add('green-background');
  }
});



