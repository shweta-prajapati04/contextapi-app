import React, { useContext, useState } from 'react'
import { Context_app } from './ContextApi'
import { useNavigate } from 'react-router-dom';

 const Signup = () => {
    const { user, handleUser } = useContext(Context_app);
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        handleUser({name:name,email:email,password:password})
        //navi("/profile");

    }
    return (
        <div className='container'>
        <h4>Context-API</h4>
            <div className='col-md-6 mx-auto  alert alert-primary'>
                <h2>Sign Up</h2>
                <div> 
                    <form onSubmit={handleSubmit}>
                        <input type="text" className='form-control' placeholder='Your Name'
                            onChange={(e) => setName(e.target.value)}></input>
                            <br></br>
                        <input type="enail" className='form-control' placeholder='Your Email'
                            onChange={(e) => setEmail(e.target.value)}></input>
                            <br></br>
                        <input type="password" className='form-control' placeholder='Your Password'
                            onChange={(e) => setPassword(e.target.value)}></input>
                            <br></br>
                        <button className='btn btn-dark' >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup
