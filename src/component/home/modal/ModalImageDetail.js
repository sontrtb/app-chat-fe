import Modal from "../../global/modal/Modal";

function ModalImageDetail( props) {
    const {isVisible, setIsVisible, image } = props;

    return (
        <Modal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
        >
            <div className="modal-image-detail">
                <img
                    src={image}
                    alt="anh chi tiet"
                    className="image"
                />
            </div>
        </Modal>
    )
}

export default ModalImageDetail;