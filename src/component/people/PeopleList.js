import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { getListUser } from '../../api/apiUser';
import PeopleItem from './PeopleItem';

function PeopleList({setUserSelected}) {

    const [valueSearch, setValueSearch] = useState('');
    const [listUser, setListUser] = useState([]);

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

    return(
        <div className='people-list'>
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
    )
}

export default PeopleList;