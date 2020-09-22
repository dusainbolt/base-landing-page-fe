import React from "react";
import FadeIn from "react-fade-in";
import { actions } from "./actions";
import BackTop from "../../components/BackTop";

function Home() {
  return (
    <div>
      <FadeIn delay={500} transitionDuration={1000}>
        <div>dsdadsa</div>
      </FadeIn>
      <FadeIn delay={1000} transitionDuration={1000}>
        <div>dsdadsa</div>
      </FadeIn>
      <FadeIn delay={1000} transitionDuration={1000}>
        <div>dsdadsa</div>
      </FadeIn>
      <FadeIn delay={1000} transitionDuration={1000}>
        <div>dsdadsa</div>
      </FadeIn>
      <div style={{ marginTop: "50px" }}></div>
      <FadeIn delay={1000} transitionDuration={1000}>
        <div>dsdadsa</div>
      </FadeIn>
      <BackTop />
    </div>
  );
}

export default Home;
