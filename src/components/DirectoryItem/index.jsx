import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';

const DirectoryItem = ({ title, imageUrl, size, linkUrl }) => {
    const { push } = useHistory();
    return (
        <div className={`${size} directory-item`} onClick={() => push(linkUrl)}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}

export default DirectoryItem;
