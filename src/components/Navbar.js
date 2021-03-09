import html from 'typescript-lit-html-plugin'
export const Navbar = () => ({
    view: html`
        <div style="width: 100%">
            <h1>Navbar</h1>
        </div>
    `,
    control: () => {
        console.log('init-component: Navbar')
    }
})

export default Navbar
