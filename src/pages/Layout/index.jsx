import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";
import CommonHeader from "../../components/Admin/Header";
import { showBodyHeader, showTopHeader } from "../../utils";
import Footer from "../../components/Admin/Footer";

const { Header, Content } = Layout;
function App({ component: Mycomponent, classes, name, ...remainProps }) {

  const path = window.location.pathname;

  useEffect(() => {
    const headerRef = document.getElementById("headerWeb");
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);
    if(path !== "/" && headerRef && headerRef?.style){
      showTopHeader(headerRef);
    }
  }, []);

  const handleScroll = event => {
    const headerRef = document.getElementById("headerWeb");
    if(path === "/" && headerRef && headerRef?.style){
      let scrollTop = Math.round(event.target.scrollingElement.scrollTop);
      if (scrollTop > 64) {
        showTopHeader(headerRef);
      } else if (scrollTop < 64) {
        showBodyHeader(headerRef);
      }
    }else if(headerRef && headerRef?.style){
      showTopHeader(headerRef);
    }
  };
  return (
    <Route
      {...remainProps}
      render={routeProps => {
        return (
          <Layout className="layout-web">
            <Header className="layout-web__header-web">
              <CommonHeader />
            </Header>
            <Layout className="site-content">
              <Content>
                <Mycomponent {...routeProps} />
                <Footer />
              </Content>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}

export default App;
