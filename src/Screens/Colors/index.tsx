import styles from "./Colors.module.scss";

export const Colors = (): JSX.Element => {
    return (
        <section className={styles.colors}>
            <h1 className={styles.heading}>Colors</h1>
            <div className={styles.contents}>
                <div className={`${styles.colorBox} ${styles.primary}`}>
                    <div>
                        <ul>
                            <li>hsl(41, 55%, 49%)</li>
                            <li>rgb(195, 151, 56)</li>
                            <li>#c39738</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.colorBox} ${styles.secondary}`}>
                    <div>
                        <ul>
                            <li>hsl(351, 100%, 86%)</li>
                            <li>rgb(255, 182, 193)</li>
                            <li>#ffb6c1</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.colorBox} ${styles.white}`}>
                    <div>
                        <ul>
                            <li>hsl(0, 0%, 100%)</li>
                            <li>rgb(254, 254, 254)</li>
                            <li>#fefefe</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.colorBox} ${styles.text}`}>
                    <div>
                        <ul>
                            <li>hsl(0, 0%, 31%)</li>
                            <li>rgb(80, 80, 80)</li>
                            <li>#505050</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.colorBox} ${styles.lightGrey}`}>
                    <div>
                        <ul>
                            <li>hsl(0, 0%, 60%)</li>
                            <li>rgb(153, 153, 153)</li>
                            <li>#999999</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.colorBox}`}></div>
            </div>
            <h2 className={styles.subheading}>Gradients</h2>
            <div className={styles.contents}>
                <div className={`${styles.colorBox} ${styles.gradientOne}`}>
                    <div>
                        <ul>
                            <li>linear-gradient(to right, #e29587, #d66d75)</li>
                            <li>#d66d75 fallback</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.colorBox} ${styles.gradientTwo}`}>
                    <div>
                        <ul>
                            <li>linear-gradient(to right, #6190e8, #a7bfe8)</li>
                            <li>#6190e8 fallback</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.colorBox}`}></div>
            </div>
        </section>
    );
};
