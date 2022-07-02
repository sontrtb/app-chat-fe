import { useState } from 'react';
import { getListUser } from '../api/apiUser';
import PeopleItem from '../component/people/PeopleItem';
import UserDetail from '../component/people/UserDetail';
import { SearchOutlined } from '@ant-design/icons';

function People() {

    const [valueSearch, setValueSearch] = useState('');
    const [listUser, setListUser] = useState([]);
    const [userSelected, setUserSelected] = useState({});

    const handleSearchUser = () => {
        const params = {q: valueSearch}
        getListUser(params, (res, err) => {
            if(res){
                setListUser(res.users)
            }
        })
    }

    const handleEnterInputSearch = (e) => {
        if(e.key === 'Enter')
            handleSearchUser();
    }

    return (
        <div className="people">
            <div className="left-content">
                <div className='input-wrap'>
                    <input
                        placeholder="Tìm kiếm người dùng"
                        className='input-search'
                        value={valueSearch}
                        onChange={e => setValueSearch(e.target.value)}
                        onKeyDown={e => handleEnterInputSearch(e)}
                    />
                    <div
                        onClick={handleSearchUser}
                        className="search-wrap"
                    >
                        <SearchOutlined />
                    </div>
                </div>

                <div className="list-user">
                    {
                        listUser?.map(user => (
                            <div
                                key={user.id}
                                onClick={() => setUserSelected(user)}
                            >
                                <PeopleItem item={user} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="user-detail-container">
                <UserDetail user={userSelected}/>
            </div>
        </div>
    )
}

export default People;