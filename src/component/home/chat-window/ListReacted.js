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
                        listReact?.map((react, index) => {
                            const reactConvert = reactionList.filter(item => item.name === react)[0]
                            return (
                                <img
                                    key={index}
                                    src={reactConvert.icon}
                                    alt={reactConvert.name}
                                    className="icon-reaction"
                                />
                            )
                        })}
                    <div className="number-reacted">{listReact.length}</div>
                    
                </div>
            }
        </div>
    )
}

export default ListReacted;