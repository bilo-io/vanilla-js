import html from 'typescript-lit-html-plugin'
export const Home = () => ({
    view: html`
        <div style="width: 100%">
            <h1>Home</h1>
        </div>
    `,
    control: () => {
        console.log('init-page: Home')
    }
})

export default Home
