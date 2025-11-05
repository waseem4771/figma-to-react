import React from 'react';

// ایک دوبارہ قابل استعمال کمپوننٹ ہر فیچر آئٹم کے لیے
// This is a reusable component for each feature item
const FeatureItem = ({ title, description }) => (
  <div>
    <h3 className="text-xl font-medium text-gray-800 mb-4">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

// مرکزی سیکشن کمپوننٹ
// This is the main section component
const PostRelevantContentSection = () => {
  return (
    // سیکشن کا بیک گراؤنڈ کلر اور پیڈنگ
    // Section's background color and padding
    // تبدیلی: اوپر کی پیڈنگ ختم کر دی گئی ہے
    <section className="bg-[#F2F2F2] pb-24 pt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* مرکزی عنوان */}
        {/* Main Heading */}
        <h2 className="text-4xl font-normal text-center text-gray-900 tracking-wide">
          Post Relevant Content
        </h2>

        {/* اوپر والی لائن */}
        {/* Top Divider Line */}
        <div className="w-full h-px bg-[#A7D7C5] my-16"></div>

        {/* فیچرز کا گرڈ */}
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          
          <FeatureItem 
            title="Tailored Content"
            description="We help you post content that is relevant to your brand and audience. As we learn more about your audience, we create content that speaks directly to their interests and needs."
          />
          
          <FeatureItem 
            title="Educate and Inform"
            description="Use social media to educate your customers about your brand, products, and values, offering a behind-the-scenes look that builds trust and loyalty"
          />
          
          <FeatureItem 
            title="Visual Storytelling"
            description="Utilise the power of images and videos to tell your brand's story in a way that words alone cannot. From product showcases to customer testimonials, we create compelling visual content."
          />

        </div>

        {/* نیچے والی لائن */}
        {/* Bottom Divider Line */}
        <div className="w-full h-px bg-[#A7D7C5] mt-16"></div>

      </div>
    </section>
  );
};

export default PostRelevantContentSection;