import './index.scss'
import Vision, { on, html } from './core/vision'
import Router, { redirect } from './core/Router'
// #region Components
import Button from './components/Button'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// #endregion

// #region Pages
import Login from './pages/Login'
import Home from './pages/Home'
import Error404 from './pages/Error404'
// #endregion

const state = {}

const router = new Router()

const App = (event) => {
    console.log('route:', window.location.pathname)
    Navbar({ title: 'New' })
    router.get('/', Home)
    router.get('/home', Home)
    router.get('/error', Error404)
    router.get('/login', Login)
    router.init()

    router.get('/', () => redirect('/login'))
}

document.addEventListener('DOMContentLoaded', App)
// window.addEventListener('load', App)
window.addEventListener('popstate', router.init)
window.addEventListener('hashchange', router.init)
