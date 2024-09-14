// Example using vanilla JavaScript (you can also use jQuery)
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    const header = document.getElementById("header");
    const logo = document.getElementById("logo");
    const body1 = document.getElementById("body");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("shrink");
        body1.classList.add('body1');
    } else {
        header.classList.remove("shrink");
        body1.classList.remove('body1');
    }
}

const person = {
    title: 'ABCDqwerty',
    content: 'The American Broadcasting Company (ABC) is an American commercial broadcast television and radio network that serves as the flagship property of the Disney Entertainment division of the Walt Disney Company. ABC is headquartered on Riverside Drive in Burbank, California, directly across the street from Walt Disney Studios and adjacent to the Team Disney - Roy E. Disney Animation Building. The network maintains secondary offices at 77 West 66th Street on the Upper West Side of Manhattan, New York City, which houses its broadcast center and the headquarters of its news division, ABC News.',
    auther: "Anonymous USER",
    date: "12/08/2024"
};
const title = document.getElementById('title');
const content= document.getElementById('content');
const auther = document.getElementById('auther');
const date = document.getElementById('date');
title.innerHTML = `${person.title}`;
content.innerHTML= `${person.content}`;
auther.innerHTML=`${person.auther}`;
date.innerHTML=`${person.date}`;

  // JavaScript function to show the modal with the correct form
  function openModal(formType) {
      let formHtml = '';

      if (formType === 'editForm') {
          // Edit form HTML (similar to the EJS template)
          formHtml = `
              <form id="editForm" method="post" action="/api/posts/123">
                  <input type="text" name="title" value="Sample Title">
                  <textarea name="content" rows="10">Sample Content</textarea>
                  <input type="text" name="author" value="Author Name">
                  <button class="full-width" type="submit">EDIT</button>
              </form>
          `;
      } else if (formType === 'newPostForm') {
          // New post form HTML
          formHtml = `
              <form id="newPostForm" method="post" action="/api/posts">
                  <input type="text" name="title" placeholder="Title" required>
                  <textarea name="content" placeholder="Content" required rows="10"></textarea>
                  <input type="text" name="author" placeholder="Author" required>
                  <button class="full-width" type="submit">POST</button>
              </form>
          `;
      }

      // Insert the form HTML into the modal and display it
      document.getElementById('formContainer').innerHTML = formHtml;
      document.getElementById('formModal').style.display = 'flex';
  }

  // JavaScript function to close the modal
  function closeModal() {
      document.getElementById('formModal').style.display = 'none';
  }

  // Close the modal when clicking outside the modal content
  window.onclick = function(event) {
      const modal = document.getElementById('formModal');
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  }