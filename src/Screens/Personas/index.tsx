import styles from "./Personas.module.scss";

export const Personas = () => {
    return (
        <section className={styles.personas}>
            <h1 className={styles.heading}>The Brand</h1>
            <p>
                Trendy House is a interior decor shop specialising in both upcycled vintage furniture with a "shabby
                chic" feel, and also current furniture made with the look of shabby chic.
            </p>
            <p>
                This means Trendy Room is able to cater to both more expensive vintage furniture, and more reasonable
                priced for people who just love the shabby look.
            </p>
            <div className={`${styles.logoContainer} ${styles.logoContainerLight}`}>
                <img src="/images/logo-full.png" alt="Logo" />
                <p>Full Logo. Location: top left of every navigation bar. Width 300px</p>
            </div>
            <div className={`${styles.logoContainer} ${styles.logoContainerDark}`}>
                <img src="/images/logo-full.png" alt="Logo" />
                <p>Full Logo. Alternative color. Width 300px.</p>
            </div>
            <div className={`${styles.iconLogoContainer}`}>
                <img src="/images/icon-logo.png" alt="" />
                <p>Icon logo for smaller spaces and favicon. Height: 100px, 16px for favicon</p>
            </div>

            <div className={styles.contents}>
                <h2>Personas</h2>
                <div className={styles.personaContainer}>
                    <div className={styles.avatar}>
                        <img src="https://randomuser.me/api/portraits/women/58.jpg" alt="" />
                    </div>

                    <div className={styles.description}>
                        <div>
                            <span>Name</span>Kaylee Reid
                        </div>
                        <div>
                            <span>Gender</span> Female
                        </div>
                        <div>
                            <span>Age</span> 45
                        </div>
                        <div>
                            <span>Occupation</span>House Wife
                        </div>
                        <div>
                            <span>Motivations</span> I want to be able to purchase my shabby chic furniture, and have it
                            delivered to my home. Kaylee found Trendy House by Googling "shabby chic table", and reading
                            reviews. She spends alot of time infront of personal computer researching, the quality of
                            peices. She wants the peices to look authentic shabby chic.
                        </div>

                        <div>
                            <span>Frustrations</span>Expensive or no home delivery option offered. Not able to filter by
                            color
                        </div>
                    </div>
                </div>
                <div className={styles.personaContainer}>
                    <div className={styles.avatar}>
                        <img src="https://randomuser.me/api/portraits/women/34.jpg" alt="" />
                    </div>

                    <div className={styles.description}>
                        <div>
                            <span>Name</span>Bertha Nicols
                        </div>
                        <div>
                            <span>Gender</span> Female
                        </div>
                        <div>
                            <span>Age</span>20
                        </div>
                        <div>
                            <span>Occupation</span>Student
                        </div>
                        <div>
                            <span>Motivations</span>I am a student in student shared housing, but shabby chic seems to
                            be all the rage at the moment. I like how it makes the place look vintage! I want some cheap
                            furniture that looks good, I also want it delivered as I do not drive.
                        </div>

                        <div>
                            <span>Frustrations</span>Expensive bits of furniture out of her budget
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
