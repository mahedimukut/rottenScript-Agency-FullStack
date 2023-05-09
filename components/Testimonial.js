import styles from '../styles/Testimonial.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper";
import { useState } from 'react';

const Testimonial = ({ Tesimonial }) => {
    const [testimonial, setTestimonial] = useState(Tesimonial)
    return (
        <div className={styles.container_full}>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1025: {
                        slidesPerView: 3
                    }
                }}
                effect={"coverflow"}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={80}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
            >

                {testimonial.map((singleTestimonial) => (
                    <SwiperSlide key={singleTestimonial._id}>
                        <div className={styles.testimonial}>

                            <div className={styles.testimonial_item}>
                                <div className={styles.top}>
                                    <div className={styles.review}>
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                    </div>
                                </div>
                                <div className={styles.middle}>
                                    <span>{singleTestimonial.comment}</span>
                                </div>
                                <div className={styles.bottom}>
                                    <span className={styles.client}>{singleTestimonial.title}</span>
                                    <span className={styles.company}>{singleTestimonial.designation}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div >
    )
}

export default Testimonial