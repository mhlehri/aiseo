import Box from "@/components/ui/box";
import Switch from "@/components/ui/switch";
import { pricingArray } from "@/data/pricingArray";
import React from "react";

export default function Pricing() {
  return (
    <div>
      <p className="text-slate-200 font-medium mb-2">Upgrade your account</p>
      <div className="flex gap-5">
        <h3 className="text-2xl font-semibold">Save 20% with annual</h3>{" "}
        <Switch />
      </div>

      <div className="grid gap-3 my-10 grid-cols-3">
        {pricingArray.map((item) => (
          <Box key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
