import { SendOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { sendMessage } from "../../../api/apiMessage";
import { useSelector } from 'react-redux';
import { getFullNameSend } from "../../../ultis/getInformationMess";

function InputMessager( props ) {
    const { setListMessage, parentMess, setParentMess, roomId } = props;

    const user = useSelector((state) => state.user).value;
    const userId = user?.id;

    let formData = new FormData();

    const [messageSend, setMessageSend] = useState('');

    const clearFormData = () => {
        formData.delete('type');
        formData.delete('text');
        formData.delete('reply_to');
    }

    const handleSendMess = () => {
        if(messageSend.length === 0)
            return;
        
        formData.append('room_id', roomId);
        formData.append('type', ["text"]);
        formData.append('text', messageSend);
        parentMess?.id && formData.append('reply_to', parentMess?.id)

        sendMessage(formData, (res, err) => {
            if(res){
                setListMessage(pre => [...pre, {text: messageSend, sender: {id: userId}}])
                setMessageSend('');
                setParentMess({});
                clearFormData();
            }
        })
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter')
            handleSendMess();
    }

    const handleClearParentMess = () => {
        setParentMess({});
    }

    return(
        <div className="input-messager">
            {
                parentMess?.text &&
                <div className='pasrent-mess-wrap'>
                    <div>
                        <h4 className='parent-name'>
                            <span className='answer'>Trả lời: </span>
                            {getFullNameSend(parentMess)}
                        </h4>
                        <p className='parent-mess'>{parentMess.text}</p>
                    </div>
                    <div
                        className='icon-close'
                        onClick={handleClearParentMess}
                    >
                        <CloseCircleOutlined />
                    </div>
                </div>
            }
            <div className='input-wrap'>
                <input
                    placeholder="Nhập tin nhắn..."
                    className='input'
                    value={messageSend}
                    onChange={e => setMessageSend(e.target.value)}
                    onKeyDown={e => handleEnter(e)}
                />
                <div
                    className='icon-send'
                    onClick={handleSendMess}
                >
                    <SendOutlined />
                </div>
            </div>
        </div>
    )
}

export default InputMessager;