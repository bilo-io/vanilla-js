import Vision, { on, html } from '../core/vision'

const state = {}
export const Home = async () => await Vision({
    view: async () => html`
      <div
        id="login-view"
        class="flex-col card card-1"
        style="max-width: 20rem; margin: auto; margin-top: 4rem; padding: 2rem"
      >
      <h1>Home</h1>
    </div>
    `,
    controls: async () => {

    }
})

export default Home
