const saveNoteBtn = document.getElementById('save-note');
const newNoteBtn = document.getElementById('new-note');
const clearNoteBtn = document.getElementById('clear-btn');

homeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '/';
});

// Handle when a user submits feedback

if (saveNoteBtn) {
  saveNoteBtn
    .addEventListener('submit', (e) => {
      e.preventDefault();

      // Get the feedback text from the DOM and assign it to a variable
      let noteText = document.getElementsByClassName('note-textarea').value;
      // Get the username text and add it to a variable
      let email = document.getElementById('feedbackUsername').value.trim();

      // // Create an object with the username and feedback
      // const newNote = {
      //   feedback,
      //   email,
      //   feedbackType: 'Complaint',
      // };

      // Fetch POST request to the server
      fetch('api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.status);
          email = '';
          feedback = '';
        });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
