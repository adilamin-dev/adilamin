import NaveMenu from "../modules/NaveMenu";
import PaperForProjects from './../modules/PaperForProjects';

const ProjectsPage = () => {
    return (
        <div>
            <div className="backpart">
                <div className="frontpart">
                    <div className="container">
                        <div className="portfolio">
                            <PaperForProjects/>
                            <NaveMenu/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;