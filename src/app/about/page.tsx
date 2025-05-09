"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="w-full flex flex-col md:flex-row items-start p-8 md:p-16 mt-16 md:mt-24">
        <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0 md:ml-4">
          <div className="bg-blue-600 text-white p-8 md:p-10 rounded-md text-center w-80 h-72 md:w-96 md:h-80 flex items-center justify-center mt-2 md:mt-6">
            <div>
              <p className="text-4xl font-bold mb-5">WE ARE A.T.O.M</p>
              <p className="text-xl">A COMMUNITY OF ROBOTICS BASED IN DELHI</p>
            </div>
          </div>
        </div>
        {/* Further reduced the margin here */}
        <div className="md:w-1/2 text-xl leading-relaxed mr-4 max-w-md md:max-w-lg mt-6 md:mt-8">
          <p>
            Welcome to A.T.O.M Lab, the robotics society of our college. At A.T.O.M, we focus on integrating software, hardware, and mechanical engineering to develop practical robotic solutions. Our projects include the MR Robot, an autonomous mobile robot, the Robotics ARM: A.J.G.A.R, and a people follower robot, among others. We are committed to advancing technology and providing students with hands-on experience in robotics.
          </p>
        </div>
      </div>

      <div className="w-full p-8 md:p-16 mt-16">
        <FocusCards
          cards={[
            {
              circleImageSrc: "/images/naman.png", 
              name: "NAMAN MALIK (@Mr_No-Man)",
              description: "Founder | Admin | CAD | IOT",
              instagramLink: "https://instagram.com/_naman.malik_",
              githubLink: "https://github.com/namikxgithub",
              linkedinLink: "https://www.linkedin.com/in/naman-malik-495664133/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
            },
            {
              circleImageSrc: "/images/manav.png",
              name: "MANAV SETHI (@insaanimanav)",
              description: "Founder | Admin | Devops Nerd",
              instagramLink: "https://instagram.com/insaanimanav_",
              githubLink: "https://github.com/insaaniManav",
              linkedinLink: "https://www.linkedin.com/in/insaanimanav/  ",
            },
            {
              circleImageSrc: "/images/Jasmeet.png",
              name: "JASMEET SINGH (@processsingh)",
              description: "Founder | Admin | IOT | Embedded Systems",
              instagramLink: "https://instagram.com/debounsingh",
              githubLink: "https://github.com/jasmeet0915",
              linkedinLink: "https://www.linkedin.com/in/jasmeetsingh2911/",
            },
            {
              circleImageSrc: "/images/arjun.png",
              name: "ARJUN K HARIDAS (@topguns837)",
              description: "ADMIN | AI/ML | ROS",
              instagramLink: "https://instagram.com/arjun.kh8376",
              githubLink: "https://github.com/topguns837",
              linkedinLink: "https://www.linkedin.com/in/arjunkharidas/",
            },
            {
              circleImageSrc: "/images/jc.png",
              name: "JAYESH CHAUDHARY (@jc)",
              description: "ADMIN | Embedded Systems | IOT",
              instagramLink: "https://instagram.com/jchaudhary_00",
              githubLink: "https://github.com/jchaudhary21",
              linkedinLink: "https://www.linkedin.com/in/jayesh-chaudhary-885a6a1ba/",
            },
            {
              circleImageSrc: "/images/hriday.png",
              name: "HRIDAY AGGARWAL (@hra)",
              description: "ADMIN | ROS | IOT | CAD",
              instagramLink: "https://instagram.com/hridayaggarwal",
              githubLink: "https://github.com/Hriday31",
              linkedinLink: "https://www.linkedin.com/in/hriday-aggarwal-74bb41143/",
            },
            {
              circleImageSrc: "/images/brad.png",
              name: "KARTIK RANA (@brad)",
              description: "ADMIN | CAD | IOT",
              instagramLink: "https://instagram.com/kartik_r.a.n.a",
              githubLink: "https://github.com/Kartik9250",
              linkedinLink: "https://www.linkedin.com/in/kartik-rana-33056717b/",
            },
            {
              circleImageSrc: "/images/aakshar.png",
              name: "AAKSHAR GARG (@cheekan tekka)",
              description: "ADMIN | ROS ",
              instagramLink: "https://instagram.com/aakshar4",
              githubLink: "https://github.com/AaksharGarg",
              linkedinLink: "https://www.linkedin.com/in/aakshar-garg-64611026a/",
            },
            {
              circleImageSrc: "/images/aryan.png",
              name: "ARYAN SETHI (@amplifier)",
              description: "ADMIN | ROS | CAD | IOT",
              instagramLink: "https://instagram.com/aryan.sethi06",
              githubLink: "https://github.com/Aryans006",
              linkedinLink: "https://www.linkedin.com/in/aryan-sethi-3973b128b/",
            },

            {
              circleImageSrc: "/images/vansh.png",
              name: "VANSH GUPTA (@vansh)",
              description: "ADMIN | CAD | IOT",
              instagramLink: "https://instagram.com/vanshgupta917",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/akshat.png",
              name: "AKSHAT (@hominum)",
              description: "ADMIN | Embedded Systems | IOT",
              instagramLink: "https://instagram.com/akshat_sharma05",
              githubLink: "https://github.com/AkshatSharma05",
              linkedinLink: "https://www.linkedin.com/in/akshat-sharma-166932161/",
            },
            {
              circleImageSrc: "/images/aastha.png",
              name: "AASTHA VERMA (@pixelpuff)",
              description: "CORE | AI/ML | ROS | IOT",
              instagramLink: "https://instagram.com/aasthaverma_27",
              githubLink: "https://github.com/aasthaverma27",
              linkedinLink: "https://www.linkedin.com/in/aastha-verma-9459032aa/",
            },
            {
              circleImageSrc: "/images/tanmay.jpg",
              name: "TANMAY SINGH (@rubber_giant)",
              description: "CORE | ROS",
              instagramLink: "https://instagram.com/feels_on_wheels",
              githubLink: "https://github.com/rubber-giant",
              linkedinLink: "https://www.linkedin.com/in/tanmay-singh-07b539291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            
            {
              circleImageSrc: "/images/mehak.png",
              name: "MEHAK OBEROI (@goofball)",
              description: "CORE | ROS | IOT",
              instagramLink: "https://instagram.com/_mehakoberoi_",
              githubLink: "https://github.com/mehakoberoii",
              linkedinLink: "https://www.linkedin.com/in/mehak-oberoi-9191a62b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            
            {
              circleImageSrc: "/images/mitanshu.png",
              name: "MITANSHU (@suus)",
              description: "CORE | ROS",
              instagramLink: "https://instagram.com/mitanshu._.05",
              githubLink: "https://github.com/mitanshu-2004",
              linkedinLink: "https://www.linkedin.com/in/mitanshu-goel-177624248/",
            },
            {
              circleImageSrc: "/images/deepansh.png",
              name: "DEEPANSH GOEL (@bustin)",
              description: "CORE | AI/ML | ROS",
              instagramLink: "https://instagram.com/deepanshgl",
              githubLink: "https://github.com/sudo-deep",
              linkedinLink: "https://linkedin.com/in/deepanshgl",
            },
              
              {
                circleImageSrc: "/images/anurag.png",
                name: "ANURAG (@augi)",
                description: "CORE | ROS",
                instagramLink: "https://instagram.com/anuragchoudhury.xz",
                githubLink: " https://github.com/anurag-choudhury",
                linkedinLink: " https://www.linkedin.com/in/anurag-choudhury-124b29259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
              
              {
                circleImageSrc: "/images/pragya.png",
                name: "PRAGYA JHA (@pragyajhaa_)",
                description: "MAINTAINER | ROS",
                instagramLink: "https://instagram.com/pragyajhaa_",
                githubLink: " https://github.com/pragyajhaa",
                linkedinLink: "https://www.linkedin.com/in/pragya-jha-849089293/",
              },
              {
                circleImageSrc: "/images/mitul.png",
                name: "MITUL (@mi16kool)",
                description: "CORE | ELECTRONICS",
                instagramLink: "https://instagram.com/_.wanderer.xo/",
                githubLink: " https://github.com/mi-16kool",
                linkedinLink: "https://www.linkedin.com/in/mitulsingh/",
              },
              {
                circleImageSrc: "/images/kiriti.png",
                name: "KIRITI (@kiriti8933)",
                description: "ROS",
                instagramLink: "https://www.instagram.com/k_.i_.t_.i_?igsh=MXVremUybndnZXAzNQ==",
                githubLink: "https://github.com/kirinain",
                linkedinLink: "https://www.linkedin.com/in/kiritinain",
              },
              {
                circleImageSrc: "/images/rachit.png",
                name: "RACHIT (@FlowerEmoji)",
                description: "ROS",
                instagramLink: "https://www.instagram.com/rachittt._04/",
                githubLink: "https://github.com/Krachitkumar",
                linkedinLink: "https://www.linkedin.com/in/kamarushirachitkumar/",
              },
              {
                circleImageSrc: "/images/ritika.png",
                name: "RITIKA (@ritika)",
                description: "CORE | ROS | CAD",
                instagramLink: "https://www.instagram.com/ritika_gupta0505/",
                githubLink: "https://github.com/GuptaRitikaa",
                linkedinLink: "https://www.linkedin.com/in/ritika-gupta-341736321?trk=contact-info",
              },

              {
                circleImageSrc: "/images/ishaan.png",
                name: "ISHAAN (@gene)",
                description: "IOT",
                instagramLink: "-",
                githubLink: "https://github.com/Ishanb747",
                linkedinLink: "https://www.linkedin.com/in/ishan-bhattacharya-032413275/",
              },


              {
                circleImageSrc: "/images/sanidhya.png",
                name: "SANIDHYA (@sushpalsingh)",
                description: "Embedded Systems | IOT",
                instagramLink: "https://www.instagram.com/sanidhyajain7/",
                githubLink: "https://github.com/sanidhyaazz",
                linkedinLink: "https://www.linkedin.com/in/sanidhyajain7/",
              },
              {
                circleImageSrc: "/images/jayesh.jpg",
                name: "JAYESH NALWA (@jayesh04)",
                description: " AI | Computer Vision | ROS2 | Machine Learning ",
                instagramLink: "https://www.instagram.com/nalwajayesh04/",
                githubLink: "https://github.com/Nalwa-Jayesh/Nalwa-Jayesh",
                linkedinLink: "https://www.linkedin.com/in/jayesh-nalwa/",
              },
             
            
  
            ]}
          />
        </div>
      </div>
    );
  };
  
  export default About;
