import { namedLinks } from './navLinks';
import Heart from '../png/dna-images/heart.png';
import Brain from '../png/dna-images/brain.png';
import Shield from '../png/dna-images/shield.png';
import Pyramid from '../png/dna-images/pyramid.png';
import Telescope from '../png/dna-images/telescope.png';
import Server from '../../assets/png/cloud-icons/server.png';
import WebSecurity from '../../assets/png/cloud-icons/web-security.png';
import WirelessCloud from '../../assets/png/cloud-icons/wireless-cloud.png';

export const zarfCapabilityCards = [
  {
    topImage: WebSecurity,
    alt: 'A folder with a padlock in the center.',
    headerFirstLine: 'Package Cloud',
    headerSecondLine: 'Apps & Resources',
    body: 'Provides the ability to package a chunk of the internet and securely deliver all of the files and dependencies needed to run an application in a disconnected environment.',
  },
  {
    topImage: WirelessCloud,
    alt: 'A cloud with a check mark and connected pipelines.',
    headerFirstLine: 'Declaratively Deploy',
    headerSecondLine: 'Packages',
    body: 'Zarf deploys apps with or without internet connectivity. This opens the door for modern cloud capabilities to be deployed on teh worlds most secure systems.',
  },
  {
    topImage: Server,
    alt: 'A server overlaying a cloud.',
    headerFirstLine: 'Update Regardless',
    headerSecondLine: 'of Connection',
    body: 'Zarf reduces the skills and resources needed to manage and update applications in any environment. Reducing downtime or data loss when updating software.',
  },
];

export const LearnWithUsCards = [
  {
    title: 'Defense Unicorns',
    titleLineTwo: 'A Podcast',
    body: "We educate mission heroes with DevSecOps and cybersecurity stories from the world's leading problem solvers.",
    link: { ...namedLinks.podcast, text: 'Listen Now' },
  },
  {
    title: 'DevSecOps',
    titleLineTwo: 'Blog',
    body: 'Insights from industry experts on the processes and technology necessary to accelerate secure software delivery and your mission.',
    link: { ...namedLinks.blog, text: 'Read Now' },
  },
  {
    title: 'Free DevSecOps',
    titleLineTwo: 'Course',
    body: 'An overview of the history, terminology, processes, and tools used to adopt Continuous Delivery and DevSecOps.',
    link: { ...namedLinks.courses, text: 'Enroll Now' },
  },
];

export const BenefitsCards = [
  {
    title: 'Work From Anywhere',
    body: 'We are fully remote, with Unicorns living all over the country. We empower Unicorns to work where they work best and we provide support for their remote office setup.',
  },
  {
    title: 'Family Oriented',
    titleLineTwo: 'Environment',
    body: 'We support Unicorns making sure their work-life compliments their home-life. We offer 16 weeks of paid parental leave plus 8 weeks of part-time leave.',
  },
  {
    title: 'Work/Life',
    titleLineTwo: 'Balance',
    body: 'We offer all full-time Unicorns unlimited PTO (minimum 10 Days) plus all Federal Holidays, 1 week for Thanksgiving, and two weeks for Christmas and New Years.',
  },
  {
    title: 'Fully Covered',
    titleLineTwo: 'Medical',
    body: 'We care about the health of our Unicorns. We cover Medical, Dental, Vision for Unicorns and their families, including 100% of in-network covered services and 100% of premiums.',
  },
  {
    title: 'Wealth & Financial',
    titleLineTwo: 'Resources',
    body: 'We offer all full-time Unicorns company equity options, 401k retirement plan with $20k employer contribution, life and disability insurance, and access to financial advisors.',
  },
  {
    title: 'Career Growth',
    titleLineTwo: '& Learning',
    body: 'We want all Unicorns to continue to grow in their careers. We offer financial support for trainings, conferences, and professional subscriptions.',
  },
];

export const dnaCards = [
  {
    img: Telescope,
    alt: 'A telescope.',
    title: 'Focused',
  },
  {
    img: Pyramid,
    alt: 'A pyramid.',
    title: 'Mission Driven',
  },
  {
    img: Brain,
    alt: 'A brain with a power chord.',
    title: 'Adaptable',
  },
  {
    img: Heart,
    alt: 'A heart with a halo.',
    title: 'Caring',
  },
  {
    img: Shield,
    alt: 'A shield with a sun and check mark.',
    title: 'Humble',
  },
];
