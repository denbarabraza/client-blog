import { Test } from '@/components/Test';

import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Test />
      </div>
    </main>
  );
};

export default Home;
