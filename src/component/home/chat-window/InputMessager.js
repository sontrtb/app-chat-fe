import { SendOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { sendMessage } from "../../../api/apiMessage";

function InputMessager( props ) {
    const { setListMessage, parentMess, setParentMess, roomId } = props;

    console.log(roomId)

    let formData = new FormData();

    const [messageSend, setMessageSend] = useState('');

    const clearFormData = () => {
        formData.delete('type');
        formData.delete('text');
    }

    const handleSendMess = () => {
        if(messageSend.length === 0)
            return;
        
        formData.append('room_id', roomId);
        formData.append('type', ["text"]);
        formData.append('text', messageSend);

        sendMessage(formData, (res, err) => {
            if(res){
                setListMessage(pre => [...pre, messageSend])
                setMessageSend('');
                setParentMess('');
                clearFormData();
            }
        })
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter')
            handleSendMess();
    }

    const handleClearParentMess = () => {
        setParentMess('');
    }

    return(
        <div className="input-messager">
            {
                parentMess.length > 0 &&
                <div className='pasrent-mess-wrap'>
                    <div>
                        <h4 className='parent-name'>
                            <span className='answer'>Trả lời: </span>
                            Phạm Hồng Sơn
                        </h4>
                        <p className='parent-mess'>{parentMess}</p>
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