import axios from 'axios'

const token =  localStorage.getItem("userToken")
console.log(123,token);


const instance = axios.create({
    baseURL : `https://as-male.onrender.com`
    // headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `bearer ${token}`,
    // }
})

instance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("userToken") || localStorage.getItem("adminToken")}`
 
export default instance;
