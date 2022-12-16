import fs from "fs";
import styles from "../styles/Home.module.css";

export default function Home({ fileContent }: { fileContent: string }) {
  return <div className={styles.container}>{fileContent}</div>;
}
export async function getServerSideProps() {
  const fileContent = String(await fs.readFileSync(__filename));
  return {
    props: { fileContent }, // will be passed to the page component as props
  };
}
