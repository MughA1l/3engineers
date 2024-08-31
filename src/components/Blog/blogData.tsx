import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "PCB Designing",
    paragraph:
      "Get skilled at PCB design and make your electronic ideas come to life. Our courses show you all you need to know, from the basics to cutting-edge methods so your designs are both productive and dependable",
    image: "/images/blog/Pcb.jpg",
    
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: [""],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Computer vision",
    paragraph:
      "Computer vision is a subsection of AI that enables machines to make sense of visual data by detecting objects and making sense of scenes from images or videos. This technology is changing how people will interact digitally with the computer.",

    image: "/images/blog/comv.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: [""],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Web Development",
    paragraph:
      "It may also refer to the designing of websites and maintaining them, either in terms of the front-end, visual appearance or with regard to back-end functionality. In fact, it is a blend of coding, design, and user experience in an effort to construct.",
    image: "/images/blog/web.avif",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: [""],
    publishDate: "2025",
  },
];
export default blogData;
