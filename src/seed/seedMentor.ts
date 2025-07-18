import { Mentor } from "../models/u-index.js";
import { isUserEmailUnique } from "../validations/isUserEmailUnique.js";

export async function seedMentors() {
  
    
  const mentorsData = [
    {
      firstName: "Asuju",
      lastName: "Mary",
      shortBio: "Helping people grow in their careers.",
      email: "marysuju@gmail.com",
      goals: "Guide mentees toward professional success.",
      skills: ["Career Coaching", "Interview Prep", "Resume Review"],
      password: "suju#987Z", 
      isAvailable: true,
    },
    {
      firstName: "Ogunde",
      lastName: "Dupe",
      shortBio: "Full-stack engineer passionate about mentorship.",
      email: "sholanke@gmail.com",
      goals: "Help others break into software engineering.",
      skills: ["JavaScript", "Node.js", "React", "System Design"],
      password: "gunde_Dp56",
      isAvailable: false,
    },
    {
      firstName: "Essien",
      lastName: "Tobiloba",
      shortBio: "Full-stack engineer passionate about mentorship.",
      email: "omojuyigbe@gmail.com",
      goals: "Help others break into software engineering.",
      skills: ["JavaScript", "Node.js", "React", "System Design"],
      password: "juyi_4509!",
      isAvailable: true,
    },
    {
      firstName: "Fagbeyi ",
      lastName: "Deji",
      shortBio: "Full-stack engineer passionate about mentorship.",
      email: "biggytech@gmail.com",
      goals: "Help others break into software engineering.",
      skills: ["JavaScript", "Node.js", "React", "System Design"],
      password: "biggy_D56!",
      isAvailable: true,
    },
    {
      firstName: "Diya",
      lastName: "Kolawole",
      shortBio: "Full-stack engineer passionate about mentorship.",
      email: "temidayofodu@gmail.com",
      goals: "Help others break into software engineering.",
      skills: ["JavaScript", "Node.js", "React", "System Design"],
      password: "fodu_7345J",
      isAvailable: true,
    },
    {
      firstName: "Gaba",
      lastName: "Clement",
      shortBio: "Full-stack engineer passionate about mentorship.",
      email: "amusanwool@gmail.com",
      goals: "Help others break into software engineering.",
      skills: ["JavaScript", "Node.js", "React", "System Design"],
      password: "sanwo-3500J",
      isAvailable: true,
    },
    {
      firstName: "Etuk",
      lastName: "Bright",
      shortBio: "Full-stack engineer passionate about mentorship.",
      email: "jimmyu@gmail.com",
      goals: "Help others break into software engineering.",
      skills: ["JavaScript", "Node.js", "React", "System Design"],
      password: "jmmy_6780!",
      isAvailable: false,
    },
    {
      firstName: "Oyeyiga",
      lastName: "Dammy",
      shortBio: "Full-stack engineer passionate about mentorship.",
      email: "falade789@gmail.com",
      goals: "Help others break into software engineering.",
      skills: ["JavaScript", "Node.js", "React", "System Design"],
      password: "dammy9123-B",
      isAvailable: true,
    },
    {
      firstName: "Akinmejiwa",
      lastName: "Adeleke",
      shortBio: "Full-stack engineer passionate about mentorship.",
      email: "bodeson@gmail.com",
      goals: "Help others break into software engineering.",
      skills: ["JavaScript", "Node.js", "React", "System Design"],
      password: "deson9000-B",
      isAvailable: false,
    },
    {
      firstName: "Whesu",
      lastName: "Rianne",
      shortBio: "UX designer focused on accessibility and simplicity.",
      email: "rpelumi@gmail.com",
      goals: "Support aspiring designers entering the UX field.",
      skills: ["UX Design", "Figma", "User Research", "Design Thinking"],
      password: "pelumi5600!A",
      isAvailable: true,
    },
  ];

  for (const mentor of mentorsData) {
    
    const isEmailUnique = await isUserEmailUnique(mentor.email);
      if (!isEmailUnique) {
        console.log("Email is already in use.");
        return;
        }
    
    const existing = await Mentor.findOne({ where: { email: mentor.email } });
    
    if (existing) {
      console.log("Email already exists")
      return;
    }



    await Mentor.create(mentor);
  }

  console.log("Mentor seeding completed.");
}
