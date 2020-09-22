import React from "react";
import FadeIn from "react-fade-in";
import { actions } from "./actions";
import BackTop from "../../components/BackTop";
import NotFound from "../NotFound";
function Home() {
  return (
    <div>
      <FadeIn delay={500} transitionDuration={1000}>
        <NotFound />
      </FadeIn>    
    </div>
  );
}

export default Home;
