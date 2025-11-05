import React from 'react';
import HeroSection from '../../HeroSection/HeroSection.jsx';
import VisionSection from '../../VisionSection/VisionSection.jsx';
import MissionSectionFirst from '../../MissionSection/MissionSectionFirst.jsx';
import MissionSectionSecond from '../../MissionSection/MissionSectionSecond.jsx';
import CoreServices from '../../CoreServices/CoreServices.jsx';
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs.jsx';
import CTASection from '../../Footer/CTASection.jsx';
import Footer from '../../Footer/Footer.jsx';
import CopyrightFooter from '../../Footer/CopyrightFooter.jsx';

const Home = () => {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <MissionSectionFirst />
      <MissionSectionSecond />
      <CoreServices />
      <WhyChooseUs />
      <CTASection />
      <Footer />
      <CopyrightFooter />
    </>
  );
};

export default Home;