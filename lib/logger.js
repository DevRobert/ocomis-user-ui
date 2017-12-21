const pino = require('pino')

const logger = pino().child({
    service: 'ocomis-user-ui'
})

module.exports = logger
