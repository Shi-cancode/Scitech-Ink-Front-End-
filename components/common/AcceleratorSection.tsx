import React from "react";
import AcceleratorCard from "./AcceleratorCard";

const AcceleratorSection = () => {
  return (
    <section className="gap-6 py-[135px] px-8 grid grid-cols-2">
      <AcceleratorCard variant="primary" />
      <AcceleratorCard variant="secondary" />
    </section>
  );
};

export default AcceleratorSection;
