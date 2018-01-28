import config from '../config'

const userApiUri = config.apis.user.uri

async function validateResponse (response) {
    if (response.ok) {
        return
    }

    const responseData = await response.json()

    let error = new Error(responseData.message)

    if (response.status === 401) {
        error.isAuthenticationError = true
    }

    throw error
}

export async function getUsers () {
    const requestUri = userApiUri + '/users'

    const response = await fetch(requestUri, {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
            'Accept': 'application/json'
        })
    })

    await validateResponse(response)

    return response.json()
}

export async function getUser (userId) {
    const requestUri = userApiUri + '/users/' + userId

    const response = await fetch(requestUri, {
        method: 'GET',
        credentials: 'include',
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
        credentials: 'include',
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

export async function updatePassword (userId, password, repeatPassword) {
    if (password !== repeatPassword) {
        throw new Error('The passwords do not match.')
    }

    const requestUri = userApiUri + '/users/' + userId + '/password'

    const requestData = {
        password
    }

    const response = await fetch(requestUri, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })

    await validateResponse(response)
}

export async function deletePassword (userId) {
    const requestUri = userApiUri + '/users/' + userId + '/password'

    const response = await fetch(requestUri, {
        credentials: 'include',
        method: 'DELETE'
    })

    await validateResponse(response)
}
