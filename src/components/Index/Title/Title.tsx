import styles from "./Title.module.scss";

interface TitleProps {
    className?: string;
}

export default function Title({className}: TitleProps) {
  return (
    <div className={className}>
      <h1 className={styles.text}>Download any <strong id={styles.song}>song</strong> you want!</h1>
    </div>
  );
}
  