const openform = document.querySelector('.btn-new');
const formContainer = document.querySelector('.form-container');
openform.addEventListener('click', () => formContainer.style.display = 'block');

const closeform = document.querySelector('.add-close');
closeform.addEventListener('click', () => {
    formContainer.style.display = 'none'
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const finished = document.querySelector('#finished');
    title.value = '';
    author.value = '';
    pages.value = '';
    finished.checked = false;
});

let library = [];

function Book(title, author, pages, finished) {
    this.title = title;
    this.author = "by " + author;
    this.pages = pages + " pages";
    this.finished = finished;
}

const addBook = document.querySelector('#addBook');
addBook.addEventListener('click', addToLibrary);

//this adds the book with form value to library array
function addToLibrary() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const finished = document.querySelector('#finished');

    let newBook = new Book(title.value, author.value, pages.value, finished.checked);
    library.push(newBook)

    show();

    title.value = '';
    author.value = '';
    pages.value = '';
    finished.checked = false;
};

//this renders the book elements in the page
function show() {
    const booksContainer = document.querySelector('.books-container');
    while (booksContainer.firstChild) {
        booksContainer.firstChild.remove()
    }
    for (let i=0; i<library.length; i++) {
        createBook(library[i]);
    }
}

//this creates the book div elements for show()
function createBook(bongk) {
    const booksContainer = document.querySelector('.books-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const finishedBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', library.indexOf(bongk));
    
    titleDiv.textContent = bongk.title;
    titleDiv.classList.add('title');
    authorDiv.textContent = bongk.author;
    authorDiv.classList.add('author');
    pagesDiv.textContent = bongk.pages;
    pagesDiv.classList.add('pages');
    finishedBtn.classList.add('finishedBtn');
    deleteBtn.textContent = "Delete Book";
    deleteBtn.classList.add('deleteBtn');

    bookDiv.appendChild(titleDiv)
    bookDiv.appendChild(authorDiv)
    bookDiv.appendChild(pagesDiv)
    bookDiv.appendChild(finishedBtn)
    bookDiv.appendChild(deleteBtn)
    booksContainer.appendChild(bookDiv)

    //event listener for finished/unfinished
    if (bongk.finished == true) {
        finishedBtn.textContent = "Finished!";
        finishedBtn.style.backgroundColor = "#624A2E"
    } else {
        finishedBtn.textContent = "Unfinished";
        finishedBtn.style.backgroundColor = "white";
    }
    finishedBtn.addEventListener('click', () => {
        bongk.finished = !bongk.finished;
        show();
    });

    //event listener for deleting book
    deleteBtn.addEventListener('click', () => {
        library.splice(library.indexOf(bongk));
        show();
    })
}







