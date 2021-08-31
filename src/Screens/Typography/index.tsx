import styles from "./Typography.module.scss";

export const Typography = () => {
    return (
        <section className={styles.typography}>
            <h1 className={styles.heading}>Typography</h1>
            <div className={styles.contents}>
                <div>
                    <h1>Header One</h1>
                    <span>Libre Baskerville, bold, 3.2rem, #c39738</span>
                </div>
                <div>
                    <h2>Header Two</h2>
                    <span>Libre Baskerville, 3rem, #c39738</span>
                </div>
                <div>
                    <h3>Header Three</h3>
                    <span>Libre Baskerville, 2.5rem, #c39738</span>
                </div>
                <div>
                    <h4>Header Four</h4>
                    <span>Nunito Sans, 1.5rem, #555, uppercase, letterspacing: 0.2rem</span>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, necessitatibus explicabo,
                        fugiat consectetur dicta quis ullam praesentium velit impedit corporis reprehenderit beatae
                        iusto, possimus voluptate deleniti alias maxime aut quaerat magnam illo officiis dolore?
                        Repellat quia perspiciatis corrupti natus fugiat modi, unde quae vitae deleniti provident
                        exercitationem nemo vel sunt dolores voluptas. Suscipit odit, repellendus eum eos dolor
                        laboriosam? Necessitatibus fugit assumenda eum ab perspiciatis rem, at sequi dolorem rerum qui
                        omnis earum accusantium quas delectus hic consequuntur praesentium quasi fuga quis in beatae
                        harum sapiente doloribus. Tempora laudantium dolores illo minima officiis et minus veritatis quo
                        itaque aliquam. Magni.
                    </p>
                    <span>Nunito Sans 1rem #999 lineheight:2rem</span>
                </div>

                <div>
                    <a href="/">This is a a link</a>
                    <span>Libre Baskerville #c39738</span>
                </div>
            </div>
        </section>
    );
};
