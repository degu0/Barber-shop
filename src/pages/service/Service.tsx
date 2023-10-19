import React from 'react';
import styles from './Service.module.css';




const Service: React.FC = () => {
    return (
        <div className={styles.background}>
            <div className={styles.title_service}>
                <h1>SERVICES</h1>
                <hr />
            </div>
            <div className={styles.barber_service}>
                <div className={styles.services}>
                    <div className={styles.shadow_service}>
                        <div className={styles.image_service} id={styles["hair_cut_service"]}>
                            <h3>HAIR CUT</h3>
                        </div>
                    </div>
                    <div className={styles.information_service}>
                        <h2>HAIR CUT</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae ipsa ducimus dicta, temporibus fugit commodi, corporis repellat aspernatur obcaecati laborum porro velit alias excepturi sit, in nihil recusandae eligendi!</p>
                    </div>
                </div>
                <div className={styles.services}>
                    <div className={styles.shadow_service} id={styles["service_2"]}>
                        <div className={styles.image_service} id={styles["shaves"]}>
                            <h3>SHAVES</h3>
                        </div>
                    </div>
                    <div className={styles.information_service}>
                        <h2>SHAVES</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae ipsa ducimus dicta, temporibus fugit commodi, corporis repellat aspernatur obcaecati laborum porro velit alias excepturi sit, in nihil recusandae eligendi!</p>
                    </div>
                </div>
                <div className={styles.services}>
                    <div className={styles.shadow_service}>
                        <div className={styles.image_service} id={styles["hair_wash"]}   >
                            <h3>HAIR WASH</h3>
                        </div>
                    </div>
                    <div className={styles.information_service}>
                        <h2>HAIR WASH</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae ipsa ducimus dicta, temporibus fugit commodi, corporis repellat aspernatur obcaecati laborum porro velit alias excepturi sit, in nihil recusandae eligendi!</p>
                    </div>
                </div>
                <div className={styles.services}>
                    <div className={styles.shadow_service} id={styles["service_4"]}>
                        <div className={styles.image_service}
                        id={styles["face_mask"]}>
                            <h3>FACE MASK</h3>
                        </div>
                    </div>
                    <div className={styles.information_service}>
                        <h2>FACE MASK</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae ipsa ducimus dicta, temporibus fugit commodi, corporis repellat aspernatur obcaecati laborum porro velit alias excepturi sit, in nihil recusandae eligendi!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;