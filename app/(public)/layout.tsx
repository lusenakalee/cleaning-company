import { SiteFooter } from "@/components/general/site-footer";
import { SiteHeader } from "@/components/general/site-header";
import { WhatsAppButton } from "@/components/general/whatsapp-button";


export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
