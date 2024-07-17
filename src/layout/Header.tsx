import Image from "next/image";

export default function Header() {
  return (
    <div className="mx-auto max-w-7xl py-8 flex items-center justify-between text-slate-100">
      <p className="flex items-center gap-2">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.25 9L3.75 9"
            stroke="#F8FAFC"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 14.25L3.75 9L9 3.75"
            stroke="#F8FAFC"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </p>
      <div className="flex gap-4 items-center">
        <p>500 Words</p>
        <Image
          width={500}
          height={500}
          className="size-12 rounded-full bg-slate-500 object-cover"
          src="/image.png"
          alt="avatar navigate ui"
        />
      </div>
    </div>
  );
}
