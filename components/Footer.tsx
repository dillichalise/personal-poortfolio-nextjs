import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Footer: NextPage = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        <a
          className="cc-instagram btn btn-link"
          href="https://www.instagram.com/dilli.chalise/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-instagram fa-2x" aria-hidden="true" />
        </a>
        <a
          className="cc-twitter btn btn-link"
          href="https://twitter.com/dillichalise"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-twitter fa-2x" aria-hidden="true" />
        </a>

        <a
          className="cc-github btn btn-link"
          href="https://github.com/dillichalise"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github fa-2x" aria-hidden="true" />
        </a>
        <a
          className="cc-github btn btn-link"
          href="https://www.linkedin.com/in/dilli-chalise-573458134/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
        </a>
        <a className="cc-google-plus btn btn-link" href="" target="_blank">
          <i className="fa fa-google-plus fa-2x" aria-hidden="true" />
        </a>
      </div>
      <div className="text-center text-muted">
        <p>&copy; All rights reserved.</p>
      </div>
    </footer>
  );
};

export { Footer };
