import React,{FC} from 'react'
import { Section } from '../../Fawwaz/Sections' 
import TableOfContent from "../Table/TableOfContents";
import websiteMaintainanceCard1 from "../../assets/websiteMaintainanceCard1.png";
import websiteMaintainanceCard2 from "../../assets/websiteMaintainanceCard2.png";

const DetailsAndTableofContents:FC = () => {
  return (
<Section className="grid grid-cols-1 lg:grid-cols-4 py-32 gap-[35px]">
        <div className="order-2 lg:order-1 lg:col-span-2 w-[760px] pr-10">
          <div className="space-y-10">
            {/* First */}
            <div className="space-y-10">
              <h2 className="text-[40px] leading-[52px]">
                What does website maintenance consist of?
              </h2>
              <div className='text-xl'>
                Your company will have access to the following as part of our
                website maintenance services:
              </div>

              <ul className="list-disc pl-10 text-xl">
                <li>Regular updates</li>
                <li>Tech suppor</li>
                <li>WordPress support</li>
              </ul>

              <h4 className="text-2xl font-bold">Regular updates</h4>

              <div className="text-start text-xl">
                <p className="mb-10 ">
                  Our team of developers keeps your website functional and
                  secure for users by performing regular updates during business
                  hours. Whether you want to add new images, delete a page copy,
                  or change a link, our website maintenance services can help.
                </p>
                <p className="mb-10 ">
                  To give you a quick overview, here are some examples of
                  updates included in our packages:
                </p>
                <ul className="list-decimal pl-10 mb-6 ">
                  <li>
                    <strong>Text</strong>: Modifications or deletions
                  </li>
                  <li>
                    <strong>
                      Photo improvements, deletions, and basic photo editing
                    </strong>{" "}
                  </li>
                  <li>
                    <strong>Pages</strong> Changes or additions to existing page
                    designs.
                  </li>
                  <li>
                    {" "}
                    <strong>
                      Basic navigational modifications (add, move, or delete an
                      item in the navigation)
                    </strong>
                  </li>
                  <li>
                    {" "}
                    <strong>File downloads</strong>: PDF and other document
                    additions and deletions.
                  </li>
                  <li>
                    {" "}
                    <strong>Insertion or removal of a pre-edited video.</strong>
                  </li>
                  <li>
                    {" "}
                    <strong>Additions or deletions of links</strong>
                  </li>
                  <li>
                    {" "}
                    <strong>Color and background images</strong>: Modifications
                    or replacements
                  </li>
                </ul>
                <p className="pl-4 mb-10 ">
                  If you have any questions about regular updates, please feel
                  free to contact us online.
                </p>
                <p className="italic pl-4 ">
                  <strong>
                    **This is not an exhaustive list of services included in
                    website maintenance plans.
                  </strong>
                </p>
              </div>

              <h4 className="text-2xl font-bold">Technology support</h4>

              <div className='text-xl'>
                <p className=" mb-10">
                  As part of our website maintenance plans, your business will
                  also have access to our excellent technical support. With the
                  specialist knowledge of our development team, your company can
                  get assistance with a variety of issues, such as email setup.
                </p>
                <p>
                  In addition to technical support, your company can request
                  consulting as part of your website maintenance services.
                  Whether you need help creating a new contact form or adding a
                  new page to your navigation, our talented team can provide you
                  with valuable insight.
                </p>
              </div>

              <h4 className="text-2xl font-bold">WordPress support</h4>
              <div className='text-xl'>
                <p>
                  Because many businesses use WordPress as their CMS, WordPress
                  support is included in our website maintenance plans. Our
                  WordPress website company handles WordPress upgrades and
                  security patches for your company as part of your package.
                </p>
              </div>

              <h2 className="text-[40px] leading-[52px]">
                What types of regular updates are included in website
                maintenance services?
              </h2>
              <div className='text-xl'>
                <p className="mb-10">
                  When it comes to website maintenance services, businesses
                  frequently ask, "What do regular updates mean?" It's a great
                  question, and the answer varies depending on the website
                  maintenance company, which is why it's important to inquire.
                </p>
                <p className="mb-10">
                  Typical website updates (included in our site maintenance
                  packages) include the following:
                </p>
                <ul className="list-disc pl-10">
                  <li>Site improvements in general</li>
                  <li>Product or service improvements</li>
                  <li>Online promotions</li>
                  <li>Maintainance of interactivity</li>
                </ul>
              </div>

              <h4 className="text-2xl font-bold">
                Site improvements in general
              </h4>
              <div className='text-xl'>
                <p>
                  People who visit your website, from customers to staff to
                  leads, provide the most accurate assessment of its
                  performance. Site visitors' questions, comments, complaints,
                  and suggestions provide invaluable feedback for improving your
                  site. You can use these suggestions to improve your site's
                  online performance with routine website maintenance.
                </p>
              </div>
              <h4 className="text-2xl font-bold">
                Product or service improvements
              </h4>
              <div className='text-xl'>
                <p className="mb-10">
                  As your company expands, your products, services, and prices
                  will inevitably change. That is why companies require a
                  consistent schedule and process for upgrading old products,
                  modifying existing service prices, and other tasks.
                </p>
                <p className="mb-10">
                  Website maintenance is the process of keeping your company's
                  website up to date for users. This proactive step benefits
                  your business in a variety of ways, including the ability to
                  provide the most recent products, services, and rates to
                  improve the user shopping experience.
                </p>
                <p className="mb-10">
                  Consumers trust the Internet and rely on your website to
                  provide the accurate information they require before
                  contacting you or visiting your storefront. For this and other
                  reasons, it is critical that the information on your website
                  is up to date.
                </p>

                <img src={websiteMaintainanceCard1.src} alt="1" />
              </div>

              <h4 className="text-2xl font-bold">Online specials</h4>
              <div className='text-xl'>
                <p className="mb-10">
                  If you are an e-commerce business, it is important to update
                  your website with your latest sales, promotions, and more.
                  Even if your business works offline, you can offer online
                  specials that invite users to call your team, visit your
                  location, or make an appointment.
                </p>
                <p>
                  When your company gives extraordinary advancements, markdown
                  programs, and more, you keep your commerce competitive.
                  Short-term and long-term deals activities require overhauls to
                  your location. Site support administrations empower you to
                  strengthen your deals with special offers for customers.
                </p>
                <p>
                  When your company gives extraordinary advancements, markdown
                  programs, and more, you keep your commerce competitive.
                  Short-term and long-term deals activities require overhauls to
                  your location. Site support administrations empower you to
                  strengthen your deals with special offers for customers.
                </p>
              </div>

              <h4 className="text-2xl font-bold">Interactivity maintenance</h4>
              <div className='text-xl'>
                <p className="mb-10">
                  With ever-evolving technologies, a website starts to seem
                  mature in the event that the interactive components get
                  dismissed. On the off chance that your site’s development
                  pieces aren’t working on each browser and gadget, you'll lose
                  current and potential clients. Furthermore, you debilitate
                  your online notoriety.
                </p>
                <p className="mb-10">
                  Issues along with your website’s intelligently highlights can
                  moreover increment your bounce rate. This metric refers to the
                  rate of individuals that take off your location without going
                  by another page and regularly shows that your site isn’t
                  conveying client expectations.
                </p>
                <p className="mb-10">
                  Website support fine-tunes your site to guarantee your site’s
                  interactive highlights work. Indeed on the off chance that
                  these highlights get to be obsolete and require substitution,
                  site upkeep administrations can allow your group a development
                  notice almost this require.
                </p>
                <p className="mb-10">
                  Keeping all of your website's features operational is
                  important to sell your products and services successfully.
                </p>

                <img src={websiteMaintainanceCard2.src} alt="" />
              </div>
            </div>

            {/* Second */}
            <div className="space-y-10">
              <h2 className="text-[40px] leading-[52px]">
                What does website maintenance not include?
              </h2>

              <p className="mb-10 text-xl">
                It's critical to understand what your package includes if you're
                investing in website maintenance services for the first time (or
                switching providers). This allows your company to select the
                best site maintenance plan for your needs while also ensuring
                you have the necessary support.
              </p>

              <p className="mb-10 text-xl">
                Here are a few examples of what you will not find with website
                maintenance services:
              </p>
              <ul className="list-disc pl-10 text-xl">
                <li className="mb-2">Redesign of the navigation</li>
                <li className="mb-2">Media creation</li>
                <li className="mb-2">Editing of media</li>
                <li className="mb-2">New website features</li>
                <li className="mb-2">Redesigns of websites</li>
                <li className="mb-2">Interactive elements</li>
                <li className="mb-2">SEO</li>
              </ul>

              <div className="flex gap-2 w-full"></div>
            </div>
          </div>
        </div>
        <TableOfContent />
      </Section>
    
  )
}

export default DetailsAndTableofContents