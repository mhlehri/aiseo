import Table from "@/components/ui/table";

export default function BillingHistory() {
  return (
    <section>
      <h4 className="text-slate-50 mb-2 text-xl font-semibold">
        Your billing history
      </h4>

      <p className="font-medium text-slate-200">
        Download your previous plan receipts and usage details.
      </p>
      <div>
        <Table />
      </div>
    </section>
  );
}
