import React from 'react';

import { Card, List, Typography } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
const { Title } = Typography;

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
];
const CardBoard = () => (
    <>
        <Title level={5}>최근에 등록된 레시피</Title>
        <div>
            <InfiniteScroll dataLength={data.length}>
                <List
                    grid={{
                        gutter: 16,
                        column: 4,
                    }}
                    itemLayout='vertical'
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title={item.title}>Card content</Card>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    </>
);
export default CardBoard;
