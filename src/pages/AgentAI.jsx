import agentAIImage from "../assets/background_3.jpg";
import DetailButton from "../components/DetailButton";

const AgentAI = () => {
    return (
        <section id="agentAi">
            <div className="overlay"
            //   style={{backgroundImage : `linear-gradient(rgba(1,1,2,0.85), rgba(1,1,2,0.6)), url(${backgroundImage})`}}
            >
                <div className="container">
                    <div className="section-title">
                        <h3>AgentAI</h3>
                    </div>
                    <div className="agentAi row">
                        <div className=" col-12 col-md-6 content">
                            <div className="content-flex">
                                <div className="subcontent">You can use AgentAI and enjoy your crypto life.</div>
                                <div className="subcontent">AgentAI helps you make a decision when you are trading and staking.</div>
                                <div className="subcontent">AgentAI provides crypto related information to you and make you have good-understanding about crypto.</div>
                                <div className="button"><DetailButton/></div>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 image">
                            <div className="">
                                <img src={agentAIImage} alt="agentAi_image" width={500} height={400}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AgentAI