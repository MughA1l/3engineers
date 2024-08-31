import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Got questions or need help? Just email or call us and we'll be happy to assist. Send us a message by using the form below and we will get back in touch with you promptly!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
