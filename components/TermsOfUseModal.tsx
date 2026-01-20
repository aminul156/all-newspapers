
import React from 'react';

interface TermsOfUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4 mb-2">{children}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-gray-600 dark:text-gray-400 mb-3">{children}</p>
);

export const TermsOfUseModal: React.FC<TermsOfUseModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-of-use-title"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl m-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh' }}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <h2 id="terms-of-use-title" className="text-2xl font-bold text-gray-800 dark:text-white">
              Terms of Use
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Close terms of use"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last Updated: July 28, 2024</p>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <Paragraph>
            Welcome to "সকল পত্রিকা- All Newspaper" (the "App"). By accessing or using our App, you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the App.
          </Paragraph>

          <SectionTitle>1. Description of Service</SectionTitle>
          <Paragraph>
            The App provides a curated directory of links to third-party Bangladeshi and international news websites ("Third-Party Sites"). Our service is designed to give users a convenient way to access a wide variety of news sources from a single location. The App itself does not host, publish, or control any of the news content.
          </Paragraph>

          <SectionTitle>2. User Conduct</SectionTitle>
          <Paragraph>
            You agree to use the App only for lawful purposes. You are responsible for your own conduct while using the App and for any consequences thereof.
          </Paragraph>

          <SectionTitle>3. Third-Party Content and Links</SectionTitle>
          <Paragraph>
            The App contains links to Third-Party Sites that are not owned or controlled by us. We are not responsible for the content, accuracy, privacy policies, or practices of any Third-Party Sites. The inclusion of a link does not imply endorsement by us. You acknowledge that you access such Third-Party Sites at your own risk and that we shall not be liable for any loss or damage arising from your use of them.
          </Paragraph>
          
          <SectionTitle>4. Intellectual Property</SectionTitle>
          <Paragraph>
            Our name, "সকল পত্রিকা- All Newspaper," our logo, and the design of the App are our exclusive property. All other trademarks, service marks, logos, and trade names of the news sources listed in the App are the property of their respective owners. You are granted no right or license with respect to any of the aforesaid trademarks.
          </Paragraph>

          <SectionTitle>5. Disclaimer of Warranties</SectionTitle>
          <Paragraph>
            The App is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation of the App or the information, content, or materials included therein. We do not warrant that the App will be uninterrupted, timely, secure, or error-free.
          </Paragraph>

          <SectionTitle>6. Limitation of Liability</SectionTitle>
          <Paragraph>
            In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App or the content on Third-Party Sites linked from the App.
          </Paragraph>

          <SectionTitle>7. Changes to the Terms</SectionTitle>
          <Paragraph>
            We reserve the right to modify these Terms at any time. We will indicate the date of the last revision. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.
          </p>

          <SectionTitle>8. Governing Law</SectionTitle>
          <Paragraph>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the App's developer is based, without regard to its conflict of law provisions.
          </p>

          <SectionTitle>9. Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions about these Terms, please contact us at: <a href="mailto:aminul156@gmail.com" className="text-primary hover:underline">aminul156@gmail.com</a>.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
