import React from "react";

export default function Switch() {
  return (
    <label
      htmlFor="BasicSwitch_NavigateUI"
      className="relative flex h-7 w-12 items-center rounded-full bg-[#7e4bfa] px-1"
    >
      <input
        type="checkbox"
        className="peer/toggle hidden w-10"
        id="BasicSwitch_NavigateUI"
      />
      <div className="z-20 size-5 rounded-full bg-white duration-200 translate-x-0 peer-checked/toggle:translate-x-full"></div>
    </label>
  );
}
