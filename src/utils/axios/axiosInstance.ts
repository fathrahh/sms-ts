import axios from "axios"

const baseURL = "https://staging-api.toqcer.uloy.dev"

export const axiosInstance = axios.create({
    baseURL,
    timeout: 60000
})

// function getInstance(){
//     const axiosInstance = axios.create({
//         baseURL,
//         timeout: 60000
//     })

    /*
    * TODO: Add Interceptors laters
    * For handling errors / Refresh Token
    * Source : 
    * - https://thedutchlab.com/blog/using-axios-interceptors-for-refreshing-your-api-token
    * - https://dev.to/franciscomendes10866/how-to-use-axios-interceptors-b7d
    */

//     return axiosInstance
// }

// export default getInstance