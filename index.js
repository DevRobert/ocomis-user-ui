const Hapi = require('hapi')
const HapiPino = require('hapi-pino')

const server = new Hapi.Server()

function provision () {
    return new Promise((fulfill, reject) => {
        server.connection({
            port: 3001
        })

        server.register(HapiPino, (error) => {
            if(error) {
                return reject(error)
            }

            server.start((error) => {
                if (error) {
                    return reject(error)
                }

                fulfill()
            })
        })
    })
}

provision().then(() => {
    server.logger().info('Ocomis User UI service started.')
    server.logger().info(`Service running at: ${server.info.uri}`)
}).catch((error) => {
    if(typeof(server.logger) === 'function') {
        server.logger().error(`Ocomis User UI service start failed: ${error}`)
    }
    else {
        console.error(error)
    }
})

module.exports = server // only for testing
