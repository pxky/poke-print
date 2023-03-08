//this code is awful please dont ever use it
const chalk = require('chalk')
const chalkAnimation = require('chalk-animation')
const gradientString = require('gradient-string')

const pprint = (message, properties) => {
    let propertiesString = ''
    for (let i = 0; i < properties.length; i++) {
        propertiesString = propertiesString.concat(`['${properties[i]}']`)
    }
    if (eval('chalk'.concat(propertiesString))) {
        console.log(eval('chalk'.concat(propertiesString))(`${message}`))
    }
    else if (eval('gradientString'.concat(propertiesString))) {
        console.log(eval('gradientString'.concat(propertiesString))(`${message}`))
    }
    else if (eval('chalkAnimation'.concat(propertiesString))) {
        eval('chalkAnimation'.concat(propertiesString))(`${message}`)
    }
    else {
        console.log(`error w/ properties: ${message}`)
    }
}

module.exports = {
    pprint
}
