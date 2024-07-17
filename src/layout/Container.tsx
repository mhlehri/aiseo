import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`min-h-screen my-20 space-y-20 max-w-[1080px] mx-auto px-4 lg:px-0 ${className}`}
    >
      {children}
    </main>
  );
}
