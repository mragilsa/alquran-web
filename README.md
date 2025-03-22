# 📖 Quran Web

Quran Web is a modern and feature-rich web application designed to provide a comprehensive Quran reading and listening experience. The app gives users access to the full Quran, spanning 114 Surahs, along with audio recitations, translations, etc — all wrapped in a clean, intuitive, and responsive interface. This project was built using React, TypeScript, and Tailwind CSS to ensure a smooth, maintainable, and scalable codebase while delivering a fast, mobile-friendly user experience.

---

## 🌟 Key Features

- Complete Quran Access: Read the entire Quran, organized into 114 Surahs.
- Audio Recitation: Listen to recitations from multiple Qari (reciters) with playback controls.
- Qari Selection: Choose from a variety of renowned Qari, allowing personalization of the listening experience.
- Arabic Text: View the original Arabic script in a beautifully rendered font.
- Latin Transliteration: Understand the pronunciation of each Ayah with Latin transliteration.
- Indonesian Translation: Access translations in Bahasa Indonesia to comprehend the meaning of each verse.
- Surah Information: View additional details like the Surah’s meaning, revelation place (Makkah/Madinah), and verse count.
- Responsive Design: Optimized for mobile, tablet, and desktop screens.
- Fast Performance: Leveraging Vite for lightning-fast builds and instant hot module replacement (HMR).

---

## 🏗️ Tech Stack

- Frontend: React, TypeScript
- State Management: React Hooks (useState, useEffect)
- API Integration: Quran API for fetching Quranic data, audio recitations, and Surah metadata.
- Routing: React Router for seamless navigation between pages.
- Deployment: Vercel for fast and reliable deployment.
- Version Control: Git and GitHub for source code management.

---

## 📂 Project Structure
```
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   ├── AyatBackgroundImage.png
│   │   ├── ChevronRightIcon.svg
│   │   ├── HeroBackgroundImage.png
│   │   ├── PauseIcon.svg
│   │   ├── PlayIcon.svg
│   │   ├── VerseBackgroundImage.png
│   │   └── react.svg
│   ├── components
│   │   ├── AudioControl.tsx
│   │   ├── Ayat
│   │   │   ├── AyatCard.tsx
│   │   │   └── AyatList.tsx
│   │   ├── DetailSurah
│   │   │   ├── DetailSurah.tsx
│   │   │   ├── DetailSurahContainer.tsx
│   │   │   └── DetailSurahInfo.tsx
│   │   ├── Hero.tsx
│   │   ├── Number.tsx
│   │   ├── Profile.tsx
│   │   ├── Surah
│   │   │   ├── SurahCard.tsx
│   │   │   ├── SurahContainer.tsx
│   │   │   └── SurahList.tsx
│   │   └── Verse.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   ├── DetailSurahPage.tsx
│   │   └── HomePage.tsx
│   ├── types
│   │   └── surah.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts  
```
---

## ⚙️ Installation and Setup

1. Clone the repository:
   ``` bash
   git clone https://github.com/mragilsa/alquran-web.git  

2. Navigate into the project directory:
   ``` bash
   cd alquran-web  

3. Install dependencies:
   ``` bash
   npm install  

4. Run the development server:
    ``` bash
   npm run dev  

5. Open the app in your browser at: [http://localhost:5173](http://localhost:5173)  

---

## 📘 How to Use

1. Upon opening the app, you’ll see a list of all 114 Surahs.  
2. Click on any Surah to open and read its verses.  
3. Press the **Play** button to listen to the recitation from start to finish.  
4. The app is designed for simplicity — just click, read, and listen!    
---

## 📄 License

This project is not licensed. All rights reserved.

---

## 📧 Contact

For any inquiries or feedback, feel free to reach out:  
- GitHub: https://github.com/mragilsa  
- Email: mragilsahyuda@gmail.com  
