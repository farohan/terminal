const input = document.getElementById('input');
const inputSection = document.getElementById('input-section');
const output = document.getElementById('output');

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        output.innerHTML += `${inputSection.textContent} ${input.value}<br>`;
        reactOnCommand(input.value);
        input.value = '';
    }
});

function reactOnCommand(command) {
    if (command == 'clear') {
        output.innerHTML = '';
    }
}
