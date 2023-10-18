import React from 'react';
import styles from './Home.module.css';


import illustration from '../../image/illustration.jpg';
import illustration2 from '../../image/illustration-2.jpg';

import hair1 from '../../image/Hair-Cut-1.jpg';
import hair2 from '../../image/Hair-Cut-2.jpg';
import hair3 from '../../image/Hair-Cut-3.jpg';
import hair4 from '../../image/Hair-Cut-4.jpg';
import hair5 from '../../image/Hair-Cut-5.jpg';
import hair6 from '../../image/Hair-Cut-6.jpeg';

import razor from '../../image/razor.png';
import barberPole from '../../image/barber-pole.png';
import hairDress from '../../image/hairdress.png';

const Home: React.FC = () => {
    return (
        <div>
            <div className={styles.division} id={styles["background"]}>
                <div className={styles.title_background}>
                    <h4>HEALTHY LIFESTYLE</h4>
                    <h1 id={styles["title_welcome"]}>The Stylish Beard Shaved</h1>
                </div>
            </div>
            <div className={styles.division} id={styles["about"]}>
                <div className={styles.welcome}>
                    <h2>WELCOME TO THE BOARD</h2>
                    <h1>WE ARE BARBER SHOP</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam id necessitatibus dicta ipsum quod odio fuga magnam illo eum optio, accusantium, cupiditate autem temporibus sint alias recusandae, facere quibusdam quia?</p>
                </div>
                <div className={styles.images_welcome}>
                    <img src={illustration} alt="illustration barber shop" />
                    <img src={illustration2} alt="illustration barber shop" />
                </div>
                <div className={styles.working_hours}>
                    <h2>WORKING HOURS</h2>
                    <div className={styles.week}>
                        <div id={styles["date"]}>
                            <ul>
                                <li>MON</li>
                                <li>TUE</li>
                                <li>WED</li>
                                <li>THU</li>
                                <li>FRI</li>
                                <li>SAT</li>
                                <li>SUN</li>
                            </ul>
                        </div>
                        <div id={styles["hours"]}>
                            <ul>
                                <li>08:00 - 17:00</li>
                                <li>08:00 - 17:00</li>
                                <li>08:00 - 17:00</li>
                                <li>08:00 - 17:00</li>
                                <li>08:00 - 17:00</li>
                                <li>08:00 - 12:00</li>
                                <li>CLOSED</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.division} id={styles["service"]}>
                <div className={styles.title_service}>
                    <h2>LEARN MORE ABOUT US</h2>
                    <h1>BARBER SERVICES</h1>
                    <hr />
                </div>
                <div className={styles.services}>
                    <div className={styles.div_services}>
                        <div className={styles.shadow_service}>
                            <div className={styles.image_service} id={styles["shaves"]}>
                                <h3>SHAVES</h3>
                            </div>
                        </div>
                        <div className={styles.information_service}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quod quos impedit dignissimos.</p>
                        </div>
                    </div>
                    <div className={styles.div_services}>
                        <div className={styles.shadow_service}>
                            <div className={styles.image_service} id={styles["hair_cut_service"]}>
                                <h3>HAIR CUT</h3>
                            </div>
                        </div>
                        <div className={styles.information_service}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quod quos impedit dignissimos.</p>
                        </div>
                    </div>
                    <div className={styles.div_services}>
                        <div className={styles.shadow_service}>
                            <div className={styles.image_service} id={styles["hair_wash"]}>
                                <h3>HAIR WASH</h3>
                            </div>
                        </div>
                        <div className={styles.information_service}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quod quos impedit dignissimos.</p>
                        </div>
                    </div>
                    <div className={styles.div_services}>
                        <div className={styles.shadow_service}>
                            <div className={styles.image_service} id={styles["face_mask"]}>
                                <h3>FACE MASK</h3>
                            </div>
                        </div>
                        <div className={styles.information_service}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quod quos impedit dignissimos?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.division} id={styles["hair-cut"]}>
                <div className={styles.title_hair_cut}>
                    <h2>LOOKING A BEAUTIFUL STYLE</h2>
                    <h1>HAIR CUT MODELS</h1>
                    <hr />
                </div>
                <div className={styles.images}>
                    <img src={hair1} alt="Model hair cut" />
                    <img src={hair2} alt="Model hair cut" />
                    <img src={hair3} alt="Model hair cut" />
                    <img src={hair4} alt="Model hair cut" />
                    <img src={hair5} alt="Model hair cut" />
                    <img src={hair6} alt="Model hair cut" />
                </div>
                <div className={styles.text}>
                    <div className={styles.text_hair_cut}>
                        <img src={razor} alt="icon" />
                        <div className={styles.text_model}>
                            <h2>10 YEARS EXPERIENCE</h2>
                            <p>We have a unique approach to our work, founded on planning and insight development . We take time out to</p>
                        </div>
                    </div>
                    <div className={styles.text_hair_cut}>
                        <img src={hairDress} alt="icon" />
                        <div className={styles.text_model}>
                            <h2>HYGIENIC ENVIRONMENTS</h2>
                            <p>We have a unique approach to our work, founded on planning and insight development . We take time out to</p>
                        </div>
                    </div>
                    <div className={styles.text_hair_cut}>
                        <img src={barberPole} alt="icon" />
                        <div className={styles.text_model}>
                            <h2>SKIN HEALTH</h2>
                            <p>We have a unique approach to our work, founded on planning and insight development . We take time out to</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;