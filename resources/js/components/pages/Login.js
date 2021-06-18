import React,{useState,useEffect} from 'react'
import Header from "./Header";
import {useHistory} from "react-router";

function Login(){
    let history = useHistory();

    useEffect(()=>{
        if(localStorage.getItem('user')){
            history.push('/home')
        }

    },[]);
    const [customer_number,setCustomernum]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

  const  onsubmit=(event)=>{

      event.preventDefault();
        const userData={
            customer_number:customer_number,
            password:password,
        }
        console.log(userData);
        axios.post('http://127.0.0.1:8000/api/auth/login/',userData)
            .then(res=>{
                console.log(res);
            }).catch(err=>{
            console.log(err.response.data);
            setError(err.response.data);
        })
    }

    return(
        <>
        {/*<Header/>*/}
        <br/>
            {error?                 <>
                    <div className="alert alert-danger container" role="alert">
                        {error.error}
                    </div>
                </>:
                <></>}
        <div>

            <div className="container-fluid register_page" >
                <div className="row justify-content-center">
                    <div className="col-md-8">

                        <div className="card">
                            <div className="card-header bg-primary text-white">Registration Form</div>

                            <div className="card-body">
                                <form>


                                    <div className="form-group row">
                                        <label htmlFor="Phone Number" className="col-md-4 col-form-label text-md-right">Phone Number</label>

                                        <div className="col-md-6">
                                            <input id="phone" type="number" className="form-control" name="customer_number" value={customer_number} onChange={event => setCustomernum(event.target.value)} required autoComplete="number" autoFocus/>


                                        </div>
                                    </div>



                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control  " name="password" value={password}   onChange={event => setPassword(event.target.value)} required autoComplete="new-password"/>

                                        </div>
                                    </div>



                                    <div className="form-group row mb-0">
                                        <div className="col-12 text-center">
                                            <button type="submit" className="btn btn-primary col-12" onClick={onsubmit}>
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
            </>
    )

}
export  default  Login;
