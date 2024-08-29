import SectionTitle from "../Common/SectionTitle";
import dynamic from 'next/dynamic';

const DynamicTeamCards = dynamic(() => import('./teamcard'), { ssr: false });

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-100 dark:bg-gray-900">
      <div className="container">
        <SectionTitle
          title="Our Team"
          paragraph="Meet the key members of our company driving innovation and success."
          mb="44px"
        />
        <DynamicTeamCards />
      </div>
    </section>
  );
};

export default AboutSectionTwo;