import React from "react";
import HomePageHeader from "./HomPageHeader";
import Footer from "./Footer";
function Home(){
    return (<>
            <HomePageHeader/>
            <nav className="mt-1 "><span className="position-absolute text-white pl-1"><i
                className="fas fa-volume-down"></i></span>
            <marquee scrollamount="15">This is an example</marquee>
            </nav>
            <section className="container">
                <div className="row">
                    <div className="col-6 mt-3">
                        <a href="/order">
                            <div className="border border-primary rounded text-center">
                                <button className="member_btn">LEVEL 1</button>
                                <figure>
                                    <img src="https://www.adron888.in/Uploads/img/2021-01-0516098319872245.png"
                                         className="img-fluid"/>
                                </figure>
                                <figureCaption>ornaments</figureCaption>
                                <br/>
                                    <figureCaption><span className="percent">0.28%</span>&nbsp; &nbsp;<span
                                        className="price">&#8377; 500</span></figureCaption>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 mt-3">
                        <a href="#">
                            <div className="border border-primary rounded text-center">
                                <button className="member_btn">LEVEL 1</button>
                                <figure>
                                    <img src="https://www.adron888.in/Uploads/img/2021-01-0516098319872245.png"
                                         className="img-fluid"/>
                                </figure>
                                <figureCaption>ornaments</figureCaption>
                                <br/>
                                    <figureCaption><span className="percent">0.28%</span>&nbsp; &nbsp;<span
                                        className="price">&#8377; 500</span></figureCaption>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 mt-3">
                        <a href="#">
                            <div className="border border-primary rounded text-center">
                                <button className="member_btn">LEVEL 1</button>
                                <figure>
                                    <img src="https://www.adron888.in/Uploads/img/2021-01-0516098319872245.png"
                                         className="img-fluid"/>
                                </figure>
                                <figureCaption>ornaments</figureCaption>
                                <br/>
                                    <figureCaption><span className="percent">0.28%</span>&nbsp; &nbsp;<span
                                        className="price">&#8377; 500</span></figureCaption>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 mt-3">
                        <a href="#">
                            <div className="border border-primary rounded text-center">
                                <button className="member_btn">LEVEL 1</button>
                                <figure>
                                    <img src="https://www.adron888.in/Uploads/img/2021-01-0516098319872245.png"
                                         className="img-fluid"/>
                                </figure>
                                <figureCaption>ornaments</figureCaption>
                                <br/>
                                    <figureCaption><span className="percent">0.28%</span>&nbsp; &nbsp;<span
                                        className="price">&#8377; 500</span></figureCaption>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 mt-3">
                        <a href="#">
                            <div className="border border-primary rounded text-center">
                                <button className="member_btn">LEVEL 1</button>
                                <figure>
                                    <img src="https://www.adron888.in/Uploads/img/2021-01-0516098319872245.png"
                                         className="img-fluid"/>
                                </figure>
                                <figureCaption>ornaments</figureCaption>
                                <br/>
                                    <figureCaption><span className="percent">0.28%</span>&nbsp; &nbsp;<span
                                        className="price">&#8377; 500</span></figureCaption>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 mt-3">
                        <a href="#">
                            <div className="border border-primary rounded text-center">
                                <button className="member_btn">LEVEL 1</button>
                                <figure>
                                    <img src="https://www.adron888.in/Uploads/img/2021-01-0516098319872245.png"
                                         className="img-fluid"/>
                                </figure>
                                <figureCaption>ornaments</figureCaption>
                                <br/>
                                    <figureCaption><span className="percent">0.28%</span>&nbsp; &nbsp;<span
                                        className="price">&#8377; 500</span></figureCaption>
                            </div>
                        </a>

                    </div>

                </div>
            </section>
{/*<Footer/>*/}
        </>
    )
}
export default Home;
