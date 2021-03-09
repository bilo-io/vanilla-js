import './index.scss'
import Vision, { on, html } from './core/vision'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const state = {}

console.log({
    Vision, on, html
})

document.addEventListener('DOMContentLoaded', async (event) => {
    await Vision({
        component: Navbar({
            title: 'VanillaJS'
        })
    })

    await Vision({
        component: Button({
            content: 'TestButton',
            className: 'primary',
            onClick: () => alert('Clicked button')
        })
    })

    await Vision({
        view: async () => html`
          <div
            id="login-view"
            class="flex-col card card-1"
            style="max-width: 20rem; margin: auto; margin-top: 4rem; padding: 2rem"
          >
            <form>
              <div class="flex-col">
                <label>email address</label>
                <input name="email" type="text" placeholder="john@doe.com" />
              </div>
              <br />
              <div class="flex-col">
                <label>password</label>
                <input name="password" type="password" placeholder="secure passphrase" />
              </div>
              <br /><br />
              <button id="login-button" type="button" class="primary padded">
                Log in
              </button>
            </form>
            <hr />
          </div>
        `,
        controls: async () => {
            const container = await document.getElementById('login-view')
            console.log('controls initialised')
            on('click', container, 'form>button#login-button', () => {
                console.log('Logging =>', state)
            })
            on('change', container, 'form>input[name="email"]', (e) => {
                console.log('Typed email', e.target.value)
                state.email = e.target.value
                console.log({ state })
            })
            on('change', container, 'form>input[name="password"]', (e) => {
                console.log('Typed email', e.target.value)
                state.password = e.target.value
                console.log({ state })
            })
        }
    })

    await Vision({ component: Footer() })
})
