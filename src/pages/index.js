import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="CRS API Documentation"
      description="Contract-first API reference for CRS">
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1">CRS API Documentation</Heading>
          <p className="hero__subtitle">
            Contract-first API reference for the CRS platform.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs">
              Open API documentation
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
