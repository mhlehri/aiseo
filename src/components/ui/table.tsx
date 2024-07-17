import Link from "next/link";

export default function Table() {
  return (
    <table className="w-full shadow-md my-6 font-medium">
      <thead>
        <tr className="bg-slate-800 *:font-medium *:py-4 border-b text-white border-[#353D4F]">
          <th className="text-left pl-10">Date</th>
          <th className="max-w-16 text-end">Amount</th>
          <th className="text-left pl-20">Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-slate-800 *:py-4 border-b duration-300 border-[#353D4F] bg-[#121D2F]">
          <td className="pl-10">January 3, 2023</td>
          <td className="text-end">19$</td>
          <td className="pl-20">1 Month Subscription, Basic Plan</td>
          <td className="text-green-400">
            <a href="#">Download</a>
          </td>
        </tr>
        <tr className="hover:bg-slate-800 *:py-4 border-b duration-300 border-[#353D4F] bg-[#121D2F]">
          <td className="pl-10">January 3, 2023</td>
          <td className="text-end">19$</td>
          <td className="pl-20">1 Month Subscription, Basic Plan</td>
          <td className="text-green-400">
            <a href="#">Download</a>
          </td>
        </tr>
        <tr className="hover:bg-slate-800 *:py-4 border-b duration-300 border-[#353D4F] bg-[#121D2F]">
          <td className="pl-10">January 3, 2023</td>
          <td className="text-end">19$</td>
          <td className="pl-20">1 Month Subscription, Basic Plan</td>
          <td className="text-green-400">
            <a href="#">Download</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
