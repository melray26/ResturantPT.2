import "./styles.css";
import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/NavBar";
// import { IParallax } from "@react-spring/web";
// import { animated, useSpring } from "react-spring";

const Page = ({ offset, color }) => (
  <>
    {/* add reusable layers here as Page component*/}
    {/*Background Parallax layer -- behind all other layers */}
    <ParallaxLayer offset={offset} speed={1}>
      <div className="background">{<h3></h3>}</div>
    </ParallaxLayer>

    {/*Color Parallax Layer -- over background layer */}
    <ParallaxLayer offset={offset} speed={2.1}>
      <div className={`${color}`} />
    </ParallaxLayer>

    {/*Text Parallax Layer -- over color and backgronund layers */}
    <ParallaxLayer offset={offset} speed={1}>
      <div className="text">
        <span>Restaurant Reviews</span>
      </div>
    </ParallaxLayer>
  </>
);

export default function App() {
  /* your return here to call what is shown on the page*/

  return (
    <div>
      <Navbar />
      <Parallax pages={3} className="container" horizontal>
        <Page offset={0} color="red" />
        <Page offset={1} color="purple" />
        <Page offset={2} color="pink" />
      </Parallax>
    </div>
  );
}
