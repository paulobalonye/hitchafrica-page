"use client";
import Image from "next/image";
import { useState } from "react";
import terms1 from "@/assets/terms/terms1.png";
import terms2 from "@/assets/terms/terms2.png";
import terms3 from "@/assets/terms/terms3.png";
import terms4 from "@/assets/terms/terms4.png";
import terms5 from "@/assets/terms/terms5.png";
import terms6 from "@/assets/terms/terms6.png";
import terms7 from "@/assets/terms/terms7.png";
import terms8 from "@/assets/terms/terms8.png";
import bg from "@/assets/termsbg.svg";

export default function Terms() {
  const [active, setActive] = useState(0);
  return (
    <main className="flex flex-col items-center">
      <div className="w-full px-5 bg-[#F9F9F9] flex flex-col items-center">
        <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-5 md:gap-14 py-16 font-[600] text-[600] text-primary text-center">
          <figure className="flex flex-col gap-4 w-full">
            <Image
              src={terms1}
              alt=""
              className={`rounded-md hover:scale-[1.1] w-full ${
                active === 0 ? "shadow-2xl" : "shadow"
              } `}
              onClick={() => setActive(0)}
            />
            <figcaption>Introduction</figcaption>
          </figure>
          <figure className="flex flex-col gap-4 w-full">
            <Image
              src={terms2}
              alt=""
              className={`rounded-md hover:scale-[1.1] w-full ${
                active === 1 ? "shadow-2xl" : "shadow"
              } `}
              onClick={() => setActive(1)}
            />
            <figcaption>Acceptance of Terms</figcaption>
          </figure>
          <figure className="flex flex-col gap-4 w-full">
            <Image
              src={terms3}
              alt=""
              className={`rounded-md hover:scale-[1.1] w-full ${
                active === 2 ? "shadow-2xl" : "shadow"
              } `}
              onClick={() => setActive(2)}
            />
            <figcaption>Service Eligibility</figcaption>
          </figure>
          <figure className="flex flex-col gap-4 w-full">
            <Image
              src={terms4}
              alt=""
              className={`rounded-md hover:scale-[1.1] w-full ${
                active === 3 ? "shadow-2xl" : "shadow"
              } `}
              onClick={() => setActive(3)}
            />
            <figcaption>User Accounts</figcaption>
          </figure>
          <figure className="flex flex-col gap-4 w-full">
            <Image
              src={terms5}
              alt=""
              className={`rounded-md hover:scale-[1.1] w-full ${
                active === 4 ? "shadow-2xl" : "shadow"
              } `}
              onClick={() => setActive(4)}
            />
            <figcaption>Service Modifications</figcaption>
          </figure>
          <figure className="flex flex-col gap-4 w-full">
            <Image
              src={terms6}
              alt=""
              className={`rounded-md hover:scale-[1.1] w-full ${
                active === 5 ? "shadow-2xl" : "shadow"
              } `}
              onClick={() => setActive(5)}
            />
            <figcaption>Termination of Services</figcaption>
          </figure>
          <figure className="flex flex-col gap-4 w-full">
            <Image
              src={terms7}
              alt=""
              className={`rounded-md hover:scale-[1.1] w-full ${
                active === 6 ? "shadow-2xl" : "shadow"
              } `}
              onClick={() => setActive(6)}
            />
            <figcaption>Governing Law and Jurisdiction</figcaption>
          </figure>
          <figure className="flex flex-col gap-4 w-full">
            <Image
              src={terms8}
              alt=""
              className={`rounded-md hover:scale-[1.1] w-full ${
                active === 7 ? "shadow-2xl" : "shadow"
              } `}
              onClick={() => setActive(7)}
            />
            <figcaption>Copyright Notice</figcaption>
          </figure>
        </div>
      </div>
      <div
        className="w-full flex flex-col relative z-0 bg-cover bg-[top right] bg-no-repeat"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="w-full md:w-1/2 mx-auto px-5 py-10 md:py-20 flex flex-col gap-5 md:gap-10">
          <p className="flex flex-wrap md:items-center gap-1 md:gap-3 w-full">
            Terms and Conditions {">"}{" "}
            <b className="font-[600]">
              {active === 0
                ? "Introduction"
                : active === 1
                ? "Acceptance of Terms"
                : active === 2
                ? "Service ßßßßßßßßEligibility"
                : active === 3
                ? "User Accounts"
                : active === 4
                ? "Service Modifications"
                : active === 5
                ? "Termination of Services"
                : active === 6
                ? "Governing Law and Jurisdiction"
                : active === 7
                ? "CopyRight Notice"
                : ""}
            </b>
          </p>
          <h3 className="text-2xl md:text-[40px] font-[700] border-b">
            {active === 0
              ? "Introduction"
              : active === 1
              ? "Acceptance of Terms"
              : active === 2
              ? "Service Eligibility"
              : active === 3
              ? "User Accounts"
              : active === 4
              ? "Service Modifications"
              : active === 5
              ? "Termination of Services"
              : active === 6
              ? "Governing Law and Jurisdiction"
              : active === 7
              ? "CopyRight Notice"
              : ""}
          </h3>
          <div>
            {active === 0 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  Welcome to the Terms and Conditions page for the Hitch Mobile
                  App, provided to you by Hitch Africa Technologies Ltd, a
                  leading provider of innovative multi-service solutions. These
                  Terms govern your access to and use of the Hitch Mobile App
                  and all its related services, collectively referred to as{" "}
                  {`"our services."`} By accessing, registering, or using the
                  Hitch Mobile App, you agree to be legally bound by these
                  Terms. If you do not accept these Terms in their entirety, you
                  must discontinue using our services immediately.
                </p>
                <p>
                  Hitch is your go-to platform for seamless living, offering a
                  comprehensive range of services designed to cater to your
                  diverse needs. With just a few taps, you can effortlessly
                  access a world of possibilities, including Food Delivery, Bike
                  Rental, Grocery Shopping, Parcel Delivery, and Home Cleaning.
                  Our mission is to empower you with convenience, efficiency,
                  and reliability, allowing you to focus on what truly matters.
                </p>
                <p>
                  At Hitch Africa Technologies Ltd, we take great pride in
                  curating a unique and personalized user experience. Our
                  commitment to excellence and user satisfaction is the
                  cornerstone of our success. As you embark on your journey with
                  Hitch, we assure you that your safety, security, and enjoyment
                  are at the heart of everything we do.
                </p>
                <p>
                  We encourage you to carefully read and understand these Terms
                  as they set forth the legal terms and conditions governing
                  your use of the Hitch Mobile App. These Terms constitute a
                  legally binding agreement between you and Hitch Africa
                  Technologies Ltd. By accessing or using our services, you
                  acknowledge that you have read, understood, and agree to
                  comply with these Terms. These Terms encompass not only your
                  rights and obligations as a user but also the responsibilities
                  and commitments undertaken by Hitch Africa Technologies Ltd.
                  They cover crucial aspects such as your account creation, use
                  of our services, content submission, intellectual property
                  rights, data privacy, and limitations of liability.
                </p>
                <p>
                  To complement these Terms, we have developed a comprehensive
                  Privacy Policy that outlines how we collect, use, store, and
                  protect your personal information. We encourage you to review
                  our Privacy Policy carefully to understand how we handle your
                  data responsibly and securely.
                </p>
                <p>
                  Please note that our services are available solely to
                  individuals who are at least 18 years old or the age of
                  majority in their jurisdiction. By accessing or using our
                  services, you represent and warrant that you meet this age
                  requirement and have the legal capacity to enter into this
                  agreement.
                </p>
                <p>
                  As we continuously strive to enhance our services, we may
                  periodically update these Terms. We will make reasonable
                  efforts to notify you of any significant changes, and the most
                  current version of the Terms will always be accessible on this
                  page. Your continued use of the Hitch Mobile App following the
                  posting of revised Terms constitutes your acceptance of those
                  changes. Thank you for choosing Hitch as your trusted
                  multi-service platform. We are excited to have you join our
                  growing community of satisfied users. If you have any
                  questions, concerns, or feedback about these Terms or any
                  aspect of our services, please do not hesitate to reach out to
                  our dedicated customer terms team.
                </p>
              </div>
            )}
            {active === 1 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  By using Hitch {`Africa's`} services, including but not
                  limited to the Hitch Africa website, mobile applications, and
                  any related services (collectively referred to as the{" "}
                  {`"Service"`}), you agree to the following terms and
                  conditions. Please read this document carefully before using
                  the Service.
                </p>
                <b>1. Acceptance of Terms</b>
                <p>
                  By accessing or using the Service in any way, you acknowledge
                  that you have read, understood, and agreed to be bound by
                  these terms and conditions, as well as any additional
                  guidelines or rules applicable to specific services or
                  features that may be posted from time to time. If you do not
                  agree to these terms, you may not use the Service.
                </p>
                <b>2. Use of the Service</b>
                <p>
                  You agree to use the Service solely for lawful purposes and in
                  compliance with all applicable laws and regulations. You must
                  not use the Service to transmit any material that is illegal,
                  offensive, abusive, discriminatory, or violates the rights of
                  any third party.
                </p>
                <b>3. User Accounts</b>
                <p>
                  In order to use certain features of the Service, you may need
                  to create a user account. You are responsible for maintaining
                  the confidentiality of your account information and for all
                  activities that occur under your account. You agree to provide
                  accurate and complete information when creating an account,
                  and to promptly update any information to keep it accurate and
                  complete.
                </p>
                <b>4. Privacy</b>
                <p>
                  Your privacy is important to us. Our Privacy Policy outlines
                  how we collect, use, and protect your personal information. By
                  using the Service, you consent to the collection and use of
                  your information as described in our Privacy Policy.
                </p>
                <b>5. Content</b>
                <p>
                  You retain ownership of any content you submit, post, or
                  display on or through the Service. By submitting, posting, or
                  displaying content, you grant Hitch Africa a worldwide,
                  non-exclusive, royalty-free license to use, reproduce, modify,
                  adapt, publish, translate, distribute, and display such
                  content on the Service for the purpose of providing and
                  promoting the Service.
                </p>
                <b>6. Intellectual Property</b>
                <p>
                  All intellectual property rights in the Service, including but
                  not limited to copyrights, trademarks, and patents, are the
                  property of Hitch Africa or its licensors. You agree not to
                  reproduce, modify, distribute, or create derivative works
                  based on any portion of the Service without explicit written
                  permission from Hitch Africa.
                </p>
                <b>7. Termination</b>
                <p>
                  Hitch Africa reserves the right to suspend or terminate your
                  access to the Service at its sole discretion, with or without
                  cause, and without notice. Upon termination, your right to use
                  the Service will immediately cease, and you must cease all use
                  of the Service.
                </p>
                <b>8. Limitation of Liability</b>
                <p>
                  Hitch Africa shall not be liable for any direct, indirect,
                  incidental, special, consequential, or punitive damages
                  arising out of or in connection with the use of the Service or
                  these terms, even if advised of the possibility of such
                  damages.
                </p>
                <b>9. Changes to Terms</b>
                <p>
                  Hitch Africa reserves the right to modify or update these
                  terms at any time without prior notice. Changes will be
                  effective upon posting to the Service. Your continued use of
                  the Service after changes are posted constitutes your
                  acceptance of the revised terms.
                </p>
                <b>10. Governing Law</b>
                <p>
                  These terms and your use of the Service shall be governed by
                  and construed in accordance with the laws of [Jurisdiction],
                  without regard to its conflict of laws principles.
                </p>

                <p>
                  By using the Hitch Africa Service, you indicate your
                  acceptance of these terms. If you do not agree with these
                  terms, please do not use the Service.
                </p>

                <p>
                  For any questions or concerns regarding these terms, please
                  contact us at terms@hitvhafrica.com.
                </p>
              </div>
            )}
            {active === 2 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  Before using Hitch {`Africa's`} services, including but not
                  limited to the Hitch Africa website and mobile applications
                  (collectively referred to as the {`"Service"`}), please
                  carefully review the eligibility criteria outlined below. By
                  accessing or using the Service, you confirm that you meet
                  these eligibility requirements. If you do not meet these
                  criteria, you may not use the Service.
                </p>

                <b>1. Age Requirement</b>
                <p>
                  You must be at least 18 years of age to use the Service. By
                  using the Service, you confirm that you are 18 years old or
                  older. If you are under 18, you are not eligible to use the
                  Service.
                </p>

                <b>2. Legal Capacity</b>
                <p>
                  You must have the legal capacity to enter into contracts in
                  your jurisdiction. By using the Service, you affirm that you
                  possess the legal capacity to enter into a binding agreement.
                </p>

                <b>3. Compliance with Laws</b>
                <p>
                  You agree to use the Service in accordance with all applicable
                  laws and regulations of your jurisdiction. You must not use
                  the Service if doing so would violate any laws or regulations.
                </p>

                <b>4. Account Responsibility</b>
                <p>
                  If you create a user account, you are responsible for
                  maintaining the confidentiality of your account information
                  and for all activities that occur under your account. You
                  agree to provide accurate and complete information when
                  creating an account and to promptly update any information to
                  keep it accurate and complete.
                </p>

                <b>5. Prohibited Activities</b>
                <p>
                  You are prohibited from using the Service for any illegal,
                  offensive, abusive, discriminatory, or unauthorized purposes.
                  You must not engage in any activities that may harm, disrupt,
                  or impair the proper functioning of the Service or its users.
                </p>

                <b>6. Suspension or Termination</b>
                <p>
                  Hitch Africa reserves the right to suspend or terminate your
                  access to the Service if it is determined that you do not meet
                  the eligibility criteria or if you violate any of the terms
                  and conditions outlined in the Terms of Service.
                </p>

                <b>7. Verification</b>
                <p>
                  Hitch Africa may require you to provide documentation or other
                  evidence to verify your eligibility to use the Service.
                  Failure to provide requested verification may result in
                  suspension or termination of your access to the Service.
                </p>
                <b>8. Changes to Eligibility Criteria</b>
                <p>
                  Hitch Africa reserves the right to modify or update the
                  eligibility criteria at any time without prior notice. Changes
                  will be effective upon posting to the Service. Your continued
                  use of the Service after changes to the eligibility criteria
                  are posted constitutes your acceptance of the revised
                  criteria.
                </p>
                <p>
                  By using the Hitch Africa Service, you acknowledge that you
                  meet the eligibility criteria outlined above. If you do not
                  meet these criteria, please do not use the Service.
                </p>
                <p>
                  For any questions or concerns regarding eligibility, please
                  contact us at terms@hitchafrica.com.
                </p>
              </div>
            )}
            {active === 3 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  A user account with Hitch Africa allows you to access and
                  utilize our services, including the Hitch Africa website and
                  mobile applications (collectively referred to as the
                  {`"Service"`}). Please read the following information about
                  user accounts to understand how they work and your
                  responsibilities when using them.
                </p>
                <b>1. Account Creation</b>
                <p>
                  To create a user account, you need to provide accurate and
                  complete information, which may include your name, email
                  address, contact information, and other details as required.
                  You are solely responsible for maintaining the confidentiality
                  of your account credentials and for all activities that occur
                  under your account.
                </p>

                <b>2. Account Security</b>
                <p>
                  You are responsible for keeping your account information
                  secure. Do not share your account password with anyone, and
                  ensure that your password is strong and unique. If you suspect
                  unauthorized access to your account, it is your responsibility
                  to change your password and notify Hitch Africa immediately.
                </p>

                <b>3. Account Usage</b>
                <p>
                  Your user account is for your personal use only and must not
                  be shared with others. You may not create multiple accounts
                  without explicit permission from Hitch Africa. You agree not
                  to use false or misleading information when creating an
                  account or impersonate any other person or entity.
                </p>

                <b>4. Account Updates</b>
                <p>
                  You are responsible for keeping your account information
                  accurate and up to date. If there are any changes to your
                  contact information or other details, please promptly update
                  your account settings.
                </p>

                <b>5. Content Submission</b>
                <p>
                  If the Service allows you to submit content (such as reviews,
                  ratings, comments, or other information), you are solely
                  responsible for the content you submit. Make sure that your
                  content complies with the applicable terms of use and does not
                  violate any laws or rights of third parties.
                </p>

                <b>6. Termination of Account</b>
                <p>
                  Hitch Africa reserves the right to suspend or terminate your
                  user account at its sole discretion, with or without cause,
                  and without notice. Upon termination, you will lose access to
                  the Service, and any content associated with your account may
                  be deleted.
                </p>

                <b>7. User Privacy</b>
                <p>
                  We value your privacy. Your personal information and account
                  data will be handled in accordance with our Privacy Policy. By
                  using the Service, you consent to the collection, use, and
                  storage of your information as outlined in the Privacy Policy.
                </p>

                <b>8. Changes to User Account Terms</b>
                <p>
                  Hitch Africa may update or modify the terms related to user
                  accounts at any time without prior notice. Such changes will
                  be effective upon posting to the Service. Your continued use
                  of the Service after changes to the user account terms are
                  posted constitutes your acceptance of the revised terms.
                </p>
                <p>
                  By creating and using a user account with Hitch Africa, you
                  agree to abide by these terms and conditions. If you do not
                  agree with these terms, please do not create or use a user
                  account.
                </p>
                <p>
                  For any questions or concerns regarding user accounts, please
                  contact us at [Contact Email].
                </p>
              </div>
            )}
            {active === 4 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  Hitch Africa is committed to enhancing and improving the
                  quality of our services, which include the Hitch Africa
                  website, mobile applications, and related features
                  (collectively referred to as the {`"Service"`}). Please review
                  the following information regarding modifications to the
                  Service.
                </p>
                <b>1. Service Enhancements</b>
                <p>
                  Hitch Africa may periodically update, modify, or add new
                  features to the Service to enhance user experience, improve
                  functionality, and introduce new services. These enhancements
                  are intended to provide you with a better overall experience.
                </p>

                <b>2. Notification of Changes</b>
                <p>
                  Whenever possible, Hitch Africa will provide prior notice of
                  significant changes or modifications to the Service. This
                  notice may be communicated through the {`Service's`} website,
                  mobile applications, email, or other relevant means. However,
                  certain changes, including urgent security updates, may be
                  implemented without prior notice.
                </p>

                <b>3. User Acceptance</b>
                <p>
                  Your continued use of the Service following any modifications
                  indicates your acceptance of the updated terms and conditions.
                  If you do not agree with the modifications, you have the
                  option to discontinue using the Service.
                </p>

                <b>4. Compatibility</b>
                <p>
                  Modifications to the Service may require updates to your
                  device, software, or settings. It is your responsibility to
                  ensure that your systems are compatible with the latest
                  version of the Service to fully utilize its features.
                </p>

                <b>5. Feedback and Suggestions</b>
                <p>
                  Hitch Africa values user feedback and suggestions for
                  improving the Service. If you provide feedback or suggestions
                  related to modifications, you acknowledge that Hitch Africa
                  may use such input without any obligation to compensate you.
                </p>

                <b>6. Termination or Discontinuation</b>
                <p>
                  Hitch Africa reserves the right to modify, suspend, or
                  discontinue any part of the Service, or the entire Service, at
                  its sole discretion and without prior notice. In the event of
                  service discontinuation, Hitch Africa will make reasonable
                  efforts to provide notice and offer guidance on data
                  retrieval, if applicable.
                </p>

                <b>7. User Responsibilities</b>
                <p>
                  As a user of the Service, you are responsible for regularly
                  reviewing any modifications and updates to the Service.
                  Continued use of the Service after modifications have been
                  implemented implies your acceptance of the changes.
                </p>

                <b>8. Changes to Service Modification Terms</b>
                <p>
                  Hitch Africa may revise or update the terms related to Service
                  modifications at any time without prior notice. Changes will
                  be effective upon posting to the Service. Your continued use
                  of the Service after changes to the modification terms are
                  posted constitutes your acceptance of the revised terms.
                </p>
                <p>
                  By using the Hitch Africa Service, you acknowledge and agree
                  to these terms regarding modifications to the Service. If you
                  do not agree with these terms, please discontinue using the
                  Service.
                </p>

                <p>
                  For any questions or concerns regarding Service modifications,
                  please contact us at terms@hitchafrica.com.
                </p>
              </div>
            )}
            {active === 5 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  Hitch Africa provides a range of services, including the Hitch
                  Africa website, mobile applications, and related features
                  (collectively referred to as the {`"Service"`}). Please review
                  the following information regarding the termination of these
                  services.
                </p>
                <b>1. Termination by User</b>
                <p>
                  Users have the right to terminate their use of the Hitch
                  Africa Service at any time. To do so, simply stop accessing
                  and using the Service. Your user account, if applicable, will
                  be deactivated upon your request.
                </p>

                <b>2. Termination by Hitch Africa</b>
                <p>
                  Hitch Africa reserves the right to terminate or suspend your
                  access to the Service, either in whole or in part, at its sole
                  discretion and without prior notice, including but not limited
                  to situations where:
                </p>
                <ul>
                  <li>- You violate the terms and conditions of use.</li>
                  <li>
                    - You engage in unlawful or harmful activities through the
                    Service.
                  </li>
                  <li>
                    - Your actions disrupt the Service or negatively impact
                    other users.
                  </li>
                  <li>
                    - Your account remains inactive for an extended period.
                  </li>
                </ul>

                <b>3. Data Retrieval and Backups</b>
                <p>
                  In the event of termination, Hitch Africa may offer guidance
                  on retrieving your data, if applicable. However, it is your
                  responsibility to maintain backups of any data you have stored
                  on the Service.
                </p>

                <b>4. No Obligation</b>
                <p>
                  Hitch Africa has no obligation to retain your data or to
                  provide you with continued access to the Service upon
                  termination. We recommend that you retrieve any important
                  information from the Service before requesting termination.
                </p>

                <b>5. Post-Termination</b>
                <p>
                  Upon termination of the Service or your account, you must
                  immediately cease all use of the Service and any associated
                  features. Any licenses or permissions granted to you under the
                  terms of use will be terminated.
                </p>

                <b>6. Changes to Termination Terms</b>
                <p>
                  Hitch Africa may update or modify the terms related to the
                  termination of services at any time without prior notice.
                  Changes will be effective upon posting to the Service. Your
                  continued use of the Service after changes to the termination
                  terms are posted constitutes your acceptance of the revised
                  terms.
                </p>
                <p>
                  By using the Hitch Africa Service, you acknowledge and agree
                  to these terms regarding the termination of services. If you
                  do not agree with these terms, please discontinue using the
                  Service.
                </p>
                <p>
                  For any questions or concerns regarding the termination of
                  services, please contact us at terms@hitchafrica.com.
                </p>
              </div>
            )}
            {active === 6 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  This section outlines the governing law and jurisdiction that
                  apply to the use of Hitch {`Africa's`} services, including the
                  Hitch Africa website, mobile applications, and related
                  features (collectively referred to as the {`"Service"`}).
                  Please read the following information carefully.
                </p>
                <b>1. Governing Law</b>
                <p>
                  The use of the Hitch Africa Service and any disputes arising
                  from or related to its use are governed by the laws of
                  [Jurisdiction], without regard to its conflict of laws
                  principles. These laws will apply to the interpretation,
                  validity, and enforcement of the terms and conditions
                  governing the use of the Service.
                </p>

                <b>2. Jurisdiction</b>
                <p>
                  Any disputes, claims, or legal actions arising out of or in
                  connection with the Hitch Africa Service will be subject to
                  the exclusive jurisdiction of the courts located in
                  [Jurisdiction]. By using the Service, you consent to the
                  personal jurisdiction of such courts and waive any objections
                  to the exercise of jurisdiction by these courts.
                </p>

                <b>3. International Users</b>
                <p>
                  If you are accessing or using the Hitch Africa Service from a
                  location outside [Jurisdiction], you do so at your own risk
                  and are responsible for compliance with local laws. Hitch
                  Africa makes no representation that the Service is appropriate
                  or available for use in locations outside [Jurisdiction].
                </p>

                <b>4. Changes to Governing Law and Jurisdiction</b>
                <p>
                  Hitch Africa may update or modify the terms related to
                  governing law and jurisdiction at any time without prior
                  notice. Changes will be effective upon posting to the Service.
                  Your continued use of the Service after changes to the
                  governing law and jurisdiction terms are posted constitutes
                  your acceptance of the revised terms.
                </p>
                <p>
                  By using the Hitch Africa Service, you acknowledge and agree
                  to the governing law and jurisdiction terms outlined above. If
                  you do not agree with these terms, please discontinue using
                  the Service.
                </p>
                <p>
                  For any questions or concerns regarding governing law and
                  jurisdiction, please contact us at terms@hitchafrica.com.
                </p>
              </div>
            )}
            {active === 7 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  All content, materials, and elements available on the Hitch
                  Africa website, mobile applications, and related platforms
                  (collectively referred to as the {`"Service"`}) are protected
                  by copyright laws and other applicable intellectual property
                  rights. This Copyright Notice outlines the rights and
                  permissions related to the use of copyrighted material within
                  the Service.
                </p>
                <b>1. Ownership</b>
                <p>
                  All copyrights and intellectual property rights in the
                  content, design, graphics, text, software, code, and other
                  materials provided on the Service are owned by Hitch Africa or
                  its licensors, unless otherwise stated.
                </p>

                <b>2. Permitted Use</b>
                <p>
                  You are granted a limited, non-exclusive, and non-transferable
                  license to access and use the content and materials on the
                  Service for personal, non-commercial purposes. This license
                  does not grant you any ownership rights or permission to
                  reproduce, distribute, modify, create derivative works,
                  publicly display, or otherwise exploit the copyrighted content
                  for any other purpose without explicit written consent from
                  Hitch Africa.
                </p>

                <b>3. Prohibited Activities</b>
                <p>Unless expressly permitted by Hitch Africa, you must not:</p>
                <ul>
                  <li>
                    - Reproduce, distribute, or publicly display any copyrighted
                    material from the Service.
                  </li>
                  <li>
                    - Modify, adapt, or create derivative works based on the
                    copyrighted content.
                  </li>
                  <li>
                    - Remove or alter any copyright, trademark, or other
                    proprietary notices from the materials.
                  </li>
                </ul>

                <b>4. User-Generated Content</b>
                <p>
                  Any content submitted, posted, or displayed by users on the
                  Service remains the property of the respective users. By
                  submitting content, users grant Hitch Africa a worldwide,
                  non-exclusive, royalty-free license to use, reproduce, modify,
                  adapt, publish, translate, distribute, and display the content
                  on the Service for the purpose of providing and promoting the
                  Service.
                </p>

                <b>5. Digital Millennium Copyright Act (DMCA)</b>
                <p>
                  Hitch Africa respects the intellectual property rights of
                  others. If you believe that your copyrighted work has been
                  infringed upon on the Service, please follow the DMCA notice
                  and takedown procedure outlined in our [DMCA
                  Policy](link-to-dmca-policy), which provides information on
                  how to report copyright infringement.
                </p>

                <b>6. Changes to Copyright Notice</b>
                <p>
                  Hitch Africa may update or modify the terms of this Copyright
                  Notice at any time without prior notice. Changes will be
                  effective upon posting to the Service. Your continued use of
                  the Service after changes to the Copyright Notice are posted
                  constitutes your acceptance of the revised terms.
                </p>
                <p>
                  By using the Hitch Africa Service, you acknowledge and agree
                  to the terms of this Copyright Notice. If you do not agree
                  with these terms, please discontinue using the Service.
                </p>
                <p>
                  For any questions or concerns regarding copyright matters,
                  please contact us at terms@hitchafrica.com.
                </p>
              </div>
            )}
          </div>
          <p>Last Updated: August, 2023</p>
          <p>The Hitch Team</p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10 justify-evenly items-center py-10 md:py-28 bg-primary">
        <b className="text-3xl md:text-[40px] font-[700] text-white">
          Customer Support
        </b>
        <button className="px-14 py-4 text-lg bg-white text-primary rounded-lg font-[600]">
          Contact Us
        </button>
      </div>
    </main>
  );
}
