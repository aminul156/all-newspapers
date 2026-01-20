
import React from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4 mb-2">{children}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-gray-600 dark:text-gray-400 mb-3">{children}</p>
);

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl m-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh' }}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <h2 id="privacy-policy-title" className="text-2xl font-bold text-gray-800 dark:text-white">
              Privacy Policy
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Close privacy policy"
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
            Thank you for using "সকল পত্রিকা- All Newspaper" (the "App"). This Privacy Policy explains how we handle information in connection with your use of our App. Your privacy is important to us, and we are committed to protecting it.
          </Paragraph>

          <SectionTitle>1. Information We Do Not Collect</SectionTitle>
          <Paragraph>
            We want to be clear about what we <strong>don't</strong> do. Our App is designed to be a simple and private way to access news. We <strong>do not</strong> collect, store, or transmit any Personally Identifiable Information (PII), such as your name, email address, phone number, precise geographic location, or any personal identifiers from your device. The App does not require you to create an account or log in.
          </Paragraph>

          <SectionTitle>2. Information We Collect (Locally on Your Device)</SectionTitle>
          <Paragraph>
            To enhance your user experience, the App stores some non-personal settings and preferences directly on your device using your browser's local storage. This information is <strong>never</strong> transmitted to us or any third party. It remains entirely under your control on your device. This locally stored data includes:
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
                <li><strong>Favorite Newspapers:</strong> A list of the news sources you have marked as favorites.</li>
                <li><strong>Display Settings:</strong> Your preferences for dark mode and text size.</li>
            </ul>
          </Paragraph>

          <SectionTitle>3. How We Use Your Information</SectionTitle>
          <Paragraph>
            The non-personal information stored locally on your device is used exclusively to customize the app's appearance, provide the "Favorites" feature, and improve the overall functionality and user experience. We do not use this information for any other purpose, such as advertising or analytics.
          </Paragraph>

          <SectionTitle>4. Third-Party Links</SectionTitle>
          <Paragraph>
            The core function of our App is to provide easy access to various news websites. When you click on a link, you are directed to these third-party news portals. This Privacy Policy does not apply to their practices. We encourage you to review the privacy policies of every website you visit.
          </Paragraph>
          
          <SectionTitle>5. Feedback</SectionTitle>
          <Paragraph>
            When you use the "Feedback" feature, the App constructs a `mailto:` link. This opens your device's default email client with your rating and comments. Your email is sent directly from your email client to ours. We do not intercept or store this information outside of the email we receive.
          </Paragraph>

          <SectionTitle>6. Data Security</SectionTitle>
          <Paragraph>
            Because all preferences are stored locally on your device, the security of that data is dependent on the security of your own device and web browser. We do not handle or transmit your data.
          </Paragraph>

          <SectionTitle>7. Children's Privacy</SectionTitle>
          <Paragraph>
            Our App is not intended for use by children under the age of 13 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect any information from children.
          </Paragraph>

          <SectionTitle>8. Changes to This Privacy Policy</SectionTitle>
          <Paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the App. You are advised to review this Privacy Policy periodically for any changes.
          </Paragraph>

          <SectionTitle>9. Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:aminul156@gmail.com" className="text-primary hover:underline">aminul156@gmail.com</a>.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
