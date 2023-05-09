import React, { Fragment, useState } from 'react'
import HeaderBanar from '../../components/HeaderBanar'
import styles from "../../styles/Product.module.scss"
import Image from 'next/image'
import axios from 'axios'

const Product = ({ Products }) => {
    const [product, setProduct] = useState(Products);
    return (
        <Fragment>
            <HeaderBanar title="Products we offer" desc="We turn ideas into solutions for global users." img="/product/productBanar.png" />
            <div className={styles.productSection}>
                {product.map((single_product) => (
                    <div className={styles.singleProduct} key={single_product._id}>
                        <div className={styles.singleProductContent}>
                            <div className={styles.pLeft}>
                                <h1>{single_product.title}</h1>
                                <p>{single_product.description}</p>
                                <span><a href={single_product.link_text} target="_blank" rel="noreferrer">{single_product.link_text}</a></span>
                            </div>
                            <div className={styles.pRight}>
                                <Image src={single_product.image_url} alt={single_product.title} width={500} height={500} objectFit="contain" />
                            </div>
                        </div>
                    </div>
                ))}




            </div>
        </Fragment>
    )
}
export const getServerSideProps = async (context) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`);
    return {
        props: {
            Products: res.data,
        },
    };
}
export default Product