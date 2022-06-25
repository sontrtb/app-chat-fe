import { useLocation  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { routerList } from '../../../router';

function Header() {

    // let location = useLocation();

    // const [namePath, setNamePath] = useState('Trang chủ');

    // useEffect(() => {
    //     routerList.map(item => {
    //         if(item.path === location.pathname)
    //             setNamePath(item.name)
    //     })
    // }, [location]);

    return (
        <div className='header'>
            {/* <h1 className='title-page'>{namePath}</h1> */}
        </div>
    )
}

export default Header;