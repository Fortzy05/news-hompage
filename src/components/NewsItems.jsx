import React from "react";

function NewsItems({ title, content }) {
  return (
    <div>
      <div>
        <h3 className="font-bold hover:text-orange-300 ">{title}</h3>
        <p className="text-sm font-extralight text-slate-300 ">{content}</p>
      </div>
    </div>
  );
}

export default NewsItems;
