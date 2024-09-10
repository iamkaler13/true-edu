import React from "react";
import { useEffect } from "react";
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
<div class="bg-white sm:py-5 py-5 px-5 sm:px-0">
  <div class="sm:px-0">
    <h2 class="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
      Privacy Policy for True-Edu
    </h2>
    <p class="my-3">
      Effective Date: 11/04/2022<br />
      Last Updated: 11/09/2024
    </p>
    <p class="my-3">
      At True-Edu, we prioritize the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect your information when you access eBooks through our mobile app (“True-Edu”, “we”, “us”, or “our”). By using True-Edu, you agree to the terms outlined in this policy.
    </p>

    <h2 class="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
      1. Information We Collect
    </h2>
    <p>
      When using True-Edu, we collect the following personal information to provide you with the best possible experience:
    </p>
    <ul class="list-disc ml-6 my-3">
      <li>Full Name</li>
      <li>Gender</li>
      <li>Board/University</li>
      <li>Course</li>
      <li>Trade</li>
      <li>College</li>
      <li>Semester</li>
      <li>Mobile Number</li>
    </ul>
    <p>
      This information is essential for creating your account and personalizing your experience on True-Edu.
    </p>

    <h2 class="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
      2. OTP-Based Login & SMS Permissions
    </h2>
    <h3 class="font-bold my-3">2.1 OTP Verification</h3>
    <p>
      For hassle-free account access, we use an OTP (One-Time Password) verification system. You can log in securely by verifying the OTP sent to your mobile number.
    </p>
    <h3 class="font-bold my-3">2.2 SMS View Permissions</h3>
    <p>
      To make the verification process seamless, True-Edu requires SMS view permissions. This allows us to read the OTP automatically, simplifying your login process. We only use this permission to read the OTP for verification purposes. We do not access or store any other messages or data.
    </p>
    <h3 class="font-bold my-3">2.3 Security</h3>
    <p>
      OTP verification is essential to protect against unauthorized logins and ensure the security of your account.
    </p>

    <h2 class="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
      3. Book Purchases and Subscription Policy
    </h2>
    <h3 class="font-bold my-3">3.1 Paid Books</h3>
    <p>
      To access the full content of eBooks, you must purchase them directly through the True-Edu mobile app. Please note that all purchases are final, and there are no refunds for any book purchases.
    </p>
    <h3 class="font-bold my-3">3.2 Free Trial and Subscription</h3>
    <p>
      We offer a free one-week trial for selected books upon subscribing for just ₹1. After the trial period, your subscription will automatically continue, and the full amount of your selected subscription will be deducted from your payment method. You can cancel the subscription at any time during the trial period to avoid being charged further.
    </p>

    <h2 class="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
      4. How We Use Your Information
    </h2>
    <ul class="list-disc ml-6 my-3">
      <li>To create and manage your account</li>
      <li>To verify your identity via OTP</li>
      <li>To customize your experience based on your course, trade, and college information</li>
      <li>To process transactions for book purchases</li>
      <li>To provide you with access to free and paid books</li>
      <li>To communicate with you about your account and purchases</li>
    </ul>

    <h2 class="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
      5. Data Security
    </h2>
    <p>
      We take data security seriously and employ industry-standard measures to protect your personal information. While we strive to protect your data, please note that no transmission over the internet is 100% secure. By using True-Edu, you acknowledge that you are doing so at your own risk.
    </p>

    <h2 class="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
      6. Your Rights
    </h2>
    <p>You have the following rights concerning your data:</p>
    <ul class="list-disc ml-6 my-3">
      <li>Access: You can request access to the personal information we hold about you.</li>
      <li>Correction: You can request corrections to any inaccurate information.</li>
      <li>Deletion: You can request the deletion of your account and associated information.</li>
      <li>Opt-Out: You can opt out of promotional communications.</li>
    </ul>
    <p>
      If you wish to exercise any of these rights, please contact us at the information provided below.
    </p>

    <h2 class="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
      7. Changes to This Privacy Policy
    </h2>
    <p>
      We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new effective date. Please review this policy periodically to stay informed about any updates.
    </p>

    <h2 class="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
      8. Contact Information
    </h2>
    <p>
      If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
    </p>
    <p>
      True-Edu<br />
      Email: trueeducation0100@gmail.com, abhishek567thakur@gmail.com<br />
      Phone: 780585896<br />
      Address: Sub Tehsil - Sadwan, Distt - Kangra, H.P., Pin Code - 176202
    </p>
  </div>
</div>

  );
};

export default PrivacyPolicy;
