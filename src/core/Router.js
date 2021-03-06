export class Router {
    constructor () {
        this.routes = []
    }

    set (uri, callback) {
        // ensure that the parameters are not empty
        if (!uri || !callback) throw new Error('Router.ERROR: uri or callback must be given')

        // ensure that the parameters have the correct types
        if (typeof uri !== 'string') throw new TypeError('Router.ERROR: typeof uri must be a string')
        if (typeof callback !== 'function') throw new TypeError('Router.ERROR: typeof callback must be a function')

        // throw an error if the route uri already exists to avoid confilicting routes
        this.routes.forEach(route => {
            if (route.uri === uri) throw new Error(`the uri ${route.uri} already exists`)
        })

        // Step 5 - add route to the array of routes
        const route = {
            uri, // in javascript, this is the same as uri: uri, callback: callback, avoids repition
            callback
        }
        this.routes.push(route)
    }

    resolve () {
        const path = window.location.pathname
        console.log('Router', {
            routes: this.routes,
            path
        })
        this.routes.some(route => {
            const regEx = new RegExp(`^${route.uri}$`) // i'll explain this conversion to regular expression below
            // debugger

            if (path.match(regEx)) {
                // our route logic is true, return the corresponding callback

                const req = { path } // i'll also explain this code below
                return route.callback.call(this, req)
            }

            return null
        })
    }
}

export const push = (path, state = {}, title = '') => {
    const fullPath = window.location.origin + path
    console.log('Router.push', { state, path, fullPath })
    window.dispatchEvent(new PopStateEvent('popstate', { state: { path } }))
    window.history.pushState(state, path, fullPath)
}

export const redirect = (path, state = {}, title = '') => {
    const fullPath = window.location.origin + path
    console.log('Router.redirect', { state, path, fullPath })
    window.history.pushState(state, path, fullPath)
}

export default Router
