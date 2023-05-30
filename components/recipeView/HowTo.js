import React from 'react';
import { Image, Typography } from 'antd';

const { Text } = Typography;

const HowTo = ({ how_to }) => {
    return (
        <div>
            {how_to.map((item, index) => (
                <div
                    key={index}
                    style={{ margin: '10px' }}
                >
                    <Text style={{ display: 'block' }}>{item.step} 단계</Text>
                    <Text style={{ display: 'block' }}>{item.cooking}</Text>
                    <Image
                        width={200}
                        src={item.cook_image}
                    />
                </div>
            ))}
        </div>
    );
};

export default HowTo;
