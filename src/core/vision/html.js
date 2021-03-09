export const html = (strings, ...values) => values.reduce(
    (result, value, i) => {
        return `${result}${value}${strings[i + 1]}`
    }, strings[0])
