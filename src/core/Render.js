export const Vis = async ({
    tag,
    component,
    render,
    DEBUG
}) => {
    const target = tag || 'div'
    const element = null || document.createElement(target)
    DEBUG && console.log('Render:', target, component, element)

    if (component) {
        element.innerHTML = await component.view()
        window.onload = async () => await component.control()
    }

    if (render) {
        element.innerHTML = await render()
    }

    document.body.appendChild(element)
}

export default {
    Vis
}
