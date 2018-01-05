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
            response.file('./www/main.css')
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
