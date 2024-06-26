import HexagonMenu from "../components/HexagonMenu/HexagonMenu";
import backgroundImage from "../assets/home_background.jpg";

const Home = () => {
    return (
        <section id="home" className="page-home">
            <div className="overlay" style={{backgroundImage : `linear-gradient(rgba(1,1,2,0.9), rgba(1,1,2,0.6)), url(${backgroundImage})`}}>
                <div className="container">
                    <div className="home-header">
                        <HexagonMenu />
                        <div class="page-title home text-center">
                            <h2>Commune AI 
                                <span class="primary"> Morpheus</span> 
                                <span class="title-bg">COMMUNE AI</span>
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