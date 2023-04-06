import './rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';
import { useParams } from 'react-router-dom';

function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
  
  const HomeRightBar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img className='birthdayImg' src={`${PF}gift.png`} alt='' />
          <span className="birthdayText">
            <b>Snow Zoey</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img className='rightbarAd' src={`${PF}ad.png" alt=""`}/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))} {/*for each user,im going to return online component and im going to pass this user */}
        </ul>
      </>
    )
  }
  const ProfileRightBar = () => {
  return (
      <>
      <h4 className='rightbarTitle' >User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">{user.relationship ===1 ? "Single" : user.relationship === 2 ? "Married" : "-" }</span>
        </div>
      </div>
      <h4 className='rightbarTitle' >User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={`${PF}pictures/1.png`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Snowyyy</span>
        </div><div className="rightbarFollowing">
          <img src={`${PF}pictures/2.png`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Snowyyy</span>
        </div><div className="rightbarFollowing">
          <img src={`${PF}pictures/3.png`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Snowyyy</span>
        </div><div className="rightbarFollowing">
          <img src={`${PF}pictures/4.png`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Snowyyy</span>
        </div><div className="rightbarFollowing">
          <img src={`${PF}pictures/5.png`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Snowyyy</span>
        </div><div className="rightbarFollowing">
          <img src={`${PF}pictures/6.png`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Snowyyy</span>
        </div><div className="rightbarFollowing">
          <img src={`${PF}pictures/8.png`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Snowyyy</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}

export default Rightbar