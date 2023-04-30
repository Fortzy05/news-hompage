import React from "react";

import NewsBody from "./NewsBody";
import NewsItems from "./NewsItems";

function News() {
  return (
    <div className="cursor-pointer flex-col p-5 w-[400px]  bg-black text-white mt-8">
      <h2 className="mb-4 text-orange-300 hover:text-orange-400 text-[25px] font-bold">
        NEW
      </h2>
      <NewsItems
        title="Hydrogen VS Electric Cars"
        content="Will hydrogen-fueled cars ever catch up to EVs?"
      />

      <NewsItems
        title="The Downside of AI Artistry"
        content="What are the possible advers effects of on-demand AI image
            generation?"
      />

      <NewsItems
        title="Is VC Funding Drying Up?"
        content=" private funding by VC firms is down 50% YOY. We take a look at what
            that means."
      />
    </div>
  );
}

export default News;
