import React from 'react';
import BehindThePixelsComponent from './BehindThePixelsComponent';
import StorySections from './StorySections';
import ApproachSection from './ApproachSection';
import BenefitsSection from './BenefitsSection';
import CTASection from '../../Footer/CTASection';
import Footer from '../../Footer/Footer';
import CopyrightFooter from '../../Footer/CopyrightFooter';

const BehindThePixels = () => {
  return (
   <>
    <BehindThePixelsComponent/>
    <StorySections/>
    <ApproachSection/>
    <BenefitsSection/>
    <CTASection/>
      <Footer/>
      <CopyrightFooter/>
   </>
  );
};

export default BehindThePixels;