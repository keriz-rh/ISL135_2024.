document.addEventListener('DOMContentLoaded', function(){
    const button = document.querySelector('#boton')
    const description = document.querySelector('#description')

    button.addEventListener('click', () => {
        description.textContent = 'El botón ha sido presionado. :D'
    })
})