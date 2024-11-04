import React from "react";
import AboutItem from "./AboutItem";

const About = () => {
  return (
    <section className="flex max-md:flex-wrap items-center max-sm:flex-col justify-between max-md:justify-center gap-4 mt-6 py-2">
      <AboutItem count={"4,324"} title={"Posts"} />
      <AboutItem count={"3,234"} title={"Followers"} />
      <AboutItem count={"1,234"} title={"Following"} />
    </section>
  );
};

export default About;
