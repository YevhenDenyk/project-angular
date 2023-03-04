
const baseURL = 'http://owu.linkpc.net/carsAPI/v2'

const auth = `${baseURL}/auth`

const urls = {
  cars: `${baseURL}/cars`,
  auth: {
    login: auth,
    refresh: `${auth}/refresh`,
    register: `${baseURL}/users`
  }
}

export {urls}
