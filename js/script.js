function toggleMenu() {
    const nuevoMenu = document.querySelector('.nuevo-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const content = document.querySelector('.content');
    if (nuevoMenu.style.width === '200px') {
        nuevoMenu.style.width = '0';
        menuToggle.style.left = '20px';
        content.style.marginLeft = '0';
    } else {
        nuevoMenu.style.width = '200px';
        menuToggle.style.left = '220px';
        content.style.marginLeft = '100px';
    }
}

function showWelcomeButton() {
    const welcomeButton = document.getElementById('welcome-button');
    const form = document.getElementById('form');
    welcomeButton.style.display = 'block';
    form.style.display = 'none';
}

function showForm() {
    const welcomeButton = document.getElementById('welcome-button');
    const form = document.getElementById('form');
    welcomeButton.style.display = 'none';
    form.style.display = 'block';
}

function saveFormData() {
    const form = document.getElementById('form');
    const nombreInput = form.querySelector('input[placeholder="Nombre"]').value;
    const apellidoInput = form.querySelector('input[placeholder="Apellido"]').value;
    const emailInput = form.querySelector('input[placeholder="Correo"]').value;

    if (nombreInput && apellidoInput && isEmailValid(emailInput)) {
        const table = document.querySelector('.datos-guardados table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nombreInput}</td>
            <td>${apellidoInput}</td>
            <td>${emailInput}</td>
            <td><button onclick="deleteRow(this)">Borrar</button></td>
        `;
        table.appendChild(newRow);
        form.reset();
    }
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function isEmailValid(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function showWelcomeMessage() {
    const welcomeButton = document.getElementById('welcome-button');
    const welcomeMessage = document.getElementById('welcome-message');
    const saludarButton = document.querySelector('.saludar-button');
    const form = document.getElementById('form');
    welcomeButton.style.display = 'none';
    welcomeMessage.style.display = 'block';
    saludarButton.style.display = 'none';
    form.style.display = 'none';
}

function closeWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    const saludarButton = document.querySelector('.saludar-button');
    const form = document.getElementById('form');
    welcomeMessage.style.display = 'none';
    saludarButton.style.display = 'block';
    form.style.display = 'none';
}
