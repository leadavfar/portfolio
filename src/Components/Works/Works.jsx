import React from "react";
import { Link } from "react-router-dom";
import carshop from "../../Images/carShop.jpg";
import foodpage from "../../Images/theFoodPage.jpg";
import portfolio from "../../Images/portfolio.jpg";
import weatherapp from "../../Images/weatherApp.jpg";
import notesapp from "../../Images/notesNodeApp.jpg";
import lechiefpage from "../../Images/leChiefPage.jpg";
import ticTacToe from "../../Images/ticTacToe.jpg";
import Styles from "./Works.module.css";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

export default function Works() {
  return (
    <div id="works">
      <hr />
      <h1 className={Styles.title}>Projects</h1>
      <h2 className={Styles.subtitle}>Some of the projects I have worked on</h2>

      <div className={Styles.container}>
        {/* LE CHIEF PAGE */}
        <div className={Styles.card}>
          <div className={Styles.image}>
            <img
              className={Styles.image__img}
              src={lechiefpage}
              alt="not found"
            />

            <div className={Styles.image__overlay}>
              <div className={Styles.image__links}>
                <a
                  href="https://github.com/leadavfar/le-chief-page.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={Styles.image__link__container}>
                    {" "}
                    <SiGithub className={Styles.image__link} />
                  </div>
                </a>
                <a
                  href="https://le-chief-page.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={Styles.image__link__container}>
                    {" "}
                    <FaLink className={Styles.image__link} />
                  </div>
                </a>
                <Link to="/Works/LeChiefPageInfo">
                  <div className={Styles.image__link__container}>
                    {" "}
                    <BsInfoCircle className={Styles.image__link} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={Styles.description}>
            <h2>Le Chief Page</h2>
            <p> React App </p>
          </div>
        </div>

        {/* CARSHOP */}
        <div className={Styles.card}>
          <div className={Styles.image}>
            <img className={Styles.image__img} src={carshop} alt="not found" />

            <div className={Styles.image__overlay}>
              <div className={Styles.image__links}>
                <a
                  href="https://github.com/leadavfar/Proyecto-Final.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={Styles.image__link__container}>
                    {" "}
                    <SiGithub className={Styles.image__link} />
                  </div>
                </a>
                <a
                  href="https://proyecto-final-one.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={Styles.image__link__container}>
                    {" "}
                    <FaLink className={Styles.image__link} />
                  </div>
                </a>
                <Link to="/Works/CarshopInfo">
                  <div className={Styles.image__link__container}>
                    {" "}
                    <BsInfoCircle className={Styles.image__link} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={Styles.description}>
            <h2>Carshop</h2>
            <p> E-Commerce </p>
          </div>
        </div>

        {/* WEATHER APP */}
        <div className={Styles.card}>
          <div className={Styles.image}>
            <img
              className={Styles.image__img}
              src={weatherapp}
              alt="not found"
            />

            <div className={Styles.image__overlay}>
              <div className={Styles.image__links}>
                <a
                  href="https://github.com/leadavfar/weather-app.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={Styles.image__link__container}>
                    {" "}
                    <SiGithub className={Styles.image__link} />
                  </div>
                </a>
                <a
                  href="https://weather-react-app-ten.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={Styles.image__link__container}>
                    {" "}
                    <FaLink className={Styles.image__link} />
                  </div>
                </a>
                <Link to="/Works/WeatherAppInfo">
                  <div className={Styles.image__link__container}>
                    {" "}
                    <BsInfoCircle className={Styles.image__link} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={Styles.description}>
            <h2>Weather App</h2>
            <p> React App </p>
          </div>
        </div>

        {/* NOTES NODE APP */}
        <div className={Styles.card}>
          <div className={Styles.image}>
            <img className={Styles.image__img} src={notesapp} alt="not found" />

            <div className={Styles.image__overlay}>
              <div className={Styles.image__links}>
                <a
                  href="https://github.com/leadavfar/notes-app.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={Styles.image__link__container}>
                    {" "}
                    <SiGithub className={Styles.image__link} />
                  </div>
                </a>
                <a
                  href="https://notes-app-production-0f62.up.railway.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={Styles.image__link__container}>
                    {" "}
                    <FaLink className={Styles.image__link} />
                  </div>
                </a>
                <Link to="/Works/NotesNodeAppInfo">
                  <div className={Styles.image__link__container}>
                    {" "}
                    <BsInfoCircle className={Styles.image__link} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={Styles.description}>
            <h2>Notes App</h2>
            <p> React App </p>
          </div>
        </div>

        {/* TIC TAC TOE */}
        <div className={Styles.card}>
          <div className={Styles.image}>
            <img
              className={Styles.image__img}
              src={ticTacToe}
              alt="not found"
            />

            <div className={Styles.image__overlay}>
              <div className={Styles.image__links}>
                <a
                  href="https://github.com/leadavfar/tateti.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={Styles.image__link__container}>
                    {" "}
                    <SiGithub className={Styles.image__link} />
                  </div>
                </a>
                <a
                  href="https://tic-tac-toe-david.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={Styles.image__link__container}>
                    {" "}
                    <FaLink className={Styles.image__link} />
                  </div>
                </a>
                <Link to="/Works/TicTacToeInfo">
                  <div className={Styles.image__link__container}>
                    {" "}
                    <BsInfoCircle className={Styles.image__link} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={Styles.description}>
            <h2>Tic-Tac-Toe</h2>
            <p> Angular App </p>
          </div>
        </div>

        {/* PORTFOLIO */}
        <div className={Styles.card}>
          <div className={Styles.image}>
            <img
              className={Styles.image__img}
              src={portfolio}
              alt="not found"
            />

            <div className={Styles.image__overlay}>
              <div className={Styles.image__links}>
                <Link to="/Works/PortfolioInfo">
                  <div className={Styles.image__link__container}>
                    {" "}
                    <BsInfoCircle className={Styles.image__link} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={Styles.description}>
            <h2>Portfolio</h2>
            <p> React App </p>
          </div>
        </div>
      </div>
    </div>
  );
}
