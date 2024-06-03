
try {
    let noteAmount = localStorage.getItem('noteAmount') || 0;
    let createdNotesArray = JSON.parse(localStorage.getItem('createdNotes')) || [];

    function btn_add_note() {
        const writeNotes = document.getElementById('note_area');
        const noteTitle = document.getElementById('note_title');
        const noteContent = writeNotes.value;
        const noteTitleValue = noteTitle? noteTitle.value : '';

        const newNote = {
            title: noteTitleValue,
            content: noteContent,
            timestamp: Date.now()
        };

        createdNotesArray.push(newNote);
        localStorage.setItem('createdNotes', JSON.stringify(createdNotesArray));

        noteAmount++;
        localStorage.setItem('noteAmount', noteAmount);

        writeNotes.value = '';
        if (noteTitle) noteTitle.value = '';
        createdNotesArray.sort((a, b) => b.timestamp - a.timestamp);

        updateUI();
    }

    function updateUI() {
        const noteArea = document.getElementById('active_notes');
        noteArea.innerHTML = '';

        createdNotesArray.forEach((note, index) => {
            const noteDiv = document.createElement('div');
            noteDiv.className = 'note';
            noteDiv.innerHTML = `
                <h3>${note.title}</h3>
                <p style='border: 2px solid rgb(200, 200, 200);'>${note.content}</p>
                <button class="delete-btn">Delete</button>
            `;
            noteDiv.querySelector('.delete-btn').addEventListener('click', () => deleteNote(index));
            noteArea.appendChild(noteDiv);
        });
    }
    
    function deleteNote(indexToDelete) {
        createdNotesArray.splice(indexToDelete, 1);
        localStorage.setItem('createdNotes', JSON.stringify(createdNotesArray));
        updateUI();
    }    

    if (createdNotesArray.length > 0) {
        updateUI();
    }
} catch (error) {
    console.error(`Error loading notes.js _> ${error}`);
}
