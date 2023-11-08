import AboutMe from './AboutMe';
import Picture from './Picture';
const Profile = () => {
    const adilaminInfo = {
        myName: "Adil Amin",
    }
    return (
        <div>
            <div className="profile-wraper">
                <Picture/>
                <span className="paper-clip"></span>
                <AboutMe myInfo={adilaminInfo}/>
            </div>
        </div>
    );
};

export default Profile;