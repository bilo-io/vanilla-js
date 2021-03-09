import Vision, { on, html } from '../core/vision'
import { push } from '../core/Router'

const state = {}
export const Login = async () => await Vision({
    view: async () => html`
      <div
        id="login-view"
        class="flex-col card card-1"
        style="max-width: 20rem; margin: auto; margin-top: 4rem; padding: 2rem"
      >
        <form>
          <div class="flex-col">
            <input name="email"
              type="text"
              placeholder="john@doe.com"
              autocomplete="on"
            />
          </div>
          <br />
          <div class="flex-col">
            <input
              name="password"
              type="password"
              placeholder="secure passphrase"
              autocomplete="on"
            />
          </div><br /><br />
          <button id="login-button" type="button" class="primary padded">
            Log in
          </button>
        </form>
        <hr />
      </div>
    `,
    controls: async () => {
        const container = await document.getElementById('login-view')

        on('change', container, 'form>div>input[name="email"]', (e) => {
            state.email = e.target.value
            console.log(state)
        })
        on('change', container, 'form>div>input[name="password"]', (e) => {
            state.password = e.target.value
            console.log(state)
        })
        on('click', container, 'form>button#login-button', () => {
            console.log('Log in =>', state)
            push('/home')
        })
    }
})

export default Login
