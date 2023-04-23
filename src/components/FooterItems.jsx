import React from "react";

function FooterItems(props) {
  return (
    <div className="flex space-x-4 ">
      <img className="h-28" src={props.image} alt="rectro-image" />
      <div className="gap-2 px-2">
        <span className="text-3xl text-slate-300 font-semibold">
          {props.number}
        </span>
        <h4 className="font-bold pb-2">{props.title}</h4>
        <p className="text-slate-500 font-semibold ">{props.content}</p>
      </div>
    </div>
  );
}

export default FooterItems;
