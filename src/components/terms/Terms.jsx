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
                  App, provided to you by [Your Company Name], a leading
                  provider of innovative multi-service solutions. These Terms
                  govern your access to and use of the Hitch Mobile App and all
                  its related services, collectively referred to as{" "}
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
                  At [Your Company Name], we take great pride in curating a
                  unique and personalized user experience. Our commitment to
                  excellence and user satisfaction is the cornerstone of our
                  success. As you embark on your journey with Hitch, we assure
                  you that your safety, security, and enjoyment are at the heart
                  of everything we do.
                </p>
                <p>
                  We encourage you to carefully read and understand these Terms
                  as they set forth the legal terms and conditions governing
                  your use of the Hitch Mobile App. These Terms constitute a
                  legally binding agreement between you and [Your Company Name].
                  By accessing or using our services, you acknowledge that you
                  have read, understood, and agree to comply with these Terms.
                  These Terms encompass not only your rights and obligations as
                  a user but also the responsibilities and commitments
                  undertaken by [Your Company Name]. They cover crucial aspects
                  such as your account creation, use of our services, content
                  submission, intellectual property rights, data privacy, and
                  limitations of liability.
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
                  our dedicated customer support team.
                </p>

                <p>Last Updated: August, 2023</p>
                <p>The Hitch Team</p>
              </div>
            )}
            {active === 1 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  Welcome to the Terms and Conditions page for the Hitch Mobile
                  App, provided to you by [Your Company Name], a leading
                  provider of innovative multi-service solutions. These Terms
                  govern your access to and use of the Hitch Mobile App and all
                  its related services, collectively referred to as{" "}
                  {`"our services."`} By accessing, registering, or using the
                  Hitch Mobile App, you agree to be legally bound by these
                  Terms. If you do not accept these Terms in their entirety, you
                  must discontinue using our services immediately.
                </p>
              </div>
            )}
            {active === 2 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  Welcome to the Terms and Conditions page for the Hitch Mobile
                  App, provided to you by [Your Company Name], a leading
                  provider of innovative multi-service solutions. These Terms
                  govern your access to and use of the Hitch Mobile App and all
                  its related services, collectively referred to as{" "}
                  {`"our services."`} By accessing, registering, or using the
                  Hitch Mobile App, you agree to be legally bound by these
                  Terms. If you do not accept these Terms in their entirety, you
                  must discontinue using our services immediately.
                </p>
              </div>
            )}
            {active === 3 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  Welcome to the Terms and Conditions page for the Hitch Mobile
                  App, provided to you by [Your Company Name], a leading
                  provider of innovative multi-service solutions. These Terms
                  govern your access to and use of the Hitch Mobile App and all
                  its related services, collectively referred to as{" "}
                  {`"our services."`} By accessing, registering, or using the
                  Hitch Mobile App, you agree to be legally bound by these
                  Terms. If you do not accept these Terms in their entirety, you
                  must discontinue using our services immediately.
                </p>
              </div>
            )}
            {active === 4 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  Welcome to the Terms and Conditions page for the Hitch Mobile
                  App, provided to you by [Your Company Name], a leading
                  provider of innovative multi-service solutions. These Terms
                  govern your access to and use of the Hitch Mobile App and all
                  its related services, collectively referred to as{" "}
                  {`"our services."`} By accessing, registering, or using the
                  Hitch Mobile App, you agree to be legally bound by these
                  Terms. If you do not accept these Terms in their entirety, you
                  must discontinue using our services immediately.
                </p>
              </div>
            )}
            {active === 5 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  Welcome to the Terms and Conditions page for the Hitch Mobile
                  App, provided to you by [Your Company Name], a leading
                  provider of innovative multi-service solutions. These Terms
                  govern your access to and use of the Hitch Mobile App and all
                  its related services, collectively referred to as{" "}
                  {`"our services."`} By accessing, registering, or using the
                  Hitch Mobile App, you agree to be legally bound by these
                  Terms. If you do not accept these Terms in their entirety, you
                  must discontinue using our services immediately.
                </p>
              </div>
            )}
            {active === 6 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  Welcome to the Terms and Conditions page for the Hitch Mobile
                  App, provided to you by [Your Company Name], a leading
                  provider of innovative multi-service solutions. These Terms
                  govern your access to and use of the Hitch Mobile App and all
                  its related services, collectively referred to as{" "}
                  {`"our services."`} By accessing, registering, or using the
                  Hitch Mobile App, you agree to be legally bound by these
                  Terms. If you do not accept these Terms in their entirety, you
                  must discontinue using our services immediately.
                </p>
              </div>
            )}
            {active === 7 && (
              <div className="flex flex-col gap-5 md:text-lg">
                <p>
                  Welcome to the Terms and Conditions page for the Hitch Mobile
                  App, provided to you by [Your Company Name], a leading
                  provider of innovative multi-service solutions. These Terms
                  govern your access to and use of the Hitch Mobile App and all
                  its related services, collectively referred to as{" "}
                  {`"our services."`} By accessing, registering, or using the
                  Hitch Mobile App, you agree to be legally bound by these
                  Terms. If you do not accept these Terms in their entirety, you
                  must discontinue using our services immediately.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10 justify-evenly items-center py-10 md:py-28 bg-primary">
        <b className="text-3xl md:text-[40px] font-[700] text-white">Customer Support</b>
        <button className="px-14 py-4 text-lg bg-white text-primary rounded-lg font-[600]">
          Contact Us
        </button>
      </div>
    </main>
  );
}
