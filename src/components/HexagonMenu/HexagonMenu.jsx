import React from "react";
import Hexagon from "./Hexagon";

const HexagonMenu = () => {
    return (
        <div className="hexagon-menu clear">
            <Hexagon title="Overview" icon="tf-dial" url="#overview" />
            <Hexagon title="Home" icon="tf-profile-male" url="" />
            <Hexagon title="AgentAI" icon="tf-tools-2" url="#agentAi" />
            <Hexagon title="Tokenomics" icon="tf-tools" url="#tokenomics" />
            <Hexagon title="Docs" icon="tf-briefcase2" url="/" />
            <Hexagon title="Contribution" icon="tf-chat" url="#contribution" />
        </div>
    );
}

export default HexagonMenu