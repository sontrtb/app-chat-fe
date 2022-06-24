import { SendOutlined } from '@ant-design/icons';

function InputMessager() {

    return(
        <div className="input-messager">
            <input
                placeholder="Nhập tin nhắn..."
                className='input'
            />
            <div
                className='icon-send'
            >
                <SendOutlined />
            </div>
        </div>
    )
}

export default InputMessager;