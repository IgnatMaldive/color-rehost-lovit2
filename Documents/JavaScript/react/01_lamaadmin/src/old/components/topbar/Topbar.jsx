import React from 'react'
import './topbar.css'
// import { NotificationsNoneIcon, RailwayAlertIcon, CampaignIcon } from '@mui/icons-material';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import RailwayAlertIcon from '@mui/icons-material/RailwayAlert';
import CampaignIcon from '@mui/icons-material/Campaign';

export default function Topbar() {
  return (
    <div className="topbar">
    
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">MyLogodr</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon/>
                </div>
                <div className="topbarIconContainer">
                    <RailwayAlertIcon/>
                </div>
                <div className="topbarIconContainer">
                    <CampaignIcon  color="secondary" />
                </div>
                <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/91/91cdf9ea5ecbfd85112439bd7da247b490da0a5e.jpg" alt="" className="topAvatar" />
                
                {/* <img src="/ali.jpg" alt="" className="otherAvatar" /> */}
            </div>
        </div>
        
    </div>
  )
}
