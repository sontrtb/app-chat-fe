import { reactionList } from "./ReactMessage";

function ListReacted( props ) {
    const {listReact, isSend} = props

    return (
        <div>
            {
                listReact?.length > 0 &&
                    <div
                    className="list-reacted"
                    style={isSend ? {right: "15px"}: {left: "10px"}}
                >
                    {
                        listReact?.map((id, index) => (
                            <img
                                key={index}
                                src={reactionList[id].icon}
                                alt={reactionList[id].name}
                                className="icon-reaction"
                            />
                        ))
                    }
                    <div className="number-reacted">{listReact.length}</div>
                    
                </div>
            }
        </div>
    )
}

export default ListReacted;