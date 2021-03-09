import { html } from './core/html'
import './index.scss'
const { Navbar } = require('./components/Navbar')
const { Vis } = require('./core/Render')

document.addEventListener('DOMContentLoaded', async (event) => {
    await Vis({
        component: Navbar({
            title: 'VanillaJS'
        })
    })

    await Vis({
        render: async () => html`
      <div>
        <h1>Hello Dudes</h1>
      </div>
      `
    })
})
