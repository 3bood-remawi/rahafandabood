import React, { useState, useEffect } from "react";
import "./AccountSettings.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AccountSettings = () => {
	const [socialMediaLinks, setSocialMediaLinks] = useState({
        instagram: "",
        facebook: "",
        tiktok: "",
        twitter: "",
        youtube: "",
        snapchat: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [currentLink, setCurrentLink] = useState({ name: "", url: "" });

    const fetchSocialMediaLinks = () => {
        setTimeout(() => {
            setSocialMediaLinks({
                instagram: "https://www.instagram.com/myaccount",
                facebook: "",
                tiktok: "https://www.tiktok.com/@myaccount",
                twitter: "",
                youtube: "https://www.youtube.com/channel/myaccount",
                snapchat: "",
            });
        }, 1000);
    };

    useEffect(() => {
        fetchSocialMediaLinks();
    }, []);

    const handleDeleteLink = (socialMedia) => {
        setSocialMediaLinks({
            ...socialMediaLinks,
            [socialMedia]: "",
        });
    };

    const openModal = (socialMedia) => {
        setCurrentLink({ name: socialMedia, url: socialMediaLinks[socialMedia] || "" });
        setShowModal(true);
    };

    const handleLinkChange = (e) => {
        setCurrentLink({ ...currentLink, url: e.target.value });
    };

    const handleAuthorize = () => {
        if (currentLink.url.startsWith("https://")) {
            console.log("Link authorized:", currentLink.url);
            alert('Link is valid and authorized.');
        } else {
            alert('Link is invalid, please enter a valid URL.');
        }
    };

    const saveLink = () => {
        setSocialMediaLinks({ ...socialMediaLinks, [currentLink.name]: currentLink.url });
        setShowModal(false);
    };

    const renderSocialMediaButtons = () => {
        return Object.keys(socialMediaLinks).map((socialMedia, index) => (
            <div key={index} className="col-4 position-relative">
                <div className="btn-container">
                    <button
                        type="button"
                        className={`btn btn-primary btn-custom btn-${socialMedia}`}
                        onClick={() => openModal(socialMedia)}
                    >
                        <i className={`bi bi-${socialMedia}`}></i>
                    </button>
                    {socialMediaLinks[socialMedia] && (
                        <button
                            className="btn btn-trash position-absolute"
                            onClick={() => handleDeleteLink(socialMedia)}
                        >
                            <i className="bi bi-trash"></i>
                        </button>
                    )}
                </div>
            </div>
        ));
    };

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/AccSettingPass");
        console.log("Cancel button clicked");
    };

    const handleDeleteButton = () => {
        navigate("/DeleteAccount");
        console.log("delete button clicked");
    };

	return (
		<div className="account-settings">
			 <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Social Media Link</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className="form-control"
                        value={currentLink.url}
                        onChange={handleLinkChange}
                        placeholder="Enter social media link..."
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveLink}>
                        Save Changes
                    </Button>
                    <Button variant="success" onClick={handleAuthorize}>
                        Authorize
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="container"></div>
			<div className="container">
				<h2>Account Settings</h2>
				<h6>Change your profile and account settings</h6>
				<div className="row">
					<div className="col-lg-3 col-md-5 col-sm-12">
						<div
							className="card custom-card mb-3"
							style={{
								width: "auto",
								borderColor: "#ca3667",
								borderRadius: "20px",
							}}
						>
							<div className="card-body">
								<button className="btn custom-button mb-2">
									<i className="bi bi-person-circle"></i>
									Account
								</button>
								<button
									className="btn custom-button mb-2"
									onClick={handleCancel}
								>
									<i className="bi bi-file-lock2"></i>
									Password
								</button>

								<button
									onClick={handleDeleteButton}
									className="btn custom-button mb-2"
								>
									<i className="bi bi-trash"></i>
									Delete account
								</button>

								<button
									className="btn custom-button"
									style={{ color: "rgb(255, 34, 119)" }}
								>
									<i
										className="bi bi-box-arrow-in-left"
										style={{ color: "black" }}
									></i>
									Sign out
								</button>
							</div>
						</div>
					</div>
					<div className="col-lg-9 col-md-7 col-sm-12">
						<div
							className="custom container p-3"
							style={{ height: "auto", backgroundColor: "#ffffff" }}
						>
							<div className="row g-3">
								<div className="col-md-6">
									First Name
									<input
										type="text"
										className="form-control"
										placeholder="First Name.."
									/>
								</div>
								<div className="col-md-6">
									Last Name
									<input
										type="text"
										className="form-control"
										placeholder="Last Name.."
									/>
								</div>
								<div className="col-md-6">
									Email
									<input
										type="email"
										className="form-control"
										placeholder="Email.."
									/>
								</div>
								<div className="col-md-6">
									Phone Number
									<input
										type="tel"
										className="form-control"
										placeholder="Phone Number.."
									/>
								</div>
								<div className="col-md-6">
									Industry
									<select className="form-select">
										<option value="">Beauty</option>
										<option value="">Fashion</option>
										<option value="">Sports</option>
										<option value="">Technology</option>
										<option value="">Healthcare</option>
										<option value="">Food</option>
										<option value="">Entertainment</option>
										<option value="">Travel</option>
										<option value="">Education</option>
									</select>
								</div>
								<div className="col-md-6">
									Location
									<input
										type="text"
										className="form-control"
										placeholder="Location.."
									/>
								</div>
								<div
									className="container text-center"
									style={{ backgroundColor: "#ffffff" }}
								>
									<h2> Social Media</h2>
									<div className="row justify-content-center mt-1">
										{renderSocialMediaButtons()}
										
									</div>
								</div>
								<div className="col-12">
									Description/Bio
									<textarea
										className="form-control"
										style={{ height: "2cm" }}
										placeholder="Description/Bio"
									></textarea>
								</div>
							</div>
							<div className="d-flex justify-content-end mt-3">
								<button type="submit" className="btn btn-danger">
									Save Changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccountSettings;
