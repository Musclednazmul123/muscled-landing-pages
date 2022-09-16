import React from "react";
import { Hero, Section } from "../Fawwaz/Sections";
import Card from "../Card";
import { NextPage } from "next";
import Banner from "./Banner";
import { Table, Td, Th } from "../Fawwaz/Table";
import Button from "../Fawwaz/Button";
import { AiFillPhone, AiOutlineCheck } from "react-icons/ai";

export type ServiceTableSectionProps = {};

const ServiceTableSection = (props: ServiceTableSectionProps) => {
  return (
    <Section>
      <div className="py-24">
        <h2 className="text-4xl text-center">
          Our Cost for Ecommerce SEO Services
        </h2>
        <p className="md:text-xl text-center mt-8">
          Learn more about what our ecommerce SEO services include by exploring
          our four ecommerce SEO packages, which we can customize to your
          business. All our ecommerce SEO experts are familiar with using and
          optimizing platforms like Shopify, WordPress, BigCommerce, and more
          for ecommerce SEO.
        </p>
      </div>
      <Table className="table-auto rounded-b-md mb-24">
        <thead>
          <tr>
            <Th
              className="text-left text-white rounded-tl-xl w-[550px]  border-b border-[rgba(0,0,0,0.1)]"
              content="Features"
            />
            <Td
              className="text-center font-bold w-[480px] rounded-none  border-b border-[rgba(0,0,0,0.1)]"
              content="Basic"
              type="basic"
            />
            <Td
              className="text-center font-bold w-[480px]  border-b border-[rgba(0,0,0,0.1)]"
              content="Standard"
              type="standard"
            />
            <Td
              className="text-center font-bold w-[480px]  border-b border-[rgba(0,0,0,0.1)]"
              content="Premium"
              type="premium"
            />
            <Td
              className="text-center font-bold w-[480px] rounded-tr-xl  border-b border-[rgba(0,0,0,0.1)]"
              content="Ultimate"
              type="ultimate"
            />
          </tr>
        </thead>
        <tbody>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Quarterly Hours"
            />
            <Td
              content="15 hours"
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="25 hours"
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="35 hours"
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="35 hours"
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Best for websites-"
            />
            <Td
              content="Under 250 pages"
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="Under 500 pages"
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="500+ pages"
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="500+ pages"
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Dedicated Project POC"
            />
            <Td
              type="basic"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-bold border-b border-[rgba(0,0,0,0.1)]"
              content="Audit of current website performance, optimization hours will be spent on the following items on based on audit results and priority:"
            />
            <Td
              type="basic"
              content={<></>}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<></>}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<></>}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content={<></>}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Website Theme & Plugin Optimization"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Website/CSS Optimization"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Set and/or Reduction in http(s) Requests"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Removal of Unused Code"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Combine, Prioritization & Minification of CSS and JavaScript Files"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Image Size Optimization & Compression"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Gzip Compression"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Website & Browser Caching Setup and/or Configuration"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Optimize/Reduce Number of Redirects"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
            <Td
              type="ultimate"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Font Delivery Optimization"
            />
            <Td
              type="basic"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Performance Testing"
            />
            <Td
              type="basic"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Host Recommendations"
            />
            <Td
              type="basic"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Setup and/or Configuration of a CDN"
            />
            <Td
              type="basic"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Host Migration"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content="One-time $1,500"
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content="One-time $1,500"
            />
            <Td
              type="premium"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="UX & UI Optimizations"
            />
            <Td
              type="basic"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Quarterly Submission of URL Inspection"
            />
            <Td
              type="basic"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Quarterly Performance Updates to Top 5 Pages with Most Traffic"
            />
            <Td
              type="basic"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Quarterly Core Mertics Reporting & Analytics (LCP, FID & CLS)"
            />
            <Td
              type="basic"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="450+ SME’s Behind Campaign Driving Results"
            />
            <Td
              type="basic"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content={
                <AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />
              }
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Initial Investment"
            />
            <Td
              type="basic"
              content="$3,125"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content="$6,250"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content="$3,750"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content="$3,750"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Initial Investment"
            />
            <Td
              type="basic"
              content="$1,800"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content="$3,600"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content="$4,800"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="ultimate"
              content="$4,800"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>

          <tr className="text-center">
            <Th
              className="text-white text-left font-normal rounded-bl-xl"
              content={
                <>
                  <p>Give Us a Call if You Need Information</p>
                  <div className="flex gap-2 items-center mt-2 cursor-pointer">
                    <AiFillPhone className="fill-sky-500 w-6 h-6" />
                    <p className="text-sky-500 font-bold">888-601-5359</p>
                  </div>
                </>
              }
            />
            <Td
              type="basic"
              content={
                <Button
                  bgColor="bg-black"
                  textColor="text-white"
                  className="mx-auto"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Get Started
                </Button>
              }
            />
            <Td
              type="standard"
              content={
                <Button
                  bgColor="bg-black"
                  textColor="text-white"
                  className="mx-auto"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Get Started
                </Button>
              }
            />
            <Td
              type="premium"
              content={
                <Button
                  bgColor="bg-black"
                  textColor="text-white"
                  className="mx-auto"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Get Started
                </Button>
              }
            />
            <Td
              type="ultimate"
              className="rounded-br-xl"
              content={
                <Button
                  bgColor="bg-black"
                  textColor="text-white"
                  className="mx-auto"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Get Started
                </Button>
              }
            />
          </tr>
        </tbody>
      </Table>
    </Section>
  );
};

export default ServiceTableSection;
