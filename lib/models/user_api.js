export async function getUsers () {
    return [
        {
            id: 1,
            name: 'robert'
        },
        {
            id: 2,
            name: 'stefan'
        },
        {
            id: 3,
            name: 'bernd'
        }
    ]
}

export async function getUser (userId) {
    return {
        id: userId,
        name: 'user ' + userId,
        hasPassword: true
    }
}

export async function registerUser (user) {
    if (!user.name) {
        throw new Error('Please enter the name.')
    }

    return 10
}

export async function updateUser (user) {

}

export async function updatePassword (userId, password) {

}

export async function deletePassword (userId) {

}
