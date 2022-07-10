
function Modal({children, isVisible, setIsVisible}) {
    return (
        <div>
            {
                isVisible &&
                <div className="modal">
                    <div className="modal-content">
                        {children}
                    </div>
                    <div
                        className="modal-overlay"
                        onClick={() => setIsVisible(!isVisible)}
                    />
                </div>
            }
        </div>
    )
}

export default Modal;