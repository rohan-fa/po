import "./topbar.css";
import { Search, Person, Chat} from "@mui/icons-material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from 'react-router-dom';

function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to='/' style={{textDecoration: 'none'}}>
          <span className="logo">SnowSocial</span>        
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search for friends, post or any video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItems">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assests/pictures/1.png" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar
