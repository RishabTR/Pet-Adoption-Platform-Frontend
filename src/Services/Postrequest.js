import axios from "axios";


export const register = async(data)=>{
    return await axios.post('http://localhost:5000/register',data);
}


export const login = async(data)=>{
    return await axios.post('http://localhost:5000/login',data)
}

export const mailreq = async(data)=>{
    return await axios.post('http://localhost:5000/contact',data)
}