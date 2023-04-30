import React from "react";
import ImageWeb from "../assets/image-web-3-desktop.jpg";
import News from "./News";

function NewsBody() {
  return (
    <section className="p-[1.25rem] pt-0 ">
      <div className="">
        <img
          className="mb-2 min-w-[768px]"
          src={ImageWeb}
          alt="image-web-desktop"
        />
        <div>
          <article>
            <h1 className="text-[2rem] font-bold my-4 mx-0">
              The Bright Future of web 3.0?
            </h1>
            <div className="flex-col">
              <p className="text-slate-700 mb-4 leading-loose ">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="py-3 tracking-[0.2rem] font-semibold hover:bg-black bg-red-400 text-[1rem]  items-center text-white px-8">
                READ MORE
              </button>
            </div>
          </article>
        </div>
      </div>
      <News />
    </section>
  );
}

export default NewsBody;
