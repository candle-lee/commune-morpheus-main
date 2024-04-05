import { VscTwitter } from "react-icons/vsc";
import { VscGithubInverted } from "react-icons/vsc";
import { BsDiscord } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
const Footer = () => {
    return (
        <footer>
            <div className=" p-5">
                <div className="p-4">
                    <h3>Contact Us</h3>
                </div>
                <div className=" d-flex justify-content-center gap-4">
                    <VscTwitter/>
                    <BsDiscord/>
                    <BsTelegram/>
                    <VscGithubInverted/>
                </div>
            </div>
        </footer>
    );
}

export default Footer