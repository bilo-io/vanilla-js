import { on, html } from '../core/vision'

export const Footer = () => ({
    view: async () => await html`
        <div id='Footer' class='footer'>Footer</div>
    `,
    control: async () => {
        const container = await document.getElementById(Footer)
    }
})

export default Footer
