export const Vis = async ({
    tag,
    component,
    render,
    DEBUG
}) => {
    const target = tag || 'div'
    const element = null || document.createElement(target)
    console.log('Render:', target, component, element)

    if (component) {
        element.innerHTML = await component.view()
        await component.control()
    }

    if (render) {
        element.innerHTML = await render()
    }

    document.body.appendChild(element)
}

export default {
    Vis
}
