import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import styles from '../styles/PortfolioSection.module.scss'

// import required modules
import { EffectCoverflow, Autoplay } from "swiper";
import Link from "next/link";

const PortFolioSection = ({ Portfolios }) => {
    return (
        <div className={styles.container_full}>
            <div className={styles.container}>
                <h1 className={styles.headText}>We make good things❤️</h1>
            </div>
            <div className={styles.recentWork}>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    spaceBetween={30}
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
                    {Portfolios.map((portfolio) => (
                        <SwiperSlide key={portfolio._id}>
                            <div className={styles.portfolio}>
                                <div className={styles.portfolio_top}>
                                    <Image src={portfolio.image_url} width="900" height="700" objectFit='cover' alt={portfolio.title} />
                                    <div className={styles.portfolio_text}>
                                        <h3>{portfolio.title}</h3>
                                        <span>{portfolio.description}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.showButton}><Link href="/portfolio"><button className={styles.showAllwork}>Show all works</button></Link></div>
            </div>
        </div>
    )
}

export default PortFolioSection