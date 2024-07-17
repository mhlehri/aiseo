import Link from "next/link";

export default function Table() {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full shadow-md mt-6 table-auto font-medium">
        <thead>
          <tr className="bg-slate-800 *:font-medium *:whitespace-nowrap *:py-4 border-b text-white border-[#353D4F]">
            <th className="text-left max-w-20 pl-6 md:pl-10">Date</th>
            <th className="max-w-16 min-w-10 text-end">Amount</th>
            <th className="text-left pl-20">Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-slate-800 *:py-4 border-b *:whitespace-nowrap duration-300 border-[#353D4F] bg-[#121D2F]">
            <td className="pl-6 md:pl-10">January 3, 2023</td>
            <td className="text-end">19$</td>
            <td className="pl-20">1 Month Subscription, Basic Plan</td>
            <td className="md:pl-0 px-10 text-green-400">
              <a href="#">Download</a>
            </td>
          </tr>
          <tr className="hover:bg-slate-800 *:py-4 border-b *:whitespace-nowrap duration-300 border-[#353D4F] bg-[#121D2F]">
            <td className="pl-6 md:pl-10">January 3, 2023</td>
            <td className="text-end">19$</td>
            <td className="pl-20">1 Month Subscription, Basic Plan</td>
            <td className="md:pl-0 px-10 text-green-400">
              <a href="#">Download</a>
            </td>
          </tr>
          <tr className="hover:bg-slate-800 *:py-4 border-b *:whitespace-nowrap duration-300 border-[#353D4F] bg-[#121D2F]">
            <td className="pl-6 md:pl-10">January 3, 2023</td>
            <td className="text-end">19$</td>
            <td className="pl-20">1 Month Subscription, Basic Plan</td>
            <td className="md:pl-0 px-10 text-green-400">
              <a href="#">Download</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
