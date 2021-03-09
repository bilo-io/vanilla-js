import './index.scss'
import Vision, { on, html } from './core/vision'

// #region Components
import Button from './components/Button'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// #endregion

// #region Pages
import Login from './pages/Login'
import Error404 from './pages/Error404'
// #endregion

const state = {}

document.addEventListener('DOMContentLoaded', (event) => {
    Navbar({ title: 'New' })

    Login()
    Error404()

    // await Vision({ component: Footer() })

    // await Vision({
    //     component: Button({
    //         content: 'TestButton',
    //         className: 'primary',
    //         onClick: () => alert('Clicked button')
    //     })
    // })
})
