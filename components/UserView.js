import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Space } from 'antd';

const UserView = ({ userComment }) => {
    return (
        <Space
            direction='vertical'
            style={{ float: 'right', display: 'block' }}
        >
            <Typography>
                <pre style={{ backgroundColor: 'pink', whiteSpace: 'pre-wrap', display: 'block' }}>
                    {userComment}
                </pre>
            </Typography>
        </Space>
    );
};

UserView.propTypes = {
    userComment: PropTypes.string.isRequired,
};

export default UserView;
