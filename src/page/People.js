import { useState } from 'react';
import UserDetail from '../component/people/UserDetail';
import PeopleList from '../component/people/PeopleList';

function People() {

    const [userSelected, setUserSelected] = useState({});


    return (
        <div className="people">
            <div className="left-content">
                <PeopleList setUserSelected={setUserSelected}/>
            </div>
            
            <div className="user-detail-container">
                <UserDetail user={userSelected}/>
            </div>
        </div>
    )
}

export default People;