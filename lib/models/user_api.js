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
    const requestUri = userApiUri + '/users/' + userId

    const response = await fetch(requestUri, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })

    await validateResponse(response)

    return response.json()
}

export async function registerUser (user) {
    const requestUri = userApiUri + '/users'

    const response = await fetch(requestUri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    await validateResponse(response)

    const responseData = await response.json()

    return responseData.id
}

export async function updateUser (user) {
    throw new Error('not implemented')
}

export async function updatePassword (userId, password) {
    throw new Error('not implemented')
}

export async function deletePassword (userId) {
    throw new Error('not implemented')
}
