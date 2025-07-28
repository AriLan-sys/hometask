const modalOpen = document.querySelector('.button-modal')
const modalClose = document.querySelector('.modal__close-btn')
const modal = document.querySelector('.modal')
const modalWindow = document.querySelector('.modal__window')

modalOpen.addEventListener('click', () => {
    modalClose.classList.toggle('close-btn')
    modal.classList.toggle('close-m')
    modalWindow.classList.toggle('close-mw')
})

modalClose.addEventListener('click', () => {
    modalClose.classList.toggle('close-btn')
    modal.classList.toggle('close-m')
    modalWindow.classList.toggle('close-mw')
})