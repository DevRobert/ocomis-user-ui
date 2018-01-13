const Hapi = require('hapi')
const HapiPino = require('hapi-pino')
const logger = require('./lib/server/logger')
const Routes = require('./lib/server/routes')
const Inert = require('inert')

const server = new Hapi.Server()

function provision () {
    return new Promise((resolve, reject) => {
        server.connection({
            port: 3001
        })

        server.register([{
            register: HapiPino,
            options: {
                instance: logger
            }
        }, Inert ], (error) => {
            if (error) {
                return reject(error)
            }

            server.route(Routes)

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
    logger.info('Ocomis User UI service started.')
    logger.info(`Service running at: ${server.info.uri}`)
}).catch((error) => {
    logger.error(`Ocomis User UI service start failed: ${error}`)
})

module.exports = server // only for testing
