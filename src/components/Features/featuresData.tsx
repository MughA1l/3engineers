import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width='width' height='height' viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .pcb { fill: #1a1a25; }
            .traces { fill: none; stroke: #00ff02; stroke-width: 2; }
            .components { fill: #808022; }
          `}
        </style>
        
        {/* PCB background */}
        <rect className="pcb" width="300" height="300" rx="10" ry="10" />
        
        {/* Circuit traces */}
        <path className="traces" d="M 50,50 L 250,50 L 250,250 L 50,250 Z" />
        <path className="traces" d="M 100,50 L 100,250 M 150,50 L 150,250 M 200,50 L 200,250" />
        <path className="traces" d="M 50,100 L 250,100 M 50,150 L 250,150 M 50,200 L 250,200" />
        
        {/* Components */}
        <rect className="components" x="70" y="70" width="60" height="60" rx="5" ry="5" />
        <circle className="components" cx="200" cy="100" r="20" />
        <rect className="components" x="180" y="180" width="40" height="40" rx="5" ry="5" />
        <circle className="components" cx="100" cy="200" r="15" />
      </svg>
    ),
    title: "PCB Designing/Reverse Engineerings",
    paragraph:
      "PCB designing shapes the layout and connections of electronic components, essential for modern electronics. Reverse engineering involves analyzing existing boards to replicate or improve their functionality.",
  },
  {
    id: 2,
    icon: (
      <svg width='width' height='height' viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="eyeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#0000FF" stopOpacity="0.3"/>
          </radialGradient>
        </defs>
        
        <rect width="100" height="100"  fill="#001933"/>
        
        {/* Eye */}
        <circle cx="400" cy="250" r="150" fill="url(#eyeGradient)"/>
        <circle cx="400" cy="250" r="70" fill="#FFFFFF" fillOpacity="0.8"/>
        <circle cx="400" cy="250" r="35" fill="#0000FF"/>
        
        {/* Hexagons */}
        {[
          [200, 100, "3D Inspection"],
          [350, 100, "Data annotation"],
          [500, 100, "Data-centric AI"],
          [200, 250, "Edge computing"],
          [600, 250, "Image analysis"],
          [200, 400, "Natural language processing"],
          [350, 400, "Augmented reality"],
          [500, 400, ""]
        ].map((hex, index) => (
          <g key={index}>
            <path d={`M${hex[0]},${hex[1]} l40,-25 l40,25 v50 l-40,25 l-40,-25 z`} 
                  fill="none" stroke="#00FFFF" strokeWidth="2"/>
            <text x='hex[0] + 40' y='hex[1] + 35' fill="#FFFFFF" fontSize="12" textAnchor="middle">{hex[2]}</text>
          </g>
        ))}
        
        {/* Icons (simplified) */}
        <circle cx="540" cy="420" r="15" fill="#00FFFF"/>
        <path d="M650,420 h30 v-30 h-30 z" fill="none" stroke="#00FFFF" strokeWidth="2"/>
        
        {/* Connection lines */}
        <path d="M400,250 L200,100 M400,250 L350,100 M400,250 L500,100 M400,250 L200,250 M400,250 L600,250 M400,250 L200,400 M400,250 L350,400 M400,250 L500,400" 
              stroke="#00FFFF" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
    title: "Computer Vision",
    paragraph:
      "Computer vision enables computers to interpret and understand visual information from the world, such as images and videos. By leveraging algorithms and machine learning, it empowers applications like facial recognition, autonomous vehicles, and image analysis.",
  },
  {
    id: 3,
    icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-32 h-32 transition-transform duration-300 ease-in-out"
      aria-labelledby="iotIconTitle"
      role="img"
    >
      <title id="iotIconTitle">IoT (Internet of Things) Icon</title>
      <g
        stroke="#6b7280"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7v10M7 12h10" />
        <path d="M8.5 8.5l7 7M8.5 15.5l7-7" />
        <circle cx="12" cy="12" r="2" />
        <path d="M16 7.5a2.5 2.5 0 0 0-5 0M8 16.5a2.5 2.5 0 0 0 5 0" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0 5M16.5 16a2.5 2.5 0 0 1 0-5" />
      </g>
    </svg>
    ),
    title: "IoT",
    paragraph:
      "IoT, or Internet of Things, connects everyday devices to the internet, allowing them to send and receive data. It transforms ordinary objects into smart devices that can be monitored and controlled remotely. IoT enhances convenience and efficiency in our daily lives by integrating technology seamlessly into various aspects.",
  },
  {
    id: 4,
    icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M12 2L2 7h20L12 2z"/>
      <path d="M2 7v10l10 5 10-5V7l-10 5z"/>
      <line x1="12" y1="12" x2="12" y2="22"/>
      <line x1="12" y1="12" x2="2" y2="17"/>
      <line x1="12" y1="12" x2="22" y2="17"/>
  </svg>
    ),
    title: "Machine Learning",
    paragraph:
      "Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It uses algorithms to analyze data, identify patterns, and make predictions or decisions based on that data. This technology is transforming industries by enabling smarter automation and advanced data insights.",
  },
  {
    id: 5,
    icon: (
      <svg width="200" height="300" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="100" width="100" height="120" fill="#4a90e2" stroke="#333" strokeWidth="4" />
        <circle cx="100" cy="60" r="40" fill="#4a90e2" stroke="#333" strokeWidth="4" />
        <circle cx="80" cy="50" r="8" fill="#fff" stroke="#333" strokeWidth="2" />
        <circle cx="120" cy="50" r="8" fill="#fff" stroke="#333" strokeWidth="2" />
        <rect x="85" y="75" width="30" height="5" fill="#fff" stroke="#333" strokeWidth="2" />
        <line x1="100" y1="20" x2="100" y2="40" stroke="#333" strokeWidth="4" />
        <circle cx="100" cy="15" r="5" fill="#f00" stroke="#333" strokeWidth="2" />
        <rect x="30" y="120" width="20" height="80" fill="#4a90e2" stroke="#333" strokeWidth="4" />
        <rect x="150" y="120" width="20" height="80" fill="#4a90e2" stroke="#333" strokeWidth="4" />
        <rect x="70" y="220" width="20" height="40" fill="#4a90e2" stroke="#333" strokeWidth="4" />
        <rect x="110" y="220" width="20" height="40" fill="#4a90e2" stroke="#333" strokeWidth="4" />
      </svg>
    ),
    title: "Robotics",
    paragraph:
      "Robotics integrates various technologies to create machines capable of performing tasks autonomously. It combines mechanical engineering, electronics, and computer science to develop robots that can assist or replace human effort in various fields. This rapidly evolving field is transforming industries from manufacturing to healthcare.",
  },
  {
    id: 6,
    icon: (
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="14" rx="2" fill="#4A90E2"/>
        <rect x="4" y="16" width="16" height="2" rx="1" fill="#4A90E2"/>
        <rect x="9" y="18" width="6" height="1.5" rx="0.75" fill="#4A90E2"/>
        <path d="M12 2L14 4L12 6L10 4L12 2Z" fill="#4A90E2"/>
      </svg>
    ),
    title: "Web Development",
    paragraph:
      "Web development involves designing and building websites and web applications. It encompasses front-end development (creating the visual aspects of a website) and back-end development (handling server-side logic and databases). Key technologies include HTML, CSS, and JavaScript for the front end, and languages like Python, Ruby, or Node.js for the back end. .",
  },
];

export default featuresData;
