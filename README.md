## Vanilla-JS

A single page application built with vanilla javascript, `webpack` and `node` / `npm` for basic package management.

> The purpose of this project is to create a full JS application without the use of a frontend framework such as `Angular`, `Vue` or `React`.

### Quickstart

- `git clone THIS_REPO_URL`
- `yarn`
- `yarn start`
- [http://localhost:8080](http://localhost:8080)

### Core

#### App



#### Component
> A component is just a function, that exposes some async functions.
> - `view` just returns the HTML `template`
> - `control` binds controls to the view

```js
export const CustomComponent = ({ title }) => ({
    view: async () => await html`
        <div id="navbar" class="flex-row">
            <button>Menu</button>
            <div style="margin-left: 1rem">NavbarTitle</div>
        </div>
    `,
    controls: async () => {
        const container = await document.getElementById('navbar')
        on('click', container, 'button',
            () => {
                console.log('clicked button')
                alert('Yo dude')
            })
    }
})
```