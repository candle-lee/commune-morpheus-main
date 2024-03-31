import React from "react";
import Hexagon from "./Hexagon";

const HexagonMenu = () => {
    return (
        <div className="hexagon-menu clear">
            <Hexagon title="Overview" icon="tf-dial" url="/" />
            <Hexagon title="Home" icon="tf-profile-male" url="/" />
            <Hexagon title="AgentAI" icon="tf-tools-2" url="/" />
            <Hexagon title="Tokenomics" icon="tf-tools" url="/" />
            <Hexagon title="Docs" icon="tf-briefcase2" url="/" />
            <Hexagon title="Contribution" icon="tf-chat" url="/" />
        </div>
    );
}

export default HexagonMenu