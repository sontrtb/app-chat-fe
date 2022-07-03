import icon_reaction_1 from "../../../access/icon/reaction_1.png"
import icon_reaction_2 from "../../../access/icon/reaction_2.png"
import icon_reaction_3 from "../../../access/icon/reaction_3.png"
import icon_reaction_4 from "../../../access/icon/reaction_4.png"
import icon_reaction_5 from "../../../access/icon/reaction_5.png"
import icon_reaction_6 from "../../../access/icon/reaction_6.png"

import { SmileOutlined } from '@ant-design/icons'

const reactionList = [
    {
        name: "love",
        icon: icon_reaction_1,
        id: 0,
    },
    {
        name: "haha",
        icon: icon_reaction_2,
        id: 1,
    },
    {
        name: "wow",
        icon: icon_reaction_3,
        id: 2,
    },
    {
        name: "sad",
        icon: icon_reaction_4,
        id: 3,
    },
    {
        name: "angry",
        icon: icon_reaction_5,
        id: 4,
    },
    {
        name: "like",
        icon: icon_reaction_6,
        id: 5,
    },
];

function ReactMessage(props) {
    const {handleReactMessage, message, isSend} = props

    const rightPositionSend = message?.length < 7 ? (-80 + (55 - 9*message?.length)) : -100;
    const rightPositionReceive = message?.length < 4 ? (-80 - (55 - 9*message?.length)) : -100;

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
                            onClick={() => handleReactMessage(item.name)}
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

export { reactionList }
export default ReactMessage;