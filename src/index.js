require('./index.css')
const { Navbar } = require('./components/Navbar')
const navbar = Navbar()

document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.createElement('h1')
    element.innerHTML = 'Hello World'
    document.body.appendChild(element)

    const navbarView = null || document.getElementById('navbar')
    console.log(navbar)
    navbarView.innerHTML = navbar.view()
    // navbar.control()
})
