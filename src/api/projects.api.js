import { api } from "./api";

const USE_MOCK = true;

export const getProjects = async () => {
  if (USE_MOCK) {
    return fakeProjects;
  }

  const res = await api.get("/projects");
  return res.data;
};

const fakeProjects = {
  list: [
    {
      id: 1,
      cover: "/projects/buio/img_buio_cover.png",
      img_1: "/projects/buio/img_buio_1.png",
      img_2: "/projects/buio/img_buio_2.png",
      img_3: "/projects/buio/img_buio_3.png",
      name: `Buio`,
      shortDesc: `Playable game demo`,
      madeWith: `Unity, C#`,
      desc: `This is a short demo of an adventure puzzle game I worked on a few years ago.
            The game is about a kid who wakes up at night and discovers that a monster from a bedtime story has eaten all the lights.
            Together with his loyal companion Popone, he has to find and defeat the monster and restore the light.`,
      year: `2020 (updated in 2026)`,
      link: `https://www.newgrounds.com/portal/view/1032969`,
      linkLabel: `Play`,
    },
    {
      id: 2,
      cover: "/projects/mine/img_mine_cover.jpg",
      img_1: "/projects/mine/img_mine_1.jpg",
      img_2: "/projects/mine/img_mine_2.jpg",
      img_3: "/projects/mine/img_mine_3.jpg",
      name: `Mine`,
      shortDesc: `Browser game`,
      madeWith: `React, Css, Typescript`,
      desc: `A simple browser game built with React, created as a personal project to practice front-end development.
            The game features a randomly generated map that players must escape by using items found throughout the environment.
            It includes two game modes and supports horizontal play on mobile devices, although it is not fully optimized for mobile yet.`,
      year: `2022`,
      link: `https://gsp-mine.netlify.app/`,
      linkLabel: `Play`,
    },
    {
      id: 3,
      cover: "/projects/thesis/img_thesis_cover.jpg",
      img_1: "/projects/thesis/img_thesis_1.jpg",
      img_2: "/projects/thesis/img_thesis_2.jpg",
      img_3: "/projects/thesis/img_thesis_3.jpg",
      name: `Thesis Project`,
      shortDesc: `Virtual desktop`,
      madeWith: `Unity3D, C#, HTCVive`,
      desc: `Implementation of a virtual desktop interactable with hands gesture, Made for my University thesis project. 
           For this project i used the plugins ViveHandTrakingSDK and VrDesktopMirror, customized to use hand gesture to interact with a virtual desktop. (yes cover is made with Ai)`,
      year: `2019`,
      link: `https://youtu.be/81FSe0DXSrc?si=I068r7QFBrTvZaEM`,
      linkLabel: `Watch`,
    },
  ],
};
