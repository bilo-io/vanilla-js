import Vision, { on, html } from '../core/vision'

// COMPONENT
export const Navbar = async ({ title }) => new Vision({
    isGlobal: true,
    view: async () => html`
        <div id="Navbar" class="flex-row">
            <button style="padding: 0 1rem 0 1rem; color: inherit">
                <i class="fas fa-bars" style="color: inherit"></i>
            </button>
            <div style="margin-left: 1rem">${title}</div>
        </div>
    `,
    controls: async () => {
        const container = await document.getElementById('Navbar')

        console.log('Navbar.container', container)

        on('click', container, 'button',
            () => {
                console.log('clicked button')
                alert('Yo dude')
            })
    }
})

export default Navbar
