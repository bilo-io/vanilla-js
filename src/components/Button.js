import { on, html } from '../core/vision'
import { v4 as uuidv4 } from 'uuid'

const id = uuidv4()
const elementId = `Button_${id}`

export const Button = ({
    content,
    onClick,
    className
}) => ({
    view: async () => await html`
        <button class="${className}" id='${elementId}'>${content}</button>
    `,
    controls: async () => {
        const container = await document.getElementById(elementId)
        console.log('container', container)
        on('click', container, `#${elementId}`, onClick)
    }
})

export default Button
