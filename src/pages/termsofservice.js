import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/blogLayout";
import Seo from "../components/seo";
import unicorn from "../images/unicornStars.png";
import Button from "../components/button";

const metaStyles = {
  lineHeight: "0.5",
};

// const navigationStyles = {
//   width: '12vw',
//   height: '30vw'
// }

const TermsOfService = ({ data }) => {
  const policyData = data.allMarkdownRemark.nodes[0];

  return (
    <Layout title="Terms of Service">
      <Seo route="Terms of Service" description="Terms of Service" />
      <article
        className="blog-post relative"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="metaData mt-10 mb-16 font-sans" style={metaStyles}>
          <p className="text-2xl mb-2">
            <span className="font-black text-blue-900">LAST UPDATED: </span>{" "}
            {policyData.frontmatter.date}
          </p>
        </div>

        {/* <section className="navigationPange fixed blackBorder left-0 top-96 mt-24" style={navigationStyles}>

        </section> */}

        {/* <section
          dangerouslySetInnerHTML={{ __html: policyData.html }}
          itemProp="articleBody"
          className="privacyPolicy"
        /> */}

        <main className="termsOfService">
          <p>
          This web page represents a legal document that serves as our Terms of Service and it governs the legal terms of our website, <a href="https://www.defenseunicorns.com" className="text-red-600">https://www.defenseunicorns.com</a>, sub-domains, and any associated web-based and mobile applications (collectively, "Website"), as owned and operated by Defense Unicorns.
          </p>

          <p>
            Capitalized terms, unless otherwise defined, have the meaning specified within the Definitions section below. This Terms of Service, along with our Privacy Policy, any mobile license agreement, and other posted guidelines within our Website, collectively "Legal Terms", constitute the entire and only agreement between you and Defense Unicorns, and supersede all other agreements, representations, warranties and understandings with respect to our Website and the subject matter contained herein. We may amend our Legal Terms at any time without specific notice to you. The latest copies of our Legal Terms will be posted on our Website, and you should review all Legal Terms prior to using our Website. After any revisions to our Legal Terms are posted, you agree to be bound to any such changes to them. Therefore, it is important for you to periodically review our Legal Terms to make sure you still agree to them.
          </p>

          <p>
          By accessing this website, you are agreeing to be bound by these Website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this Website are protected by applicable copyright and trademark law.
          </p>

          <p>
          The last update to our Terms of Service was posted on February 22, 2022.
          </p>

          <h3>
            Definitions
          </h3>

          <ul>
            <li>
              The terms "us" or "we" or "our" refers to Defense Unicorns, the owner of the Website.
            </li>
            <li>
              A "Visitor" is someone who merely browses our Website, but has not registered as a Member.
            </li>
            <li>
              A "Member" is an individual that has registered with us to use our Service.
            </li>
            <li>
              Our "Service" represents the collective functionality and features as offered through our Website to our Members.
            </li>
            <li>
              A "User" is a collective identifier that refers to either a Visitor or a Member.
            </li>
            <li>
              All text, information, graphics, audio, video, and data offered through our Website are collectively known as our "Content".
            </li>
          </ul>

          <h3>
            Use License
          </h3>
          <ol className="list-decimal list-inside">
            <li>
              Permission is granted to temporarily download one copy of the materials (information or software) on Defense Unicorns’s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

              <ol className="list-decimal list-inside ml-3 my-2">
                <li>
                  modify or copy the materials;
                </li>
                <li>
                  use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
                </li>
                <li>
                  attempt to decompile or reverse engineer any software contained on Defense Unicorns’s website;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the materials; or
                </li>
                <li>
                  transfer the materials to another person or “mirror” the materials on any other server.
                </li>
              </ol>
            </li>
            <li>
             This license shall automatically terminate if you violate any of these restrictions and may be terminated by Defense Unicorns at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </li>
          </ol>

          <h3>
            Restricted Uses
          </h3>

          <p>
            Listing of offered products on the Website could be used only for lawful purposes by Users of the Website. You could not frame or utilize framing techniques to enclose any hallmark, logo, copyrighted image, or most proprietary details (consisting of images, text, page layout, or type) of Defense Unicorns without express composed consent. You might not use any meta tags or any various other "unseen text" utilizing Defense Unicorn's name or trademarks without the express written consent of Defense Unicorns. You agree not to offer or modify any content found on the Website consisting of, however not limited to, names of Users and Content, or to recreate, display, openly perform, distribute, or otherwise make use of the Material, in any way for any public function, in connection with services or products that are not those of Defense Unicorns, in other way that is likely to trigger confusion among consumers, that disparages or challenges Defense Unicorns or its licensors, that dilutes the strength of Defense Unicorns' or its licensor's residential property, or that otherwise infringes Defense Unicorns' or its licensor's copyright rights. You also agree to abstain from abusing any of the material that appears on the Site. The use of the Material on any other website or in a networked computer system environment for any purpose is prohibited. Any code that Defense Unicorns develops to generate or show any Material of the pages making up the Website is likewise secured by Defense Unicorns's copyright, and you may not copy or adjust such code.
          </p>

          <p>
            Defense Unicorns has no duty to keep track of any products published, transferred, or connected to or with the Site. If you think that something on the Website breaches these Terms please contact our marked representative as set forth below.
          </p>

          <p>
            If alerted by a User of any products which allegedly do not conform to these Terms, Defense Unicorns could in its single discernment explore the allegation and figure out whether to take other actions or ask for the removal or get rid of the Content. Defense Unicorns has no liability or duty to Individuals for efficiency or nonperformance of such activities.
          </p>

          <h3>
            Electronic Communication
          </h3>

          <p>
            You are connecting with us electronically when you go to the Website or send out emails to us. You consent to get interactions from us online. We will connect with you by email or by uploading notifications on the Site.
          </p>

          <h3>
            Legal Compliance
          </h3>

          <p>
            You agree to comply with all applicable domestic and international laws, statutes, ordinances, and regulations regarding your use of our Website. Defense Unicorns reserves the right to investigate complaints or reported violations of our Legal Terms and to take any action we deem appropriate, including but not limited to canceling your Member account, reporting any suspected unlawful activity to law enforcement officials, regulators, or other third parties and disclosing any information necessary or appropriate to such persons or entities relating to your profile, email addresses, usage history, posted materials, IP addresses and traffic information, as allowed under our Privacy Policy.
          </p>

          <h3>
            Intellectual Property
          </h3>

          <p>
           Our Website may contain our service marks or trademarks as well as those of our affiliates or other companies, in the form of words, graphics, and logos. Your use of our Website does not constitute any right or license for you to use such service marks/trademarks, without the prior written permission of the corresponding service mark/trademark owner. Our Website is also protected under international copyright laws. The copying, redistribution, use or publication by you of any portion of our Website is strictly prohibited. Your use of our Website does not grant you ownership rights of any kind in our Website.
          </p>

          <h3>
            Revisions and Errata
          </h3>

          <p>
            The materials appearing on Defense Unicorns’s Website could include technical, typographical, or photographic errors. Defense Unicorns does not warrant that any of the materials on its Website are accurate, complete, or current. Defense Unicorns may make changes to the materials contained on its Website at any time without notice. Defense Unicorns does not, however, make any commitment to update the materials.
          </p>

          <h3>
            Disclaimer
          </h3>

          <p>
            The materials on <span className="font-bold">Defense Unicorns</span>'s Website are provided "as is" <span className="font-bold">Defense Unicorns</span> makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Furthermore, <span className="font-bold">Defense Unicorns</span> does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet Website or otherwise relating to such materials or on any sites linked to this site. The Website serves as a venue for Individuals to purchase distinct service or products. Neither Defense Unicorns nor the Website has control over the quality or fitness for a particular function of a product. Defense Unicorns likewise has no control over the accuracy, reliability, completeness, or timeliness of the User-submitted details and makes no representations or warranties about any info on the Site.
          </p>

          <p>
            THE WEBSITE AND ALL DETAILS, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE APPLICATION) AND SERVICES LISTED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THIS WEBSITE ARE PROVIDED BY Defense Unicorns ON AN "AS IS" AND "AS AVAILABLE" BASIS, UNLESS OTHERWISE SPECIFIED IN WRITING. Defense Unicorns MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, ABOUT THE OPERATION OF THIS WEBSITE OR THE INFO, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR SERVICES LISTED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THIS SITE, UNLESS OTHERWISE POINTED OUT IN WRITING. YOU EXPRESSLY AGREE THAT YOUR USE OF THIS WEBSITE IS AT YOUR OWN RISK.
          </p>

          <p>
            TO THE COMPLETE EXTENT PERMISSIBLE BY APPLICABLE LAW, Defense Unicorns DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND PHYSICAL FITNESS FOR A PARTICULAR PURPOSE. Defense Unicorns DOES NOT WARRANT THAT THIS WEBSITE; DETAILS, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE APPLICATION) OR SERVICES CONSISTED OF ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE; ITS SERVERS; OR EMAIL SENT FROM Defense Unicorns ARE WITHOUT VIRUSES OR OTHER HARMFUL ELEMENTS. Defense Unicorns WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THE WEBSITE OR FROM ANY DETAILS, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE APPLICATION) OR SERVICES LISTED ON OR OTHERWISE MADE AVAILABLE TO YOU WITH THIS SITE, INCLUDING, BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES, UNLESS OTHERWISE POINTED OUT IN WRITING. UNDER NO SCENARIO SHALL Defense Unicorns'S LIABILITY DEVELOPING FROM OR IN CONNECTION WITH THE WEBSITE OR YOUR USE OF THE WEBSITE, DESPITE THE REASON FOR ACTION (WHETHER IN AGREEMENT, TORT, BREACH OF SERVICE WARRANTY OR OTHERWISE)
          </p>

          <h3>
            Links to Other Websites
          </h3>

          <p>
            Our Website may contain links to third party websites. These links are provided solely as a convenience to you. By linking to these websites, we do not create or have an affiliation with, or sponsor such third party websites. The inclusion of links within our Website does not constitute any endorsement, guarantee, warranty, or recommendation of such third party websites. Defense Unicorns has no control over the legal documents and privacy practices of third party websites; as such, you access any such third party websites at your own risk.
          </p>

          <h3>
            Site Terms of Service Modifications
          </h3>

          <p>
            Defense Unicorns may revise these Terms of Service for its Website at any time without notice. By using this Website you are agreeing to be bound by the then-current version of these Terms and Conditions of Use.
          </p>

          <h3>
            Governing Law
          </h3>

          <p>
            Any claim relating to Defense Unicorns’s Website shall be governed by the laws of Colorado without regard to its conflict of law provisions, and You consent to exclusive jurisdiction and venue in such courts. 
          </p>

          <h3>
            Indemnity
          </h3>

          <p>
            You accept defend, indemnify, and hold safe Defense Unicorns, its affiliates, and their corresponding officers, directors, agents and workers, from and against any claims, actions or demands, including without limitation affordable legal, accounting, and other provider charges, affirming or resulting from (i) any Content of most material You offer to the Site, (ii) Your use of any Content, or (iii) Your breach of the terms of these Terms. Defense Unicorns will provide notice to You promptly of any such claim, match, or case.
          </p>

          <h3>
            General Terms
          </h3>

          <p>
            Our Legal Terms shall be treated as though they were executed and performed in Colorado and shall be governed by and construed in accordance with the laws of Colorado without regard to conflict of law principles. In addition, you agree to submit to the personal jurisdiction and venue of such courts. Any cause of action by you with respect to our Website, must be instituted within one (1) year after the cause of action arose or be forever waived and barred. Should any part of our Legal Terms be held invalid or unenforceable, that portion shall be construed consistent with applicable law and the remaining portions shall remain in full force and effect. To the extent that any Content in our Website conflicts or is inconsistent with our Legal Terms, our Legal Terms shall take precedence. Our failure to enforce any provision of our Legal Terms shall not be deemed a waiver of such provision nor of the right to enforce such provision. The rights of Defense Unicorns under our Legal Terms shall survive the termination of our Legal Terms.
          </p>
        </main>

        <hr />
      </article>

      <div className="flex flex-col justify-center items-center mt-24 mb-5">
        <img
          className="w-2/6 xl:w-1/6 mx-auto"
          src={unicorn}
          alt="Unicorn with star trail"
        ></img>
        <Button
          linkTo="/"
          className=" bg-red-500 hover:bg-red-700 text-white"
          text="Home"
        />
      </div>
    </Layout>
  );
};

export default TermsOfService;

export const pageQuery = graphql`
  query TermsOfService {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { eq: "privacypolicy" } } }
    ) {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;
