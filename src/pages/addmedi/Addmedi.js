import React, { useState } from "react"
import "./addmedi.css"
import axios from "axios"
import Topbar from "../../components/topbar/Topbar"
// import { useNavigate } from "react-router-dom"

const Addmedi = () => {

    // const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        quantity: "",
        price: "",
        mediimage: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const [image, setImage] = useState('')
    const handleSubmit = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    const handleApi = () => {
        const url = ''
        const formData = new FormData()
        formData.append('image', image)
        axios.post(url, formData).then((res) => {
            console.log(res)
        })
    }
    // const register = () => {
    //     const { name, email, password, reEnterPassword, mediimage} = user
    //     if( name && email && password && (password === reEnterPassword)){
    //         axios.post("http://localhost:9002/register", user)
    //         .then( res => {
    //             alert(res.data.message)
    //             navigate.push("/login")
    //         })
    //     } else {
    //         alert("invlid input")
    //     }

    // }

    return (
        <div>
            <Topbar/>
            <div className="register">
                {console.log("User", user)}
                <h1>Register</h1>
                <input type="text" name="name" value={user.name} placeholder="Name of Medicine" onChange={handleChange}></input>
                <input type="number" name="quantity" value={user.quantity} placeholder="Quantity" onChange={handleChange}></input>
                <input type="number" name="price" value={user.price} placeholder="Price" onChange={handleChange}></input>
                {/* <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Upload image" onChange={ handleChange }></input> */}
                {/* <input type="file" name="mediimage" value={user.mediimage} onChange={handleChange} />
            <img src={file} /> */}
                <input type="file" onChange={handleSubmit} />
                <div className="button" onClick={handleApi} >Save</div>
                {/* <div className="button" onClick={register} >Save</div> */}


                {/* <div className="button" onClick={() => navigate.push("/login")}>Login</div> */}
            </div>
        </div>
    )
}

export default Addmedi