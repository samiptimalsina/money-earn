import React,{useState,useEffect} from 'react'
import {useHistory} from "react-router";

function Protected(props){
    let Cmp=props.Cmp
    const history=useHistory()
    useEffect(()=>{
        if(!localStorage.getItem('user')){

        }

    })
    return(
        <>
            <Cmp/>

        </>
    )

}
export  default  Protected;
