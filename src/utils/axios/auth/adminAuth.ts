import getInstance from '../axiosInstance'
import { routes } from '../routes/v1'

type adminAuthProps = {
    email : string,
    password : string
}

type apiResponse = {
    email : string,
    id : string,
    password : string,
}

export default async function adminAuth(crendentials : adminAuthProps) : Promise<apiResponse>{
    const response = await getInstance().post(routes.adminAuth, crendentials)
    const { data } = response.data
    return data as apiResponse
}