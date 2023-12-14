import Image from "next/image";
import Link from "next/link";
import styles from "@styles/components/Layout/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <Image priority width={204} height={74} alt="Brand logo" src="/logo.svg"></Image>
      </Link>
      <Link href="/">
        <Image
          width={55}
          height={38}
          alt="Hamburguer icon"
          src="/hamburguer.svg"
        ></Image>
      </Link>
    </header>
  );
}
