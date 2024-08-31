import NewsLatterBox from "./NewsLatterBox";
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
              <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
                Visit Us
              </h2>
              <div className="aspect-video w-full mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5332428979385!2d74.35496547559782!3d31.516632847283683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905f5f2e7b7c1%3A0x8a9a2f2e7f0b7c1a!2sBadshahi%20Mosque!5e0!3m2!1sen!2s!4v1686123456789!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="w-6 h-6 text-primary dark:text-white" />
                  <p className="text-base text-gray-800 dark:text-gray-300">
                    NUST university Islamabad nstp office
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-6 h-6 text-primary dark:text-white" />
                  <p className="text-base text-gray-800 dark:text-gray-300">
                    +92 123 456 7890
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <MailIcon className="w-6 h-6 text-primary dark:text-white" />
                  <p className="text-base text-gray-800 dark:text-gray-300">
                  info@3engineers.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
