import React, { useState, useEffect } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Typography, Divider, Space } from 'antd';

const { Title } = Typography;

const IngredientsData = ({ setRecipeData }) => {
    const [ingredientList, setIngredientList] = useState([]);
    const [idCounter, setIdCounter] = useState(0);

    const handleIngredientChange = (e, id) => {
        const updatedList = ingredientList.map((item) =>
            item.id === id ? { ...item, ingredient: e.target.value } : item
        );
        setIngredientList(updatedList);
    };

    const handleAmountChange = (amount, id) => {
        const updatedList = ingredientList.map((item) =>
            item.id === id ? { ...item, amount: amount } : item
        );
        setIngredientList(updatedList);
    };

    useEffect(() => {
        setRecipeData((prevData) => ({
            ...prevData,
            ingredientList: ingredientList,
        }));
    }, [ingredientList]);

    return (
        <>
            <Title level={5}>재료 선택</Title>
            <Form.List name='list_ingredients'>
                {(fields, { add, remove }) => {
                    return (
                        <>
                            {fields.map((field) => (
                                <Space
                                    key={field.key}
                                    align='baseline'
                                >
                                    <Form.Item
                                        {...field.ingredient}
                                        style={{ display: 'inline-block', marginRight: '15px' }}
                                        label='재료'
                                    >
                                        <Input
                                            placeholder='예) 쇠고기'
                                            onChange={(e) => handleIngredientChange(e, field.key)}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        {...field.amount}
                                        style={{ display: 'inline-block', marginRight: '15px' }}
                                        label='정량'
                                    >
                                        <InputNumber
                                            placeholder='예) 300g'
                                            onChange={(value) =>
                                                handleAmountChange(value, field.key)
                                            }
                                        />
                                    </Form.Item>
                                    <MinusCircleOutlined
                                        onClick={() => {
                                            setIngredientList(
                                                ingredientList.filter(
                                                    (item) => item.id !== field.key
                                                )
                                            );
                                            remove(field.name);
                                        }}
                                    />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type='dashed'
                                    onClick={() => {
                                        add();
                                        setIngredientList([
                                            ...ingredientList,
                                            { id: idCounter, ingredient: '', amount: null },
                                        ]);
                                        setIdCounter(idCounter + 1);
                                    }}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    재료 추가
                                </Button>
                            </Form.Item>
                        </>
                    );
                }}
            </Form.List>
        </>
    );
};

export default IngredientsData;
