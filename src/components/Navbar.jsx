import comLogo from '../assets/commune.png';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="/">
                        <img src={comLogo} alt="communeAI"/>
                    </a>
                </div>
                <div className="nav-menu">
                    <div className="container">
                        <a href="/">Overview</a>
                        <a href="/">Tokenomics</a>
                        <a href="/">AgentAI</a>
                        <a href="/">Contribution</a>
                        <a href="/">Docs</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar