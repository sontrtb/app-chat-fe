import { useState } from "react";
import { API_MEDIA_URL } from "../../../config/index";
import checkTypeFile from "../../../ultis/checkTypeFile";
import ModalImageDetail from "../modal/ModalImageDetail";

function RenderContentMess ({message}) {

    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const toggerModalDetailModal = () => {
        setIsVisibleModal(!isVisibleModal)
    }

    return (
        <div>
            {
                message?.files && checkTypeFile(message?.files[0]) === "image" &&
                <img
                    src={API_MEDIA_URL + message?.files[0]}
                    alt="anh gui/nhan"
                    className="image-mess"
                    onClick={toggerModalDetailModal}
                />
            }
            {
                message?.files && checkTypeFile(message?.files[0]) === "video" &&
                <video width="420" height="300" controls>
                    <source
                        src={API_MEDIA_URL + message.files[0]}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            }
            <p>{message?.text}</p>

            <ModalImageDetail
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                image={API_MEDIA_URL + message?.files[0]}
            />
        </div>
    )
}

export default RenderContentMess;