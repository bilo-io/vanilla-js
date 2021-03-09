import { on, html } from '../core/vision'

export const Icon = ({ name, style }) => ({
    view: async () => await html`
        <div
            class="fas fa-${name}"
            style="${style}"
        >Icon</div>
    `,
    control: async () => {
        const container = await document.getElementById(Icon)
    }
})
