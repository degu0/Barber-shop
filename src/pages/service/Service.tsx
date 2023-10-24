import React from 'react';
import styles from './Service.module.css';




const Service: React.FC = () => {
    return (
        <div className={styles.background}>
            <div className={styles.title_service}>
                <h1>SERVIÇOS</h1>
                <hr />
            </div>
            <div className={styles.barber_service}>
                <div className={styles.services}>
                    <div className={styles.shadow_service}>
                        <div className={styles.image_service} id={styles["hair_cut_service"]}>
                            <h3>CORTE DE CABELO</h3>
                        </div>
                    </div>
                    <div className={styles.information_service}>
                        <h2>CORTE DE CABELO</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae ipsa ducimus dicta, temporibus fugit commodi, corporis repellat aspernatur obcaecati laborum porro velit alias excepturi sit, in nihil recusandae eligendi!</p>
                    </div>
                </div>
                <div className={styles.services}>
                    <div className={styles.shadow_service} id={styles["service_2"]}>
                        <div className={styles.image_service} id={styles["shaves"]}>
                            <h3>BARBA</h3>
                        </div>
                    </div>
                    <div className={styles.information_service}>
                        <h2>BARBA</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae ipsa ducimus dicta, temporibus fugit commodi, corporis repellat aspernatur obcaecati laborum porro velit alias excepturi sit, in nihil recusandae eligendi!</p>
                    </div>
                </div>
                <div className={styles.services}>
                    <div className={styles.shadow_service}>
                        <div className={styles.image_service} id={styles["hair_wash"]}   >
                            <h3>PENTEADO</h3>
                        </div>
                    </div>
                    <div className={styles.information_service}>
                        <h2>PENTEADO</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae ipsa ducimus dicta, temporibus fugit commodi, corporis repellat aspernatur obcaecati laborum porro velit alias excepturi sit, in nihil recusandae eligendi!</p>
                    </div>
                </div>
                <div className={styles.services}>
                    <div className={styles.shadow_service} id={styles["service_4"]}>
                        <div className={styles.image_service}
                        id={styles["face_mask"]}>
                            <h3>MÁSCARA</h3>
                        </div>
                    </div>
                    <div className={styles.information_service}>
                        <h2>MÁSCARA</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae ipsa ducimus dicta, temporibus fugit commodi, corporis repellat aspernatur obcaecati laborum porro velit alias excepturi sit, in nihil recusandae eligendi!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;