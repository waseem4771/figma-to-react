import React from 'react';
import SocialHeroSection from './SocialHeroSection';
import SocialMediaFeatures from './SocialMediaFeatures';
import OurApproachSection from './OurApproachSection';
import PostRelevantContentSection from './PostRelevantContentSection';
import ConsistentToneSection from './ConsistentToneSection';
import PostRegularlySection from './PostRegularlySection';
import ConsistentToneSectionSecond from './ConsistentToneSectionSecond';
import OurServicesSection from './OurServicesSection';
import CTASection from '../../Footer/CTASection';
import Footer from '../../Footer/Footer';
import CopyrightFooter from '../../Footer/CopyrightFooter';


const SocialaMediaMarketing = () => {
  return (
    <>
        <SocialHeroSection/>
        <SocialMediaFeatures/>
        <OurApproachSection/>
        <PostRelevantContentSection/>
        <ConsistentToneSection/>
        <PostRegularlySection/>
        <ConsistentToneSectionSecond/>
        <OurServicesSection/>
        <CTASection/>
      <Footer/>
      <CopyrightFooter/>
       
    </>
  );
};

export default SocialaMediaMarketing;