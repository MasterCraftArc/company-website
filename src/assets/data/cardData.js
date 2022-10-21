import Server from "../../assets/png/cloud-icons/server.png";
import WebSecurity from "../../assets/png/cloud-icons/web-security.png";
import WirelessCloud from "../../assets/png/cloud-icons/wireless-cloud.png";

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
