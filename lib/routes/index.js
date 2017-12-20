// const ManageController = require('../controllers/manage')

const Routes = [
    {
        method: 'GET',
        path: '/manage/users/{userId}'
    },
    {
        method: ['GET', 'POST'],
        path: '/manage/users/create'
    },
    {
        method: ['GET', 'POST'],
        path: '/manage/users/update'
    },
    {
        method: ['GET', 'POST'],
        path: '/manage/users/delete'
    }
]

module.exports = Routes
