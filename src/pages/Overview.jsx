
import backgroundImage from "../assets/background_2.jpg";
import contributorImage from "../assets/overview1.png";
import userImage from "../assets/overview2.png";
import DetailButton from "../components/DetailButton";

const Overview = () => {
    return (
        <section id = "overview" className="page-overview">
            <div className="overlay"  style={{backgroundImage : `linear-gradient(rgba(1,1,2,0.85), rgba(1,1,2,0.6)), url(${backgroundImage})`}}>
                <div className="container">
                    <div className="section-title">
                        <h3>Overview</h3>
                    </div>
                    <div className="contributor row">
                        <div className=" col-12 col-md-6 image">
                            <div className="">
                                <img src={contributorImage} alt="contributor_image" width={500} height={400}  />
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 content">
                            <div className="content-flex">
                                <div className="subtitle"><h4>Contributor</h4></div>
                                <div className="subcontent"><p>Devs: you can develop agentAI modules and UI.</p></div>
                                <div className="subcontent"><p>Compute: you can stake your asset to compute.</p></div>
                                <div className="subcontent"><p>Capital: you can stake your stETH for the liquidity</p></div>
                                <div className="button"><DetailButton/></div>
                            </div>
                        </div>
                    </div>
                    <div className="user row">
                        <div className=" col-12 col-md-6 content">
                            <div className="content-flex">
                                <div className="subtitle"><h4>User</h4></div>
                                <div className="subcontent"><p>You can access the AgentAI and enjoy with AgentAI.</p></div>
                                <div className="subcontent"><p>AgentAI will help you to trading, staking and so on.</p></div>
                                <div className="subcontent"><p>AgentAI make it easy for you to do those things</p></div>
                                <div className="button"><DetailButton/></div>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 image">
                            <div className="">
                                <img src={userImage} alt="user_image" width={500} height={400} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Overview