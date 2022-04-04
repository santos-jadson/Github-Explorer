import api from './api'

export function getRepoByUsername(username: string, per_page: number, page: number, isStarred: boolean) {
    let queryString = `?per_page=${per_page}&page=${page}`

    return api.get(`https://api.github.com/users/${username}/${isStarred ? "starred" : "repos"}${queryString}`)
        .then((res) => {
            return {
                status: res.status,
                data: res.data,
                message: "Sucesso"
            }
        },
            (error) => {
                return {
                    status: error.response.status,
                    data: [],
                    message: "Houve um erro"
                }
            }
        )
}

export function getStarredByUsername(username: string, per_page: number, page: number) {
    let queryString = `?per_page=${per_page}&page=${page}`

    return api.get(`https://api.github.com/users/${username}/starred${queryString}`)
        .then((res) => {
            return {
                status: res.status,
                data: res.data,
                message: "Sucesso"
            }
        },
            (error) => {
                return {
                    status: error.response.status,
                    data: [],
                    message: "Houve um erro"
                }
            }
        )
}