var againEl = document.getElementById('tryAgain');

function toHome() {
    window.location.href = 'index.html';
}

againEl.addEventListener('click', toHome);