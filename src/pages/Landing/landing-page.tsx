import React from "react";
import { Header, Sidebar, Slider } from "../../components";
import CardList from "../../components/CardList/card-list";
import MainLayout from "../../layouts/main-layout";
import cardData from "../../contents/cardData";

const navLinks = ["Web Development", "Sports", "Education"];

const LandingPage = (): JSX.Element => {
  return (
    <MainLayout
      header={<Header title="My Blog" navLinks={navLinks} />}
      slider={<Slider />}
      sidebar={<Sidebar />}
      content={<CardList data={cardData} />}
    />
  );
};

export default LandingPage;
