import axios from 'axios'
axios.interceptors.request.use(config =>  {
  return config
},error =>  {
  return Promise.reject(error)
})

// Return interception
axios.interceptors.response.use(response =>  {
  return response
},error =>  {
  return Promise.reject(error)
})

export function get(url, params) {
  return axios.get(url, {
    params
  }).then((res) => {
    // do something
    return res.data
  }).catch((e) => {
    console.log(e)
  })
}
