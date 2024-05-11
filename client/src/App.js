import react from "react";
import "./App.css";
import InfluencerNavbar from "./Components/loadingInfluencerPage/InfluencerNavbar";
import SideBar from "./Components/InfluncerDiscovery/SideBar";
import DetailsCard from "./Components/InfluncerDiscovery/DetailsCard";
import MainLandingPage from "./Components/MainLandingPage/MainLandingPage";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div className="app">
			<InfluencerNavbar />
			<MainLandingPage />
			<Footer />
		</div>
	);
}

export default App;
