import * as React from 'react';
import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import Intergrity from "../../content/IntegrityContent.json";
import Collaboration from "../../content/CollaborationContent.json"
import Exellence from "../../content/ExcellenceContent.json";
import Flexibility from "../../content/FlexibilityContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Line = lazy(()=>import("../../components/HolizontalLine"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        id="about"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="product"
      />
      <Line title="Our core values" />
      <ContentBlock
        type="right"
        title={Intergrity.title}
        content={Intergrity.text}
        icon="int.svg"
        id="mission"
      />
        <ContentBlock
        type="left"
        title={Collaboration.title}
        content={Collaboration.text}
        icon="collaboration.svg"
        id="mission"
      />
      <ContentBlock
        type="right"
        title={Exellence.title}
        content={Exellence.text}
        icon="excel.svg"
        id="mission"
      />
       <ContentBlock
        type="left"
        title={Flexibility.title}
        content={Flexibility.text}
        icon="moving.svg"
        id="mission"
      />
      <ContentBlock
        type="right"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
