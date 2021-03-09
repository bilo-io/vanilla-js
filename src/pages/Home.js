import Vision, { on, html } from '../core/vision'
import { push } from '../core/Router'

const state = {}
export const Home = async () => await Vision({
    view: async () => html`
      <div
        id="home-view"
        class="flex-col card card-1"
        style="max-width: 20rem; margin: auto; margin-top: 4rem; padding: 2rem"
      >
      <h1>Home</h1>
      <button class="primary">Log out</button>
    </div>
    `,
    controls: async () => {
        const container = await document.getElementById('home-view')

        on('click', container, 'button.primary', () => {
            console.log('Log out() =>', state)
            push('/login')
        })
    }
})

export default Home
