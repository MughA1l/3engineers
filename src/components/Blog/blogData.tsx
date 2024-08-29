import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "PCB Designing",
    paragraph:
      "Become a pro at PCB design and turn your electronic ideas into reality. Our courses teach you everything from the basics to advanced techniques, ensuring your designs are both efficient and reliable.",
    image: "/images/blog/Pcb.jpg",
    
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Computer vision",
    paragraph:
      "Computer vision is a branch of AI that enables machines to interpret visual data, recognizing objects and analyzing scenes in images or videos. This technology is transforming digital interaction..",
    image: "/images/blog/comv.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Web Development",
    paragraph:
      "Web development involves creating and maintaining websites, focusing on front-end design and back-end functionality. It blends coding, design, and user experience to create dynamic, interactive platforms.",
    image: "/images/blog/web.avif",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
