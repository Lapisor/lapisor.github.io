// Select input fields and display elements
const characterNameInput = document.getElementById('character-name-input');
const dialogueTextInput = document.getElementById('dialogue-text-input');
const characterNameDisplay = document.getElementById('character-name-display');
const dialogueTextDisplay = document.getElementById('dialogue-text-display');

// Update character name display in real-time
characterNameInput.addEventListener('input', function() {
    characterNameDisplay.textContent = characterNameInput.value || 'Character Name';
});

// Update dialogue text display in real-time
dialogueTextInput.addEventListener('input', function() {
    dialogueTextDisplay.textContent = dialogueTextInput.value || 'This is where the dialogue text will go.';
});
