import { html } from './core/html'
import './index.scss'
const { Vis } = require('./core/Render')
const { Navbar } = require('./components/Navbar')

document.addEventListener('DOMContentLoaded', async (event) => {
    await Vis({
        component: Navbar({
            title: 'VanillaJS'
        })
    })

    await Vis({
        render: async () => html`
        <div class="flex-row" style="margin-top: 1rem">
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <hr />
        </div>
      `
    })

    await Vis({
        render: async () => html`
          <div>
            <h1 style="color: #00adee">Hello Dudes</h1>
            <p>
              This is a test paragraph. Basic HTML inside Javascript, using template strings.
            </p>
          </div>
      `
    })
})
