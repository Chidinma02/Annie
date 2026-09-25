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

export const homepageProjects: Project[] = [
  // {
  //   "uid": "taylormade",
  //   "client": "TaylorMade",
  //   "name": "Straight Distance",
  //   "categories": [
  //     "sound-design"
  //   ],
  //   "thumbnailUrl": "/image/17.png",
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
  //   "thumbnailUrl": "/image/17.png",
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
