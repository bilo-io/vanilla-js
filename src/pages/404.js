import html from 'typescript-lit-html-plugin'
export const Error404 = () => ({
    view: html`
        <div style="width: 100%">
            <h1>Error: Page not found</h1>
        </div>
    `,
    control: () => {

    }
})

export default Error404
