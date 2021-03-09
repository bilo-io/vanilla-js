export const Vision = async ({
    tag,
    component,
    view,
    controls,
    DEBUG
}) => {
    const target = tag || 'div'
    const element = null || document.createElement(target)
    DEBUG && console.log('Render:', target, component, element)

    if (component) {
        // Component
        element.innerHTML = await component.view()
        window.onload = async () => await component.control()
    } else {
        // Props
        // NOTE: this is to prevent overriding a components controls (for example)
        if (view) {
            element.innerHTML = await view()
        }

        if (controls) {
            window.onload = async () => await controls()
        }
    }

    document.body.appendChild(element)
}

// #region Utils
export const on = async (eventName, container, query, callback) => {
    const element = await container.querySelector(query)
    console.log(query, ':', element)
    element.addEventListener(eventName, callback)
}

export const html = (literal, ...cooked) => {
    return literal
}
// #endregion

export default Vision
