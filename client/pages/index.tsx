import type {NextPage} from "next";
import Search from "../components/search/Search";
import Info from "../components/info/Info";

const Home: NextPage = () => {

    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <div id="map"
                 style={{width: "100vw", height: "100vh", position: "fixed", top: "0", left: "0"}}>
            </div>
            <div style={{display: "flex", flexDirection: "column", width: "30vw", height: "100vh", float: "right"}}>
                <Search/>
                <div style={{marginTop: "30px"}}/>
                <Info/>
            </div>
        </div>

    );
};

export default Home;
