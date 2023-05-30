import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Slider from 'react-slick';

import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Typography, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import RecipeCard from './RecipeCard';

import { getAllRecipes } from '../service/dbService';
import { getRecipeById } from '../service/dbService';

const { Title, Text } = Typography;
const { Meta } = Card;

const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const CardBoard = ({ data }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const sliderRef = useRef(null);
    const [currentGroup, setCurrentGroup] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        vertical: false,
    };

    const prev = () => {
        setCurrentGroup((prevGroup) => Math.max(prevGroup - 1, 0));
        sliderRef.current.slickPrev();
    };

    const next = () => {
        setCurrentGroup((prevGroup) =>
            Math.min(prevGroup + 1, Math.ceil(data.length / settings.slidesToShow) - 1)
        );
        sliderRef.current.slickNext();
    };

    const start = currentGroup * settings.slidesToShow;
    const end = start + settings.slidesToShow;
    const currentData = data.slice(start, end);

    const viewRecipe = async (id) => {
        console.log('click ');
        try {
            await getRecipeById(id, dispatch);
            router.push('/recipe-view');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
                type='ghost'
                icon={<LeftOutlined />}
                onClick={prev}
                disabled={currentGroup === 0}
            />
            <SliderContainer>
                <Slider
                    ref={sliderRef}
                    {...settings}
                >
                    {currentData.map((item) => (
                        <div key={item.title}>
                            <RecipeCard
                                item={item}
                                onClick={() => viewRecipe(item.id).catch(console.error)}
                            />
                        </div>
                    ))}
                </Slider>
            </SliderContainer>
            <Button
                type='ghost'
                icon={<RightOutlined />}
                onClick={next}
                disabled={end >= data.length}
            />
        </div>
    );
};
export default CardBoard;
