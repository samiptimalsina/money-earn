 import React from "react";
function HomePageHeader(){
    return(
        <>
        <header className="pt-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 text-center p-1">
                        <p>
                            <button className="btn btn-warning">LEV1</button>
                        </p>
                        <p className="text-danger"><small>total Assets</small> <br/><span> RS  00
                       </span>
                        </p>
                        <p className="text-white text-center"><span>00</span> <br/><small></small></p>
                    </div>
                    <div className="col-4 text-center p-0">
                        <p className="pt-5 text-white">0.000</p>
                        <p className="text-white"><small>Cumulative income</small></p>
                    </div>
                    <div className="col-4 text-center pl-0 pr-0">
                        <p className="float-left"><small>Regional money </small><br/><span>Rs50.00</span></p>
                        <p className="justify-content-around">
                            <a href="" className="btn btn-info"><span><i className="fas fa-wallet"></i></span> Recharge</a>
                        </p>
                        <p className="justify-content-around">
                            <a href="#" className="btn btn-info text-white"><span><i className="fas fa-wallet"></i></span>Withdraw</a></p>
                    <p className="pl-5"><span>0.000</span> <br/> <small>Today Earnings</small></p>
                </div>
            </div>
        </div>

        </header>

 </>
    )
 }
 export default HomePageHeader;
