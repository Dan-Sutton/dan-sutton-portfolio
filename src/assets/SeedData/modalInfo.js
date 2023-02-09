import cookr from "../../assets/cookr.png";

import fire from "../../assets/fire.png";

import playme from "../../assets/playme.png";

import spotlas from "../../assets/spotlas.png";

import alchemy from "../../assets/alchemylogo.png";

import pokeball from "../../assets/pokeball.png";

export const modalInfo = [
  {
    name: "thefoodalchemist",
    title: "The Food Alchemist",
    description:
      "I was approached by a local business to create a website/webstore. It needed to be simple in design, and have a shopping page, an events page, and a contact form. To achieve this, I used Nextjs as a frontend framework, utilised Strapi’s headless CMS as the backend, Stripe to handle payments, and Emailjs for handling email contact. I worked closely with my client, designing a prototype on Figma before coding out the project. I ensured that they were informed and happy with each step taken.The business now uses the website which is central to its e-commerce, bookings, and inquiries.",
    video: "https://iili.io/H1VzHbf.gif",
    github: "https://github.com/Dan-Sutton/food-frontend",
    link: "https://thefoodalchemist.co.uk/",
    stack: ["NextJS", "Strapi", "Stripe", "CSS", "GraphQL", "EmailJS"],
    icon: alchemy,
    mobileView: false,
  },
  {
    name: "pokedex",
    title: "Pokédex",
    description: "",
    video: "https://iili.io/HETRz3g.gif",
    github: "https://github.com/Dan-Sutton/pokedex",
    link: "https://github.com/Dan-Sutton/pokedex",
    stack: ["Flutter", "Dart", "APIs", "State-management", "Local-storage"],
    mobileView: true,
    icon: pokeball,
  },
  {
    name: "playme",
    title: "Play That!",
    description:
      "I created this app with the purpose of solving an issue that I run into as a live musician. People sometimes interrupt me mid-set to make song requests. I thought that I could create a platform that would allow users to make song requests to someone that they are watching. My main learning object was to understand how to use Firebase authentication and Firestore. An artist can sign up using their Google account, and create a unique ‘request code’, that audience members can reference when making their requests. This request code can be updated when needed. Audience members currently don’t have to log in, but instead are required to input the request code given to them from an artist, and input request details. This is then submitted to Firestore, and linked to that artist’s own store. The artist is also able to achieve all CRUD operations.",
    video: "https://iili.io/H1Mru6b.gif",
    github: "https://github.com/Dan-Sutton/play-me-2.0",
    link: "https://playthat.xyz/",
    stack: ["NextJS", "CSS", "Firebase", "Firestore"],
    icon: playme,
    mobileView: true,
  },
  {
    name: "spotlas",
    title: "Spotlas clone (feed)",
    description:
      "As part of an application process, I created a clone of the Spotlas feed. The app was built in Flutter. The data is fetched via a given API, and using the ‘http’ Flutter package. This data is utilised via state management using the package ‘Provider’. The feed is then dynamically generated. State management is also utilised for saving a location, as well as liking a post.",
    video: "https://iili.io/H1MZgyb.gif",
    github: "https://github.com/Dan-Sutton/spotlas_code_challenge",
    link: "https://drive.google.com/file/d/13Rs2vfrN7oqhVpJ_ZciVsgQ_NNszDxp4/view?usp=share_link",
    stack: ["Flutter", "Dart", "APIs", "State-management"],
    icon: spotlas,
    mobileView: true,
  },
  {
    name: "bandSite",
    title: "The Wildfire Website",
    description:
      "This website was created for my band, and is used by clients and the public to book us and Gian information about the band. The EVENTS page uses, Hygraph: a native GraphQL Headless CMS. New events are added to Hygraph, and the page will dynamically update accordingly. This makes it a lot easer for myself and other band members to update the page. Additionally, I used a service called EmailJS, that allows me to implement a contact form onto the website. Any emails made on the website go straight to our shared Gmail account. Content, such as videos and images are currently stored in Cloudinary.",
    video: "https://iili.io/H1MrMPa.gif",
    github: "https://github.com/Dan-Sutton/band-webiste-2.0",
    link: "https://www.the-wildfire.co.uk/",
    stack: ["NextJS", "CSS", "GraphQL", "EmailJS"],
    icon: fire,
    mobileView: false,
  },

  // {
  //   name: "cookr",
  //   title: "Cookr",
  //   description:
  //     "With the creation of this app, I aimed to solve the daily issue of what to have at meal times. I was inspired by the quick and simple useage of Tinder, which gives the user a quick overview of information, allowing them to quickly decide 'yes', or 'no'. My learning focus here was to practise fetching information from a API. ",
  //   video: "https://iili.io/H1MrTMu.gif",
  //   github: "https://github.com/Dan-Sutton/cookr",
  //   link: "https://dan-sutton.github.io/cookr/",
  //   stack: ["React", "CSS", "APIs"],
  //   icon: cookr,
  //   mobileView: true,
  // },
];
