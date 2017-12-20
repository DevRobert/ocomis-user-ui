const Hapi = require('hapi')
const pino = require('pino')
const HapiPino = require('hapi-pino')

const server = new Hapi.Server()

function provision () {
    return new Promise((resolve, reject) => {
        server.connection({
            port: 3001
        })

        const logger = pino().child({
            service: 'ocomis-user-ui'
        })

        server.register({
            register: HapiPino,
            options: {
                instance: logger
            }
        }, (error) => {
            if (error) {
                return reject(error)
            }

            server.start((error) => {
                if (error) {
                    return reject(error)
                }

                resolve()
            })
        })
    })
}

provision().then(() => {
    server.logger().info('Ocomis User UI service started.')
    server.logger().info(`Service running at: ${server.info.uri}`)
}).catch((error) => {
    if (typeof (server.logger) === 'function') {
        server.logger().error(`Ocomis User UI service start failed: ${error}`)
    }
    else {
        console.error(error)
    }
})

module.exports = server // only for testing
