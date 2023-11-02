import AboutMe from './AboutMe';
import Picture from './Picture';
const Profile = () => {
    return (
        <div>
            <div className="profile-wraper">
                <Picture/>
                <span className="paper-clip"></span>
                <AboutMe/>
            </div>
        </div>
    );
};

export default Profile;