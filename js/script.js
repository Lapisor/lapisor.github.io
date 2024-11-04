// Select input fields and display elements
const dialogueTextInput = document.getElementById('dialogue-text-input');
const dialogueTextDisplay = document.getElementById('dialogue-text-display');

// Update dialogue text display in real-time
dialogueTextInput.addEventListener('input', function() {
    dialogueTextDisplay.textContent = dialogueTextInput.value || 'This is where the dialogue text will go.';
});
// Select the dialogue box and capture button
const captureButton = document.getElementById('capture-button');
const dialogueBox = document.getElementById('dialogue-box'); // Ensure this captures the right element

captureButton.addEventListener('click', function() {
    html2canvas(dialogueBox).then(function(canvas) {
        // Hide portrait again after capturing if needed
        portrait.style.display = 'none';
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'dialogue_image.png';
        link.click();
    });
});

const portraitToggle = document.getElementById('portrait-toggle');
const portrait = document.getElementById('portrait');
portrait.style.display = 'block'; // or 'inline-block'

// Listen for changes on the portrait toggle checkbox
portraitToggle.addEventListener('change', function() {
    if (portraitToggle.checked) {
        // Show the portrait and adjust text area
        portrait.style.display = 'block';
        dialogueTextDisplay.classList.add('portrait-on');
    } else {
        // Hide the portrait and revert text area to full width
        portrait.style.display = 'none';
        dialogueTextDisplay.classList.remove('portrait-on');
    }
});
