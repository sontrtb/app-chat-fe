import { SendOutlined } from '@ant-design/icons';
import { useState } from 'react';

function InputMessager( props ) {
    const { setListMessage } = props;

    const [messageSend, setMessageSend] = useState('');

    const handleSendMess = () => {
        if(messageSend.length === 0)
            return;
        
        setListMessage(pre => [...pre, messageSend])
        setMessageSend('');
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter')
            handleSendMess();
    }

    return(
        <div className="input-messager">
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
    )
}

export default InputMessager;