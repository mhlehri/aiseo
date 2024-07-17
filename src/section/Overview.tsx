"use client";
import Image from "next/image";
import { useState } from "react";

export default function Overview() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Action");
  const options = ["Renew", "Reset", "Unsubscribe"];
  return (
    <section className="grid md:grid-cols-2  *:max-w-[540px] h-full gap-6">
      <div className="space-y-6">
        <h4 className="text-xl font-semibold">Account Details</h4>
        <div className="py-8 border-2 rounded-md md:h-full md:max-h-[330px] border-slate-600 bg-[#182130] flex flex-col sm:flex-row justify-between ">
          <div className="flex gap-4 lg:gap-10 px-6 sm:flex-row flex-col lg:px-8 py-4">
            <Image
              width={500}
              height={500}
              className="size-16 rounded-full bg-slate-500 object-cover"
              src="/image.png"
              alt="avatar navigate ui"
            />
            <div className="space-y-3">
              <div>
                <p className="text-slate-200 font-medium">Full Name</p>
                <p className="text-slate-50 font-semibold">Robert Fox</p>
              </div>
              <div>
                <p className="text-slate-200 font-medium">Email Address</p>
                <p className="text-slate-50 font-semibold">
                  robertfox@gmail.com
                </p>
              </div>
              <div>
                <p className="text-slate-200 font-medium">Password</p>
                <p className="text-slate-50 font-semibold">••••••••••</p>
              </div>
            </div>
          </div>
          <button className="bg-[#7E4BFA] h-fit border duration-200 hover:bg-[#7d4bfab9] border-[#C2A8FF] px-5 font-semibold rounded py-1.5 ml-6 sm:ml-0 mr-8 w-fit">
            Edit
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <h4 className="text-xl font-semibold">Current Plan</h4>
        <div className="border-2 border-slate-600 md:max-h-[330px] md:h-full gap-10 bg-[#182130] rounded-md px-8 py-8">
          <div className="space-y-4 mb-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-200 font-medium">Plan</p>
                <p className="text-slate-50 font-semibold">
                  Basic (500 Words Left)
                </p>
              </div>
              <button className="bg-[#7E4BFA] duration-200 hover:bg-[#7d4bfab9] flex gap-3 items-center border border-[#C2A8FF] px-3 font-semibold rounded py-1.5">
                Action{" "}
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div>
              <p className="text-slate-200 font-medium">Started</p>
              <p className="text-slate-50 font-semibold">Feb 13, 2024</p>
            </div>
            <div>
              <p className="text-slate-200 font-medium">Next Billing</p>
              <p className="text-slate-50 font-semibold">
                $95.00 on Mar 13, 2024
              </p>
            </div>
          </div>
          <div className="bg-slate-800 border border-slate-700 flex gap-2 p-3 rounded text-sm font-medium">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#334155"
                stroke="#64748B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7L12 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16H12.01"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>
              Looks like there&apos;s a past due!{" "}
              <a
                href="https://chatgpt.com/c/6aa27651-4878-4b5c-ad53-ab92140e615a"
                className="text-green-400 underline underline-offset-2"
                target="_blank"
              >
                Click here
              </a>{" "}
              to fix it up and continue your journey with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
