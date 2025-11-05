import React from 'react';
import HeroSection from './HeroSection';
import BrandIdentitySection from './BrandIdentitySection';
import BrandingServices from './BrandingServices';
import BrandBuildSection from './BrandBuildSection';
import DeployAssetsSection from './DeployAssetsSection';
import BrandAuditSection from './BrandAuditSection';
import AuditProcessSection from './AuditProcessSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import CTASection from '../../Footer/CTASection';
import Footer from '../../Footer/Footer';
import CopyrightFooter from '../../Footer/CopyrightFooter';

const Branding = () => {
  return (
    <>
      <HeroSection/>
      <BrandIdentitySection/>
      <BrandingServices/>
      <BrandBuildSection/>
      <DeployAssetsSection/>
      <BrandAuditSection/>
      <AuditProcessSection/>
      <WhyChooseUsSection/>
      <CTASection/>
      <Footer/>
      <CopyrightFooter/>
    </>
  );
};

export default Branding;