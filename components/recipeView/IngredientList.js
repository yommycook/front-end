import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const IngredientList = ({ ingredients }) => {
    return (
        <div>
            {ingredients.map((item, index) => (
                <div key={index}>
                    <Text style={{ display: 'block' }}>재료: {item.ingredient}</Text>
                    <Text style={{ display: 'block' }}>용량: {item.amount}</Text>
                </div>
            ))}
        </div>
    );
};

export default IngredientList;
