const html = (literal, ...cooked) => {
    return literal
}
export const Navbar = () => ({
    view: () => {
        return html`
        <div style="width: 100%; background-color: red; height: 3rem">
            <div>Navbar</div>
        </div>
    `
    },
    control: () => {
        console.log('init-component: Navbar')
    }
})

export default Navbar
