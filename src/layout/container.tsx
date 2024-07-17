import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen max-w-[1080px] mx-auto">{children}</main>
  );
}
