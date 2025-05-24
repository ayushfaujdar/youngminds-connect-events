
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          <div className="prose prose-purple max-w-none">
            <p className="lead">Last updated: May 24, 2024</p>
            
            <h2>1. Introduction</h2>
            <p>Welcome to YoungMinds ("we," "our," or "us"). We are committed to protecting your privacy and providing a safe online experience. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
            
            <h2>2. Information We Collect</h2>
            <p>We collect several types of information from and about users of our Website, including:</p>
            <ul>
              <li><strong>Personal Information:</strong> First and last name, email address, telephone number, address, and any other information you provide us when registering or using our services.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including your browsing patterns, page views, and features you engage with.</li>
              <li><strong>Device Information:</strong> Information about the device you use to access our website, including hardware model, operating system, unique device identifiers, and mobile network information.</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect from you for various purposes, including:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To send you marketing communications (you can opt out anytime)</li>
            </ul>
            
            <h2>4. Cookie Policy</h2>
            <p>We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
            
            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
            
            <h2>6. Third-Party Services</h2>
            <p>Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
            
            <h2>7. GDPR Compliance</h2>
            <p>For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). This means you have certain rights regarding your personal data, including:</p>
            <ul>
              <li>The right to access, update or delete your information</li>
              <li>The right to rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            
            <h2>8. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
            
            <h2>9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@youngminds.club.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
