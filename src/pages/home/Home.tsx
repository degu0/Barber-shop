import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div>
            <div className={styles.division} id={styles["background"]}>
                <div className={styles.title_background}>
                    <h4>HEALTHY LIFESTYLE</h4>
                    <h1>The Stylish Beard Shaved</h1>
                </div>
            </div>
            <div className={styles.division} id={styles["about"]}>
                <div className={styles.welcome}>
                    <h2>WELCOME TO THE BOARD</h2>
                    <h2>WE ARE BARBER SHOP</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam id necessitatibus dicta ipsum quod odio fuga magnam illo eum optio, accusantium, cupiditate autem temporibus sint alias recusandae, facere quibusdam quia?</p>
                </div>
                <div className={styles.images_welcome}>
                    <div className={styles.images_example}></div>
                    <div className={styles.images_example}></div>
                </div>
                <div className={styles.working_hours}>
                    <h2>WORKING HOURS</h2>
                    <div className={styles.images_example_hours}></div>
                </div>
            </div>
            <div className={styles.division} id={styles["service"]}>
                <div className={styles.title_service}>
                    <h2>LEARN MORE ABOUT US</h2>
                    <h1>BARBER SERVICES</h1>
                    <hr />
                </div>
                <div className={styles.services_images}>
                    <div className={styles.services}></div>
                    <div className={styles.services}></div>
                    <div className={styles.services}></div>
                    <div className={styles.services}></div>
                </div>
            </div>
            <div className={styles.division} id={styles["hair-cut"]}>
                <div className={styles.title_hair_cut}>
                    <h2>LOOKING A BEAUTIFUL STYLE</h2>
                    <h1>HAIR CUT MODELS</h1>
                    <hr />
                </div>
                <div className={styles.images}>
                    <div className={styles.imagens_models}></div>
                    <div className={styles.imagens_models}></div>
                    <div className={styles.imagens_models}></div>
                    <div className={styles.imagens_models}></div>
                    <div className={styles.imagens_models}></div>
                    <div className={styles.imagens_models}></div>
                </div>
                <div className={styles.text}>
                    <div className={styles.text_example}></div>
                    <div className={styles.text_example}></div>
                    <div className={styles.text_example}></div>
                </div>
            </div>
        </div>
    )
}

export default Home;