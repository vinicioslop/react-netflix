import React from 'react';

import './Content.css';

import Banner from '../Banner/Banner';
import MyList from '../MyList/MyList';

class Content extends React.Component {
    render() {
        return (
            <div className='content-container'>
                <Banner />
                <MyList />
            </div>
        );
    }
}

export default Content;
