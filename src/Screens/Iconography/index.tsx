import styles from "./Iconography.module.scss";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FiTwitter, FiMenu } from "react-icons/fi";
import { RiPinterestLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";
import { GiFlowerPot, GiCutDiamond } from "react-icons/gi";
import { AiOutlineFormatPainter } from "react-icons/ai";

export const Iconography = (): JSX.Element => {
    return (
        <section className={styles.iconography}>
            <h1 className={styles.heading}>Iconography</h1>
            <div className={styles.contents}>
                <div className={styles.socialIcons}>
                    <h2>Social Icons</h2>
                    <p>2rem font size. 1rem padding</p>
                    <div className={styles.contents}>
                        <ul className={`${styles.light} ${styles.iconBox}`}>
                            <li>
                                <TiSocialFacebookCircular />
                            </li>
                            <li>
                                <FiTwitter />
                            </li>
                            <li>
                                <RiPinterestLine />
                            </li>
                        </ul>
                        <ul className={`${styles.iconBox} ${styles.dark}`}>
                            <li>
                                <TiSocialFacebookCircular />
                            </li>
                            <li>
                                <FiTwitter />
                            </li>
                            <li>
                                <RiPinterestLine />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.contents}>
                    <div className={styles.navigationIcons}>
                        <h2>Navigation Icons</h2>
                        <p>1.5rem font size. 1rem padding</p>

                        <div className={styles.contents}>
                            <ul className={`${styles.light} ${styles.iconBox}`}>
                                <li>
                                    <FaSearch />
                                </li>
                                <li>
                                    <MdShoppingBasket />
                                </li>
                                <li>
                                    <FiMenu />
                                </li>
                            </ul>
                            <ul className={`${styles.iconBox} ${styles.dark}`}>
                                <li>
                                    <FaSearch />
                                </li>
                                <li>
                                    <MdShoppingBasket />
                                </li>
                                <li>
                                    <FiMenu />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.contents}>
                    <div className={styles.genericIcons}>
                        <h2>Generic Icons</h2>
                        <p>3rem font size. 1rem padding</p>

                        <div className={styles.contents}>
                            <ul className={`${styles.light} ${styles.iconBox}`}>
                                <li>
                                    <GiFlowerPot />
                                </li>
                                <li>
                                    <AiOutlineFormatPainter />
                                </li>
                                <li>
                                    <GiCutDiamond />
                                </li>
                            </ul>
                            <ul className={`${styles.iconBox} ${styles.dark}`}>
                                <li>
                                    <GiFlowerPot />
                                </li>
                                <li>
                                    <AiOutlineFormatPainter />
                                </li>
                                <li>
                                    <GiCutDiamond />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
