import styles from "./Images.module.scss";

export const Images = () => {
    return (
        <section className={styles.images}>
            <h1 className={styles.heading}>Images</h1>
            <div className={styles.description}>
                Images should be as neutral as possible. With highlights of pastel colours such as light pink, or baby
                blue.<i>No</i> border radius. Images should be of daily interactions people will have in their home such
                as baking, drinking tea, or going to bed.
            </div>
            <div className={styles.contents}>
                <div className={styles.imageContainer}>
                    <img src="/images/portfolio-2.jpg" alt="" />
                </div>
                <div className={styles.imageContainer}>
                    <img src="/images/portfolio-3.jpg" alt="" />
                </div>
                <div className={styles.imageContainer}>
                    <img src="/images/portfolio-4.jpg" alt="" />
                </div>
                <div className={styles.imageContainer}>
                    <img src="/images/portfolio-5.jpg" alt="" />
                </div>
                <div className={styles.imageContainer}>
                    <img src="/images/portfolio-6.jpg" alt="" />
                </div>
                <div className={styles.imageContainer}>
                    <img src="/images/portfolio-7.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};
