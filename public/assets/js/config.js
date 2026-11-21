/**
 * CLIENT CONFIGURATION
 * --------------------
 * Change client-specific content here. Keep quotation marks and commas intact.
 */

window.INVITATION_CONFIG = {
  site: {
    title: "Rida & Zayan — Nikah Invitation",
    description:
      "You are warmly invited to celebrate the Nikah of Rida Fathima and Zayan Rashid.",
  },

  couple: {
    brideInitial: "R",
    groomInitial: "Z",
    bride: {
      name: "Rida Fathima",
      relation: "Daughter of",
      parents: "Iqbal Ahmed & Nasreen Banu",
    },
    groom: {
      name: "Zayan Rashid",
      relation: "Son of",
      parents: "Abdul Kareem & Saira Begum",
    },
  },

  copy: {
    bismillah: "﷽",
    bismillahTranslation:
      "",
    welcomeLine: "We request the honour of your\npresence at the Nikah of",
    invitation:
      "",
    heroClosing:
      "as they begin their forever in\nfaith and love.",
    welcomeTitle: "A Blessed Beginning",
    welcomeBody:
      "With hearts full of gratitude, we warmly invite you to join us as we celebrate this beautiful beginning with the love, prayers, and blessings of our families.",
    gifts:
      "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
    closing: "We can’t wait to celebrate with you.",
    dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
  },

  wedding: {
    // Use a valid ISO date with the local UTC offset for an accurate countdown.
    isoDate: "2027-01-17T19:00:00+05:30",
    date: "January 17, 2027",
    day: "Sunday",
    time: "07:00 PM",
    timezone: "IST",
  },

  media: {
    // Replace these two files inside the /media folder.
    introVideo: "./media/intro-placeholder.mp4",
    introPoster:
      "./media/intro-placeholder.webp",
    music: "./media/music-placeholder.mp3",

    // Replace gallery URLs with your own hosted files or image URLs.
    gallery: [
      {
        src: "./media/gallery/01.webp",
        alt: "A softly lit wedding detail",
        caption: "",
      },
      {
        src: "./media/gallery/02.webp",
        alt: "A joyful wedding celebration",
        caption: "",
      },
      {
        src: "./media/gallery/03.webp",
        alt: "Elegant wedding florals and table setting",
        caption: "",
      },
    ],
  },

  program: [
    {
      time: "06:30 PM",
      title: "Guest Arrival",
      note: "",
    },
    {
      time: "07:00 PM",
      title: "Nikah Ceremony",
      note: "Solemnisation & duas",
    },
    {
      time: "07:30 PM",
      title: "Blessings",
      note: "Family greetings & photographs",
    },
    {
      time: "08:00 PM",
      title: "Dinner",
      note: "A feast shared with love",
    },
  ],

  venue: {
    name: "Zafran Palace",
    address:
      "Tolichowki Main Rd, Hyderabad",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tolichowki+Hyderabad+Telangana",
  },

dressCode: {
  title: "Festive Formal",
  description:
    "Traditional or formal attire is encouraged. Sarees, lehengas, anarkalis, sherwanis, kurtas, suits, and formal dresses are all welcome. We kindly ask guests to avoid overly casual attire and white or ivory.",
  swatches: [
    "#7A1F2B",
    "#234638",
    "#C49A56",
    "#7A4968",
    "#31506B",
  ],
},

  preWeddingEvents: [
    {
      name: "Mehendi",
      date: "January 14",
      time: "4:00 PM",
      location: "Bride’s Residence",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Mehdipatnam+Hyderabad+Telangana",
    },
    {
      name: "Qawwali Evening",
      date: "January 16",
      time: "7:00 PM",
      location: "Groom's Residence",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Mehdipatnam+Hyderabad+Telangana",
    },
    {
      name: "Walima",
      date: "January 18",
      time: "7:30 PM",
      location: "Gulmohar Lawns, Hyderabad",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Gandipet+Hyderabad+Telangana",
    },
  ],

  rsvp: {
    deadline: "Kindly respond by December 20, 2026",
    contact: "For assistance, call +91 70254 23395",
    fields: {
      name: "Your full name",
      email: "Email address",
      attendance: ["Joyfully accepts", "Regretfully declines"],
      guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
      note: "Dietary notes or a message for the couple",
    },
  },

theme: {
  ivory: "#F1E3CE",       /* warm candlelit cream */
  plum: "#3A070C",        /* deepest burgundy */
  lavender: "#6F0B17",    /* wine red */
  mauve: "#A51520",       /* rose/crimson accent */
  lilac: "#D0B294",       /* warm nude / muted beige */
  champagne: "#C9A35F",   /* antique gold */
},
};
