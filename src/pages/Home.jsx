import HexagonMenu from "../components/HexagonMenu/HexagonMenu";

const Home = () => {
    return (
        <section id="home" className="page-home">
            <div className="overlay">
                <div className="container">
                    <div className="home-header">
                        <HexagonMenu />
                        <div class="page-title home text-center">
                            <h2>CommuneAI 
                                <span class="primary"> Morpheus</span> 
                                <span class="title-bg">COMMUNEAI</span>
                            </h2>
                            <p>Anyone can be a contributer, anyone can be a enjoyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home