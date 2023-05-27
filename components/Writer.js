import React from 'react';
import { Typography, Space, Row, Col, Avatar } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Writer = () => {
    return (
        <div style={{ paddingLeft: '50px' }}>
            <Space>
                <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
                <div style={{ paddingLeft: '10px' }}>
                    <Title level={5}>루루쿠킹</Title>
                    <Paragraph>
                        집에서 먹기 좋은 요리들을 소개합니다. (http://blog.naver.com/pink2244)
                    </Paragraph>
                </div>
            </Space>
        </div>
    );
};

export default Writer;
