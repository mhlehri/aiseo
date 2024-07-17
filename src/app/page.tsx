import Container from "@/layout/Container";
import BillingHistory from "@/section/BillingHistory";
import Pricing from "@/section/Pricing";

export default function Home() {
  return (
    <Container>
      <BillingHistory />
      <Pricing />
    </Container>
  );
}
