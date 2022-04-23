import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam rerum
        reiciendis quisquam excepturi, laudantium voluptas illo consectetur
        placeat. A consequatur consectetur quis incidunt iure quidem atque
        facere nobis voluptas amet?
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
