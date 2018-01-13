import config from '../config'

const userApiUri = config.apis.user.uri

async function validateResponse (response) {
    if (response.ok) {
        return
    }

    const responseData = await response.json()

    throw new Error(responseData.message)
}

export async function getUsers () {
    const requestUri = userApiUri + '/users'

    const response = await fetch(requestUri, {
        method: 'GET'
    })

    await validateResponse(response)

    return response.json()
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
