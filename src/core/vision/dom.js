export const on = async (eventName, container, query, callback) => {
    const element = await container.querySelector(query)
    // console.log(query, ':', element)
    element.addEventListener(eventName, callback)
}
