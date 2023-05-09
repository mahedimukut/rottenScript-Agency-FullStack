// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import styles from '../styles/TeamSection.module.scss'
import Image from 'next/image';
// import required modules
import { Autoplay } from "swiper";

const TeamSection = () => {
    return (
        <>
            <div className={styles.container_full}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    grabCursor={true}
                    className={styles.team_slider}
                    loop={true}
                >
                    <SwiperSlide><Image src="/teamSlider/team1.jpg" width="900" height="600" objectFit='contain' alt='' /></SwiperSlide>
                    <SwiperSlide><Image src="/teamSlider/team2.jpg" width="900" height="600" objectFit='contain' alt='' /></SwiperSlide>
                    <SwiperSlide><Image src="/teamSlider/team3.jpg" width="900" height="600" objectFit='contain' alt='' /></SwiperSlide>
                    <SwiperSlide><Image src="/teamSlider/team4.jpg" width="900" height="600" objectFit='contain' alt='' /></SwiperSlide>
                    <SwiperSlide><Image src="/teamSlider/team5.jpg" width="900" height="600" objectFit='contain' alt='' /></SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}

export default TeamSection