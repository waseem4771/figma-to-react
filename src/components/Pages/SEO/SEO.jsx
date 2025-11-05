import React from 'react';
import SeoBanner from './SeoBanner';
import ApproachSection from '../BehindThePixels/ApproachSection';
import WhyChooseUsSection from '../Branding/WhyChooseUsSection';
import DeployAssetsSection from '../Branding/DeployAssetsSection';
import AuditProcessSection from '../Branding/AuditProcessSection';
import CTASection from '../../Footer/CTASection';
import Footer from '../../Footer/Footer';
import CopyrightFooter from '../../Footer/CopyrightFooter';


const SEO = () => {
  return (
<>
  <SeoBanner/>
  <ApproachSection/>
  <WhyChooseUsSection/>
  <DeployAssetsSection/>
  <AuditProcessSection/>
  <CTASection/>
      <Footer/>
      <CopyrightFooter/>
</>
  );
};

export default SEO;