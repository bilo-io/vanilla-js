import html from 'typescript-lit-html-plugin'
export const About = () => ({
    view: html`
        <div style="width: 100%">
            <h1>About</h1>
        </div>
    `,
    controls: () => {
        console.log('init-page: About')
    }
})

export default About
