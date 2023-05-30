import React from 'react';

import { Card, List, Typography } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
const { Title } = Typography;

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
    </>
);
export default CardBoard;
