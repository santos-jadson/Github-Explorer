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