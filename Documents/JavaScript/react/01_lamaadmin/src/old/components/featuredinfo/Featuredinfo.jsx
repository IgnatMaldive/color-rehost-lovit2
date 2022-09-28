import './featuredinfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowDownward';

export default function Featuredinfo() {
    return (
        <div className='featured'>
            <div className="featureditem">
                <span className="feturedTitle">revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon /></span>
                    <span className="featuredSub">Compared to last month</span>
                </div>
            </div>

            <div className="featureditem">
                <span className="feturedTitle">sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon /></span>
                    <span className="featuredSub">Compared to last month</span>
                </div>

            </div>
            <div className="featureditem">
                <span className="feturedTitle">anims</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">+11.4 <ArrowUpward /></span>
                    <span className="featuredSub">Compared to last month</span>
                </div>

            </div>
        </div>
     


    )
}
