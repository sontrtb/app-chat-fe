import moment from "moment";
import { getFullNameSend } from "../../../ultis/getInformationMess";
import avatarDefault from "../../../access/image/avatar_default.jpg";
import { API_MEDIA_URL } from "../../../config/index";

function ListChatItem({ chatItem, chatRoom }) {

    const {name, last_message, avatar, room_id} = chatItem;
    const {created_at, type, text} = last_message

    const dateNow = moment().format("DD/MM/YYYY"); 
    const getTimeMess = () => {
        if(moment(created_at).format("DD/MM/YYYY") === dateNow)
            return moment(created_at).format("hh:mm");
        return moment(created_at).format("DD/MM/YYYY");
    }

    const getLastMess = () => {
        if(type === "text")
            return text;
        else return `Đã gửi một ${type}`
    }

    return(
        <div
            className="list-chat-item"
            style={chatRoom === room_id ? {transform: "scale(1.1)"} : null}
        >
            <img
                src={avatar ? API_MEDIA_URL+avatar : avatarDefault}
                alt="Avatar"
                className="avatar"
            />
            <div className="content">
                <div className="top-item">
                    <h4 className="user-name">{name}</h4>
                    <p className="time">{getTimeMess()}</p>
                </div>
                <p className="messager">
                    { getFullNameSend(last_message) + ": " + getLastMess()}
                </p>
            </div>
        </div>
    )
}

export default ListChatItem;