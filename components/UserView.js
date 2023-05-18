import React from 'react';

import { Typography, Space } from 'antd';

const UserView = ({ userComment }) => {
    return (
        <Space
            direction='vertical'
            style={{ float: 'right' }}
        >
            <Typography>
                <pre style={{ backgroundColor: 'pink' }}>{userComment}</pre>
            </Typography>
        </Space>
    );
};

export default UserView;
