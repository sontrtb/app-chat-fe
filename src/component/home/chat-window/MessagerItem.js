import ReactMessage from "./ReactMessage";

function MessagerItem(props) {
    const { isSend, message } = props;

    const handleReactMessage = (id) => {
        console.log(id);
    }

    return (
        <div className="messager-item">
            {
                isSend
                    ?
                <div className="mess-send-wrap">
                    <ReactMessage
                        message={message}
                        isSend={isSend}
                        handleReactMessage={handleReactMessage}
                    />
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
                        <div className="mess-receive-wrap">
                            <p className="mess-receive">{message}</p>
                            <ReactMessage
                                message={message}
                                handleReactMessage={handleReactMessage}
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default MessagerItem;