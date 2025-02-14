// data/projectsData.js

export const projectsData = [
  {
    id: 1,
    name: "Gable Buildings",
    status: "COMPLETE",
    mainImage: "/images/projects/Gable Buildings/1.jpg",
    description:
      "Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.",
    gallery: [
      "/images/projects/Gable Buildings/1.jpg",
      "/images/projects/Gable Buildings/2.jpg",
    ],
  },
  {
    id: 2,
    name: "Half Round Barns",
    status: "RUNNING",
    mainImage: "/images/projects/Half Round Barns/1.jpg",
    description:
      "Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non.",
    gallery: [
      "/images/projects/Half Round Barns/1.jpg",
      "/images/projects/Half Round Barns/2.jpg",
    ],
  },
  {
    id: 3,
    name: "Mini Barns",
    status: "RUNNING",
    mainImage: "/images/projects/Mini Barns/1.jpg",
    description:
      "Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non.",
    gallery: [
      "/images/projects/Mini Barns/1.jpg",
      "/images/projects/Mini Barns/2.jpg",
    ],
  }
];

// You can also export constants used in the projects section
export const PROJECT_STATUSES = {
  ALL: "ALL",
  COMPLETE: "COMPLETE",
  RUNNING: "RUNNING",
  UPCOMING: "UPCOMING"
};

export const PROJECT_FILTERS = Object.values(PROJECT_STATUSES);
