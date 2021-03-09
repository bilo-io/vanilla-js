import './index.scss'
import Vision, { on, html, clearRoot } from './core/vision'
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

// const state = {}

class AppComponent {
    constructor () {
        this.state = {}
        Navbar({ title: 'Vision.JS' })
        this.router = new Router()
        this.router.set('/', Home)
        this.router.set('/home', Home)
        this.router.set('/error', Error404)
        this.router.set('/login', Login)
        this.render()
        this.eventListeners()
    }

    render (event) {
        console.log('route:', window.location.pathname)
        this.router.resolve()

        // router.get('/', () => redirect('/login'))
    }

    eventListeners () {
        document.addEventListener('DOMContentLoaded', this.init)
        // window.addEventListener('load', App)
        window.addEventListener('popstate', (a) => {
            console.log('window.onpopstate', a)
            clearRoot()
            this.router.resolve()
        })
        // window.addEventListener('hashchange', this.router.resolve)
    }
}

const app = new AppComponent()
