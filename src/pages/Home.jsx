import React from 'react';
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection';
import JourneyTimeline from '../components/sections/JourneyTimeline';
import FutureRoadmap from '../components/sections/FutureRoadmap';
import AchievementsSection from '../components/sections/AchievementsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <section id="home"><HomeSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="skills"><SkillsSection /></section>
      <section id="projects"><FeaturedProjectsSection /></section>
      <section id="journey"><JourneyTimeline /></section>
      <section id="roadmap"><FutureRoadmap /></section>
      <section id="achievements"><AchievementsSection /></section>
      <section id="contact"><ContactSection /></section>
    </div>
  );
};

export default Home;
