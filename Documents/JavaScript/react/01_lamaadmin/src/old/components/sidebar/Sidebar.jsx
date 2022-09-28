import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { AcUnit } from "@material-ui/icons";
import Link from '@mui/material/Link';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleIcon />
                            Home
                        </li>
                        <Link href='/users'>
                            <li className="sidebarListItem">
                                <AddCommentIcon />
                                Users


                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AcUnit />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Notifications</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyleIcon />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <AddCommentIcon />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <AcUnit />
                            Sales
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}
