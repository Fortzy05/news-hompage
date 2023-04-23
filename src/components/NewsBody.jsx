import React from "react";
import ImageWeb from "../assets/image-web-3-desktop.jpg";
function NewsBody() {
  return (
    <div>
      <div>
        <img
          className="mb-2 min-w-[768px]"
          src={ImageWeb}
          alt="image-web-desktop"
        />
        <div>
          <article>
            <h1 className="text-[37px] font-bold pl-9 px-0">
              The Bright Future of web 3.0?
            </h1>
            <div className="flex-col  pl-11">
              <p className="text-slate-700">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="px-5 hover:bg-black  mt-6 bg-red-400 py-2 items-center text-white">
                READ MORE
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default NewsBody;
