import React from 'react'

function Footer(){

    const myStyle={
        fontSize: "24px",
    }
   return(
       <>

           <div className="jumbotron text-center mb-0" >
               <div className="d-flex justify-content-around ">
                   <a className="text-dark" href="/home">
                       <small><span className="mr-2 footer_icon_color" style="{myStyle}"><i
                           className="fas fa-home"></i></span>HOME</small></a>
                   <small ><span className="mr-2 footer_icon_color" style="{myStyle}"><i className="fas fa-clipboard-list"></i></span>ORDER</small>
                   <a href="/team" className="text-dark disabled"><small><span
                       className="mr-2 footer_icon_color" style="{myStyle}"><i
                       className="fas fa-users"></i></span>TEAM</small></a>
                   <a href="/profile"> <small ><span className="mr-2 footer_icon_color" style="{myStyle}"><i className="fas fa-dice-d6"></i></span>PRODUCT</small></a>
                   <a className="text-dark" href="/profile"><small><span
                       className="mr-2 footer_icon_color" style="{myStyle}"><i
                       className="fas fa-user-circle"></i></span>PROFILE</small></a>
               </div>
           </div>

       </>

   )
}
export default Footer;
