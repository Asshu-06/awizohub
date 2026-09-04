import './LegalPage.css';

const TermsConditions = () => {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Terms & Conditions</h1>
          <p className="page-subtitle">Last updated: January 2024</p>
        </div>
      </section>

      <section className="section legal-content">
        <div className="container">
          <div className="legal-text">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Awizo Hub website and services, you accept and agree to be bound by 
              these Terms and Conditions. If you do not agree, please do not use our services.
            </p>

            <h2>2. Services Description</h2>
            <p>
              Awizo Hub provides digital marketing, IT placement assistance, education guidance, and online 
              learning support services. We reserve the right to modify, suspend, or discontinue any service 
              at any time without notice.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the 
              property of Awizo Hub and protected by intellectual property laws. You may not reproduce, 
              distribute, or create derivative works without our explicit permission.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              Payment terms for our services will be specified in individual service agreements. All fees 
              are non-refundable unless otherwise stated in writing.
            </p>

            <h2>6. Service Limitations</h2>
            <p>
              While we strive to provide excellent services, we cannot guarantee specific outcomes such as 
              job placements, university admissions, or marketing campaign results. Success depends on various 
              factors beyond our control.
            </p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without warranties of any kind, either express or implied. 
              We do not warrant that our services will be uninterrupted, error-free, or secure.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Awizo Hub shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold Awizo Hub harmless from any claims, losses, damages, or 
              expenses arising from your use of our services or violation of these terms.
            </p>

            <h2>10. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services at any time, without 
              prior notice, for conduct that we believe violates these Terms or is harmful to other users.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
              in which Awizo Hub operates, without regard to its conflict of law provisions.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting to the website. Your continued use of our services constitutes acceptance of the 
              modified terms.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <ul>
              <li>Email: {import.meta.env.VITE_EMAIL || 'legal@awizohub.com'}</li>
              <li>Phone: {import.meta.env.VITE_PHONE_NUMBER || '+1234567890'}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
