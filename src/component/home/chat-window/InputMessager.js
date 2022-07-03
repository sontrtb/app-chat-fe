import {
    SendOutlined,
    CloseCircleOutlined,
    PictureOutlined
} from '@ant-design/icons';
import { useState, useRef, useEffect } from 'react';
import { sendMessage } from "../../../api/apiMessage";
import { useSelector } from 'react-redux';
import { getFullNameSend } from "../../../ultis/getInformationMess";

function InputMessager( props ) {
    const { setListMessage, parentMess, setParentMess, roomId } = props;

    const user = useSelector((state) => state.user).value;
    const userId = user?.id;

    const typeMess = useRef([]);

    let formData = new FormData();

    const [messageSend, setMessageSend] = useState('');
    const [fileSend, setFileSend] = useState();

    // get type file
    const convertTypeFile = (input) => {
        if(!input)
            return false;
        return input.slice(0, 5);
    }

    // clear data
    const clearFormData = () => {
        formData.delete('type');
        formData.delete('text');
        formData.delete('image');
        formData.delete('reply_to');
        typeMess.current = [];
        setFileSend();
        setMessageSend('');
        setParentMess({});
    }

    useEffect(() => {
        return () => {
            fileSend && URL.revokeObjectURL(fileSend.preview)
        }
    }, [fileSend])

    // change file
    const handleChangeImage = (e) => {
        const image = e.target.files[0]
        image.preview = URL.createObjectURL(image)

        if(image) {
            setFileSend(image)
        }
    }

    // delete image
    const handleDeleteImage = () => {
        setFileSend();
    }

    // send mess
    const handleSendMess = () => {
        if(!roomId)
            return;
        
        if(messageSend.length !== 0){
            typeMess.current.push("text")
            formData.append('text', messageSend);
        }

        if(fileSend) {
            typeMess.current.push(convertTypeFile(fileSend.type))
            formData.append(convertTypeFile(fileSend.type), fileSend);
        }

        formData.append('room_id', roomId);
        formData.append('type', typeMess.current);
        
        parentMess?.id && formData.append('reply_to', parentMess?.id)

        for (var key of formData.keys()) {
            console.log(key); 
         }

        sendMessage(formData, (res, err) => {
            if(res){
                setListMessage(pre => [...pre, res.message])
                setMessageSend('');
                setParentMess({});
            }

            clearFormData();
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

            <div className='flex'>
                <div>   
                    {
                        convertTypeFile(fileSend?.type) === "image" ?
                        <div className="image-send-wrap">
                            <label htmlFor="input-image-message">
                                <img
                                    src={fileSend.preview}
                                    alt="send img"
                                    className="image-send"
                                />
                            </label>
                            <div
                                className='icon-delete-image'
                                onClick={handleDeleteImage}
                            >
                                <CloseCircleOutlined />
                            </div>
                        </div>
                        :
                        <label htmlFor="input-image-message">
                            <PictureOutlined className='icon-image'/>
                        </label>
                    }
                </div>
                <input
                    type="file"
                    className='none'
                    id="input-image-message"
                    onChange={handleChangeImage}
                />

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
        </div>
    )
}

export default InputMessager;