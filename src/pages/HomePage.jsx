import NaveMenu from "../modules/NaveMenu";
import PaperForAboutMe from "../modules/PaperForAboutMe";

const HomePage = () => {
    return (
        <div>
            <div className="backpart">
                <div className="frontpart">
                    <div className="container">
                        <div className="portfolio">
                            <PaperForAboutMe/>
                            <NaveMenu/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;