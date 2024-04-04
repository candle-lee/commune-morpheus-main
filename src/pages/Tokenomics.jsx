import tokenomicsImage from "../assets/background_5.jpg";
import DetailButton from "../components/DetailButton";

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
                            <div className="">
                                <img src={tokenomicsImage} alt="tokenomics_image" width={500} height={400}  />
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 content">
                            <div className="content-flex">
                                <div className="subtitle"><h4>Tokenomics</h4></div>
                                <div className="subcontent">Devs: get 30% of rewards.</div>
                                <div className="subcontent">Compute: get 30% of rewards.</div>
                                <div className="subcontent">Capital: get 30% of rewards.</div>
                                <div className="subcontent">maintain: get 30% of rewards.</div>
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

