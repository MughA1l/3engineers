'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { User2, Briefcase, Users } from 'lucide-react';

const cards = [
  {
    title: "CEO",
    name: "John Doe",
    description: "Visionary leader guiding the company's strategic direction",
    icon: <User2 className="w-6 h-6" />,
    image: "/images/logo/coding-1853305_1280.jpg",
  },
  {
    title: "Manager",
    name: "Jane Smith",
    description: "Experienced manager overseeing day-to-day operations",
    icon: <Briefcase className="w-6 h-6" />,
    image: "/images/logo/coding-1853305_1280.jpg",
  },
  {
    title: "Main Employee",
    name: "Bob Johnson",
    description: "Dedicated team member driving project success",
    icon: <Users className="w-6 h-6" />,
    image: "/images/logo/coding-1853305_1280.jpg",
  },
];

const TeamCards = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="w-full sm:w-1/2 lg:w-1/3 p-4"
          initial={{ rotateY: 25, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{
            scale: 1.05,
            rotateY: 5,
            transition: { duration: 0.2 },
          }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform perspective-1000">
            <div className="relative h-48">
              <Image
                src={card.image}
                alt={card.name}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-opacity opacity-0 duration-[2s]"
                onLoadingComplete={(image) => image.classList.remove("opacity-0")}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="text-white text-4xl"
                >
                  {card.icon}
                </motion.div>
              </div>
            </div>
            <motion.div
              className="p-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.2 }}
            >
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{card.title}</h2>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{card.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamCards;
