import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="At 3Engineers, we transform cutting-edge ideas into reality, committed to excellence and ingenuity. Our professional staff offers tailor-made solutions, ensuring that every project meets our core values of integrity and collaboration. We harness superior technology for progress and a mark of impact. Be our partner and shape the future with us to create phenomenal success."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
