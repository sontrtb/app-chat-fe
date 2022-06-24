
function ListChatItem() {

    return(
        <div className="list-chat-item">
            <img
                src="https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg"
                alt="Avatar"
                className="avatar"
            />
            <div style={{width: "80%"}}>
                <div className="top-item">
                    <h4 className="user-name">Pham Hong Son</h4>
                    <p className="time">12/4</p>
                </div>
                <p className="messager">helo 123 323 324244 243 4 34 3 43 43 43 4 34 </p>
            </div>
        </div>
    )
}

export default ListChatItem;