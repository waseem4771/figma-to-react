import React from 'react';

const servicesImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const servicesData = [
  {
    number: '01',
    title: 'Branding',
    description: 'Our branding services align your corporate image with your business goals. Combining data-driven market research with creative ingenuity, we create unique, engaging brand identities that resonate with your target audience. Whether building a new identity or rebranding an existing one, we ensure your brand stands out.',
    buttonText: 'Explore Our Branding Soution'
  },
  {
    number: '02',
    title: 'Social Media Marketing',
    description: 'Navigating the dynamic world of social media can be challenging, but we excel in this arena. We design, build, launch, and manage your brand across various platforms, fostering a loyal and engaged following. Our social media strategies integrate seamlessly into your marketing plan to drive leads and sales.',
    buttonText: 'See How We Manage Social Media'
  },
  {
    number: '03',
    title: 'Search Engine Optimisation',
    description: 'Our SEO services are designed to boost organic traffic and enhance discoverability. By employing a mix of on-page and off-page tactics, we optimise your website for better conversion rates and increased visibility',
    buttonText: 'Learn More About Our SEO Services'
  },
  {
    number: '04',
    title: 'Search Engine Marketing',
    description: 'Our SEM strategies improve discoverability through a focused, ROI-driven approach. We target long-tail keywords close to the point of sale, enhancing visibility among ready-to-convert buyers and bolstering your brand’s online presence.',
    buttonText: 'Discover Our SEM Strategies'
  }
];

const CoreServices = () => {
  return (
    // Solution 1: Background color ko bg-[#EAEAEA] kar diya gaya hai
    <section className="bg-[#EAEAEA] py-20 px-8 md:px-16 lg:px-24 font-sans">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        <div className="flex flex-col gap-8 h-full">
          <h2 className="text-5xl md:text-6xl font-medium text-gray-800">
            Our Core <br /> Services
          </h2>
          <div className="w-full flex-grow">
            <img 
              src={servicesImage} 
              alt="Digital services collage" 
              className="w-full h-full object-cover filter grayscale"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex items-baseline gap-4">
                <span className="text-lg text-[#4DD0E1] font-semibold">{service.number}</span>
                <h3 className="text-2xl font-medium text-gray-800">{service.title}</h3>
              </div>
              {/* Solution 2: Paragraph ka size text-sm kar diya gaya hai */}
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              {/* Solution 2: Button ke text ka size bhi text-sm kar diya gaya hai */}
              <button className="group mt-2 flex items-center justify-between w-full p-3 border border-[#80CBC4] rounded-lg text-sm text-gray-500 hover:bg-white transition-colors text-left">
                <span>{service.buttonText}</span>
                <svg 
                  xmlns="http://www.w-3.org/2000/svg" 
                  className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;