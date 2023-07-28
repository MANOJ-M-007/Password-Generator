import {axiosInstance} from '../Api/axios'

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

const Register = async(data)=>{
    try {
        const response = await axiosInstance.post("/user/register",data);
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}

const login = async(data)=>{
    try {
        const response =await axiosInstance.post("/user/login",data)
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error.message);

    }
}

const save = async(data)=>{
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const response =await axiosInstance.post("/user/save",data,config)
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error.message);

    }
}
const List = async()=>{
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const response =await axiosInstance.get("/user/list",config)
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error.message);

    }
}

// const logout = async()=>{
//     localStorage.removeItem("userInfo");
// }
const userApiCalls = {
    Register,
    login,
    save,
    List
}
export default userApiCalls