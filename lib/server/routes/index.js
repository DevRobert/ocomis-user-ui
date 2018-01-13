const Config = require('config')

const Routes = [
    {
        method: 'GET',
        path: '/user/bundle.js',
        handler: (request, response) => {
            response.file('./www/bundle.js')
        }
    },
    {
        method: 'GET',
        path: '/user/main.css',
        handler: (request, response) => {
            response.file('./www/user/main.css')
        }
    },
    {
        method: 'GET',
        path: '/user/config.js',
        handler: (request, response) => {
            const config = {
                apis: {
                    user: {
                        uri: Config.get('apis.user.uri')
                    }
                }
            }

            const js = 'window.ocomisUserUiConfig = ' + JSON.stringify(config)

            response(js).header('Content-type', 'application/javascript')
        }
    },
    {
        method: 'GET',
        path: '/user/{path*}',
        handler: (request, response) => {
            response.file('./www/index.html')
        }
    }
]

module.exports = Routes
