export interface ProjectImage {
  imageUrl?: string | null;
  imageText?: string | null;
  secondImageUrl?: string | null;
  secondImageText?: string | null;
  aspect?: 'portrait' | 'landscape' | 'square' | null;
  secondAspect?: 'portrait' | 'landscape' | 'square' | null;
}

export interface Project {
  uid: string;
  client: string;
  name: string;
  categories: string[];
  thumbnailUrl: string | null;
  visualUrl: string | null;
  mainVideoUrl: string | null;
  description: string;
  credits?: string[];
  images: ProjectImage[];
  galleryColumns?: number;
  landscapeColumns?: 2 | 3;
  aspectRatio?: 'landscape' | 'portrait' | 'auto';
  galleryAspect?: 'square' | 'portrait' | 'landscape' | 'auto';
  galleryLayoutOrder?: 'landscape-first' | 'portrait-first';
  year?: string;
}

export interface AboutService {
  service: string;
}

export interface AboutTeamMember {
  name: string;
  role: string;
}

export interface AboutData {
  aboutPres: string;
  aboutIntroduction: string;
  aboutServices: AboutService[];
  aboutTeam: AboutTeamMember[];
  infosLabel: string;
  infoItem: string[];
  introductionLastText: string;
  footerLinks: { name: string; url: string }[];
  footerTrademark: string;
}

export const projects: Project[] = [
  {
    "uid": "ijgb",
    "year": "2025-2026",
    "client": "IJGB",
    "name": "IJGB",
    "categories": [
      "Creative Designer — IJGB"
    ],
    "thumbnailUrl": null,
    "visualUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1786602406/IJGB_dcvfux.mp4",
    "mainVideoUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1786602406/IJGB_dcvfux.mp4",
    "aspectRatio": "landscape",
    "description": "Led always-on visual design across IJGB’s digital ecosystem, directing content for the Telegram community, the educational \"Forex in 90 Seconds\" series, and featured PR media. Shaped campaign creative direction from initial moodboards to final execution—delivering motion graphics, flyers, roll-up banners, and merchandise designs across static and animated deliverables to ensure a cohesive, high-impact brand presence.",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://res.cloudinary.com/duyiomsdf/image/upload/v1787107116/IMG_8645_1_kpayit.jpg",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://res.cloudinary.com/duyiomsdf/image/upload/v1787107114/IMG_8631_gmrhgf.jpg",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://res.cloudinary.com/duyiomsdf/image/upload/v1787107112/IMG_8627_wjfsb2.jpg",
        "imageText": null,
        "secondImageText": null
      }
    ]
  },
  {
    "uid": "juicyway",
    "year": "2024",
    "client": "Juicyway",
    "name": "My Juicyway",
    "categories": [
      "Photographer & Video Editor — JuicyWay Launch"
    ],
    "thumbnailUrl": null,
    "visualUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1787106077/MOV_5230_1_btg8wz.mp4",
    "landscapeColumns": 3,
    "mainVideoUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1787106077/MOV_5230_1_btg8wz.mp4",
    "description": "Partnered directly with the in-house design team to deliver website and identity photography for Juicyway’s Nigeria launch. Expanded into campaign post-production—cutting and color grading video assets to maintain clean, consistent visual storytelling that introduced the brand to the Nigerian market with impact.",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1786600516/Juicyway_headshots_jy1ngm.mp4",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://www.youtube.com/watch?v=MqiVvpvjC0E",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://www.youtube.com/watch?v=s2bZNjaQaHM",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://www.youtube.com/watch?v=iwnc5Os60e0",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://www.youtube.com/watch?v=8Fk3Ls1Vr_U",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://www.youtube.com/watch?v=c6hVVfFZRy0",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://www.youtube.com/watch?v=wieuniPRDYQ",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://www.youtube.com/watch?v=MmnSLdfaftI",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://res.cloudinary.com/duyiomsdf/image/upload/v1787342995/s6_ta1ord.jpg",
        "imageText": null,
        "secondImageText": null,
        "aspect": "landscape"
      },
      {
        "imageUrl": "https://res.cloudinary.com/duyiomsdf/image/upload/v1787342069/s8_saszre.jpg",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://res.cloudinary.com/duyiomsdf/image/upload/v1787342505/s19_tihs5s.jpg",
        "imageText": null,
        "secondImageText": null,
        "aspect": "square"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/10.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/12.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/13.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/15.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/16.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/18.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/19.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "landscape"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/20.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/22.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/23.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/25.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "square"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/26.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/27.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/3.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "square"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/4.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/5.jpg",
        "imageText": null,
        "secondImageText": null,
        "aspect": "square"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/6.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "landscape"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/9.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "square"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/j4r_.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/juicywayanother/j7%20pro.jpg",
        "imageText": null,
        "secondImageText": null,
        "aspect": "landscape"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/11.jpg",
        "imageText": null,
        "secondImageText": null,
        "aspect": "landscape"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/13.jpg",
        "imageText": null,
        "secondImageText": null,
        "aspect": "landscape"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/20.jpg",
        "imageText": null,
        "secondImageText": null,
        "aspect": "square"
      }
    ]
  },
  {
    "uid": "world-cup",
    "client": "World Cup",
    "name": "Dream",
    "categories": [
      "Production designer and Colorist"
    ],
    "thumbnailUrl": null,
    "visualUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/v1787106716/World_Cup_Dreams_2_1_oyhsfi.mp4",
    "mainVideoUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/v1787106716/World_Cup_Dreams_2_1_oyhsfi.mp4",
    "aspectRatio": "landscape",
    "description": "",
    "credits": [],
    "images": [
      {
        "imageUrl": "https://www.youtube.com/watch?v=OtbKI7sCIrU",
        "imageText": null,
        "secondImageText": null
      }
    ]
  },
  {
    "uid": "tomi-juice",
    "client": "Tomi Juice",
    "name": "Tomi Juice",
    "categories": [
      "Photographer, editor and stop motion animator"
    ],
    "thumbnailUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Tomi Juice/Copy of 1.png",
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Tomi Juice/Copy of 1.png",
    "mainVideoUrl": null,
    "description": "",
    "credits": [],
    "galleryColumns": 3,
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Tomi Juice/Copy of 2.png",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Tomi Juice/Copy of 3.png",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Tomi Juice/Copy of 4.png",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Tomi Juice/Copy of 5.png",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/6_web.mp4",
        "imageText": null,
        "secondImageText": null
      }
    ]
  },
  {
    "uid": "huddle",
    "year": "2023-2025",
    "client": "Huddle",
    "name": "The Return",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": null,
    "visualUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1786646285/The_Return_of_the_Huddle_cp_z4l2xc.mp4",
    "mainVideoUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1786646285/The_Return_of_the_Huddle_cp_z4l2xc.mp4",
    "aspectRatio": "landscape",
    "description": "Owned photo and video output end-to-end—shooting, editing, and color grading every deliverable to establish and preserve a sharp, unified visual standard. Marking my longest continuous creative engagement on record, I served as the brand's trusted visual anchor, safeguarding production quality and brand consistency across an ever-evolving slate of content.",
    // "description": "Sound design and mix for The Return of the Huddle by Aniedoabasi.",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": []
  },
  {
    "uid": "hingees",
    "client": "Hingees",
    "name": "Hingees",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/7.png",
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/7.png",
    "mainVideoUrl": null,
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/9.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/15.png",
        "secondImageText": null,
        "aspect": "portrait",
        "secondAspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/4.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/5.png",
        "secondImageText": null,
        "aspect": "portrait",
        "secondAspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/14.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/1.png",
        "secondImageText": null,
        "aspect": "portrait",
        "secondAspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/2.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/3.png",
        "secondImageText": null,
        "aspect": "portrait",
        "secondAspect": "portrait"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/6.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/18.png",
        "secondImageText": null,
        "aspect": "portrait",
        "secondAspect": "square"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/8.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/10.png",
        "secondImageText": null,
        "aspect": "portrait",
        "secondAspect": "square"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/11.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/12.png",
        "secondImageText": null,
        "aspect": "square",
        "secondAspect": "square"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/13.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/16.png",
        "secondImageText": null,
        "aspect": "square",
        "secondAspect": "square"
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/17.png",
        "imageText": null,
        "secondImageText": null,
        "aspect": "square"
      }
    ]
  },
  {
    "uid": "gtfw",
    "client": "GTFW",
    "name": "GTFW",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": null,
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Gtfw_web.mp4",
    "mainVideoUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Gtfw_web.mp4",
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": []
  },
  {
    "uid": "voss-water",
    "client": "Voss Water",
    "name": "Voss Water",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Voss Water/s2n.png",
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Voss Water/s2n.png",
    "mainVideoUrl": null,
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Voss Water/Sport.png",
        "imageText": null,
        "secondImageText": null
      }
    ]
  },
  {
    "uid": "seabreeze",
    "client": "Seabreeze",
    "name": "Seabreeze",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": null,
    "visualUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1786652791/Seabreeze_cp_bfmo9y.mp4",
    "mainVideoUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1786652791/Seabreeze_cp_bfmo9y.mp4",
    "aspectRatio": "landscape",
    "galleryAspect": "portrait",
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Michael_web.mp4",
        "imageText": null,
        "secondImageUrl": "",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Seabreeze_redesign_web.mp4",
        "imageText": null,
        "secondImageUrl": "",
        "secondImageText": null
      }
    ]
  },
  {
    "uid": "kronicles",
    "client": "Kronicles",
    "name": "Kronicles",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Knonicles logos.png",
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Knonicles logos.png",
    "galleryLayoutOrder": "landscape-first",
    "mainVideoUrl": null,
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Kronicles/Kronicles Branding .png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Kronicles/Kronicles icon.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Kronicles/Logo sketch.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Kronicles/kronicles v1 2-5.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Kronicles/kronicles v1 2-6.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Kronicles/kronicles v1 2-7.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Kronicles/kronicles v1 2-8.png",
        "imageText": null,
        "secondImageText": null
      }
    ]
  },
  /*
  {
    "uid": "peperminkk",
    "client": "Peperminkk",
    "name": "Peperminkk",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/arc 37.png",
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/arc 37.png",
    "mainVideoUrl": null,
    // "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 1.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 2.png",
        "secondImageText": null
      },
      {
        // "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 3.png",
        "imageUrl": null,
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/pepper/arc 4.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/pepper/arc 5.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/pepper/arc 6.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/pepper/arc 7.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combineall/arc 8.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combineall/arc 9.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 10.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 11.png",
        "imageText": null,
        // "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 12.png",
        "secondImageUrl": null,
        "secondImageText": null
      },
      {
        // "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 13.png",
        "imageUrl": null,
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 14.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 15.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 17.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 18.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 19.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 20.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 21.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 22.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 23.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 24.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 25.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 26.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 27.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 28.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 29.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 30.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 31.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Peperminkk/arc 32.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/arc 33.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/arc 34.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/arc 35.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/arc 36.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/arc 38.png",
        "secondImageText": null
      }
    ]
  },
  */
  /*
  {
    "uid": "elc",
    "client": "ELC",
    "name": "ELC",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": null,
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/ELC_reals_web.mp4",
    "mainVideoUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/ELC_reals_web.mp4",
    "aspectRatio": "landscape",
    // "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": []
  },
  */
  /*
  {
    "uid": "dixtrict-26",
    "client": "Dixtrict 26",
    "name": "Dixtrict 26",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/1.JPEG",
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/1.JPEG",
    "mainVideoUrl": null,
    "galleryAspect": "auto",
    // "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/2.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/3.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/4.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/5.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/6.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/7.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/8.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/9.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/10.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/11.JPEG",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/12.JPEG",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/13.JPEG",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Dixtrict 26/14.JPEG",
        "imageText": null,
        "secondImageText": null
      }
    ],
  },
  */
  {
    "uid": "caveat-emptor",
    "client": "Caveat Emptor",
    "name": "Caveat Emptor",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/AR Studio-2.jpg",
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/AR Studio-2.jpg",
    "galleryLayoutOrder": "portrait-first",
    "mainVideoUrl": null,
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-3.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-4.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-6.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-7.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-8.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-9.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-10.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-11.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-12.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-13.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-14.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-16.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-17.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-19.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-20.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-21.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-22.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-23.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-25.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-28.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-29.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-30.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-32.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-33.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-34.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-35.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-36.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-37.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-38.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-39.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-40.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-41.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-43.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-44.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-45.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-47.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-48.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-49.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-51.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-53.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-55.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-56.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-58.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-60.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-61.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-62.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-63.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-67.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-68.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-70.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-71.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-72.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-76.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-79.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-80.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-81.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-82.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-83.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-84.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-85.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-86.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-87.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-89.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-90.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/AR Studio-91.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/AR Studio-92.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/AR Studio-93.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/AR Studio-94.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/AR Studio-95.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/AR Studio-96.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/AR Studio-97.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/AR Studio-98.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/AR Studio-99.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-100.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-101.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-102.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-103.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-104.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-105.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-106.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-107.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-110.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-111.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-113.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-115.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-116.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-117.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-118.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-119.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Caveat Emptor/AR Studio-120.jpg",
        "secondImageText": null
      }
    ]
  },
  {
    "uid": "linen",
    "client": "Linen vanille",
    "name": "Linen vanille",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/41.png",
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/41.png",
    "mainVideoUrl": null,
    "aspectRatio": "portrait",
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/1c.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/1s.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/1.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/2.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/3.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/4.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/5.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/6.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/7.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/8.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/9.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/10.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/11.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/12.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/13.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/14.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/15.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/16.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/17.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/18.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/19.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/20.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/21.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/22.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/23.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/24.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/25.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/26.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/27.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/28.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen/29.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/30.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/31.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/32.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/33.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/34.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen2/35.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen2/36.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen2/37.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen2/38.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen2/39.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/linen2/40.jpg",
        "secondImageText": null
      }
    ]
  },
  {
    "uid": "cedal-wood",
    "client": "Cedal Wood",
    "name": "Cedal Wood",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": null,
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Cedal_wood_web.mp4",
    "mainVideoUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Cedal_wood_web.mp4",
    "aspectRatio": "landscape",
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": []
  },
  {
    "uid": "dhk",
    "client": "DHK",
    "name": "DHK",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": null,
    "visualUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1786646485/DHK_2_trl5tc.mp4",
    "mainVideoUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1786646485/DHK_2_trl5tc.mp4",
    "aspectRatio": "landscape",
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1786650991/DHK_final_1_hdtntu.mp4",
        "imageText": null,
        "secondImageUrl": "",
        "secondImageText": null
      }
    ]
  },
  /*
  {
    "uid": "world-smile-day",
    "client": "Teelonis",
    "name": "World Smile Day",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": null,
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Test_web.mp4",
    "mainVideoUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Test_web.mp4",
    "aspectRatio": "landscape",
    // "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "description": "",
    // "credits": [
    //   "Sound Design & Mix: Aniedoabasi"
    // ],
    "credits": [],
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/HWSD_web.mp4",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Lawma_3_web.mp4",
        "secondImageText": null
      }
    ]
  },
  */
  // {
  //   "uid": "taylormade",
  //   "client": "TaylorMade",
  //   "name": "Straight Distance",
  //   "categories": [
  //     "sound-design"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/aPvis7pReVYa3qSO_screenshot.jpg?auto=format,compress?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/aPvjbbpReVYa3qSX__2505_TaylorMadeQi-DC-_SHORT.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/aPvja7pReVYa3qSW__2505_TaylorMadeQi-DC-_LONG.mp4",
  //   "description": "Straight distance, stay straight 180 yards. Play the straightest game improvement irons in golf: Qi irons from TaylorMade.",
  //   "credits": [
  //     "Director: Travis Hanour",
  //     "Sound Designer / Mixer: Morgan Johnson"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/aPvkKLpReVYa3qS__TaylorMadeSS1.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/aPvkKbpReVYa3qTA_TaylorMadeSS2.jpg?auto=format,compress?auto=compress,format",
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/aPvkKrpReVYa3qTB_TaylorMadeSS3.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     }
  //   ]
  // },
  // {
  //   "uid": "yeti",
  //   "client": "YETI",
  //   "name": "Bad Idea",
  //   "categories": [
  //     "sound-design",
  //     "mix"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/aRzWcWGnmrmGp__T_Yeti_Still.jpg?auto=format,compress?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/aRzWjGGnmrmGp__a_YetiSmall.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/aRzWpWGnmrmGp__f_YetiLarge.mp4",
  //   "description": "Don’t Get Them A YETI (Unless You Really Love Them)",
  //   "credits": [
  //     "Agency: Wieden + Kennedy",
  //     "Director: Daniel Wolfe / Jess Kohl / Love Song",
  //     "Sound Designer: Morgan Johnson",
  //     "Mixer: Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/aRzWb2GnmrmGp__R_Yeti_eyes.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/aRzWbmGnmrmGp__Q_Yeti_Cooler.png?auto=format,compress?auto=compress,format",
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/aRzWcGGnmrmGp__S_Yeti_Face.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     }
  //   ]

  // {
  //   "uid": "eli-lilly",
  //   "client": "Eli Lilly",
  //   "name": "Get Better",
  //   "categories": [
  //     "music"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/Zgs4a8t2UUcvBUUP_woman_LillyBetter_sm.jpg?auto=format,compress?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/Zgs3_ct2UUcvBUUF_short_LillyBetter.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/Zgs39st2UUcvBUUB_long_LillyBetter.mp4",
  //   "description": "For the people struggling with mental and physical health, the path to treatment and wellness is a complicated one. Eli Lilly shines a light on the nuanced problems facing the medical industry.",
  //   "credits": [
  //     "Agency: Wieden & Kennedy",
  //     "Director: Caroline Koning",
  //     "Original Music: Aniedoabasi",
  //     "Sound Designer: Natalie Huizenga",
  //     "Mixer: Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/Zgs4ast2UUcvBUUO_pool%2BLillyBetter_sm.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/Zgs4aMt2UUcvBUUM_man_LillyBetter_sm.jpg?auto=format,compress?auto=compress,format",
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/Zgs4act2UUcvBUUN_office_LillyBetter_sm.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     }
  //   ]
  // },
  // {
  //   "uid": "pella",
  //   "client": "Pella",
  //   "name": "Make Life Brighter",
  //   "categories": [
  //     "mix"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/aK4Gt2GNHVfTOVrW_PellaLightning.png?auto=format,compress?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/aK4HvGGNHVfTOVrg_PellaShort.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/aK4IdWGNHVfTOVrp_PellaLong.mp4",
  //   "description": "Don’t let what’s happening outside affect how you feel inside. Pella windows and doors are tested against extreme heat, cold, wind and rain, so you can roll with the elements and dance like no one’s watching.",
  //   "credits": [
  //     "Agency: Singlethread",
  //     "Director: Charlie Di Placido",
  //     "Mix: Noah Woodburn",
  //     "Sound Design: Morgan Johnson"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/aK4GsmGNHVfTOVrV_PellaBed.png?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/aK4GvGGNHVfTOVrX_PellaWind.png?auto=format,compress?auto=compress,format",
  //       "secondImageText": null
  //     }
  //   ]
  // },
  // {
  //   "uid": "still-moving.-still-pushing.--still-unstoppable.-l",
  //   "client": "Lululemon",
  //   "name": "Metal Vent Tech",
  //   "categories": [
  //     "mix",
  //     "sound-design"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/aK4c3mGNHVfTOV0A_LuluHoverClose.jpg?auto=format,compress?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/aK4bp2GNHVfTOVzl_LuluShort.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/aK4boWGNHVfTOVzj_LuluLong.mp4",
  //   "description": "Still moving. Still pushing.  Still unstoppable. Lewis Hamilton trains in Metal Vent Tech. Shop the iconic shirt that never quits.",
  //   "credits": [
  //     "Agency: Someplace",
  //     "Director: Yann Demange",
  //     "Mix: Noah Woodburn",
  //     "Sound Design: Morgan Johnson"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/aK4bq2GNHVfTOVzr_lululogo.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/aK4bqWGNHVfTOVzo_lulueyes.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/aK4bqGGNHVfTOVzm_lulublur.jpg?auto=format,compress?auto=compress,format",
  //       "secondImageText": null
  //     }

  // {
  //   "uid": "manscaped",
  //   "client": "Manscaped",
  //   "name": "Hair Ballad",
  //   "categories": [
  //     "mix",
  //     "sound-design"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/acMRP5GXnQHGY7pr_sinksmall.jpg?auto=format,compress?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/acMQUZGXnQHGY7pR_manscapedshort.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/acMPzZGXnQHGY7pI_MSMHBDV160H_Manscaped_SuperBowl_Longform60_US_OLV_60_16x9.mp4",
  //   "description": "",
  //   "credits": [
  //     "Agency: Quality Meats",
  //     "Production Company: MJZ",
  //     "Director: The Perlorian Brothers",
  //     "Sound Designer: Morgan Johnson",
  //     "Mixer: Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/acMRP5GXnQHGY7ps_toiletsmall.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": "You won't miss your hair. But it might miss you. Mancare Your Everywhere™. Super Bowl LX."
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/acMRQ5GXnQHGY7pu_windowsmall.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/acMRQJGXnQHGY7pt_tubsmall.jpg?auto=format,compress?auto=compress,format",
  //       "secondImageText": null
  //     }
  //   ]

  // {
  //   "uid": "consumer-cellular-ryan-and-brenda",
  //   "client": "Consumer Cellular",
  //   "name": "Ryan and Brenda",
  //   "categories": [
  //     "mix"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/Zgs-38t2UUcvBUVM_sm_couple_Ryan_and_Brenda.jpg?auto=format,compress?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/Zgs-5st2UUcvBUVS_sm_long_Ryan_and_Brenda_45.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/Zgs-5ct2UUcvBUVR_long_Ryan_and_Brenda_45.mp4",
  //   "description": "Consumer Cellular celebrates the retired generation; rich in friends, confidence, and time. They’ve also got really great phone plans.",
  //   "credits": [
  //     "Agency: ALTO",
  //     "Director: Steve Ayson",
  //     "Sound Designer: Morgan Johnson",
  //     "Mixer: Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/Zgs-4st2UUcvBUVQ_sm_woman_Ryan_and_Brenda.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/Zgs-4st2UUcvBUVP_sm_ted2_Ryan_and_Brenda.jpg?auto=format,compress?auto=compress,format",
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/Zgs-38t2UUcvBUVN_sm_flying_Ryan_and_Brenda.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     }
  //   ]
  // },
  // {
  //   "uid": "welcome-to-irish-spring",
  //   "client": "Irish Spring",
  //   "name": "Welcome To Irish Spring",
  //   "categories": [
  //     "mix",
  //     "sound-design"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/ab12e884-d4d3-40a5-8e6c-e26dc54ad1b4_Irish+Spring+-+Welcome+To+Irish+Spring.jpg?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/091723ab-eca9-4248-9bc9-04be60158be8_short_Irish+Spring+-+Welcome+To+Irish+Spring.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/2969c2f1-4b9d-4fba-8827-791a3c44503a_full_Irish+Spring+-+Welcome+To+Irish+Spring.mp4",
  //   "description": "Cast thy smell away! Take a journey to a nice smelling place in Irish Spring's commercial for Super Bowl LVI.",
  //   "credits": [
  //     "Agency: Ten6",
  //     "Directors: Matias & Mathias",
  //     "Sound Designer: Morgan Johnson",
  //     "Mixer: Noah Woodburn",
  //     "Notes: Super Bowl LVI"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/f827ccee-b7b2-4bc3-bbb2-e030552431d1_Irish_01.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/e1993a8f-d061-4625-9526-2dc659c3a07f_Irish_06.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/c6d015e8-733f-4d8b-a712-b8f6c6d0c78e_Irish_04.jpg?auto=compress,format",
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/2c537b0b-6c5f-4d25-9039-47cde6d0e318_Irish_05.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     }
  //   ]
  // },
  // {
  //   "uid": "travel-oregon",
  //   "client": "Travel Oregon",
  //   "name": "Guides",
  //   "categories": [
  //     "music",
  //     "mix"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/4a3e6c83-8cee-4d2c-8d66-4b848aac552d_TO+1.jpeg?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/d539acc9-814c-427d-81fb-10454c0c34cb_short_ZWAK1355686H_Guides_WEB_HD_60.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/2ee39c06-7e40-48e1-851a-b238917d4cec_ZWAK1355686H_Guides_WEB_HD_60.mp4",
  //   "description": "Combining all the things we love the most: friendly puppets, adventure in Oregon, and a wicked catchy song. ",
  //   "credits": [
  //     "Agency: Wieden & Kennedy",
  //     "Director: Joe Pelling",
  //     "Original Song: Aniedoabasi",
  //     "Sound Design & Mix: Natalie Huizenga"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/e4a6c839-e97b-4e68-9d84-cecd4e81477f_TO+3.jpeg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/982ff9f9-0f62-4d43-bf85-1d19ffb2854e_TO+2.jpeg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     }
  //   ]
  // },
  // {
  //   "uid": "vrbo",
  //   "client": "VRBO",
  //   "name": "You And Your People",
  //   "categories": [
  //     "music"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/1fcb5ab7-3de7-4f0b-9702-7bc10c6766fa_vrbo_01.jpg?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/80f6ef68-f55a-4371-a265-062f272f5057_Short_VRBO+-+You+And+Your+People_Crop.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/06e5cc89-bd7e-4fff-94eb-a951bae42851_full_VRBO+-+You+And+Your+People.mp4",
  //   "description": "\"Only Your People” highlights the fact that Vrbo only allows private, whole homes on its site and app, so there are no awkward vacation experiences from sharing space with a stranger.",
  //   "credits": [
  //     "Agency: Wieden + Kennedy",
  //     "Director: Sara Dunlop",
  //     "Original Music: Aniedoabasi",
  //     "Sound Designer: Morgan Johnson",
  //     "Mixer: Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/aa023ed8-071d-4f63-a5e8-377c2389b13a_vrbo_02.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/64dda6d0-b577-45f9-a44f-c475d7874a13_vrbo_04.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/2a2e611b-7820-4561-9e41-18af5f7cbedc_vrbo_07.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/9878c747-c493-476c-ba51-c5bfd4965664_vrbo_06.jpg?auto=compress,format",
  //       "secondImageText": null
  //     }
  //   ]
  // },
  // {
  //   "uid": "hinge",
  //   "client": "Hinge",
  //   "name": "Designed To Be Deleted",
  //   "categories": [
  //     "mix",
  //     "sound-design"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/ZxlD9IF3NbkBX8lK_Hinge_Pic_03.jpg?auto=format,compress?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/ZxlD-oF3NbkBX8lN_short_Hinge.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/ZxlD-IF3NbkBX8lM_long_Hinge-PearlyGates.mp4",
  //   "description": "Upon entering the afterlife, each Hingie meets The Oracle, who is responsible for reviewing the successful dating stories that led to their demise.",
  //   "credits": [
  //     "Agency: Wieden + Kennedy",
  //     "Director: Bine Bach",
  //     "Mixer: Noah Woodburn",
  //     "Sound Designer: Morgan Johnson"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/ZxlD9YF3NbkBX8lL_Hinge_Pic_04.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/ZxlD84F3NbkBX8lJ_Hinge_Pic_02.jpg?auto=format,compress?auto=compress,format",
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/ZxlD84F3NbkBX8lI_Hinge_Pic_01.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     }
  //   ]
  // },
  // {
  //   "uid": "mlb",
  //   "client": "MLB",
  //   "name": "62",
  //   "categories": [
  //     "music"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/4537edac-ae4b-4e6e-abca-4e0e83d937c5_62+Still.jpg?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/efd742d6-1dc2-4c6c-904d-ceeac9934de7_short_MLB+62+Web+FDS+Master+POSTING.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/cfb392f7-d804-4cbe-a5d3-f24299807b4d_MLB+62+Web+FDS+Master+POSTING.mp4",
  //   "description": "To get to 62, you gotta go all the way back to ‘61. What number's next?  Baseball is something else",
  //   "credits": [
  //     "Agency: Wieden + Kennedy",
  //     "Original Music: Aniedoabasi",
  //     "Sound Design: Morgan Johnson",
  //     "Mix: Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/f65137f5-5b76-47cd-8e91-2db4a160d437_mlb+1.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/36fe2099-897b-45ba-b6c0-e1c4034670e8_mlb+4.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/a31cc1d1-4037-4a9b-b501-d8bb2f602193_mlb+3.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/9ae50fba-48bf-430b-8c9e-0bd6ca3458ab_mlb+2.jpg?auto=compress,format",
  //       "secondImageText": null
  //     }
  //   ]
  // },
  // {
  //   "uid": "every-day-holds-a-win",
  //   "client": "Kaiser",
  //   "name": "Every Day Holds a Win",
  //   "categories": [
  //     "music"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/469d6754-adc4-4ae3-9406-8d92020ee716_kayser_01.jpg?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/296c90dd-060d-42e8-a84b-a72d04a0d22e_short_Kaiser+-+Every+Day+Holds+A+Win.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/fdf5d62c-e936-41c5-835b-93bd5a402ed3_full_Kaiser+-+Every+Day+Holds+A+Win.mp4",
  //   "description": "Two injuries and 941 days away from the game of basketball showed Klay Thompson the resilience he never knew he had. And reminds us of the resilience we all have.",
  //   "credits": [
  //     "Agency: W+K Portland",
  //     "Director: Amara Abbas",
  //     "Original Music: Aniedoabasi",
  //     "Sound Designer: Morgan Johnson",
  //     "Mixer: Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/439b4d1b-1fc6-4f10-8ff5-4f2cc08d325c_kayser_02.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/930916af-94a9-4e05-b1f1-a1a2b3438fbe_kayser_05.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/987f1839-2a2f-4f4a-8778-49f38c233032_kayser_04.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     }
  //   ]

];

export const about: AboutData = {
  aboutPres: "We are a creative sound and music company.",
  aboutIntroduction: "Aniedoabasi is an award-winning sound design, music, and mix company for advertising and film. Our team is composed of creative artists and producers who work together to deliver thoughtful sound for brands, directors, and studios across the world. ",
  aboutServices: [{ "service": "Creative Sound Design,\nFoley & Custom Field Recording" }, { "service": "Stereo & Surround Mixing\nfor TV, Web & Cinema" }, { "service": "Original Music & Sonic Branding\nMusic Supervision & Licensing" }, { "service": "Voice Casting, Recording & ADR" }],
  aboutTeam: [{ "name": "Leslie Carthy", "role": "Executive Producer" }, { "name": "Katie Overcash", "role": "Executive Producer" }, { "name": "Noah Woodburn", "role": "Mixer / Music Producer" }, { "name": "Morgan Johnson", "role": "Sound Designer / Mixer" }, { "name": "Natalie Huizenga", "role": "Mixer / Sound Designer " }],
  infosLabel: "Work with us",
  infoItem: ["leslie@fielddaysound.tv", "805-708-3155", "----", "605 NW 11th Ave\nPortland OR 97209", "----", "West Coast Reps \nezra@oneofones.com", "sylvia@oneofones.com"],
  introductionLastText: "AdAge 2025 Music & Sound Company of the Year",
  footerLinks: [{ "name": "Instagram", "url": "https://www.instagram.com/fielddaysound.tv/" }, { "name": "LinkedIn", "url": "https://www.linkedin.com/company/field-day-sound" }],
  footerTrademark: "©2026 Aniedoabasi"
};
