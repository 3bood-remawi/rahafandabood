import React from "react";
import "./Style.css";
import ImageGallery from "../loadingInfluencerPage/ImageGallery";
import { Link } from "react-router-dom";

const InfluencerNavbar = (props) => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid" id="header-container">
					<div className="header">
						<a className="navbar-brand" href="/" id="InfluenBlend">
							InfluenBlend
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<div className="header-menu">
								<Link to={"/"}>
									<a className="menu-link is-active" href="/#">
										Home
									</a>
								</Link>
								<Link to={"/AboutUs"}>
									<a className="menu-link notify" href="/#">
										About
									</a>
								</Link>
								<Link to={"/ContactUs"}>
									<a className="menu-link" href="/#">
										Contact
									</a>
								</Link>
								<Link to={"/Blog"}>
									<a className="menu-link notify" href="/#">
										Blog
									</a>
								</Link>

								<Link to={"/exploreBrands"}>
									<a className="menu-link notify" href="/#">
										Explore Brands
									</a>
								</Link>
							</div>
						</div>
						<div className="header-profile">
							<div className="notification">
								<span className="notification-number">
									{props.numberOfNotification}
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
								>
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path
										fill="currentColor"
										d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
									></path>
								</svg>
							</div>
							<ImageGallery imageIndex={0} />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default InfluencerNavbar;
