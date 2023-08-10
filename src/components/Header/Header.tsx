import { FC } from "react";
import styles from "./Header.module.css";

const infoObj = {
  firstname: "Иван",
  lastname: "Иванов",
  telegram: "https://telegram.org/?1",
  github: "https://github.com",
  resume: "https://resume.io",
};

const iconfolder = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.71002 3.96935L3.08181 2.52449C3.15733 2.44494 3.26221 2.3999 3.37189 2.3999H5.83441C5.9405 2.3999 6.04224 2.44205 6.11725 2.51706L7.48294 3.88275C7.55795 3.95776 7.6597 3.9999 7.76578 3.9999H13.4344C13.5405 3.9999 13.6422 4.04205 13.7173 4.11706L14.2829 4.68275C14.358 4.75776 14.4001 4.8595 14.4001 4.96559V12.6342C14.4001 12.7403 14.358 12.842 14.2829 12.9171L13.7173 13.4827C13.6422 13.5578 13.5405 13.5999 13.4344 13.5999H2.59C2.46983 13.5999 2.35602 13.5459 2.28005 13.4528L1.69015 12.7296C1.63191 12.6582 1.6001 12.5689 1.6001 12.4768V4.24476C1.6001 4.14227 1.63944 4.04368 1.71002 3.96935Z"
      fill="#CCCCCC"
    />
  </svg>
);

export const Header: FC = () => {
  return (
    <>
      <div className={styles.block}>
        <span className={styles.icon}>
          {infoObj.firstname.substring(0, 1)}
          {infoObj.lastname.substring(0, 1)}
        </span>
        <label className={styles.username}>
          {infoObj.firstname} {infoObj.lastname}
        </label>
        <span className={styles.link}>
          <a href={infoObj.telegram}>{iconfolder}Telegram</a>
          <a href={infoObj.github}>{iconfolder}GitHub</a>
          <a href={infoObj.resume}>{iconfolder}Resume</a>
        </span>
      </div>
      <hr className={styles.hr} />
    </>
  );
};