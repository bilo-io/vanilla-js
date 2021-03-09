import './index.scss'
import Vision, { on, html } from './core/vision'
const { Navbar } = require('./components/Navbar')

const state = {}

document.addEventListener('DOMContentLoaded', async (event) => {
    await Vision({
        component: Navbar({
            title: 'VanillaJS'
        })
    })

    await Vision({
        view: async () => html`
          <div id="login-view" class="flex-col" style="margin-top: 1rem">
            <form>
              <div class="flex-col">
                <label>email address</label>
                <input name="email" type="text" placeholder="email" />
              </div>
              <br />
              <div class="flex-col">
                <label>password</label>
                <input name="password" type="password" placeholder="password" />
              </div>
              <button id="login-button" type="button">
                Log in
              </button>
            </form>
            <hr />
          </div>
        `,
        controls: async () => {
            const container = await document.getElementById('login-view')

            on('click', container, 'button#login-button', () => {
                console.log('Logging =>', state)
            })
            on('change', container, 'input[name="email"]', (e) => {
                console.log('Typed email', e.target.value)
                state.email = e.target.value
                console.log({ state })
            })
            on('change', container, 'input[name="password"]', (e) => {
                console.log('Typed email', e.target.value)
                state.password = e.target.value
                console.log({ state })
            })
        }
    })

    await Vision({
        view: async () => html`
          <div>
            <h1 style="color: #00adee">Hello Dudes</h1>
            <p>
              This is a test paragraph. Basic HTML inside Javascript, using template strings.
            </p>
          </div>
      `
    })
})
