import React from "react";
import "./DeleteAccountForm.css";
import DeleteAccountConfirmationModal from "./DeleteAccountConfirmationModal";

function DeleteAccountForm() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<div className="deleteAccountContainer">
			<h3>Delete Your Account</h3>
			<p>We are sorry to see you go.</p>
			<hr />
			<p>
				Once your account is deleted, all of your content will be permanently
				gone, including your profile, offers, and collaborations.
			</p>
			<button
				className="deleteAccountButton"
				onClick={() => setModalShow(true)}
			>
				Delete Account
			</button>
			<DeleteAccountConfirmationModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
}

export default DeleteAccountForm;
