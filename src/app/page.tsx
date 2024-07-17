import Container from "@/layout/Container";
import BillingHistory from "@/section/BillingHistory";
import Overview from "@/section/Overview";
import Pricing from "@/section/Pricing";

export default function Home() {
  return (
    <Container>
      <Overview />
      <BillingHistory />
      <Pricing />
    </Container>
  );
}
