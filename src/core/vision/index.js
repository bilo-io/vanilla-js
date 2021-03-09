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
        element.innerHTML = await component.view()
        window.onload = async () => await component.control()
    } else {
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

export * from './html'
export * from './dom'
export * from './style'

// #endregion

export default Vision
