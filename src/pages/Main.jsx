import Home from "./Home"
import Overview from "./Overview"
import Tokenomics from "./Tokenomics"
import AgentAI from "./AgentAI"


const Main = () => {
    return (
        <div className="main dark red">
            <Home/>
            <Overview/>
            <Tokenomics/>
            <AgentAI/>
        </div>
    )
}

export default Main