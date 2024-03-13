

import SearchIcon from '@mui/icons-material/Search';

import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import Avatar from '@mui/material/Avatar';

import './navbar.css';
import { Input } from '@/components/ui/input';
function Navbar() {

    return (
        <>
            <div className="header align-baseline">
                <div className="header__left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="logoss" />
                    <div className="header__search">
                        <SearchIcon />
                       
                        <input placeholder="Search" type="text" className="h-120"/>
                    </div>
                </div>

                <div className="header__right">
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                    <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                    <HeaderOption Icon={ChatIcon} title="Messaging" />
                    <HeaderOption Icon={NotificationsIcon} title="Notification" />
                    <HeaderOption
                        avatar={true}
                        title="me"

                    />
                </div>
            </div>
        </>
    )
}








function HeaderOption({ avatar, Icon, title }) {


    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption_icon" />}
            {avatar && <Avatar className="headerOption_icon" />}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}


export default Navbar