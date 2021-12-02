import React, { useState } from "react";
import {
	MDBBtn,
	MDBModal,
	MDBModalDialog,
	MDBModalContent,
	MDBModalHeader,
	MDBModalTitle,
	MDBModalBody,
	MDBModalFooter,
} from "mdb-react-ui-kit";
import Form from "../Components/form";

export default function Modal() {
	const [basicModal, setBasicModal] = useState(false);

	const toggleShow = () => setBasicModal(!basicModal);

	return (
		<>
			<MDBBtn onClick={toggleShow}>Create</MDBBtn>
			<MDBModal
				show={basicModal}
				setShow={setBasicModal}
				tabIndex="-1"
			>
				<MDBModalDialog>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>Modal title</MDBModalTitle>
							<MDBBtn
								className="btn-close"
								color="none"
								onClick={toggleShow}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<Form />
						</MDBModalBody>

						<MDBModalFooter>
							<MDBBtn
								color="secondary"
								onClick={toggleShow}
							>
								Close
							</MDBBtn>
							<MDBBtn type="submit" form="form">
								Send
							</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	);
}
