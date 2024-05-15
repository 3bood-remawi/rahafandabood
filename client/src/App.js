// // import BrandP from "./Components/BrandProfile/BrandP";
// // import SignUP from "./Components/SignUp2/SignUp";
// // import InfluencerHome from "./Components/loadingInfluencerPage/InfluencerHome";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // function App() {
// //   return (
// //     <div className="app">
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/" element={<SignUP />} />
// //           <Route path="/InfluencerHome" element={<InfluencerHome />} />
// //         </Routes>
// //       </BrowserRouter>
// //       {/* <BrandP /> */}
// //     </div>

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import AccSettingPass from "./Components/AccSettingPass/AccSettingPass";
import AccountSettings from "./Components/AccountSettings/AccountSettings";
import "./App.css";
import HomeNavbar from "./Components/Navbars/HomeNavbar";
import MainLandingPage from "./Components/MainLandingPage/MainLandingPage";
import Footer from "./Components/Footer/Footer";
import DeleteAccountForm from "./Components/DeleteAccountSettings/DeleteAccountForm";
import InfluenBlend from "./Components/AboutPage/InfluenBlend";
import SignUpInfluencer from "./Components/SignUpInfluencer/SignUpInfluencer";
import SignUp from "./Components/SignUp2/SignUp";
// import ContactUs from "./Components/ContactUs/ContactUs";
import Blog from "./Components/BlogPage/Blog";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div>
								<HomeNavbar /> <MainLandingPage /> <Footer />{" "}
							</div>
						}
					/>
					<Route
						path="/AboutUs"
						element={
							<div>
								<HomeNavbar /> <InfluenBlend />
								<Footer />
							</div>
						}
					/>
					<Route path="/InfluencerSignUp" element={<SignUpInfluencer />} />
					{/*Route path="/BrandSignUp" element={<SignUp />} /> */}
					<Route
						path="/Home"
						element={
							<div>
								<HomeNavbar /> <MainLandingPage />
								<Footer />
							</div>
						}
					/>
					{/* <Route
						path="/ContactUs"
						element={
							<div>
								<HomeNavbar />
								<ContactUs />
								<Footer />
							</div>
						}
					/> */}
					<Route
						path="/Blog"
						element={
							<div>
								<HomeNavbar /> <Blog />
								<Footer />
							</div>
						}
					/>
					<Route path="/AccountSettings" element={<AccountSettings />} />
					<Route path="/AccSettingPass" element={<AccSettingPass />} />
					<Route path="/DeleteAccount" element={<DeleteAccountForm />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Banner from './Components/Business_landing_page/Banner';
// import All from './Components/Influencer_discovery/all';

// function App() {
//   return (
//     <Router>
//       <div className='app'>
//         <Routes>
//           <Route path="/" element={<Banner />} />
//           <Route path="/all" element={<All />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from "react";
// import AccSettingPass from "./Components/AccSettingPass/AccSettingPass";
// import AccountSettings from "./Components/AccountSettings/AccountSettings";
// import "./App.css";
// import HomeNavbar from "./Components/Navbars/HomeNavbar";
// import MainLandingPage from "./Components/MainLandingPage/MainLandingPage";
// import Footer from "./Components/Footer/Footer";
// import DeleteAccountForm from "./Components/DeleteAccountSettings/DeleteAccountForm";
// import InfluenBlend from "./Components/AboutPage/InfluenBlend";
// import SignUpInfluencer from "./Components/SignUpInfluencer/SignUpInfluencer";
// import SignUp from "./Components/SignUp2/SignUp";
// import ContactUs from "./Components/ContactUs/ContactUs";
// import Blog from "./Components/BlogPage/Blog";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from "react";
// import AccSettingPass from "./Components/AccSettingPass/AccSettingPass";
// import AccountSettings from "./Components/AccountSettings/AccountSettings";
// import "./App.css";
// import HomeNavbar from "./Components/Navbars/HomeNavbar";
// import MainLandingPage from "./Components/MainLandingPage/MainLandingPage";
// import Footer from "./Components/Footer/Footer";
// import DeleteAccountForm from "./Components/DeleteAccountSettings/DeleteAccountForm";
// import InfluenBlend from "./Components/AboutPage/InfluenBlend";
// import SignUpInfluencer from "./Components/SignUpInfluencer/SignUpInfluencer";
// import SignUp from "./Components/SignUp2/SignUp";
// import ContactUs from "./Components/ContactUs/ContactUs";
// import Blog from "./Components/BlogPage/Blog";

// function App() {
// 	return (
// 		<div className="app">
// 			<BrowserRouter>
// 				<Routes>
// 					<Route
// 						path="/"
// 						element={
// 							<div>
// 								<HomeNavbar /> <MainLandingPage /> <Footer />{" "}
// 							</div>
// 						}
// 					/>
// 					<Route
// 						path="/AboutUs"
// 						element={
// 							<div>
// 								<HomeNavbar /> <InfluenBlend />
// 								<Footer />
// 							</div>
// 						}
// 					/>
// 					<Route path="/InfluencerSignUp" element={<SignUpInfluencer />} />
// 					{/*Route path="/BrandSignUp" element={<SignUp />} /> */}
// 					<Route
// 						path="/Home"
// 						element={
// 							<div>
// 								<HomeNavbar /> <MainLandingPage />
// 								<Footer />
// 							</div>
// 						}
// 					/>
// 					<Route
// 						path="/ContactUs"
// 						element={
// 							<div>
// 								<HomeNavbar />
// 								<ContactUs />
// 								<Footer />
// 							</div>
// 						}
// 					/>
// 					<Route
// 						path="/Blog"
// 						element={
// 							<div>
// 								<HomeNavbar /> <Blog />
// 								<Footer />
// 							</div>
// 						}
// 					/>
// 					<Route path="/AccountSettings" element={<AccountSettings />} />
// 					<Route path="/AccSettingPass" element={<AccSettingPass />} />
// 					<Route path="/DeleteAccount" element={<DeleteAccountForm />} />
// 				</Routes>
// 			</BrowserRouter>
// 		</div>
//	);
