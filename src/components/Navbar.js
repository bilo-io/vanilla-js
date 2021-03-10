import Vision, { on, html } from '../core/vision'

let state = { isOpen: false }
const navItems = [
    {
        name: 'Home',
        path: '/home'
    },
    {
        name: 'Profile',
        path: '/profile'
    },
    {
        name: 'Log out',
        path: '/login'
    }
]

const setState = (newState, callback = () => {}) => {
    state = { ...state, isOpen: !state.isOpen }
    window.dispatchEvent(new Event('setState', {}))
}
export const Navbar = async ({ title }) => new Vision({
    isGlobal: true,
    setState,
    view: async () => html`
    <div>
        <div id="Navbar" class="flex-row">
            <button class="menu-toggle" style="padding: 0 1rem 0 1rem; color: inherit">
                <i class="fas fa-bars" style="color: inherit"></i>
            </button>
            <div style="margin-left: 1rem">${title}</div>
        </div>
        <div id="NavMenu" class="${state.isOpen ? 'open' : ''}">
            ${[].map(item => (
        html`<button class="nav-item" name="nav-item-${item.path.replace('/', '')}">${item.name}</button>`
    ))}
        </div>
    </div>
    `,
    controls: async () => {
        const container = await document.getElementById('Navbar')
        const navMenu = await document.getElementById('NavMenu')

        console.log('Navbar.container', container)

        on('click', container, 'button.menu-toggle',
            () => {
                console.log('clicked button')
                // state =
                setState({ ...state, isOpen: !state.isOpen })
                console.log('state', state)
            })

        // navItems.forEach(item => {
        //     on('click', navMenu, `button.nav-item-${item.path.replace('/', '')}`,
        //         () => {
        //             console.log('NavItem.onClick', item)
        //         })
        // })
    }
})

export default Navbar
