import icon_reaction_1 from "../../../access/icon/reaction_1.png"
import icon_reaction_2 from "../../../access/icon/reaction_2.png"
import icon_reaction_3 from "../../../access/icon/reaction_3.png"
import icon_reaction_4 from "../../../access/icon/reaction_4.png"
import icon_reaction_5 from "../../../access/icon/reaction_5.png"
import icon_reaction_6 from "../../../access/icon/reaction_6.png"

import { SmileOutlined } from '@ant-design/icons'

function ReactMessage(props) {
    const {handleReactMessage, message, isSend} = props

    const rightPositionSend = message?.length < 7 ? (-80 + (55 - 9*message?.length)) : -100;
    const rightPositionReceive = message?.length < 4 ? (-80 - (55 - 9*message?.length)) : -100;

    const reactionList = [
        {
            name: "Tim",
            icon: icon_reaction_1,
            id: 0,
        },
        {
            name: "Tim",
            icon: icon_reaction_2,
            id: 1,
        },
        {
            name: "Tim",
            icon: icon_reaction_3,
            id: 2,
        },
        {
            name: "Tim",
            icon: icon_reaction_4,
            id: 3,
        },
        {
            name: "Tim",
            icon: icon_reaction_5,
            id: 4,
        },
        {
            name: "Tim",
            icon: icon_reaction_6,
            id: 5,
        },
    ];

    return (
        <div className="icon-select-reaction">
            <SmileOutlined />

            <div
                className="reaction-wrap"
                style={{right: `${isSend ? rightPositionSend : rightPositionReceive}px` }}
            >   
                {
                    reactionList.map(item => (
                        <div
                            key={item.id}
                            onClick={() => handleReactMessage(item.id)}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="icon-reaction"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ReactMessage;