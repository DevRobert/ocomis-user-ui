const Routes = [
    {
        method: 'GET',
        path: '/users/',
        handler: (request, response) => {
            response.file('./www/index.html')
        }
    },
    {
        method: 'GET',
        path: '/users/bundle.js',
        handler: (request, response) => {
            response.file('./www/bundle.js')
        }
    },
    {
        method: 'GET',
        path: '/users/main.css',
        handler: (request, response) => {
            response.file('./www/main.css')
        }
    }
]

module.exports = Routes
