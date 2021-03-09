export const get = (element, query) => {
    return element.querySelector(query)
}

export const on = window.addEventListener

export const onEvent = (eventName, container, query, callback) => {
    const element = container.querySelector(query)
    element.addEventListener(eventName, callback)
}
