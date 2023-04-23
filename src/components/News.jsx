import React from "react";

import NewsBody from "./NewsBody";
import NewsItems from "./NewsItems";

function News() {
  return (
    <div className="flex p-2 mt-4 gap-5 space-x-2 ">
      <NewsBody />
      <div className="cursor-pointer flex-col p-4 w-[400px]  bg-black text-white ">
        <h1 className="text-orange-300 hover:text-orange-400 text-[25px] font-bold py-2">
          NEW
        </h1>
        <NewsItems
          title="Hydrogen VS Electric Cars"
          content="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <hr className="mx-auto my-2 bg-slate-300  rounded md:my-10 dark:gray-700" />
        <NewsItems
          title="The Downside of AI Artistry"
          content="What are the possible advers effects of on-demand AI image
            generation?"
        />

        <hr className=" mx-auto my-2 bg-slate-300 rounded md:my-10 dark:gray-700" />
        <NewsItems
          title="Is VC Funding Drying Up?"
          content=" private funding by VC firms is down 50% YOY. We take a look at what
            that means."
        />
      </div>
    </div>
  );
}

export default News;
