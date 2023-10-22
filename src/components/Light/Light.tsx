import styles from "./Light.module.scss";
import MouseFollower from "./MouseFollower";

export default function Light() {
  return (
    <div className={styles.container}>
      <MouseFollower/>
    </div>
  );
}
