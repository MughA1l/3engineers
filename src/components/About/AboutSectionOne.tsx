import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-marker-tip" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5 6.064-1.281-4.696A.5.5 0 0 0 9.736 9H6.264a.5.5 0 0 0-.483.368l-1.28 4.696A6.97 6.97 0 0 0 8 15c1.275 0 2.47-.34 3.5-.936m.873-.598a7 7 0 1 0-8.746 0l1.19-4.36a1.5 1.5 0 0 1 1.31-1.1l1.155-3.851c.213-.713 1.223-.713 1.436 0l1.156 3.851a1.5 1.5 0 0 1 1.31 1.1z"/>
</svg>

);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[20px] w-[40px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary hover:text-3xl" style={{marginTop:'-30%'}}>
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Our Mission"
                paragraph="Our mission is to create scope in the engineering sector in Pakistan and to raise awareness among the youth about this vast opportunity. We aim to inspire young people to consider engineering as a viable and exciting career choice by showcasing the dynamic environment and possibilities we have created."
                mb="44px"
              />
              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Premium Quality: Crafted with the highest standards for exceptional durability and performance." />
                    <List text="Tailwind CSS: A powerful utility-first framework that enables developers to build modern, responsive designs efficiently." />
                    <List text="Use for Lifetime: Built to last with continuous updates and support, ensuring long-term value and reliability." />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js: A versatile React framework for building fast, scalable, and SEO-friendly web applications." />
                    <List text="Rich Documentation: Comprehensive and easy-to-follow guides ensure a smooth development experience." />
                    <List text="Developer Friendly: Designed for ease of use, with intuitive features and seamless integration to accelerate development." />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/logo/ourmission.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/logo/ourmission.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
