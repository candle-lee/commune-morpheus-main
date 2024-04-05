import Home from "./Home"
import Overview from "./Overview"
import Tokenomics from "./Tokenomics"
import AgentAI from "./AgentAI"
import Contributor from "./Contributor"
import Footer from "./Footer"

const Main = () => {
    return (
        <div className="main dark red">
            <Home/>
            <Overview/>
            <Tokenomics/>
            <AgentAI/>
            <Contributor/>
            <Footer/>
        </div>
    )
}

export default Main