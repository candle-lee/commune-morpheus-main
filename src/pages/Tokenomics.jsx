import React from "react";
// import tokenomicsImage from "../assets/background_5.jpg";
import DetailButton from "../components/DetailButton";
import PieChart from "../components/PieChart";

const Tokenomics = () => {
    return (
        <section id = "tokenomics" className="page-tokenomics">
            <div className="overlay"
            //   style={{backgroundImage : `linear-gradient(rgba(1,1,2,0.85), rgba(1,1,2,0.6)), url(${backgroundImage})`}}
            >
                <div className="container">
                    <div className="section-title">
                        <h3>Tokenomics</h3>
                    </div>
                    <div className="tokenomics row">
                        <div className=" col-12 col-md-6 image">
                            <div className="chart-div">
                                <PieChart/>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 content">
                            <div className="content-flex">
                                <div className="subcontent">Developer: get 30% of rewards.</div>
                                <div className="subcontent">Compute: get 30% of rewards.</div>
                                <div className="subcontent">Capital: get 30% of rewards.</div>
                                <div className="subcontent">maintain: get 10% of rewards.</div>
                                <div className="button"><DetailButton/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tokenomics

