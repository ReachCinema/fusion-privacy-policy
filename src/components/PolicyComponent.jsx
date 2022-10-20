import React from "react";
import TableComponent from "./TableComponent";


// Search for each section of the policy using ctrl + f. Each sections are labeled correctly 

const PolicyComponent = () => {
  return (
    <>
      {/* OUR POLICY SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          Our Product
        </h1>
        <p className="mb-2 text-justify ">
          Fusion is a social and business platform that promotes innovation,
          community and lifestyle, embedded with financial services and
          developed by C-ONE VENTURES PLATFORM LIMITED (“C-One”).
        </p>
        <p className="mb-2 text-justify">
          Personal information is essential to the provision of exceptional and
          personalized products and services, but more important is the
          protection and security of your personal information. C-One respects
          individuals’ rights to privacy and the protection of personal
          information. Therefore, we want to transparently explain how and why
          we collect, store, share and use your personal information – as well
          as outline the controls and choices you have around when you choose to
          share your personal data.
        </p>
        <p className="mb-2 text-justify">
          This Privacy Policy (“Policy”) outlines our objectives in detail.
        </p>
        <p className="mb-2 text-justify">
          The Policy applies to all Fusion services and any associated services
          (“Fusion Service”). The terms governing your use of the Fusion Service
          are defined in our Terms and Conditions.
        </p>
        <p className="mb-2 text-justify">The aim of this policy is to:</p>
        <p className="mb-2 text-justify">
          Ensure that you understand what personal data we collect about you,
          our reasons for collection and use, and who we share it with;
        </p>
        <p className="mb-2 text-justify">
          Explain the way we use the personal data you share with us in order to
          give you a great experience when you are using the Fusion Service; and
        </p>
        <p className="mb-2 text-justify">
          Explain your rights and choices in relation to the personal data we
          collect and process about you and how we will protect your privacy.
        </p>
        <p className="mb-2 text-justify">
          From time to time, we may develop new or offer additional services. If
          the introduction of these new or additional services results in any
          material change to the way we collect or process your personal data,
          we will provide you with more information or additional terms or
          policies. Unless stated otherwise, new or additional services, will be
          subject to this Privacy Policy.
        </p>
        <p className="mb-2 text-justify">
          We hope this helps you to understand our privacy commitments to you.
          For further clarifications of the terms used in this Policy, please
          email us at support@fusion.ng or leave a message for our support
          officer on the Fusion app.
        </p>
        <p className="mb-2 text-justify">
          For information on how to contact us if you ever have any questions or
          concerns, please see the{" "}
          <span className="text-blue-700">
            <a href="/#contact">“Contact Us”</a>
          </span>{" "}
          section below. Alternatively, if you do not agree with the content of
          this Policy, you may voluntarily opt out of this service and
          discontinue its use. Our Principal address is Block 10, Plot 2, The
          Lennox Mall, 3, Admiralty Way, Lekki Phase 1, Lagos.
        </p>
      </section>

      {/* PRIVACY RIGHT SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          Your privacy rights
        </h1>
        <p className="mb-2 text-justify">
          You have certain rights in relation to the personal information we
          collect as provided by the Nigeria Data Protection Regulation 2019
          (NDPR) and other applicable data protection laws/regulations These
          include the right to:
        </p>
        <p className="mb-2 text-justify">access your personal data;</p>
        <p className="mb-2 text-justify">
          rectify/update your information in our possession;
        </p>
        <ul className="list-disc list-outside text-justify pl-8 mb-8">
          <li className="pl-3">
            withdraw your consent to processing of personal information. This
            will however not affect the legality of processing carried out prior
            to any such withdrawal;
          </li>
          <li className="pl-3 text-justify">
            object to processing of personal information (ways in which we are
            using your personal information, including direct marketing). This
            will only be applicable where there are no legal or operational
            reasons;
          </li>
          <li className="pl-3 text-justify">
            request that your personal information be made available to you in a
            common electronic format and/or request that such data be sent to a
            third party;
          </li>
          <li className="pl-3 text-justify">
            request that your information be erased. However, we are obligated
            to retain such data if there are valid legal, regulatory, or
            operational reasons to do so.
          </li>
          <li className="pl-3 text-justify">
            Request that we restrict the processing of your personal information
          </li>
          <li className="pl-3 text-justify">
            not to be subject to a decision based solely on automated
            decision-making, including profiling, where the decision would have
            a legal effect on you or produce a similarly significant effect
          </li>
        </ul>
        <p className="mb-2 text-justify">
          The exercise of these rights is dependent on many factors and in
          certain instances, we may be unable to comply with these requests,
          e.g., because we have legitimate grounds for refusal or where the
          right is not applicable to the particular data obtained from that
          individual. These rights are also subject to the limitations provided
          in the NDPR and other applicable data protection laws/regulations.
        </p>
        <p className="mb-2 text-justify">
          If you have any questions about your privacy, your rights, or how to
          exercise them, please refer to the{" "}
          <span className="text-blue-700">
            <a href="/#contact">Contact Us</a>
          </span>{" "}
          section of this Policy.
        </p>
      </section>

      {/* TYPE OF PERSONNAL INFO SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          The type of personal information we collect from you
        </h1>
        <p className="mb-2 text-justify">
          We currently collect and process different categories of personal
          information for various purposes to provide and improve the Fusion
          Service to you. To enable you to sign up for and use the Fusion
          Service, we collect the following personal data from you:
        </p>
        <p className="mb-2 text-justify">
          Personal identifiers – this includes your name, username, email
          address, phone number, birth date, gender, street address and country
        </p>
        <p className="mb-2 text-justify">
          Biometric information – this includes photographs (copies of your
          passports or ID document), voice recognition (when you call our
          helpline), facial recognition and fingerprints
        </p>
        <p className="mb-2 text-justify">
          Transaction details – this includes your Fusion transaction history
          and information you provide to deliver payment for services
        </p>
        <p className="mb-2 text-justify">
          Financial information – this includes your bank account number, Fusion
          card information and other account information regarding accounts you
          hold with other providers that you opt to save on your Fusion Account
        </p>
        <p className="mb-2 text-justify">
          Information about your family, lifestyle, and social circumstances
          (such as dependents, marital status, next of kin details)
        </p>
        <p className="mb-2 text-justify">
          Information about any of our products and services you currently use
          and have, you have applied for or have previously held
        </p>
        <p className="mb-2 text-justify">
          User Content – this includes content you post to Fusion such as
          photos, your contact list and location data. Please note that we will
          only access your contact list, current location, camera, or photos
          from your device if you give us permission to do so, and we will only
          access images that you specifically choose to share with us and
          metadata related to those images, such as the type of file and the
          size of the image. We will never scan or import your device’s photo
          library or camera roll.
        </p>
        <p className="mb-2 text-justify">
          Inferences drawn about your interests and preferences based on your
          usage of the Fusion Service
        </p>
        <p className="mb-2 text-justify">
          Information about your interactions with the Fusion Service such as
          your search queries and other requests (including the date and time of
          any requests you make)
        </p>
        <p className="mb-2 text-justify">
          Certain technical data – this may include URL information, online
          identifiers including cookie data and IP addresses, smart device
          information (including mobile device unique ID, your mobile operating
          system and other diagnostic data), mobile network provider, browser
          type, language and your non-precise location (which may be derived or
          inferred from certain technical data like your IP address and the
          language setting of your phone or payment currency). We do not store
          or upload this information to our servers. We only collect what we
          need to improve your experience.
        </p>
        <p className="mb-2 text-justify">
          Contests, surveys and Sweepstakes Data – this includes personal data
          you may provide on any forms or surveys and questionnaires or when you
          participate in a contest.
        </p>
        <p className="mb-2 text-justify">
          We may also process specific categories of information for specific
          and limited purposes, such as detecting and preventing financial crime
          or making our services available to customers.
        </p>
        <p className="mb-2 text-justify">
          We will only process particular types of information after we have
          obtained your explicit consent or are otherwise lawfully permitted to
          do so.
        </p>
      </section>

      {/* HOW WE GATHER PERSONAL INFO SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          How We Gather Personal Information and why we have it
        </h1>
        <p className="mb-3 text-justify">
          Most of the personal information we process is collected or provided
          directly to us by you. The information we collect include:
        </p>
        <ul className="list-disc list-outside text-justify pl-8 mb-6">
          <li className="pl-3 text-justify">
            Information collected or provided directly to us by you to enable
            you sign up for and use the Fusion Service;
          </li>
          <li className="pl-3 text-justify">
            Information collected about you when you are accessing and/or using
            the Fusion Service such as your location data, browser settings,
            your IP address and other online identifiers;
          </li>
          <li className="pl-3 text-justify">
            Information that we learn about you through our relationship with
            you and the way you operate your accounts and or services, such as
            payments made to and from your accounts;
          </li>
        </ul>
        <p className="mb-3 text-justify">
          We also receive personal information indirectly, from the following
          sources in the following scenarios:
        </p>
        <ul className="list-disc list-outside text-justify pl-8 mb-10">
          <li className="pl-3 text-justify">
            Information that we receive from various third parties – third
            parties who provide services to you or us, including credit
            reference, fraud prevention or government agencies and other banks;
          </li>
          <li className="pl-3 text-justify">
            Information we collect from publicly available sources, such as the
            press, company registers and online search engines.
          </li>
        </ul>
        <p className="mb-3 text-justify">
          We have set out in the table below the reasons why we process your
          personal information and the associated lawful basis that we rely upon
          as provided in the Nigeria Data Protection Regulation (NDPR) and other
          applicable data protection laws/regulations.
        </p>
        <TableComponent />
      </section>

      {/* SHARING PERSONAL INFO SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          Sharing your personal information
        </h1>
        <p className="mb-3 text-justify">
          We share personal information about you and your dealings with us, to
          the extent permitted by law, with the following:
        </p>
        <p className="mb-3 text-justify">
          Legal/Regulatory Authorities - We may disclose personal information if
          we determine that for the purposes of national security, law
          enforcement, or other issues of public importance, a disclosure of
          personal information is necessary or appropriate. It may be necessary
          by law, legal process, litigation, and/or requests from public and
          governmental authorities for the disclosure of your personal
          information.
        </p>
        <p className="mb-3 text-justify">
          Professional Advisers: Auditors/Legal Advisers
        </p>
        <p className="mb-3 text-justify">Credit Agencies;</p>
        <p className="mb-3 text-justify">Correspondent Banks;</p>
        <p className="mb-3 text-justify">External Auditors;</p>
        <p className="mb-3 text-justify">
          Strategic partners/service providers – we provide personal data to
          trusted and authorised third parties who assist us in conducting our
          business and/or providing services to you. We require that these
          parties agree to process such information based on our instructions
          and in compliance with this Privacy Policy and any other appropriate
          confidentiality and security measures.
        </p>
        <p className="mb-3 text-justify">
          We also disclose your Personal Information in good faith when we
          believe it is necessary for us to do so in any of the following
          circumstances:
        </p>
        <p className="mb-3 text-justify">
          We have your consent to share the information.
        </p>
        <p className="mb-3 text-justify">To comply with a legal obligation.</p>
        <p className="mb-3 text-justify">
          To bring you improved service across our array of products and
          services, when permissible under relevant laws and regulations, by
          disclosing your personal information with C-One’s affiliates or
          partner bank (i.e., Sterling Bank Plc)
        </p>
        <p className="mb-3 text-justify">
          To protect and defend the rights or property of C-One and its
          partners.
        </p>
        <p className="mb-3 text-justify">
          To prevent or investigate possible wrongdoing in connection with our
          Service.
        </p>
        <p className="mb-3 text-justify">
          To protect the personal safety of users of our Service or the public.
        </p>
        <p className="mb-3 text-justify">To protect against legal liability.</p>
        <p className="mb-3 text-justify">
          In the event of a reorganization, merger, or sale, we may transfer any
          and all personal information we collect to the relevant third party.
        </p>
        <p className="mb-3 text-justify">
          We find that your actions on our website or application violate any
          part of our Terms and Conditions of use.
        </p>
        <p className="mb-3 text-justify">
          Whenever we share your personal information with anyone other than for
          purposes highlighted herein, we will inform you about the details of
          the exchange. We require that all third parties with whom we share
          your personal data agree to process such information based on our
          instructions and in compliance with this privacy policy and any other
          appropriate confidentiality and security measures.
        </p>
        <p className="mb-3 text-justify">
          Special categories of personal data (also known as sensitive personal
          data) are part of the information we collect from you. In particular,
          we may process biometric data (such as facial and voice recognition),
          for services that require it. Where we process such sensitive personal
          data, we will do so on the basis that we have your explicit consent to
          do so, and that it is necessary for reasons of substantial public
          interest, to establish, and/or to exercise or defend any legal claims.
          We will carry out processing under applicable laws.
        </p>
      </section>

      {/* HOW LONG WE WILL KEEP INFO SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          How long we will keep your information
        </h1>
        <p className="mb-3 text-justify">
          We will keep your personal data for as long as we have a relationship
          with you, i.e., for as long as you use the app, remain validly
          subscribed to our newsletter or partake in surveys.
        </p>
        <p className="mb-3 text-justify">
          Following the termination of our relationship with you, (e.g.,
          following closure of your account) or cancellation of your
          subscription to the Service), we will cease to gather or collect any
          new information about you.
        </p>
        <p className="mb-3 text-justify">
          Once the relationship is terminated, we will only retain personal data
          for as long as is necessary, depending on the type of personal
          information and the purposes for which that information is retained.
          Please, note that retention periods are subject to legal and
          regulatory requirements.
        </p>
      </section>

      {/* HOW WE PROTECT INFOR SECTION */}
      <section id="protect">
        <h1 className="text-semibold font-semibold text-lg mb-3">
          How Do We Protect Your Information?
        </h1>
        <p className="mb-3 text-justify">
          We implement a variety of reasonable security measures to protect the
          security and integrity of your personal information. We use computer
          safeguards such as firewalls and data encryption, enforce physical
          access to our buildings and files and only authorize access to
          personal information to only employees who require the data to fulfil
          their job responsibilities, or our affiliates as may be required in
          the provision of our services to you.
        </p>
        <p className="mb-3 text-justify">
          However, the internet is not always a secure medium, and we cannot
          guarantee the non- occurrence of security breaches. Accordingly, we
          are not responsible for matters, which include actions of hackers and
          other unauthorized third parties that attempt to breach our reasonable
          security procedures. No method of electronic transmission or storage
          is 100% secure, therefore, we cannot guarantee the absolute security
          of your Personal Information. It is important that you understand that
          you also play a crucial role in protecting your Personal Information.
        </p>
        <p className="mb-3 text-justify">
          Please safeguard your passcodes for your Fusion account and do not
          share them with others. If we receive instructions using your Fusion
          account login information, we will consider that you have authorized
          the instruction.
        </p>
        <p className="mb-3 text-justify">
          You agree to notify us immediately of any unauthorized use of your
          Fusion account or any other breach of security. We reserve the right,
          at our sole discretion, to refuse to provide our Services, terminate
          Fusion accounts, and to remove or edit content.
        </p>
      </section>

      {/* THIRD-PARTY POLICY SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          Third-Party Policy
        </h1>
        <p className="mb-3 text-justify">
          Occasionally, at our discretion, we may include or offer third-party
          products or services or links on our application. These third-party
          sites have separate and independent Privacy Policies. We request that
          you separately review these policies, as we, have no responsibility or
          liability for the content and activities of linked platforms.
          Nonetheless, we seek to protect the integrity of our application and
          welcome feedback about these sites.
        </p>
      </section>

      {/* COOKIE POLICY */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          Cookie Policy
        </h1>
        <p className="mb-3 text-justify">Cookies help us serve you better.</p>
        <p className="mb-3 text-justify">
          Think of cookies as crumbs. Every time you visit a website, that
          website saves bits of your visit so they can keep track of how many
          times you have visited, the length of time spent, and your activities.
        </p>
        <p className="mb-3 text-justify">
          This information helps the site show you things that are relevant to
          you based on your past visits. The length of time stored depends on
          the cookie, but this is generally at least a few minutes and up to two
          years.
        </p>
      </section>

      {/* WHY WE USE COOKIES SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          Why and How We Use Cookies on Our Website
        </h1>
        <p className="mb-3 text-justify">
          We use cookies to enhance our customers’ online activity by making
          navigation easier and providing important security features.
        </p>
        <p className="mb-3 text-justify">
          For the provision of certain services, cookies are a requirement
          because they help protect customer privacy. For example, automatically
          terminating the online session if the customer forgets to log out.
        </p>
        <p className="mb-3 text-justify">
          Visitors to our website who have JavaScript enabled are tracked using
          Google Analytics. Google Analytics collects the following types of
          information from users:
        </p>
        <ul className="list-decimal list-outside text-justify pl-8 mb-8">
          <li className="pl-3 text-justify mb-3">
            Web browser used – software manufacturer, and version number
          </li>
          <li className="pl-3 text-justify mb-3">Operating system</li>
          <li className="pl-3 text-justify mb-3">Screen colours</li>
          <li className="pl-3 text-justify mb-3">JavaScript support</li>
          <li className="pl-3 text-justify mb-3">Flash version</li>
          <li className="pl-3 text-justify mb-3">
            Network location and IP address: a. May include geographic b.
            Hostname c. Connection Bandwidth
          </li>
          <li className="pl-3 text-justify mb-3">
            May include geographic data
          </li>
          <li className="pl-3 text-justify mb-3">Hostname</li>
          <li className="pl-3 text-justify mb-3">Connection bandwidth</li>
          <li className="pl-3 text-justify mb-3">Time of visit</li>
          <li className="pl-3 text-justify mb-3">
            Pages visited and dwell time on these pages
          </li>
          <li className="pl-3 text-justify mb-3">
            Referring site a. The referring website URL b. Search engine query
            used Google Analytics data is shared with Google.
          </li>
          <li className="pl-3 text-justify mb-3">Screen resolution</li>
        </ul>
        <p className="mb-3 text-justify">
          For more information on Google’s Privacy Policies, visit{" "}
          <span className="text-blue-700">
            <a href=" https://policies.google.com/privacy">
              {" "}
              https://policies.google.com/privacy
            </a>
          </span>{" "}
        </p>
      </section>

      {/* THIRD PARTY COOKIE SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          Third-party Cookies
        </h1>
        <p className="mb-3 text-justify">
          {" "}
          Third parties that are trusted suppliers of C-One. They include
          C-One’s approved suppliers who are expected to follow the information
          security requirements of the company. We will allow only our trusted
          suppliers to have their cookies on our website.
        </p>
        <p className="mb-3 text-justify"> We use two kinds of cookies:</p>
        <ul className="list-disc list-outside text-justify pl-8 mb-8">
          <li className="pl-3 text-justify mb-3">
            Strictly Necessary Cookies, such as PHPSESSID and HttpOnly
          </li>
          <li className="pl-3 text-justify mb-3">
            Functionality Cookies, like SnapABugHistory, SnapABugRef and
            SnapABugVisit
          </li>
        </ul>
        <p className="mb-3 text-justify">
          You can turn functionality cookies off whenever you like.
        </p>
        <p className="mb-3 text-justify">
          You can choose to have your computer warn you each time a cookie is
          being sent, or you can choose to turn off all cookies. Exactly how you
          do this would depend on your device&#39;s privacy settings.
        </p>
        <p className="mb-3 text-justify">
          If you turn your cookies off, some of the features that make your site
          experience more efficient may not function properly.
        </p>
        <p className="mb-3 text-justify">
          Since browsers differ, we recommend that you access the Help Menu to
          learn the correct way to modify your cookies.
        </p>
        <p className="mb-3 text-justify">
          To learn more about cookies and privacy, visit{" "}
          <span className="text-blue-700">
            <a href="https://www.allaboutcookies.org">
              {" "}
              https://www.allaboutcookies.org
            </a>
          </span>
        </p>
      </section>

      {/* INFORMATION SHARED SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          Information Shared Socially
        </h1>
        <p className="mb-3 text-justify">
          Our Service may allow you to connect and share your actions, comments,
          content, and information publicly or with friends. We are not
          responsible for maintaining the confidentiality of any information you
          share publicly or with friends.
        </p>
        <p className="mb-3 text-justify">
          Our Service may also allow you to connect with us on, share on, and
          use third-party websites, applications, and services. Please be
          mindful of your personal privacy needs and the privacy needs of
          others, as you choose whom to connect with and what to share and make
          public.
        </p>
        <p className="mb-3 text-justify">
          We cannot control the privacy or security of information you choose to
          make public or share with others. We also do not control the privacy
          practices of third-party websites. Please contact those sites and
          services directly if you want to learn about their privacy practices.
        </p>
      </section>

      {/* TRANSFER TO OTHER COUNTRIES SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          Transfer to other countries
        </h1>
        <p className="mb-3 text-justify">
          Personal data collected within Nigeria may, for example, be
          transferred to and processed by third parties located in another
          country. In such instances We shall ensure that the transfer of your
          personal data is carried out in accordance with applicable privacy
          laws/regulations and, in particular, that appropriate contractual,
          technical, and organisational measures are in place, such as Adequacy
          mechanisms and Standard Contractual clauses approved by the Attorney
          General of the Federation.
        </p>
        <p className="mb-3 text-justify">
          For further details of the security measures we use to protect your
          personal data, please see the{" "}
          <span className="text-blue-700">
            <a href="/#protect">“How do we protect your information”</a>
          </span>
          section of this policy.
        </p>
      </section>

      {/* CHILDRENS PRIVACY SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          Children&#39;s Privacy
        </h1>
        <p className="mb-3 text-justify">
          We target our Services at persons above the age of 18. However,
          persons below the age of 18 may create a Fusion account under the
          supervision and explicit consent of a parent or guardian.
        </p>
        <p className="mb-3 text-justify">
          Our collection of personally identifiable information from anyone
          under the age of 18 shall be in accordance with the terms of this
          Privacy Policy. If you are under the age of 18, you may only subscribe
          to our Service or submit any information to us in strict compliance
          with the terms of this Privacy Policy. As a parent or guardian, you
          shall ensure strict compliance with this Privacy Policy for the
          subscription of your child(ren) under the age of 18 to the Fusion
          Platform.
        </p>
        <p className="mb-3 text-justify">
          If we become aware that we have collected Personal Data from children
          without verification of parental consent, we take steps to remove that
          information from our servers.
        </p>
      </section>

      {/* CHANGES TO POLICY SECTION */}
      <section>
        <h1 className="text-semibold font-semibold text-lg mb-3">
          Changes to this policy
        </h1>
        <p className="mb-3 text-justify">
          Based on the changing nature of privacy laws, user needs and our
          business, we may modify this Privacy Policy from time to time. Any
          change to our Privacy Policy will be communicated on our upgrades via
          the application, and this will be effective as soon as published.
          Accordingly, we encourage periodic reviews of this Privacy Policy for
          awareness of any changes that may have occurred.
        </p>
      </section>

      {/* CONTACT US SECTION */}
      <section id="contact">
        <h1 className="text-semibold font-semibold text-lg mb-3">Contact Us</h1>
        <p className="mb-3 text-justify">
          If you have any queries about how we use your personal information
          which is not answered here, you may contact us at{" "}
          <span className="font-semibold">
            <a href="mailto:support@fusion.ng">support@fusion.ng</a>
          </span>
        </p>
        <p className="mb-3 text-justify">
          Where you suspect that your Fusion account may have suffered a breach,
          we advise that you inform us immediately to enable us take appropriate
          action.
        </p>
        <p className="mb-3 text-justify">
          If you want to make a complaint about how we have handled your
          personal information, or would like to know more about your rights and
          how to exercise them, you may contact our Data Protection Officer to
          investigate the matter by sending an email to{" "}
          <span className="font-semibold">
            <a href="mailto:dpo@cafeone.ng">dpo@cafeone.ng.</a>
          </span>
        </p>
        <p className="mb-3 text-justify">
          You may also write a letter addressed as follows:
        </p>
        <p className="text-justify">The Data Protection Officer,</p>
        <p className="text-justify">C-ONE VENTURES PLATFORM LIMITED,</p>
        <p className="text-justify">
          Block 10, Plot 2, The Lennox Mall, 3, Admiralty Way, Lekki Phase 1,
          Lagos
        </p>
      </section>
    </>
  );
};

export default PolicyComponent;
