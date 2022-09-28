import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import "./home.css"
import Chart from "../../components/chart/Chart"


export default function Home() {
  return (
    <div className="home">
        <Featuredinfo/>
        <Chart/>
    </div>
  )
}
