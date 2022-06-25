function MessagerItem( props ) {
    const { isSend, message } = props;

    return (
        <div className="messager-item">
            {
                isSend
                    ?
                <div className="mess-send-wrap">
                    <p className="mess-send">{message}</p>
                </div>
                    :
                <div className="mess-recive-wrap">
                    <img
                        src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                        alt="anh dai dien"
                        className="avatar"
                    />
                    <div>
                        <p className="name-receive">Pham HOng Son</p>
                        <p className="mess-receive">{message}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default MessagerItem;