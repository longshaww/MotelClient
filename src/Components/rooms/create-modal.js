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
	const [toggleOneModal, setToggleOneModal] = useState(false);
	const [toggleTwoModal, setToggleTwoModal] = useState(false);

	return (
		<>
			<MDBBtn onClick={() => setToggleOneModal(!toggleOneModal)}>
				Thêm
			</MDBBtn>

			<MDBModal
				show={toggleOneModal}
				setShow={setToggleOneModal}
				tabIndex="-1"
			>
				<MDBModalDialog centered>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>
								Biểu mẫu thêm phòng
							</MDBModalTitle>
							<MDBBtn
								className="btn-close"
								color="none"
								onClick={() =>
									setToggleOneModal(!toggleOneModal)
								}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<CreateForm />
						</MDBModalBody>
						<MDBModalFooter>
							<MDBBtn
								onClick={() => {
									setToggleOneModal(!toggleOneModal);
									setTimeout(() => {
										setToggleTwoModal(
											!toggleTwoModal
										);
									}, 200);
								}}
							>
								Gửi
							</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>

			<MDBModal
				show={toggleTwoModal}
				setShow={setToggleTwoModal}
				tabIndex="-1"
			>
				<MDBModalDialog centered>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>Xác nhận</MDBModalTitle>
							<MDBBtn
								className="btn-close"
								color="none"
								onClick={() =>
									setToggleTwoModal(!toggleTwoModal)
								}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							Bạn có chắc muốn thêm phòng này ?
						</MDBModalBody>
						<MDBModalFooter>
							<MDBBtn
								onClick={() => {
									setToggleTwoModal(!toggleTwoModal);
									setTimeout(() => {
										setToggleOneModal(
											!toggleOneModal
										);
									}, 400);
								}}
							>
								Trở về trang trước
							</MDBBtn>
							<MDBBtn
								type="submit"
								form="form"
								onClick={() =>
									setToggleTwoModal(!toggleTwoModal)
								}
							>
								Xác nhận
							</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	);
}
