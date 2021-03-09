export const objToCSS = (obj) => {
    return Object.keys(obj)
        .map(key => `${camelToKebab(key)}: ${obj[key]}`)
        .join('; ')
}

export const cssToObj = (css) => {
    return css
        .split(';')
        .map(item => ({ [`${kebabToCamel(item.split(':')[0].trim())}`]: item.split(':')[1].trim() }))
        .reduce((result, value, i) => ({
            ...result,
            ...value
        }))
}

// #region Helpers
const camelToKebab = (input) => {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

const kebabToCamel = (input) => {
    return input.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}
// #endregion
