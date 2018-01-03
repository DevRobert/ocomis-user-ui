const Routes = [
    {
        method: 'GET',
        path: '/user/',
        handler: (request, response) => {
            response.file('./www/index.html')
        }
    },
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
    }
]

module.exports = Routes
