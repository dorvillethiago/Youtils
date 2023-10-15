import styles from "./Title.module.scss";

export default function Title() {
  return (
    <div style={styles}>
      <h1 className={styles.text}>Download any <strong id={styles.song}>song</strong> you want!</h1>
    </div>
  );
}
  