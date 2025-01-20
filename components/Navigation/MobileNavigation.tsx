import * as React from "react";
import { cubicBezier, motion } from "framer-motion";

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const closedTansition = {
  duration: 1,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">DONT BE A STRANGER</h4>
          <div className="navigation-top__left--links">
            <a
              href="https://github.com/ChoudhariDivya003"
              rel="noopener"
              target="_blank"
            >
              👾 GH
            </a>
            <a
              href="https://x.com/Divvyyaa_003"
              rel="noopener"
              target="_blank"
            >
              🐦 TW
            </a>
            <a
              href="https://www.linkedin.com/in/divya-choudhari-ab3487270/"
              rel="noopener"
              target="_blank"
            >
              💼 LD
            </a>
            <a
              href="https://www.instagram.com/__divvyyaa__003/"
              rel="noopener"
              target="_blank"
            >
              📸 IN
            </a>
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <a
            href="mailto:divyachoudhari22@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        <div className="navigation-bottom__projects">
          <a
            target="_blank"
            rel="noopener"
            href="https://alexxandria.vercel.app/"
            className="navigation-bottom__projects-card"
          >
            <img src="/webp/shareme.webp" alt="alexxandria" />
            <h2>
              ShareMe
              <br />
              
            </h2>
          </a>
          <a
            href="https://safarika-adeola.netlify.app/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/safarika-nav.webp" alt="safarika" />
            <h2>Revolutionalizing
              <br />
              Shopping<br >
              </br>
              Experience
            </h2>
          </a>
          <a
            href="https://adeolaadeoti.netlify.app/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/adeola-1.webp" alt="adeola" />
            <h2>
              Online Book
              <br />
              Reading
            </h2>
          </a>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
