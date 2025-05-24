
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Terms of Service</h1>
          <div className="prose prose-purple max-w-none">
            <p className="lead">Last updated: May 24, 2024</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using YoungMinds' website and services, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            
            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily access the materials on YoungMinds' website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            
            <h2>3. User Accounts</h2>
            <p>When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.</p>
            
            <h2>4. Event Registration and Participation</h2>
            <p>By registering for events through our platform, you agree to abide by the specific event rules and policies. Event organizers may have additional terms that apply to their events. You understand that YoungMinds is not responsible for the conduct of event participants or organizers.</p>
            
            <h2>5. Intellectual Property</h2>
            <p>The website and its original content, features, and functionality are owned by YoungMinds and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
            
            <h2>6. User Content</h2>
            <p>Our platform may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. By providing such content, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through our platform.</p>
            
            <h2>7. Termination</h2>
            <p>We may terminate or suspend your account and bar access to our service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
            
            <h2>8. Limitation of Liability</h2>
            <p>In no event shall YoungMinds, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
            
            <h2>9. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
            
            <h2>10. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.</p>
            
            <h2>11. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at terms@youngminds.club.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
