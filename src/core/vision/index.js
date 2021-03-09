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
        const loadControls = async () => await component.controls()
        await attachToWindowLoad(loadControls)
    } else {
        if (view) {
            element.innerHTML = await view()
        }

        if (controls) {
            const loadControls = async () => await controls()
            await attachToWindowLoad(loadControls)
        }
    }

    document.body.appendChild(element)
}

// #region Helpers
const attachToWindowLoad = (loadControls) => {
    // loadControls()
    if (window.addEventListener) {
        window.addEventListener('load', loadControls)
    } else if (window.attachEvent) {
        window.attachEvent('onload', loadControls)
    } else {
        console.error('Vision.ERROR:[101] could not attach event to window.onload')
    }
}
// #endregion

// #region Utils
export * from './html'
export * from './dom'
export * from './style'
// #endregion

export default Vision
