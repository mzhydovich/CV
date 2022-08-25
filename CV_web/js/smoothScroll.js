const linksHead = document.querySelectorAll('.menu-link')
const array = [...linksHead]

array.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const ID = event.target.getAttribute('href').substr(1)
        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })
})
