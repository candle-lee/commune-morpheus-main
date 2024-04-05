import LaunchAppButton from "../components/LaunchAppButton";
import developerImage from "../assets/developer.png";
import computeImage from "../assets/compute.png";
import capitalImage from "../assets/capital.png";

const Contributor = () => {
    return (
        <section id="contributor">
            <div className="overlay"
            //   style={{backgroundImage : `linear-gradient(rgba(1,1,2,0.85), rgba(1,1,2,0.6)), url(${backgroundImage})`}}
            >
                <div className="container">
                    <div className="section-title">
                        <h3>Contributor</h3>
                    </div>
                    <div className="contributor row">
                        <div className=" col-12 col-md-4 ">
                            <div className="card h-100 ">
                                <div className="pb-3"><h5>Developer</h5></div>
                                <div className="">
                                    <pre className="text-left">
                                        Developers can build AI module 
                                        and deploy it to the network.
                                        then according to the contribution,
                                        get rewards in $COMMOR.
                                    </pre>
                                </div>
                                <img src={developerImage} alt="agentAi_image" height={300}/>
                            </div>
                        </div>
                        <div className=" col-12 col-md-4 ">
                            <div className="card h-100 ">
                                <div className="pb-3"><h5>Compute</h5></div>
                                <div>
                                    <pre>
                                        Compute can provide computing hardware
                                        and storage for AgentAI.
                                        then according to the contribution,
                                        get rewards in $COMMOR.
                                    </pre>
                                </div>
                                <img src={computeImage} alt="agentAi_image" height={300}/>
                            </div>
                        </div>
                        <div className=" col-12 col-md-4 ">
                            <div className="card h-100 ">
                                <div className="pb-3"><h5>Capital</h5></div>
                                <div>
                                    <pre>
                                        Capital can stake with their $COMAI or ETH
                                        for the liquidity.
                                        then according to the contribution,
                                        get rewards in $COMMOR.
                                    </pre>
                                </div>
                                    <img src={capitalImage} alt="agentAi_image" height={300}/>
                                </div>
                        </div>
                    </div>
                    <div className=" d-flex w-100 py-4 justify-content-center ">
                        <LaunchAppButton/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contributor