import Server from "../../assets/png/cloud-icons/server.png";
import WebSecurity from "../../assets/png/cloud-icons/web-security.png";
import WirelessCloud from "../../assets/png/cloud-icons/wireless-cloud.png";
import { namedLinks } from "./navLinks";

export const zarfCapabilityCards = [
  {
    topImage: WebSecurity,
    headerFirstLine: "Package Apps &",
    headerSecondLine: "Resources",
    body: "Provides the ability to package a chunk of the internet and securely deliver all of the files and dependencies needed to run an application in a disconnected environment.",
  },
  {
    topImage: WirelessCloud,
    headerFirstLine: "Deploy Cloud Apps",
    headerSecondLine: "Disconnected",
    body: "Provides the ability to deploy apps declaratively and without internet connectivity. This opens the door for modern cloud capabilities to be deployed in disconnected environments.",
  },
  {
    topImage: Server,
    headerFirstLine: "Easily Maintain",
    headerSecondLine: "Apps Disconnected",
    body: "Zarf reduces the skills and resources needed to manage and update applications in disconnected environments, ensuring no downtime or data loss when updating software.",
  },
];

export const LearnWithUsCards = [
  {
    title: "Defense Unicorns Podcast",
    body: "We educate mission heroes with DevSecOps and cybersecurity stories from the world's leading problem solvers.",
    link: { ...namedLinks.podcast, text: "Listen Now" },
  },
  {
    title: "DevSecOps Blog",
    body: "Insights from industry experts on the processes and technology necessary to accelerate your mission.",
    link: { ...namedLinks.blog, text: "Read Now" },
  },
  {
    title: "Free DevSecOps Course",
    body: "An overview of the history, terminology, processes, and tools used to adopt Continuous Delivery and DevSecOps.",
    link: { ...namedLinks.courses, text: "Enroll Now" },
  },
];
