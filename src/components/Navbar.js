import { html } from '../core/html'
export const Navbar = ({ title }) => ({
    view: async () => html`
        <div id="navbar" class="flex-row">
            <div>NavbarTitle${title || 'Navbar'}</div>
            <button>Button</button>
        </div>
    `,
    control: async () => {
        console.log('init-component: Navbar')
        const button = await document.querySelectorAll('#navbar>div>button')[0]
        const onClick = () => {
            console.log('button.onClick')
            alert('Clicked button')
        }
        // button.addEventListener('onclick', onClick)
        console.log('navbar.button', button)
    }
})

export default Navbar
