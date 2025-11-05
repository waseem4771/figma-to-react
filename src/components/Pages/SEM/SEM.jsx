import React from 'react';
import SemBanner from './SemBanner';
import BenefitsSection from '../BehindThePixels/BenefitsSection';
import BrandingServices from '../Branding/BrandingServices';
import SocialMediaFeatures from '../SocialMediaMarketing/SocialMediaFeatures';
import ConsistentToneSection from '../SocialMediaMarketing/ConsistentToneSection';
import PostRegularlySection from '../SocialMediaMarketing/PostRegularlySection';
import CTASection from '../../Footer/CTASection';
import Footer from '../../Footer/Footer';
import CopyrightFooter from '../../Footer/CopyrightFooter';
import BrandAuditSection from '../Branding/BrandAuditSection';

const SEM = () => {
  return (
   <>
    <SemBanner/>
    <BenefitsSection/>
    <BrandingServices/>
    <SocialMediaFeatures/>
    <BrandAuditSection/>
    <ConsistentToneSection/>
    <PostRegularlySection/>
    <CTASection/>
      <Footer/>
      <CopyrightFooter/>
     
   </>
  );
};

export default SEM;