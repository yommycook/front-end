import React from 'react';

import { Typography, Space } from 'antd';

const UserView = ({ userComment }) => {
    return (
        <Space
            direction='vertical'
            style={{ float: 'right' }}
        >
            {userComment.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: 'inline-block',
                        float: 'right',
                    }}
                >
                    <Typography>
                        <pre style={{ backgroundColor: 'pink' }}>{item}</pre>
                    </Typography>
                </div>
            ))}
        </Space>
    );
};

export default UserView;
