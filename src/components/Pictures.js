import React from 'react';
import image1 from '../images/IMG_20190918_155436.jpg'
import image2 from '../images/MVIMG_20180912_164407.jpg'
import image3 from '../images/MVIMG_20180912_164407.jpg'
import { Carousel } from 'react-responsive-carousel';
const Pictures = () => {
    return (
        <div>
               <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                        <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
        </div>
    );
}

export default Pictures;
