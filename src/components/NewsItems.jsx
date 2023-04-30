import React from "react";

function NewsItems({ title, content }) {
  return (
    <div>
      <div className="border-b-2">
        <h3 className="font-bold hover:text-orange-300 text-white mb-2 ">
          {title}
        </h3>
        <p className="text-sm font-extralight text-slate-300">{content}</p>
      </div>
    </div>
  );
}

export default NewsItems;
