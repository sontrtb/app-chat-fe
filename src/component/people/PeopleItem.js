import avatarDefault from "../../access/image/avatar_default.jpg";

function PeopleItem({item}) {

    return (
        <div className="people-item">
           <img
                src={item.avatar || avatarDefault}
                alt="Avatar"
                className="avatar"
            />
            <h3 className="user-name">
                {item.last_name + " " + item.first_name}
            </h3>
        </div>
    )
}

export default PeopleItem;