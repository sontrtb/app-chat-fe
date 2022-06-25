import {
    CloseCircleOutlined,
    EditOutlined,
    CameraOutlined,
} from '@ant-design/icons';

function ModalChatInformation( props ) {
    const { isVisible, toggerModal } = props;

    return(
        <div
            className="modal-chat-information"
            style={{transform: isVisible ? "translateX(0)" : "translateX(100%)" }}
        >   
            <div className='header'>
                <h2 className='title'>Thông tin đoạn chat</h2>
                <div
                    onClick={toggerModal}
                    className="icon-close"
                >
                    <CloseCircleOutlined />
                </div>
            </div>

            <div className='content'>
                <div className='avatar-wrap'>
                    <img
                        src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                        alt="anh dai dien"
                        className="avatar"
                    />
                    <div className='icon-avatar'>
                        <CameraOutlined />
                    </div>
                </div>
                
                <h3>
                    Pham Hong Son
                    <span className='icon-edit'>
                        <EditOutlined />
                    </span>
                </h3>

                <div className='line'></div>

                <div className='member-wrap'>
                    <h3>Thành viên:</h3>

                    <div className='member-list'>
                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>

                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>
                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>
                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>
                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>
                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>
                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>
                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>
                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>
                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>
                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>
                        <div className='member'>
                            <img
                                src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                alt="anh dai dien"
                                className="avatar"
                            />
                            <p className='name'>pham hogn son</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default ModalChatInformation;