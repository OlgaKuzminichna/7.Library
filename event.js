const form = document.getElementById("form");
const dashboard = document.querySelector(".dashboard");
const announcement = document.querySelector(".announcement");

// Add an event listener to the form for form submission
form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Access form elements by their names
    const book = form.elements["book"].value;
    const author = form.elements["author"].value;
    const pages = form.elements["pages"].value;
    const status = form.elements["status"].value;

    // Do something with the form data (e.g., display it)
    console.log("Book Title:", book);
    console.log("Author:", author);
    console.log("Number of Pages:", pages);
    console.log("Status:", status);

    let div = document.createElement('div');
    div.classList.add('card');
    let h1 = document.createElement('h1');
    let p_author = document.createElement('p');
    let p_pages = document.createElement('p');
    const book_tag = document.createTextNode(`${book}`);
    const author_tag = document.createTextNode(`By ${author}`);
    const pages_tag = document.createTextNode(`Number of Pages:${pages}`);
    h1.appendChild(book_tag);
    p_author.appendChild(author_tag);
    p_pages.appendChild(pages_tag);
    div.appendChild(h1);
    div.appendChild(p_author);
    div.appendChild(p_pages);
    if (status=='read'){
      dashboard.appendChild(div)
    } else {
      announcement.appendChild(div)
    }
});
