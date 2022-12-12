export const modalInfo = {
  cookr: {
    title: "Cookr",
    description:
      "With the creation of this app, I aimed to solve the daily issue of what to have at meal times. I was inspired by the quick and simple useage of Tinder, which gives the user a quick overview of information, allowing them to quickly decide 'yes', or 'no'. My learning focus here was to practise fetching information from a API. ",
    video:
      "https://res.cloudinary.com/dsdpn6tzq/video/upload/v1669483497/Website/cookr_vid_ifq85d.mov",
    github: "https://github.com/Dan-Sutton/cookr",
    link: "https://dan-sutton.github.io/cookr/",
    stack: ["React", "CSS", "APIs"],
  },
  bandSite: {
    title: "The Wildfire Website",
    description:
      "This website was created for my band, and is used by clients and the public to book us and Gian information about the band. The EVENTS page uses, Hygraph: a native GraphQL Headless CMS. New events are added to Hygraph, and the page will dynamically update accordingly. This makes it a lot easer for myself and other band members to update the page. Additionally, I used a service called EmailJS, that allows me to implement a contact form onto the website. Any emails made on the website go straight to our shared Gmail account. Content, such as videos and images are currently stored in Cloudinary.",
    video:
      "https://res.cloudinary.com/dsdpn6tzq/video/upload/v1670020196/Website/play_me_final_gymf5l.mov",
    github: "https://github.com/Dan-Sutton/play-me-2.0",
    link: "https://playmeapp.netlify.app/auth/login",
    stack: ["NextJS", "CSS", "GraphQl", "EmailJS"],
  },
  playme: {
    title: "Play Me!",
    description:
      "I created this app with the purpose of solving an issue that I run into as a live musician. People sometimes interrupt me mid-set to make song requests. I thought that I could create a platform that would allow users to make song requests to someone that they are watching. My main learning object was to understand how to use Firebase authentication and Firestore. An artist can sign up using their Google account, and create a unique ‘request code’, that audience members can reference when making their requests. This request code can be updated when needed. Audience members currently don’t have to log in, but instead are required to input the request code given to them from an artist, and input request details. This is then submitted to Firestore, and linked to that artist’s own store. The artist is also able to achieve all CRUD operations.",
    video:
      "https://res.cloudinary.com/dsdpn6tzq/video/upload/v1670020196/Website/play_me_final_gymf5l.mov",
    github: "https://github.com/Dan-Sutton/play-me-2.0",
    link: "https://playmeapp.netlify.app/auth/login",
    stack: ["NextJS", "CSS", "Firebase", "Firestore"],
  },
};
