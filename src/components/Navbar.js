import { html } from '../core/html'
// COMPONENT
export const Navbar = ({ title }) => ({
    view: async () => html`
        <div id="navbar" class="flex-row">
            <button>Menu</button>
            <div style="margin-left: 1rem">NavbarTitle</div>
        </div>
    `,
    control: async () => {
        console.log('init-component: Navbar')
        // TODO: bind logic to view here
    }
})

export default Navbar
