import Head from 'next/head'
import React, { useState } from 'react'
import HeaderBanar from '../../components/HeaderBanar'
import styles from '../../styles/Portfolio.module.scss'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

const Portfolio = ({ PortfolioItem }) => {
    const [portfolio, setPortfolio] = useState(PortfolioItem);
    const [visible, setVisible] = useState(6);

    const showMoreItems = () => {
        setVisible(preValue => preValue + 2);
    }

    const filterMenu = (category) => {
        const updatedItems = PortfolioItem.filter((curElem) => {
            return curElem.category === category;
        });
        setPortfolio(updatedItems);
    }
    return (
        <>
            <Head>
                <title>Our portfolio | rottenScript</title>
            </Head>
            <HeaderBanar title="What we have done so far!" desc="We turn ideas into solutions for global users." img="/about/about-rottenscript.png" />
            <div className={styles.portfolio_full_width}>
                <div className={styles.portfolio_tab}>
                    <div className={styles.portfolio_tab_container}>
                        <button className={styles.active} onClick={() => setPortfolio(PortfolioItem)}>All</button>
                        <button onClick={() => filterMenu('website')}>Website Design</button>
                        <button onClick={() => filterMenu('landing')}>Landing Page</button>
                        <button onClick={() => filterMenu('app')}>Mobile App</button>
                        <button onClick={() => filterMenu('branding')}>Branding Design</button>

                    </div>
                </div>
                <div className={styles.porfolio_data}>
                    <div className={styles.portfolio_data_container}>
                        <AnimatePresence>
                            {portfolio.slice(0, visible).map((elem) => (
                                <motion.div initial={{ opacity: 0, y: -100, }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 0 }} transition={{ duration: .5 }} key={elem._id} className={styles.single_portfolio}>
                                    <div className={styles.img_container}>
                                        <a href={elem.link_text} target="_blank" rel="noreferrer">
                                            <Image src={elem.image_url} width={600} height={500} alt={elem.title} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                {visible < portfolio.length ? <div className={styles.load_more}>
                    <button onClick={showMoreItems}>Load more</button>
                </div> : <p style={{ textAlign: "center", color: "#292929", marginTop: "40px", }}>No more portfolio available...</p>}
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/portfolios`);
    return {
        props: {
            PortfolioItem: res.data,
        },
    };
}

export default Portfolio