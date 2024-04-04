import HexagonMenu from "../components/HexagonMenu/HexagonMenu";
import backgroundImage from "../assets/background_4.jpg";

const Home = () => {
    return (
        <section id="home" className="page-home">
            <div className="overlay" style={{backgroundImage : `linear-gradient(rgba(1,1,2,0.9), rgba(1,1,2,0.6)), url(${backgroundImage})`}}>
                <div className="container">
                    <div className="home-header">
                        <HexagonMenu />
                        <div class="page-title home text-center">
                            <h2>CommuneAI 
                                <span class="primary"> Morpheus</span> 
                                <span class="title-bg">COMMUNEAI</span>
                            </h2>
                            <p>Anyone can be a contributor, anyone can be a enjoyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home