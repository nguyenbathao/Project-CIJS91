
import './FeatureBooks.css'

import TititleTypeOne from '../UI/TititleTypeOne/TititleTypeOne'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import {featuredBooksData} from '../../data/data'

import { BsArrowReturnRight } from 'react-icons/bs';

import { Link } from 'react-router-dom'






const breakpoints = {
  1024: {
    slidesPerView : 4,
    spaceBetweenSlides: 30
  },
  786:  {
    slidesPerView: 3,
    spaceBetweenSlides: 20
  },
  480:  {
    slidesPerView: 2,
    spaceBetweenSlides: 10
  },
  0:  {
    slidesPerView: 1,
    spaceBetweenSlides: 0
  }
}

function FeatureBooks() {
  return (
    <section className='Featured'> 
        <div className="container features-book-container">
            {/*.................Title Props................ */}
            <TititleTypeOne TitleTop={'Some quality items'} Title={'featureBooks'}/>
        
            {/*............FeaturedBooks Slider.......... */}
            <Swiper
            spaceBetween={50}
            slidesPerView={4}
            loop = {true}
            modules={[Pagination]}
            pagination= {{el: '.swiper-pagination', clickable: true }}
            breakpoints={breakpoints}
            >
              {
                featuredBooksData.map(({img, imglLink, name, nameLink, writer, price},index)=>{
                  return(
                    <SwiperSlide key={index}>
                      <div className="featurebook-box">
                        <Link to={imglLink} className='featurebook'>
                          <img src={img} alt="" />
                        </Link>
                        <div className="featurebook-info">
                          <Link to={nameLink}>
                            <h4>{name}</h4>
                          </Link>
                          <div><small>{writer}</small></div>
                          <h5><span>{price}</span></h5>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
              <div className="feature-border container"></div>
              <div className="swiper-pagination"></div>
              <Link to='*' className='btn feature-btn'>View all products<BsArrowReturnRight/></Link>
            </Swiper>
        </div>
    </section>
  )
}

export default FeatureBooks