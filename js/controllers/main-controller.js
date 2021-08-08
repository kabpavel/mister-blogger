function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function onOpenModal(isVisible) {
    var elModal = document.querySelector('.modal');
    elModal.style.display = (isVisible) ? 'block' : 'none';
}