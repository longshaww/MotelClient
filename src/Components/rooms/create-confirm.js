import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function CreateConfirm(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Xác nhận
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Bạn có chắc muốn thêm phòng này ?</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
				<Button onClick={props.onHide}>Send</Button>
			</Modal.Footer>
		</Modal>
	);
}
