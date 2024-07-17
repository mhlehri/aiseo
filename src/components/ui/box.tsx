export default function Box(item: any) {
  return (
    <div
      className="border-2 flex-col flex place-content-between border-slate-500 rounded-2xl px-4 sm:px-6 py-10 sm:py-12 max-w-[355px] w-full relative"
      style={{
        background: "linear-gradient(228.68deg, #2F3241 1.66%, #0F172A 42.04%)",
      }}
    >
      {item.tag && (
        <div className="absolute border font-medium border-[#5AE8AF] bg-[#14734C] right-6 top-5 rounded-full py-1 px-4">
          {item.tag}
        </div>
      )}

      <div>
        <div className="space-y-3 mb-8 sm:mb-12">
          <p className="text-slate-200 font-medium text-lg">{item.title}</p>
          <h2 className="text-4xl text-slate-50 font-semibold">
            ${item.price}
            <span className="text-base">/mo</span>
          </h2>
        </div>
        <ul className="*:text-slate-100 space-y-3 sm:space-y-4">
          {item.features.map((features: string) => (
            <li className="flex gap-2" key={`${features}_${item.id}`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_112)">
                  <path
                    d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                    fill="#11553A"
                  />
                  <path
                    d="M5.47447 10.6465L8.06048 13.2325L14.5255 6.76746"
                    stroke="#5AE8AF"
                    strokeWidth="1.53846"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_112">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              {features}
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-[#7E4BFA] border duration-200 hover:bg-[#7d4bfab9] border-[#C2A8FF] mt-12  w-full rounded font-medium py-3">
        Start {item.title} Plan
      </button>
    </div>
  );
}
