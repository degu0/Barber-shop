import React from 'react';
import styles from './Home.module.css';


import illustration from '../../image/illustration.jpg';
import illustration2 from '../../image/illustration-2.jpg';

import hair1 from '../../image/Hair-Cut-1.jpg';
import hair2 from '../../image/Hair-Cut-2.jpg';
import hair4 from '../../image/Hair-Cut-4.jpg';
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
                    <h1 id={styles["title_welcome"]}>Transforme seu visual com estilo e expertise</h1>
                </div>
            </div>
            <div className={styles.division} id={styles["about"]}>
                <div className={styles.welcome}>
                    <h2>BEM-VINDO AO BARBA & CO</h2>
                    <h1>NÓS SOMOS UMA BARBEARIA</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam id necessitatibus dicta ipsum quod odio fuga magnam illo eum optio, accusantium, cupiditate autem temporibus sint alias recusandae, facere quibusdam quia?</p>
                </div>
                <div className={styles.images_welcome}>
                    <img src={illustration} alt="illustration barber shop" />
                    <img src={illustration2} alt="illustration barber shop" />
                </div>
                <div className={styles.working_hours}>
                    <h2>TRABALHO EM HORAS</h2>
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
                    <h2>LEIA MAIS SOBRE NÓS</h2>
                    <h1>SERVIÇO DA BARBEARIA</h1>
                    <hr />
                </div>
                <div className={styles.services}>
                    <div className={styles.div_services}>
                        <div className={styles.shadow_service}>
                            <div className={styles.image_service} id={styles["shaves"]}>
                                <h3>BARBA</h3>
                            </div>
                        </div>
                        <div className={styles.information_service}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quod quos impedit dignissimos.</p>
                        </div>
                    </div>
                    <div className={styles.div_services}>
                        <div className={styles.shadow_service}>
                            <div className={styles.image_service} id={styles["hair_cut_service"]}>
                                <h3>CORTE DE CABELO</h3>
                            </div>
                        </div>
                        <div className={styles.information_service}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quod quos impedit dignissimos.</p>
                        </div>
                    </div>
                    <div className={styles.div_services}>
                        <div className={styles.shadow_service}>
                            <div className={styles.image_service} id={styles["hair_wash"]}>
                                <h3>PENTEADO</h3>
                            </div>
                        </div>
                        <div className={styles.information_service}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quod quos impedit dignissimos.</p>
                        </div>
                    </div>
                    <div className={styles.div_services}>
                        <div className={styles.shadow_service}>
                            <div className={styles.image_service} id={styles["face_mask"]}>
                                <h3>MÁSCARA</h3>
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
                    <h2>PROCURANDO ESTILO DE CABELO</h2>
                    <h1>MODELOS DE CORTES</h1>
                    <hr />
                </div>
                <div className={styles.images}>
                    <img src={hair1} alt="Model hair cut" id={styles["img_1"]}/>
                    <img src={hair2} alt="Model hair cut" id={styles["img_2"]}/>
                    <img src={hair4} alt="Model hair cut" id={styles["img_3"]}/>
                    <img src={hair6} alt="Model hair cut" id={styles["img_4"]}/>
                </div>
                <div className={styles.text}>
                    <div className={styles.text_hair_cut} id={styles["hair_cut_1"]}>
                        <img src={razor} alt="icon" />
                        <div className={styles.text_model}>
                            <h2>10 ANOS DE EXPERIÊNCIA</h2>
                            <p>We have a unique approach to our work, founded on planning and insight development . We take time out to</p>
                        </div>
                    </div>
                    <div className={styles.text_hair_cut} id={styles["hair_cut_2"]}>
                        <img src={hairDress} alt="icon" />
                        <div className={styles.text_model}>
                            <h2>AMBIENTE HIGIÊNICO</h2>
                            <p>We have a unique approach to our work, founded on planning and insight development . We take time out to</p>
                        </div>
                    </div>
                    <div className={styles.text_hair_cut} id={styles["hair_cut_3"]}>
                        <img src={barberPole} alt="icon" />
                        <div className={styles.text_model}>
                            <h2>SAÚDE DE PELE</h2>
                            <p>We have a unique approach to our work, founded on planning and insight development . We take time out to</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;