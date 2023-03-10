// this code is awful please dont ever use it
const chalk = require('chalk')
const chalkAnimation = require('chalk-animation')
const gradientString = require('gradient-string')

const pprint = (message, properties) => {
    // return if no properties array
    if (!Array.isArray(properties)) {
        console.log(`${message}`)
        return
    }

    // evaluate properties
    let propertiesString = ''
    for (let i = 0; i < properties.length; i++) {
        propertiesString = propertiesString.concat(`['${properties[i]}']`)
    }

    // find and log with correct module and properties
    if (eval('chalk'.concat(propertiesString))) {
        console.log(eval('chalk'.concat(propertiesString))(`${message}`))
    }
    else if (eval('gradientString'.concat(propertiesString))) {
        console.log(eval('gradientString'.concat(propertiesString))(`${message}`))
    }
    else if (eval('chalkAnimation'.concat(propertiesString))) {
        eval('chalkAnimation'.concat(propertiesString))(`${message}`)
    }

    // invalid properties
    else {
        console.log(`invalid properties: ${message}`)
    }
}

module.exports = pprint
