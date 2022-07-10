import { useState, useEffect } from "react";
import Modal from "../../global/modal/Modal";
import PeopleList from "../../people/PeopleList";
import { addMember } from "../../../api/apiGroup";
import { successNotification } from "../../../ultis/notification";

function ModalAddMember( props) {
    const {isVisible, setIsVisible, idChat, reloadInforGroup} = props;

    const [userSelected, setUserSelected] = useState({});

    const handleAddMember = () => {
        const data = {
            group_id: idChat,
            user_id: userSelected.id,
        }

        addMember(data, (res, err) => {
            if(res) {
                reloadInforGroup();
                setIsVisible(false);
                successNotification("Thêm thành công")
            }
        })
    }

    useEffect(() => {
        if(userSelected.id) {
            handleAddMember();
        }
    }, [userSelected]);

    return (
        <Modal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
        >
            <div className="modal-add-member">
                <h2>Thêm người</h2>
                <PeopleList setUserSelected={setUserSelected} />
            </div>
        </Modal>
    )
}

export default ModalAddMember;