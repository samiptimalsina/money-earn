import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom";
import Header from "./Header";
function Register(){
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setCPass] = useState("");
    const [referal, setReferal]= useState("");
    const [message, setMessage]= useState([]);

    const history=useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user')){
            history.push('/home')
        }

    });

    const onSubmit=(event)=>{
        event.preventDefault();
        const userData={
            user_name:name,
            customer_number:number,
            referral_number:referal,
            password:password,
            confirm_password:confirm_password
        }
        console.log(userData);
        axios.post('http://127.0.0.1:8000/api/register/',userData)
            .then((res)=>{
                console.log(res);
                localStorage.setItem('user', JSON.stringify(userData));
                history.push('/home');
            }).catch(err=>{
                console.log(err);
        });




    }

    return(
        <>
            {/*<Header/>*/}
        <div className="container-fluid register_page" >
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <br/>
                    <div className="alert alert-success" role="alert">
                        {message}
                    </div>
                    <div className="card">
                        <div className="card-header bg-primary text-white">Registration Form </div>

                        <div className="card-body">
                            <form >

                                <div className="form-group row">
                                    <label  className="col-md-4 col-form-label text-md-right">Name </label>

                                    <div className="col-md-6">

                                        <input  id="name" type="text" className="form-control " name="name" value={name} onChange={ event=>setName(event.target.value)} required  autoFocus/>

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">Phone Number</label>

                                    <div className="col-md-6">
                                        <input id="phone" type="number" className="form-control" name="customer_number" value={number} onChange={ event=>setNumber(event.target.value)} required autoComplete="number"/>


                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label  className="col-md-4 col-form-label text-md-right">Referral Numer</label>

                                    <div className="col-md-6">
                                        <input id="referral_number" type="text" className="form-control " name="referral_number"  value={referal} onChange={ event=>setReferal(event.target.value)} required autoComplete="number"/>


                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label  className="col-md-4 col-form-label text-md-right">Password</label>

                                    <div className="col-md-6">
                                        <input id="password" type="password" className="form-control  " name="password" value={password} onChange={ event=>setPassword(event.target.value)}  required autoComplete="new-password"/>

                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                    <div className="col-md-6">
                                        <input id="password-confirm" type="password" className="form-control" name="password_confirmation" value={confirm_password} onChange={ event=>setCPass(event.target.value)}  required autoComplete="new-password"/>
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary col-12"onClick={onSubmit}>
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                    <div className="form-group row mb-0 row">
                        <div className="col-12 text-center">


                            <button type="submit" className="btn btn-primary col-5">
                                App download
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

</>
    )

}
export  default  Register
