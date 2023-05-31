import React from 'react';

import { Avatar, Typography, Space } from 'antd';

const MentView = ({ chatMent }) => {
    return (
        <div>
            <Space>
                <Avatar
                    size='large'
                    src={
                        <img src='https://firebasestorage.googleapis.com/v0/b/study-from-cafe.appspot.com/o/imagesrc%2F%E1%84%8F%E1%85%AF%E1%84%8F%E1%85%A1.jpeg?alt=media&token=193a16c9-c50d-4202-b898-f7e17e35c33b' />
                    }
                />
                <Typography
                    style={{
                        display: 'inline-block',
                        marginLeft: '10px',
                    }}
                >
                    <pre>{chatMent}</pre>
                </Typography>
            </Space>
        </div>
    );
};

export default MentView;
