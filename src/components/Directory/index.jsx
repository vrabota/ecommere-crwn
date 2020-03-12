import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DirectoryItem from 'components/DirectoryItem';

import { selectDirectorySections } from '../../redux/directory/selectors';

import './styles.scss';

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...rest }) => (
                    <DirectoryItem key={id} {...rest} />
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
