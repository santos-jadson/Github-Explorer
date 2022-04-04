import api from './api'

export function getUserByName(name: string) {

    return api.get(`https://api.github.com/users/${name}`)
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
                message: error.response.status === 404 ? "Usuário não encontrado" : "Houve um erro"
            }
        }
      )
  }

  /*export function getUserByName(name: string, per_page: number, page: number) {
    let queryString = `?per_page=${per_page}&page=${page}`

    return api.get(`https://api.github.com/users/${name}${queryString}`)
      .then((res) => {
          console.log(res)
        return res.data
      },
        (error) => {
          console.error(error)
        }
      )
  }*/