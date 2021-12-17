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
import CreateForm from "./create-form";

export default function CreateModal() {
	const [basicModal, setBasicModal] = useState(false);
	const toggleShow = () => setBasicModal(!basicModal);

	return (
		<>
			<MDBBtn onClick={toggleShow}>Thêm phòng</MDBBtn>
			<MDBModal
				show={basicModal}
				setShow={setBasicModal}
				tabIndex="-1"
			>
				<MDBModalDialog>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>Thêm phòng mới</MDBModalTitle>
							<MDBBtn
								className="btn-close"
								color="none"
								onClick={toggleShow}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<CreateForm />
						</MDBModalBody>

						<MDBModalFooter>
							<MDBBtn
								color="secondary"
								onClick={toggleShow}
							>
								Thoát
							</MDBBtn>
							<MDBBtn type="submit" form="form">
								Gửi
							</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	);
}
