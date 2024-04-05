import Home from "./Home"
import Overview from "./Overview"
import Tokenomics from "./Tokenomics"
import AgentAI from "./AgentAI"
import Contributor from "./Contributor"

const Main = () => {
    return (
        <div className="main dark red">
            <Home/>
            <Overview/>
            <Tokenomics/>
            <AgentAI/>
            <Contributor/>
        </div>
    )
}

export default Main