import html from 'typescript-lit-html-plugin'
export const Login = () => ({
    view: html`
        <div style="width: 100%">
            <h1>Login</h1>
        </div>
    `,
    control: () => {
        console.log('init-page: Login')
    }
})

export default Login
