//Welcome to app.js!

const input = document.getElementById('input');
const inputSection = document.getElementById('input-section');
const output = document.getElementById('output');

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        output.innerHTML += `${inputSection.textContent} ${input.value}<br>`;
        function identifier() {
            if (input.value.includes('open') || input.value.includes('create')) {
                browserCommands(input.value);
            } 
            else if (input.value.includes('url')) {
                URLOpener(input.value);
            }
            else if (input.value.includes('store')) {
                storeData(input.value);
            }
            else if (input.value.includes('fetch')) {
                fetchData(input.value);
            }
            else if (input.value.includes('delete')) {
                removeData(input.value);
            }
            else if (containsNumbers(input.value)) {
                mathEngine(input.value);
            }
            else {
                basicCommands(input.value);
            }
        }
        identifier();
        input.value = '';
    }
});

function containsNumbers(str) {
    return /\d/.test(str);
}

function mathEngine(expression) {
    let result = Function('return ' + expression)();
    output.innerHTML += `${result} <br>`;
}

function URLOpener(url) {
    const webAddress = url.replace('url', '');
    output.innerHTML += `Opened <a href=${webAddress} target='_blank'> ${webAddress} </a> <br>`;
    window.open(webAddress);
}

function storeData(data) {
    const keyValuePair = data.replace('store ', '');
    const keyValueSet = keyValuePair.split(' ');
    localStorage.setItem(keyValueSet[0], keyValueSet[1]);
    output.innerHTML += `Saved '${keyValueSet[1]}' as '${keyValueSet[0]}' <br>`;
}

function fetchData(data) {
    const fetchedKey = data.replace('fetch ', '');
    output.innerHTML += `${localStorage.getItem(fetchedKey)} <br>`;
}

function removeData(data) {
    const deletedKey = data.replace('delete ', '');
    localStorage.removeItem(deletedKey);
    output.innerHTML += `'${deletedKey}' deleted <br>`;
}

function basicCommands(command) {
    if (command == 'clear') {
        output.innerHTML = '';
    }
    if (command == 'clear storage') {
        localStorage.clear();
        output.innerHTML += 'Storage cleared. <br>';
    }
    if (command == 'storage data') {
        output.innerHTML += `${Object.keys(localStorage)} <br>`;
    }
    if (command == 'help') {
        output.innerHTML += '404 - Help Not Available <br>';
    }
    if (command == 'details') {
        output.innerHTML += 'Author: Farohan (see Github) <br> Year Started: 2022 <br> Version: 1.0.0 <br>';
    }
    if (command == 'date') {
        const date = new Date();
        output.innerHTML += `${date} <br>`;
    }
}

function browserCommands(command) {
    if (command == 'open new tab') {
        output.innerHTML += 'New tab opened. <br>';
        window.open();
    }
    if (command == 'create new doc' || command == 'create new document') {
        output.innerHTML += 'New Google document opened. <br>';
        window.open('https://www.docs.new');
    }
    if (command == 'create new sheet' || command == 'create new spreadsheet') {
        output.innerHTML += 'New Google spreadsheet opened. <br>';
        window.open('https://www.sheets.new');
    }
    if (command == 'create new slide' || command == 'create new slideshow') {
        output.innerHTML += 'New Google presentation opened. <br>';
        window.open('https://www.slides.new');
    } 
    if (command == 'create new form' || command == 'create new survey') {
        output.innerHTML += 'New Google form opened. <br>';
        window.open('https://www.forms.new');
    }
    if (command == 'open drive' || command == 'open google drive') {
        output.innerHTML += 'Google Drive has been opened. <br>';
        window.open('https://www.drive.google.com');
    }
    if (command == 'open classroom' || command == 'open classes') {
        output.innerHTML += 'Google Classroom has been opened. <br>';
        window.open('https://www.classroom.google.com');
    }
    if (command == 'open youtube') {
        output.innerHTML += 'Youtube has been opened. <br>';
        window.open('https://www.youtube.com');
    }
    if (command == 'open facebook') {
        output.innerHTML += 'Facebook has been opened. <br>';
        window.open('https://www.facebook.com');
    }
}
    
