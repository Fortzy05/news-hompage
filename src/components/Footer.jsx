import React from "react";
import RectroImg from "../assets/image-retro-pcs.jpg";
import LaptopImage from "../assets/image-top-laptops.jpg";
import GamingImage from "../assets/image-gaming-growth.jpg";

import FooterItems from "./FooterItems";
function Footer() {
  return (
    <div className="mt-24 mb-24 flex space-x-3">
      <FooterItems
        image={RectroImg}
        title="Reviving Retro PCs"
        number="01"
        content="What happens when old PCs are given modern upgrades."
      />
      <FooterItems
        image={LaptopImage}
        title="Top 10 Laptops of 2022"
        number="02"
        content="Our best picks for various needs and budgets."
      />
      <FooterItems
        image={GamingImage}
        title="The Growth of Gaming "
        number="03"
        content="How the pandemic has sparked fresh opportunities."
      />
    </div>
  );
}

export default Footer;
