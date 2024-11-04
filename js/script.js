// Select input fields and display elements
const dialogueTextInput = document.getElementById('dialogue-text-input');
const dialogueTextDisplay = document.getElementById('dialogue-text-display');

// Update dialogue text display in real-time
dialogueTextInput.addEventListener('input', function() {
    dialogueTextDisplay.textContent = dialogueTextInput.value || 'This is where the dialogue text will go.';
});
// Select the dialogue box and capture button
const dialogueBox = document.getElementById('dialogue-box');
const captureButton = document.getElementById('capture-button');

// Event listener to capture dialogue box as image
captureButton.addEventListener('click', function() {
    html2canvas(dialogueBox).then(canvas => {
        // Convert the canvas to an image
        const image = canvas.toDataURL('image/png');

        // Create a link to download the image
        const link = document.createElement('a');
        link.href = image;
        link.download = 'dialogue.png';
        
        // Automatically click the link to trigger download
        link.click();
    });
});
