import styles from "./Buttons.module.scss";

export const Buttons = () => {
    return (
        <section className={styles.buttons}>
            <h1 className={styles.heading}>Buttons</h1>
            <div className={styles.contents}>
                <p>Big Buttons</p>
                <p>Padding: 1.5rem 2rem</p>
                <p>Border Radius: 0.5rem</p>
                <div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.bigButton}>Button</button>
                        <span>Resting state linear-gradient(to right, #e29587, #d66d75)</span>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.bigButtonHover}>Button</button>
                        <span>Hover state linear-gradient(to left, #e29587, #d66d75)</span>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.bigButtonActive}>Button</button>
                        <span>Active state #d66d75</span>
                    </div>
                </div>

                <div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.bigButtonSecondary}>Button</button>
                        <span>Resting state linear-gradient(to right, #6190e8, #a7bfe8)</span>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.bigButtonHoverSecondary}>Button</button>
                        <span>Hover state linear-gradient(to left, #6190e8, #a7bfe8)</span>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.bigButtonActiveSecondary}>Button</button>
                        <span>Active state #6190e8</span>
                    </div>
                </div>
            </div>
            <div className={styles.contents}>
                <p>Small Buttons</p>
                <p>Padding: 1rem 2rem</p>
                <p>Border Radius: 0.5rem</p>
                <div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.smallButton}>Button</button>
                        <span>Resting state linear-gradient(to right, #e29587, #d66d75)</span>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.smallButtonHover}>Button</button>
                        <span>Hover state linear-gradient(to left, #e29587, #d66d75)</span>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.smallButtonActive}>Button</button>
                        <span>Active state #d66d75</span>
                    </div>
                </div>

                <div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.smallButtonSecondary}>Button</button>
                        <span>Resting state linear-gradient(to right, #6190e8, #a7bfe8)</span>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.smallButtonHoverSecondary}>Button</button>
                        <span>Hover state linear-gradient(to left, #6190e8, #a7bfe8)</span>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.smallButtonActiveSecondary}>Button</button>
                        <span>Active state #6190e8</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
