import styles from "./Personas.module.scss";

export const Personas = () => {
    return (
        <section className={styles.personas}>
            <h1 className={styles.heading}>Personas</h1>
            <div className={styles.contents}>
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
