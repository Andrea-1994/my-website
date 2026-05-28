import { api } from "./api";

const USE_MOCK = true;

export const getBio = async () => {
  if (USE_MOCK) {
    return fakeBio;
  }

  const res = await api.get("/bio");
  return res.data;
};

export const getIntro = async () => {
  if (USE_MOCK) {
    return fakeIntro;
  }

  const res = await api.get("/intro");
  return res.data;
};

export const getInfo = async () => {
  if (USE_MOCK) {
    return fakeInfo;
  }

  const res = await api.get("/info");
  return res.data;
};

const fakeIntro = {
  greetings: "Hi, I'm Andrea.",
  about: [
    `You’ve landed on my website. 
    Here you’ll find a lot of information about me, so if you’re not interested… 
    you could just go. Or...`,
    `If you wanna know more about me because you’re nosy, 
    or because you’re a respectable recruiter considering hiring me, 
    then feel free to look around.`,
  ],
};

const fakeInfo = {
  title: "General Info",
  list: [
    { field: "Full name:", value: "Andrea Di Lucia" },
    { field: "Nationality:", value: "Italian" },
    { field: "Date of birth:", value: "30/04/1994" },
    { field: "Languages:", value: "Italian (native), English (fluent)" },
    { field: "Education:", value: "Bachelor's degree in Computer Science" },
  ],
};

const fakeBio = {
  teaser: `I could define myself as a front-end developer because I’ve worked more than three years in that role, and professionally it’s what I can do best.
          But I don’t really like putting a label on myself; it feels unfair to all the other things I can do and all the other things I am.\n
          Coding-wise, I’m also very interested in game development because I’m a nerd who loves games, of course. 
          I’ve had a few attempts at making my own game, and I got close to that when I made <a href="/projects?id=1">Buio</a>, which is at least a demo now.\n
          But I’m not only interested in coding and computers. I have an <a href="https://www.instagram.com/khironart/">artistic side</a>: I like drawing and playing music, 
          I’ve tried a bit of 3D modeling, and even writing short stories.
          Furthermore, I love being in nature and <a href="https://www.instagram.com/khiiron/">traveling</a>, which is probably something everyone says.`,
  teaserPhoto: "/photos/teaser_photo.jpg",

  story: [
    {
      text: `I was born in the south of Italy, in a small town named Eboli, to be more precise, on the 30th of April 1994. It was a Saturday.\n
          I grew up in a large (but not too large) family of three children, I was the second one. Later, a fourth arrived: my younger sister.\n
          In school, and in general, I was a quiet kid, and in my free time I loved learning new things, mostly practical ones. 
          I was curious about how things work, and I still am.`,
      photo: "/photos/bio_photo_1.jpg",
    },

    {
      text: `As a teenager (the worst version of me) I became even more introverted and quiet. I hated school and other kids, or at least most of them.
          It was during this period that I started disassembling and reassembling my computer and became more interested in everything related to that world.\n 
          After three years of middle school I started high school at a scientific Istitute, but I didn’t pass the first year, so I moved to an agricultural technical institute. 
          In 2014 I graduated with a score of 95/100, pretty useless considering my future life choices.`,
      photo: "/photos/bio_photo_2.jpg",
    },
    {
      text: `When high school was finally over, I started university at the University of Salerno. Following my new interests, I chose Computer Science as my major.\n
          University was probably the easiest and most problem-free period of my life. In my last year, I decided to participate in the Erasmus project, which gave me the opportunity to study abroad for six months in the Czech Republic, at the University of Hradec Králové.\n
          Living abroad was an eye-opening experience. It made me understand how much I loved talking with people from different cultures. 
          That was also the moment I started <a href="https://www.instagram.com/khiiron/">traveling</a> as a solo traveler, and I’ve never really stopped since.\n
          I also spent more time drawing during that period and got better at it, taught myself how to play guitar first, and piano a few years later.
          In December 2019, I earned my Bachelor’s degree (92/110), with a <a href="/projects?id=3">thesis</a> on hand gesture interaction for VR desktop environments developed in Unity.`,
      photo: "/photos/bio_photo_3.jpg",
    },
    {
      text: `After university, I was ready to start my adult life, but COVID hit hard, so I had to delay things for a couple of years.\n
          I used that time to learn the basics of game development and 3D modeling. 
          I started two game projects, one got lost during a PC format (sadly, RIP little robot), and the other one, <a href="/projects?id=1">Buio</a>, took me a couple of months of intense coding to turn into a playable demo.\n
          At the same time, GSP (Grande Sogliola Produzioni) was founded, a group of people, a group of friends who wanted to create something memorable. 
          We tried, without much success so far, but at least we’re still friends.`,
      photo: "/photos/bio_photo_4.png",
    },
    {
      text: `When i was 27 in 2021, I got my first real job at Contrader as a consultant developer.\n
          I moved for about five months in Benevento, a city not too far from my hometown. 
          I was there for job training, living in the same house with seven people, and it was surprisingly a very good experience. I met great people and improved my coding skills.\n
          When I got my first client, I moved back home, but it didn’t last long. 
          The second client wanted me to move to Turin, in the north of Italy.
          So I did.`,
      photo: "/photos/bio_photo_5.jpg",
    },
    {
      text: `I lived in Turin for about three years, working as a front-end developer for my second client. 
          I met some cool people there, some I could call friends, and some I was just waiting for the day I wouldn’t see again.
          Living in Turin on my own, and traveling whenever I had the chance, made time pass without even noticing.\n
          Until, in May 2025, the client I was working with decided to send me back, and I decided I would just quit and start a new chapter.
          So I started looking for a new job opportunity and a new place to live. \n
          That’s also why I decided to make this website and write this definitely too long bio, which hopefully didn’t make you feel like you wasted your time reading it.\n
          What comes after has yet to be written...`,
      photo: "/photos/bio_photo_6.jpg",
    },
  ],
};
