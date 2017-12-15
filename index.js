const Hapi = require('hapi')

const server = new Hapi.Server()

async function provision () {
    server.connection({
        port: 3001
    })

    server.start((error) => {
        if (error) {
            return console.error(error)
        }

        console.log("Ocomis User UI service started.")
        console.log("Service running at: " + server.info.uri)
    })
}

provision()

module.exports = server // only for testing
