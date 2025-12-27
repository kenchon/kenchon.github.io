import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import Emphasis from "../@narative/gatsby-theme-novela/components/Emphasis/Emphasis";
import { Link } from "gatsby"

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px", paddingBottom: "500px", maxWidth: "780px"}}>
          <Headings.h1><Emphasis>Oops ...</Emphasis></Headings.h1>
          <div style={{marginTop: "30px"}}></div>
          <img width="100%" src="https://lh3.googleusercontent.com/Vl8oKfNwRSdk5w-zpnMIXqh7dy4CWH6wMNQtzEfBtwzSyS2ImDulAjTSlaCJ_GQwZp5XNe0GoyNHB1rdWbF42_ShxvyxbmM6Kk1hIgf_xuXgesjR8D5Kch0z9JfRSfeq-rBI-zDFZxk" alt="I'm sorry!"></img>
          <div style={{marginTop: "30px"}}></div>
          <Headings.h1>Click <Link to="/">Here</Link> To Return!</Headings.h1>
        </div>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
