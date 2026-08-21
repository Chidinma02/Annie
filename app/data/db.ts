export interface ProjectImage {
  imageUrl?: string | null;
  imageText?: string | null;
  secondImageUrl?: string | null;
  secondImageText?: string | null;
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
  credits: string[];
  images: ProjectImage[];
  galleryColumns?: number;
  aspectRatio?: 'landscape' | 'portrait' | 'auto';
  galleryAspect?: 'square' | 'portrait' | 'landscape' | 'auto';
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
    "description": "At IJGB, I led the visual design across the brand's always-on content and campaign work, educational infographics, and PR visuals. Beyond the day-to-day, I shaped moodboards and visual systems for brand campaigns. I delivered motion graphics, video edits, flyers, design presentation decks, and merch design for one-off projects and launches.Working across static design, motion, and photography, I became a go-to for the team on anything visual - helping keep the brand consistent, campaigns sharper, and creative bottlenecks minimal.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "uid": "huddle",
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
    "description": "Sound design and mix for The Return of the Huddle by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
    "images": []
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
    "description": "Nike's all-new C1TY is a tough, stylish shoe, built to keep up with those with shit to do and places to be. To turn heads in NYC, we staged a heist-worthy spectacle—\"leaking\" surveillance footage of an 18-ton truck packed with C1TYs getting tagged with graffiti and broken into. Then, we proceeded to crash the truck in a Lower East Side parking lot to hand the shoes out . The result? Pure NYC chaos: rowdy lines around the block, a few unimpressed cops, and a city full of go-getters laced up for whatever's next.",
    "credits": [
      "Made with Benson Wink for Nike",
      "CD: Gabby Tama",
      "Execution: Manual NYC, Recess Studios",
      "Artist: Omi",
      "Photography: Jacob Consenstein",
      "Video: Yohan Yoon, Brandon Yoon, Yavez Anthonio"
    ],
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
    "uid": "juicyway",
    "year": "2024",
    "client": "Juicyway",
    "name": "My Juicyway",
    "categories": [
      "Photographer & Video Editor — JuicyWay Launch"
    ],
    "thumbnailUrl": null,
    "visualUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1787106077/MOV_5230_1_btg8wz.mp4",
    "mainVideoUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1787106077/MOV_5230_1_btg8wz.mp4",
    "description": "Shot and edited web launch photography and staff headshots, then edited and color graded the campaign videos — delivering a consistent visual identity across the entire launch.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/1.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/2.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/3.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combineall/4.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combineall/5.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combineall/6.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combineall/7.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combineall/8.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/9.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/10.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/11.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/12.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/13.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/14.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/15.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/16.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/17.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/18.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/19.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/20.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://res.cloudinary.com/duyiomsdf/video/upload/w_1920,c_limit,f_auto,q_auto/v1786600516/Juicyway_headshots_jy1ngm.mp4",
        "imageText": null,
        "secondImageText": null
      },

      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/21.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/22.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/24.jpg",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/25.jpg",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combined-folder/26.PNG",
        "imageText": null,
        "secondImageText": null
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
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/all/Christmas ad cover.jpg",
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
      // {
      //   // "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Jordan_web.mp4",
      //   "imageUrl": "https://www.youtube.com/watch?v=72boLm5qi-E",
      //   "imageText": null,
      //   "secondImageText": null
      // },
      {
        "imageUrl": "https://www.youtube.com/watch?v=wieuniPRDYQ",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/combineall/Test shoot.PNG",
        "imageText": null,
        "secondImageText": null
      },
      {
        "imageUrl": "https://www.youtube.com/watch?v=MmnSLdfaftI",
        "imageText": null,
        "secondImageText": null
      }
    ]
  },
  {
    "uid": "hingees",
    "client": "Hingees",
    "name": "Hingees",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/18.png",
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/18.png",
    "mainVideoUrl": null,
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
    "images": [
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/1.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/2.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/3.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/4.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/5.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/6.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/7.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/8.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/9.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/10.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/11.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/12.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/13.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/14.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/15.png",
        "imageText": null,
        "secondImageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/16.png",
        "secondImageText": null
      },
      {
        "imageUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/Hingees/17.png",
        "imageText": null,
        "secondImageText": null
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
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "mainVideoUrl": null,
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "mainVideoUrl": null,
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "client": "Linen",
    "name": "Linen",
    "categories": [
      "Creative",
      "Concept"
    ],
    "thumbnailUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/41.png",
    "visualUrl": "https://pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev/41.png",
    "mainVideoUrl": null,
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
    "description": "Sound design, custom music supervisions and mixing by Aniedoabasi.",
    "credits": [
      "Sound Design & Mix: Aniedoabasi"
    ],
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
  // },
  // {
  //   "uid": "nikewhatthefootball",
  //   "client": "Nike",
  //   "name": "What The Football",
  //   "categories": [
  //     "mix",
  //     "sound-design"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/425aa17d-39a1-47a4-8fbe-c8697fdd835b_what+the+football+thumb.jpg?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/3fe455e9-fb8f-4ff0-85e3-238b913e1a42_SHORT_Anthem_Titled_WEB_16x9_HD_LF_No+Slate_1+copy.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/2efb37d0-dc7c-4c68-be9a-c23e5260286f_NKVR3076000H_Anthem_Titled_WEB_16x9_HD_LF_No+Slate_1.mp4",
  //   "description": "Nike set’s the stage for a new world order in Women’s soccer, celebrating soccer heroes past and present ahead of the 2023 FIFA Women’s World Cup",
  //   "credits": [
  //     "Agency: Wieden + Kennedy",
  //     "Director: ALASKA",
  //     "Sound Design & Mix: Noah Woodburn, Morgan Johnson, Natalie Huizenga",
  //     "Awards: AICP Audio Mix over :60",
  //     "Awards: Clio Sports Film Craft: Sound Design",
  //     "Awards: The One Show - Music & Sound Craft: Sound Design",
  //     "Awards: The One Show - Music & Sound Craft: Mix"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/d92d07ff-e92e-4246-9434-600a7ea5d5d8_what+the+football.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/9bc71159-1fa3-468b-af16-4acafff41710_what+the+football+2.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     }
  //   ]
  // },
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
  //   ]
  // },
  // {
  //   "uid": "amiabadperson",
  //   "client": "Nike",
  //   "name": "Am I A Bad Person",
  //   "categories": [
  //     "mix",
  //     "sound-design"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/Zs63okaF0TcGJcxH_OLY_0010_Frame128.png?auto=format,compress?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/Zs66mUaF0TcGJcx1_short_nike_AmIABadPerson.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/Zs63vUaF0TcGJcxK_LONG_ANTHEM_AM_I_A_BAD_PERSON_WEB_16x9_Titled_HD_2min.mp4",
  //   "description": "You can’t win them all, but you should sure as hell try. Bring on the odds, play like you mean it. Because if you don’t want to win, congrats. You’ve already lost. ",
  //   "credits": [
  //     "Agency: Wieden + Kennedy",
  //     "Director: Kim Gehrig",
  //     "Mix: Noah Woodburn",
  //     "Sound Design: Morgan Johnson, Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/Zs6470aF0TcGJcxd_BadPerson1.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/Zs648EaF0TcGJcxe_BadPerson2.jpg?auto=format,compress?auto=compress,format",
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/Zs648UaF0TcGJcxf_BadPerson3.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     }
  //   ]
  // },
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
  // },
  // {
  //   "uid": "nike-we-are-all-witnesses",
  //   "client": "Nike",
  //   "name": "We Are Witnesses",
  //   "categories": [
  //     "music"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/8a38b94c-e52b-4fe6-87f7-db5e3aa9deb4_Witnesses+Screen+Shot.jpg?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/4c0a5efd-114d-4158-993a-16b57d2b24a2_short_Nike+-+We+Are+All+Witnesses_Rev.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/37ada51d-5201-4a65-bb21-0b3f5d4d50e6_full_Nike+-+We+Are+All+Witnesses_Rev.mp4",
  //   "description": "20 years later, we are who we’ve always been – Witnesses to Lebron James and his never-ending greatness.",
  //   "credits": [
  //     "Agency: Wieden Kennedy",
  //     "Original Music: Aniedoabasi",
  //     "Sound Design: Morgan Johnson",
  //     "Mix: Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/5b548594-f7f5-49b4-9b92-57935501825e_Nike+-+We+Are+Witnesses_01.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/06452877-fe97-48f0-a632-ede21bc94866_Nike+-+We+Are+Witnesses_03.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/ea383b17-d470-40a8-b55e-63b515ac42ab_Nike+-+Witnesses+-+Lebron+kid.jpg?auto=compress,format",
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/7e7e0cdc-a0aa-4335-b9b2-e8f80e9cb684_Nike+-+We+Are+Witnesses_06.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     }
  //   ]
  // },
  // {
  //   "uid": "celebrating-australias-sam-kerr-playing-top-notch-",
  //   "client": "Nike",
  //   "name": "Flip The Game",
  //   "categories": [
  //     "sound-design"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/Zgx-ict2UUcvBWCs_sm_KerrKick.jpg?auto=format,compress?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/ZgyAM8t2UUcvBWC0_sm_Nike-FlipTheGame2.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/Zgx7Cct2UUcvBWB5_long_Nike-FlipTheGame.mp4",
  //   "description": "Celebrating Australia's Sam Kerr playing top notch football on home turf in the 2023 Women’s World Cup. When Kerr scores, the whole world flips with her. ",
  //   "credits": [
  //     "Agency: Wieden + Kennedy",
  //     "Director: ALASKA",
  //     "Sound Designer: Morgan Johnson",
  //     "Mixer: Natalie Huizenga",
  //     "Mixer: Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/Zgx-i8t2UUcvBWCu_sm_shoejump.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/Zgx-h8t2UUcvBWCq_sm_couch.jpg?auto=format,compress?auto=compress,format",
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/Zgx-hst2UUcvBWCp_sm_busflip.jpg?auto=format,compress?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/Zgx-iMt2UUcvBWCr_sm_KerrFlip.jpg?auto=format,compress?auto=compress,format",
  //       "secondImageText": null
  //     }
  //   ]
  // },
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
  // },
  // {
  //   "uid": "nike-seen-it-all",
  //   "client": "Nike",
  //   "name": "Seen It All",
  //   "categories": [
  //     "mix"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/3c218274-5081-48f3-b872-69f87dc76a19_thumb_nike-seen-it-all.jpg?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/95e40c0d-ff1f-40cb-b46b-9d5bd05d1690_short_Nike+-+Seen+It+All.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/adeab7ba-e367-498f-a20b-a1149b580250_Nike+-+Seen+It+All.mp4",
  //   "description": "Directed by and starring Spike Lee as Mars Blackmon, and Indigo Hubbard-Salk as Zimmie, paying homage to the past while making way for what’s next. ",
  //   "credits": [
  //     "Agency: Wieden + Kennedy",
  //     "Director: Spike Lee",
  //     "Sound Designer: Morgan Johnson",
  //     "Mixer: Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/8f22023a-aa0b-4435-9c1c-e0050d21d89a_Nike+-+Seen+It+All_01.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/ffb4059f-7555-458f-a58f-ce267bc2c072_Nike+-+Seen+It+All_02.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/3443863b-4ce6-4dde-b378-79e22b669478_Nike+-+Seen+It+All_05.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/f005c1d2-30f8-4cd4-a7a1-dd61b558103a_Nike+-+Seen+It+All_06.jpg?auto=compress,format",
  //       "secondImageText": null
  //     }
  //   ]
  // },

  // //   "uid": "nike-be-better",
  // //   "client": "Nike",
  // //   "name": "Be Better",
  // //   "categories": [
  // //     "mix"
  // //   ],
  // //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/f6d35ae9-9f67-489a-b511-56dff0f112a8_thumb_be+better.jpg?auto=compress,format",
  // //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/f102e717-3fbe-494e-973e-83004ddfd5a7_short_Nike_Be+Better.mp4",
  // //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/11749856-9992-4500-a2e9-164aa05f07d5_full_Nike_Be+Better.mp4",
  // //   "description": "In his own words, Kobe described his Mamba Mentality by saying, \"It’s to constantly try to be the best version of yourself. It's a constant quest to try to be better today than you were yesterday.\" While incremental change may feel small in the short term, those subtle shifts culminate to greater progress over time. This relentless drive for improvement is the legacy Kobe leaves.",
  // //   "credits": [
  // //     "Agency: Wieden + Kennedy",
  // //     "Director: Melina Matsoukas",
  // //     "Sound Design & Mix: Noah Woodburn",
  // //     "Notes: Emmy Nomination 2021"
  // //   ],
  // //   "images": [
  // //     {
  // //       "imageUrl": "https://images.prismic.io/field-day-sound/e2588017-15fa-4911-aeeb-bc6c7bb4b062_Still_Be+Better_1.jpg?auto=compress,format",
  // //       "imageText": null,
  // //       "secondImageText": null
  // //     },
  // //     {
  // //       "imageUrl": "https://images.prismic.io/field-day-sound/dab6ad07-0ede-4622-ac69-fc8e89e5e4e2_Still_Be+Better_2.jpg?auto=compress,format",
  // //       "imageText": null,
  // //       "secondImageUrl": "https://images.prismic.io/field-day-sound/3fe8b71d-df3b-4d60-82b0-667954223c28_Still_Be+Better_4.jpg?auto=compress,format",
  // //       "secondImageText": null
  // //     },
  // //     {
  // //       "imageUrl": "https://images.prismic.io/field-day-sound/10b89ec9-f3a3-4f5e-8ef2-64809b421dae_Still_Be+Better_3.jpg?auto=compress,format",
  // //       "imageText": null,
  // //       "secondImageText": null
  // //     }
  // //   ]
  // // },
  // {
  //   "uid": "nike-dream-further",
  //   "client": "Nike",
  //   "name": "Dream Further",
  //   "categories": [
  //     "sound-design",
  //     "mix"
  //   ],
  //   "thumbnailUrl": "https://images.prismic.io/field-day-sound/3aecfbe4-1eb5-4463-ac2c-c1a3f716aa14_thumb_Nike+-+Dream+Further.jpg?auto=compress,format",
  //   "visualUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/a08a718a-aeec-4e6e-9c8d-decd6113a26f_short_Nike+-+Dream+Further_1.mp4",
  //   "mainVideoUrl": "https://field-day-sound.cdn.prismic.io/field-day-sound/f9165889-ff9f-4114-bb88-2bb9e0b27379_full_Nike+-+Dream+Further_1.mp4",
  //   "description": "Don't change your dream. Change the world. ",
  //   "credits": [
  //     "Agency: Wieden + Kennedy",
  //     "Director: Francois Rousselet",
  //     "Sound Design & Mix: Noah Woodburn"
  //   ],
  //   "images": [
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/b7f9b33f-1037-4240-992a-b2ee619ccf83_Nike+-+Dream+Further_01.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/5159d256-2698-46ac-9be8-7659681f23b4_Nike+-+Dream+Further_03.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageText": null
  //     },
  //     {
  //       "imageUrl": "https://images.prismic.io/field-day-sound/4b93e21e-78ad-4ea0-b6d2-505eb1071a40_Nike+-+Dream+Further_04.jpg?auto=compress,format",
  //       "imageText": null,
  //       "secondImageUrl": "https://images.prismic.io/field-day-sound/b8b01729-d47d-4024-908d-d38bcd3cf62c_Nike+-+Dream+Further_05.jpg?auto=compress,format",
  //       "secondImageText": null
  //     }
  //   ]
  // }
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
