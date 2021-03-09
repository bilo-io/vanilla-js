import { html } from '../core/html'
import { on } from '../core/vision'

// COMPONENT
export const Navbar = ({ title }) => ({
    view: async () => await html`
        <div id="navbar" class="flex-row">
            <button>Menu</button>
            <div style="margin-left: 1rem">NavbarTitle</div>
        </div>
    `,
    control: async () => {
        const container = await document.getElementById('navbar')
        on('click', container, 'button',
            () => {
                console.log('clicked button')
                alert('Yo dude')
            })
    }
})

export default Navbar
