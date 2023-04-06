import './profile.css';
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import {useParams} from "react-router";

function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
    const[user, setUser] = useState({});
    const username = useParams().username; //const params = useParams().username;console.log(params.username);it the same thing
    
    //if fetched here with userId, {post.userId}
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);  
            setUser(res.data);
        };
        fetchUser();
    }, [username]);       //in here we passed it because its a variable    

    return (
    <>
    <Topbar />
    <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className='profileCoverImg' src={user.coverPicture || PF+"pictures/noCover.png"} alt="" />
                    <img className='profileUserImg' src={user.profilePicture || PF+"pictures/noAvator.png"} alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>{user.username}</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                </div>
            </div>  
            <div className="profileRightBottom">
                <Feed username={username} />
                <Rightbar user={user} />
            </div>  
        </div>
    </div>
  </>    

  )
}

export default Profile
