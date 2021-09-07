import React from "react";
import { CarouselProvider } from "pure-react-carousel";

import Home from "../";
import Button from "../../../components/Button";

import useStore from "../../../store/store";

import Settings from "../../../assets/icons/settings.svg";

import { TOKEN_CARDS } from "../../../const";

import * as styles from "./HomeWrapper.module.scss";

import "pure-react-carousel/dist/react-carousel.es.css";

function HomeWrapper() {
  const setSettings = useStore((state) => state.setSettings);

  return (
    <CarouselProvider
      className={styles.Carousel}
      naturalSlideWidth={351}
      naturalSlideHeight={219}
      totalSlides={TOKEN_CARDS.length}
    >
      <div className={styles.MainBar}>
        <div className={styles.NetworkName}>
          Conun <br /> Test Network
        </div>
        <Button
          type="button"
          onClick={() => setSettings(true)}
          noStyle
          className={styles.Settings}
        >
          <Settings />
        </Button>
      </div>
      <Home />
    </CarouselProvider>
  );
}

export default HomeWrapper;
