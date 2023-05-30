import React, { useState } from 'react';
import { Space, Tag, Typography, Divider, ConfigProvider } from 'antd';

const { Title, Paragraph, Text } = Typography;
const { CheckableTag } = Tag;

const cook = [
    '밑반찬',
    '메인반찬',
    '국/탕',
    '찌개',
    '면',
    '김치',
    '젓갈/장류',
    '양식',
    '덮밥',
    '소스',
    '기타',
];
const baking = ['과자', '빵', '케이크', '파이', '페이스트리', '기타 디저트'];
const beverage = ['주스/에이드', '쉐이크', '커피', '차', '주류', '기타 음료'];

const Catalog = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    return (
        <>
            <div style={{ margin: '50px' }}>
                <Title level={5}>요리</Title>
                <Space
                    size={[0, 8]}
                    wrap
                >
                    {cook.map((tag) => (
                        <ConfigProvider
                            theme={{
                                token: {
                                    fontSize: '16px',
                                    height: '2',
                                },
                            }}
                        >
                            <CheckableTag
                                style={{}}
                                key={tag}
                                checked={selectedTags.includes(tag)}
                                onChange={(checked) => handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        </ConfigProvider>
                    ))}
                </Space>
                <Divider></Divider>
                <Title level={5}>베이킹</Title>
                <Space
                    size={[0, 8]}
                    wrap
                >
                    {baking.map((tag) => (
                        <ConfigProvider
                            theme={{
                                token: {
                                    fontSize: '16px',
                                    height: '2',
                                },
                            }}
                        >
                            <CheckableTag
                                key={tag}
                                checked={selectedTags.includes(tag)}
                                onChange={(checked) => handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        </ConfigProvider>
                    ))}
                </Space>
                <Divider></Divider>
                <Title level={5}>음료</Title>
                <Space
                    size={[0, 8]}
                    wrap
                >
                    {beverage.map((tag) => (
                        <ConfigProvider
                            theme={{
                                token: {
                                    fontSize: '16px',
                                    height: '2',
                                },
                            }}
                        >
                            <CheckableTag
                                key={tag}
                                checked={selectedTags.includes(tag)}
                                onChange={(checked) => handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        </ConfigProvider>
                    ))}
                </Space>
                <Divider></Divider>
                <div style={{ height: '250px' }}></div>
            </div>
        </>
    );
};
export default Catalog;
