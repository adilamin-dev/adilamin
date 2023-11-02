import NaveMenu from "../modules/NaveMenu";
import PaperForContact from './../modules/PaperForContact';

const ContactPage = () => {
    return (
        <div>
            <div className="backpart">
                <div className="frontpart">
                    <div className="container">
                        <div className="portfolio">
                            <PaperForContact/>
                            <NaveMenu/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;