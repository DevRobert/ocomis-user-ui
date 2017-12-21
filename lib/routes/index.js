// const ManageController = require('../controllers/manage')

const Routes = [
    {
        method: 'GET',
        path: '/user/manage/users/{userId}'
    },
    {
        method: ['GET', 'POST'],
        path: '/user/manage/users/create'
    },
    {
        method: ['GET', 'POST'],
        path: '/user/manage/users/update'
    },
    {
        method: ['GET', 'POST'],
        path: '/user/manage/users/delete'
    }
]

module.exports = Routes
