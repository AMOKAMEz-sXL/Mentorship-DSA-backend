import {Mentee} from "../models/u-index.js"; 
import { isUserEmailUnique } from "../validations/isUserEmailUnique.js";



const menteesData = [
  {
    firstName: "Makinde",
    lastName: "Adesuyi",
    shortBio: "Aspiring web developer passionate about front-end technologies.",
    email: "udohchi@gmail.com",
    goals: "Learn React and get an internship.",
    skills: ["HTML", "CSS"],
    password: "Adesuy45>", 
  },
  {
    firstName: "Akinrodoye",
    lastName: "Ogundare",
    shortBio: "Interested in data science and machine learning.",
    email: "ajayi432@gmail.com",
    goals: "Build a machine learning portfolio.",
    skills: ["Python", "Pandas", "Matplotlib"],
    password: "doye5000_G",
  },
  {
    firstName: "Sobowale",
    lastName: "Oni",
    shortBio: "Curious about cybersecurity and ethical hacking.",
    email: "zangaoni@gmail.com",
    goals: "Learn about network security tools.",
    skills: ["Networking", "Linux"],
    password: "Waleszy390-H",
  },
  {
    firstName: "Tijani",
    lastName: "Adefunke",
    shortBio: "Interested in data science and machine learning.",
    email: "funmilola_oseni23@gmail.com",
    goals: "Build a machine learning portfolio.",
    skills: ["Python", "Pandas", "Matplotlib"],
    password: "dare50000!K",
  },
  {
    firstName: "Oseni",
    lastName: "Funmilola",
    shortBio: "Curious about cybersecurity and ethical hacking.",
    email: "omoodemagbe@gmail.com",
    goals: "Learn about network security tools.",
    skills: ["Networking", "Linux"],
    password: "oseni!9078",
  },
  { 
    firstName: "Komolafe",
    lastName: "Idris",
    shortBio: "Interested in data science and machine learning.",
    email: "funmilola23@gmail.com",
    goals: "Build a machine learning portfolio.",
    skills: ["Python", "Pandas", "Matplotlib"],
    password: "laffy&79A",
  },
  {
    firstName: "Oni",
    lastName: "Banzaga",
    shortBio: "Interested in data science and machine learning.",
    email: "tajudeen9823@gmail.com",
    goals: "Build a machine learning portfolio.",
    skills: ["Python", "Pandas", "Matplotlib"],
    password: "banzaga-D897",
  },
  {
    firstName: "Amusan",
    lastName: "Samuel",
    shortBio: "Interested in data science and machine learning.",
    email: "ajayi432@gmail.com",
    goals: "Build a machine learning portfolio.",
    skills: ["Python", "Pandas", "Matplotlib"],
    password: "fidel_5456",
  },
  { 
    firstName: "Adeyemo",
    lastName: "Tajudeen",
    shortBio: "Interested in data science and machine learning.",
    email: "yemodeen234@gmail.com",
    goals: "Build a machine learning portfolio.",
    skills: ["Python", "Pandas", "Matplotlib"],
    password: "yemodeen43.",
  },
  {
    firstName: "Fidelis",
    lastName: "Umoh",
    shortBio: "Interested in data science and machine learning.",
    email: "temiloye222@gmail.com",
    goals: "Build a machine learning portfolio.",
    skills: ["Python", "Pandas", "Matplotlib"],
    password: "temi_5456",
  },
];

export async function seedMentees(): Promise<void> {
  try {
    

    
  for (const mentee of menteesData) {
    const isEmailUnique = await isUserEmailUnique(mentee.email);
    if (!isEmailUnique) {
      console.log("Email is already in use.");
      return;
    }

    const existing = await Mentee.findOne({ where: { email: mentee.email } });

    if (existing) {
      console.log("Email already exists");
      return;
    }

    await Mentee.create(mentee);
  }

  console.log("Mentee seeding completed.");
    console.log("Mentees seeded successfully.");
  } catch (error) {
    console.error("Error seeding mentees:", error);
  }
}
