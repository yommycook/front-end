import React, { useState } from 'react';
import { Button, Form, Input, Typography, Space, Avatar, Rate, Divider, Row, Col } from 'antd';

const { Title, Text } = Typography;
const { TextArea } = Input;

const RateStar = () => {
    let value;
    return (
        <>
            <div style={{ paddingLeft: '50px' }}>
                <Title level={5}>평점 보내기</Title>
                <Rate
                    allowHalf
                    defaultValue={2.5}
                    value={value}
                />
            </div>
        </>
    );
};
export default RateStar;
