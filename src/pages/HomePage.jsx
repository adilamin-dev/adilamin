import NaveMenu from "../modules/NaveMenu";
import Paper from "../modules/Paper";

const HomePage = () => {
    return (
        <div>
            <div className="backpart">
                <div className="frontpart">
                    <div className="container">
                        <div className="portfolio">
                            <Paper/>
                            <NaveMenu/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;