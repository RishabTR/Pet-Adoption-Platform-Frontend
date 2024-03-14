import { useState } from "react";
import { mailreq } from "./Services/Postrequest";

function Contact(props){

    
    const owner_email=props.email;
    console.log(owner_email);

    const[adopterData,setAdopterData]=useState({
        name:'',
        email:'',
        phoneno:'',
        address:'',
        desc:'',
        owner_email:owner_email
    })

    const onHandleChange=(e)=>{
        const{name,value}=e.target;
        setAdopterData({...adopterData,[name]:value});
    }

    const onHandleSend=(e)=>{
        e.preventDefault();
        console.log(adopterData);
        mailreq(adopterData)
        .then(res =>{
            if(res.status == 200){
                alert("Enquiry mail successfull sent");
            }
        })
        .catch(error =>{console.log(error)});
    }

    return(
        <>
            
            <form className="contact-form">
                <h1>Contact</h1>
                <div>
                    <h2>Name <input type="text" name="name" onChange={onHandleChange}></input></h2>
                    <h2>Email <input type="email" name="email" onChange={onHandleChange}></input></h2>
                    <h2>Contact no. <input type="number" name="phoneno" onChange={onHandleChange}></input></h2>
                    <h2>Address <textarea type="text" name="address" onChange={onHandleChange}></textarea></h2>
                    <h2>Description <textarea type="text"  name="desc" onChange={onHandleChange} placeholder="Tell the owner about your keen intrest and involvement in his/her pets"></textarea></h2>
                    <button onClick={onHandleSend}>Send</button>
                </div>
                
            </form>
        </>
    )
}

export default Contact;