function MessagerItem( props ) {
    const {isSend} = props;

    return (
        <div className="messager-item">
            {
                isSend
                    ?
                <div className="mess-send-wrap">
                    <p className="mess-send">
                        hello rgb(101, 126, 210)s rc = "https://
                        2.bp.blogsp
                        ot com/-k fAFQ vL I/W OU yG3
                        Lg _I/ AAA  A AAA AA /gR WGz 1w gU5_M
                        q-GaTGD gz8  J8wd  t8wCLc B/s16 00/ 7760 2.jpg"
                        alt="anh dai dien"
                        className="avatar"
                    
                    </p>
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
                        <p className="mess-receive">
                            hello rgb(101 , 126, 210)s rc="ht tps://
                            2.bp.blogsp
                            ot.com /-kG0fA FQvLv I/WM OUyG3
                            Lg_I /AA AAA AAA s/gRs qWGz 1wI gU5_M
                            q-G aTGD z8J8w dt8wC LcB/s 1600/ 7760 .jpg"
                            alt="anh dai dien"
                            className="avatar"
                        
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default MessagerItem;