// Import Header Css...............................
import './Header.css'

// Import Header Books Data........................
import { headerBooks } from '../../data/data'

// Import Swiper React Components Swiper styles....
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


// Import Link From React Router.............
import { Link } from 'react-router-dom'

// Import Arrow Icon...................
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft} from "react-icons/go";

// Shape Svg Import...................
import headerShape from '../../assets/header-shape.svg'


function Header(){
    return(
        <header>
            <div className="header-container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop = {true}
                    modules={[Navigation, Pagination]}
                    pagination= {{el: '.swiper-pagination', clickable: true }}
                    navigation = {
                        {
                            prevEl: '.button-prev-slide',
                            nexEl: '.button-next-slide'
                        }
                    }
                >
                    {
                        headerBooks.map(({title, info, img, btnLink}, index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <div className="header-wrapper container">
                                        {/*.......................Header Left.......................*/}
                                            <div className="header-left">
                                                <h1>{title}</h1>
                                                <p dangerouslySetInnerHTML={{__html:info}}></p>
                                                <Link className='btn btn-border' to={btnLink}>Learn More</Link>
                                            </div>


                                        {/*.......................Header Right.......................*/}
                                        <div className="header-right">
                                            <img src={img} alt=''/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    {/*.................Header pagination.................*/}
                    <div className="slider-button">
                        <div className="button-prev-slide slidebutton"><GoArrowLeft/></div>
                        <div className="button-next-slide slidebutton"><GoArrowRight/></div>
                    </div>


                    {/*.................Header pagination.................*/}
                    <div className="container">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
                     {/*.................Header shape.................*/}
                     <div className="header-shape">
                        <img src={headerShape} alt="" />
                     </div>
                
            </div>
        </header>
    )
}
export default Header