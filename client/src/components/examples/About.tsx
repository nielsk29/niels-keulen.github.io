import About from "../About";
import avatarImage from "@assets/generated_images/Professional_headshot_portrait_c9fd9e01.png";

export default function AboutExample() {
  return (
    <About
      image={avatarImage}
      bio="I'm a dedicated full-stack developer and computer science student with a passion for creating elegant solutions to complex problems. I combine academic knowledge with practical experience to deliver high-quality software."
      objectives={[
        "Master modern web technologies and frameworks",
        "Contribute to open-source projects and community",
        "Build scalable and user-friendly applications",
        "Continuously learn and adapt to new technologies",
      ]}
      lookingFor={[
        "Internship opportunities in software development",
        "Collaborative projects with experienced teams",
        "Mentorship from industry professionals",
        "Challenging problems that push my skills forward",
      ]}
    />
  );
}
