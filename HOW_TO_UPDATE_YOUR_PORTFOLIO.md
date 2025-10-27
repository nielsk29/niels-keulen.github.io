# How to Update Your Portfolio

This guide explains how to add your real information to your portfolio website.

## 📁 Main Configuration File

**All your personal information is in one file:** `client/src/my-portfolio-info.ts`

This file contains everything you need to update:
- ✅ Your name, email, and contact information
- ✅ Social media links (LinkedIn, GitHub, etc.)
- ✅ Profile picture
- ✅ Hero section text
- ✅ About me bio and objectives
- ✅ Projects (add/remove as many as you want)
- ✅ Work experience and education
- ✅ Skills and technologies
- ✅ CV/Resume file

## 🚀 Quick Start: 3 Steps to Update

### Step 1: Open the Configuration File
1. Open the file `client/src/my-portfolio-info.ts`
2. This file has clear sections with comments explaining each part

### Step 2: Update Your Information
Replace the placeholder text with your real information:

```typescript
personalInfo: {
  name: "Your Full Name",              // ← Change this
  email: "your.email@example.com",     // ← Change this
  profileImage: "./assets/my-photo.jpg", // ← Change this
  // ... and so on
}
```

### Step 3: Save and Refresh
- Save the file
- The website will automatically update!

## 📸 Adding Your Profile Picture

1. **Save your photo** in the `client/src/assets/` folder
   - For example: `client/src/assets/my-photo.jpg`

2. **Update the path** in `client/src/my-portfolio-info.ts`:
   ```typescript
   profileImage: "./assets/my-photo.jpg",
   ```

## 📄 Adding Your CV/Resume

1. **Save your CV PDF** in the `public/` folder
   - For example: `public/my-cv.pdf`

2. **Update the CV path** in `client/src/my-portfolio-info.ts`:
   ```typescript
   cvFile: {
     path: "/my-cv.pdf",
     filename: "Your_Name_CV.pdf", // Name when downloaded
   }
   ```

## 📝 Adding/Removing Projects

To add a new project, copy this template in the `projects` array:

```typescript
{
  id: 4, // ← Increment the number
  title: {
    en: "Project Name in English",
    fr: "Nom du Projet en Français",
  },
  description: {
    en: "Description in English...",
    fr: "Description en français...",
  },
  image: "./assets/project-screenshot.png",
  technologies: ["React", "Node.js", "PostgreSQL"],
  liveUrl: "https://your-demo.com",     // Optional
  githubUrl: "https://github.com/you/project", // Optional
},
```

To remove a project, just delete its entire block.

## 🖼️ Adding Project Images

1. **Save project screenshots** in `client/src/assets/`
   - For example: `client/src/assets/project1.png`

2. **Reference them** in your project configuration:
   ```typescript
   image: "./assets/project1.png",
   ```

## 💼 Adding/Removing Experience

Copy this template to add new experience or education:

```typescript
{
  id: 4, // ← Increment the number
  type: "work", // or "education"
  title: {
    en: "Job Title",
    fr: "Titre du Poste",
  },
  organization: {
    en: "Company Name",
    fr: "Nom de l'Entreprise",
  },
  period: {
    en: "Jan 2023 - Present",
    fr: "Jan 2023 - Présent",
  },
  description: {
    en: [
      "First responsibility or achievement",
      "Second responsibility or achievement",
      "Third responsibility or achievement",
    ],
    fr: [
      "Première responsabilité ou réalisation",
      "Deuxième responsabilité ou réalisation",
      "Troisième responsabilité ou réalisation",
    ],
  },
},
```

## 🛠️ Adding/Removing Skills

Copy this template to add a new skill category:

```typescript
{
  id: 5, // ← Increment the number
  category: {
    en: "Category Name",
    fr: "Nom de la Catégorie",
  },
  icon: "code", // Options: "code", "tools", "design", "soft"
  skills: [
    { name: "Skill Name", level: "Advanced" }, // level is optional
    { name: "Another Skill" },
  ],
},
```

## 🌐 Bilingual Content

Your portfolio supports both English and French. For each text field, provide both versions:

```typescript
title: {
  en: "English version",
  fr: "Version française",
}
```

The website will automatically show the right language based on the user's selection.

## 🎨 Presentation Video (Optional)

If you have a YouTube presentation video:

1. Get your YouTube video ID (the part after `watch?v=`)
   - Example: `dQw4w9WgXcQ` from `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

2. Update in `client/src/my-portfolio-info.ts`:
   ```typescript
   presentationVideoId: "dQw4w9WgXcQ",
   ```

To remove the video, set it to an empty string:
```typescript
presentationVideoId: "",
```

## ❓ Need Help?

- All your changes go in **one file**: `client/src/my-portfolio-info.ts`
- The file has helpful comments explaining each section
- Save the file and the website updates automatically
- Keep the structure intact (commas, brackets, quotes)

## ✅ Checklist

Before publishing, make sure you've updated:
- [ ] Personal information (name, email)
- [ ] Profile picture
- [ ] Social links (LinkedIn, GitHub)
- [ ] Hero section text
- [ ] About section bio and objectives
- [ ] Projects (at least 2-3)
- [ ] Experience and education
- [ ] Skills
- [ ] CV/Resume file
- [ ] Presentation video (if you have one)

---

**That's it!** Everything you need to customize is in `client/src/my-portfolio-info.ts`. Happy editing! 🎉
