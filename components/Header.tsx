import { FC, useState } from "react";
import React from "react";
import { ChevronDownIcon, MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { MUSCLED } from "components/page14components";

const Header: FC = () => {
  const [modalOpen, setModalOpen] = useState<String>("");

  return (
    <div className="flex items-center justify-between w-full px-5 py-3 bg-white shadow-sm md:px-10 lg:px-20">
      {/* Logo  */}
      <div className="relative w-32 h-10">
        <MUSCLED />
      </div>

      {/* Menu */}
      <ul className="justify-center flex-1 hidden mx-10 space-x-2 text-sm xl:text-md lg:flex">
        <div className="relative">
          <div
            onClick={() => setModalOpen(`${modalOpen === "1" ? "" : "1"}`)}
            className="flex items-center p-2 cursor-pointer "
          >
            <li className={`${modalOpen === "1" && "text-red-500"}`}>
              SEO & Lead Generation
            </li>
            <ChevronDownIcon className="w-6 h-5 ml-2" />
          </div>
          <div
            className={`absolute top-15 z-50 ${
              modalOpen !== "1" && "hidden"
            } w-full py-2`}
          >
            <ul>
              <Link href={`/seo-marketing-services`}>
                <li className="p-2 cursor-pointer bg-slate-50">
                  SEO Marketing Services
                </li>
              </Link>

              <Link href={`/seo-audit-services`}>
                <li className="p-2 cursor-pointer bg-slate-50">
                  SEO Audit Services
                </li>
              </Link>

              <Link href={`/speed-optimization-services`}>
                <li className="p-2 cursor-pointer bg-slate-50">
                  SEO Optimization Services
                </li>
              </Link>

              <Link href={`/services-for-paid-social-media-ad`}>
                <li className="p-2 cursor-pointer bg-slate-50">
                  Services For Paid Social Media Ad{" "}
                </li>
              </Link>

              <Link href={`/enterprise-social-media-advertising-services`}>
                <li className="p-2 cursor-pointer bg-slate-50">
                  Enterprise Social Media Advertising Services
                </li>
              </Link>

              <Link href={`/social-media-services`}>
                <li className="p-2 cursor-pointer bg-slate-50">
                  Social Media Services
                </li>
              </Link>

              <Link href={`/social-media-design`}>
                <li className="p-2 cursor-pointer bg-slate-50">
                  Social Media Design
                </li>
              </Link>

              <Link href={`/ecommerce-seo-services`}>
                <li className="p-2 cursor-pointer bg-slate-50">
                  Ecommerce SEO Services
                </li>
              </Link>

              <Link href={`/ecommerce-ppc-management`}>
                <li className="p-2 cursor-pointer bg-slate-50">
                  Ecommerce PPC Management
                </li>
              </Link>

              <Link href={`/muscled-d2c-social-advertising-services`}>
                <li className="p-2 cursor-pointer bg-slate-50">
                  Muscled D2C Social Advertising Services
                </li>
              </Link>

              <Link href={`/social-media-marketing-cost`}>
                <li className="p-2 cursor-pointer bg-slate-50">
                  Social Media Marketing Cost
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div
            onClick={() => setModalOpen(`${modalOpen === "2" ? "" : "2"}`)}
            className="flex items-center p-2 cursor-pointer"
          >
            <li className={`${modalOpen === "2" && "text-red-500"}`}>
              Ecommerce
            </li>
            <ChevronDownIcon className="w-6 h-5 ml-2" />
          </div>
          <div
            className={`absolute top-15 z-50 w-48 -left-4 ${
              modalOpen !== "2" && "hidden"
            } w-full py-2`}
          >
            <ul className=" bg-slate-50">
              {["website-design-service"].map((item: string) => (
                <Link href={`/website-design-service`} key={item}>
                  <li className="p-2 cursor-pointer ">
                    {item.replace(/-/g, " ")}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div
            onClick={() => setModalOpen(`${modalOpen === "3" ? "" : "3"}`)}
            className="flex items-center p-2 cursor-pointer"
          >
            <li className={`${modalOpen === "3" && "text-red-500"}`}>
              UX & Interactive
            </li>
            <ChevronDownIcon className="w-6 h-5 ml-2" />
          </div>
          <div
            className={`absolute top-15 ${
              modalOpen !== "3" && "hidden"
            } w-full py-2`}
          >
            <ul>
              <li className="p-2 bg-slate-50">sub-menu</li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div
            onClick={() => setModalOpen(`${modalOpen === "4" ? "" : "4"}`)}
            className="flex items-center p-2 cursor-pointer"
          >
            <li className={`${modalOpen === "4" && "text-red-500"}`}>
              Our Technology
            </li>
            <ChevronDownIcon className="w-6 h-5 ml-2" />
          </div>

          <div
            className={`absolute top-15 ${
              modalOpen !== "4" && "hidden"
            } w-full py-2`}
          >
            <ul>
              <li className="p-2 bg-slate-50">sub-menu</li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div
            onClick={() => setModalOpen(`${modalOpen === "5" ? "" : "5"}`)}
            className="flex items-center p-2 cursor-pointer"
          >
            <li className={`${modalOpen === "5" && "text-red-500"}`}>
              Who We Are
            </li>
            <ChevronDownIcon className="w-6 h-5 ml-2" />
          </div>

          <div
            className={`absolute top-15 ${
              modalOpen !== "5" && "hidden"
            } w-full py-2`}
          >
            <ul>
              <li className="p-2 bg-slate-50">sub-menu</li>
              <li className="p-2 bg-slate-50">sub-menu</li>
              <li className="p-2 bg-slate-50">sub-menu</li>
            </ul>
          </div>
        </div>
      </ul>

      {/* Button Get free Proposal */}

      <button className="hidden px-5 py-2 text-white bg-black rounded-full cursor-pointer lg:flex">
        Get Free Proposal
      </button>

      <MenuIcon className="w-10 h-10 lg:hidden" />
    </div>
  );
};

export default Header;
