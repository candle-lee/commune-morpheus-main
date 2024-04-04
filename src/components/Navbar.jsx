import comLogo from '../assets/commune.png';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="">
                        <img src={comLogo} alt="communeAI"/>
                    </a>
                </div>
                <div className="nav-menu">
                    <div className="container">
                        <a href="#overview">Overview</a>
                        <a href="#tokenomics">Tokenomics</a>
                        <a href="#agentAi">AgentAI</a>
                        <a href="#contribution">Contribution</a>
                        <a href="/">Docs</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar