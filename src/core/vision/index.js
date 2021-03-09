export const Vision = async ({
    tag,
    component,
    view,
    controls,
    isGlobal,
    DEBUG
}) => {
    const root = null || document.getElementById('root')
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

    if (isGlobal) {
        document.body.appendChild(element)
    } else {
        console.log('root', root)
        root.appendChild(element)
    }
    return element
}

export const clearRoot = () => {
    const root = document.getElementById('root')
    console.log('LIFE_CYCLE: root.clear()', root)
    // root.remove()
    root.innerHTML = ''

    // const newRoot = document.createElement('div#root')
    // console.log('LIFE_CYCLE: root.create()', newRoot)
    // document.body.appendChild(newRoot)
}

export const destroy = (element) => {
    document.body.removeChild(element)
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
