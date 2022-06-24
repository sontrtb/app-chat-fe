import MessagerItem from "./MessagerItem";

function MessagerList() {

    return (
        <div className="messager-list">
            
            <MessagerItem
                isSend={true}
            />
            <MessagerItem
                isSend={false}
            />
            <MessagerItem
                isSend={true}
            />
            <MessagerItem
                isSend={false}
            />
            <MessagerItem
                isSend={false}
            />
            <MessagerItem
                isSend={false}
            />
            <MessagerItem
                isSend={true}
            />
            <MessagerItem
                isSend={true}
            />
        </div>
    )
}

export default MessagerList;