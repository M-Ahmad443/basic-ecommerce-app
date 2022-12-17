import axios  from '../axios/axios'
const registerService=async(userdata)=>{

    const URL='/register'
    const response=await axios.post(URL,userdata,{
        withCredentials:true,
        headers:{
            'Content-Type':'application/json',
        }

    })

    return response.data
}

const authService={
    registerService,
}

export default authService