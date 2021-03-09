import Vision, { on, html } from '../core/vision'

const state = {}
export const Error404 = async () => await Vision({
    view: async () => html`
      <div
        id="error-view"
        class="flex-col card card-1"
        style="max-width: 30rem; margin: auto; margin-top: 4rem; padding: 6rem"
      >
            <h1>Sorry</h1>
            <p>
                It appears something went wrong. Please go back to safety.
            </p>
            <button id="back-to-safety" class="primary">
                Back to Safety
            </button>
        <hr />
      </div>
    `,
    controls: async () => {
        const container = await document.getElementById('error-view')

        on('click', container, 'button#back-to-safety', () => {
            console.log('BackToSafety() =>', state)
        })
    }
})

export default Error404
