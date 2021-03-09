import { on, html } from '../core/vision'

export const Button = () => ({
    view: async () => await html`
        <div id='Button'>Button</div>
    `,
    control: async () => {
        const container = await document.getElementById(Button)
    }
})
