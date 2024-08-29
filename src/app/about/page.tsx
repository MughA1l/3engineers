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
        description="At 3Engineers, we're dedicated to turning innovative ideas into reality with a commitment to excellence and creativity. Our team of experts delivers tailored solutions ensuring each project reflects our core values of integrity and collaboration. We leverage cutting-edge technology to drive progress and make a meaningful impact. Join us as we shape the future and achieve remarkable success together.."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
