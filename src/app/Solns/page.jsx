"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from 'next/head';
import Link from "next/link";
import { FaList, FaBullseye, FaHeartbeat, FaEnvelope } from "react-icons/fa";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import LogoScroll from "@/components/LogoScroll";
const dataSamples = {
  content: [
    { name: "Jan", value: 150 },
    { name: "Feb", value: 180 },
    { name: "Mar", value: 240 },
    { name: "Apr", value: 220 },
    { name: "May", value: 270 },
    { name: "Jun", value: 300 },
    { name: "Jul", value: 350 },
    { name: "Aug", value: 400 },
    { name: "Sep", value: 420 },
    { name: "Oct", value: 450 },
    { name: "Nov", value: 475 },
    { name: "Dec", value: 500 }
  ],
  qualified: [
    { name: "Jan", value: 120 },
    { name: "Feb", value: 160 },
    { name: "Mar", value: 190 },
    { name: "Apr", value: 200 },
    { name: "May", value: 240 },
    { name: "Jun", value: 260 },
    { name: "Jul", value: 280 },
    { name: "Aug", value: 320 },
    { name: "Sep", value: 350 },
    { name: "Oct", value: 370 },
    { name: "Nov", value: 400 },
    { name: "Dec", value: 430 }
  ],
  intent: [
    { name: "Jan", value: 200 },
    { name: "Feb", value: 220 },
    { name: "Mar", value: 250 },
    { name: "Apr", value: 270 },
    { name: "May", value: 290 },
    { name: "Jun", value: 310 },
    { name: "Jul", value: 330 },
    { name: "Aug", value: 360 },
    { name: "Sep", value: 390 },
    { name: "Oct", value: 420 },
    { name: "Nov", value: 450 },
    { name: "Dec", value: 480 }
  ],
  email: [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 120 },
    { name: "Mar", value: 140 },
    { name: "Apr", value: 160 },
    { name: "May", value: 180 },
    { name: "Jun", value: 200 },
    { name: "Jul", value: 220 },
    { name: "Aug", value: 240 },
    { name: "Sep", value: 260 },
    { name: "Oct", value: 280 },
    { name: "Nov", value: 300 },
    { name: "Dec", value: 320 }
  ]
};

const services = [
  {
    title: "Content Syndication",
    description: "Strategic distribution of content across multiple platforms to increase reach and engagement.",
    icon: "😊",
    chartData: dataSamples.content,
    stroke: "#00BFFF",
    image: "/images/Content.webp",
    link: "/services/content-syndication"
  },
  {
    title: "Sales Qualified Leads",
    description: "High-quality leads that have been vetted and show strong potential for conversion.",
    icon: "✅",
    chartData: dataSamples.qualified,
    stroke: "#32CD32",
    image: "/images/sales.jpg",
    link: "/services/sales-qualified-leads"
  },
  {
    title: "Intent Leads",
    description: "Targeted leads showing specific buying signals and readiness to purchase.",
    icon: "🎯",
    chartData: dataSamples.intent,
    stroke: "#FF1493",
    image: "/images/intent.webp",
    link: "/services/intent-leads"
  },
  {
    title: "Email Marketing",
    description: "Targeted email campaigns designed to nurture leads and drive conversions.",
    icon: "✉️",
    chartData: dataSamples.email,
    stroke: "#FFA500",
    image: "/images/email.webp",
    link: "/services/email-marketing"
  }
];
const cards = [
  {
    icon: <FaList className="text-gray-600" />,
    title: "Content Syndication",
    description:
      "QuoreB2B implements content syndication by first analyzing your target audience to identify relevant industry platforms where decision-makers consume content.",
    link: "/Content-Syndication",
  },
  {
    icon: <FaBullseye className="text-gray-600" />,
    title: "Sales Qualified Leads",
    description:
      "QuoreB2B boosts SQL generation by syndicating your content on high-intent industry platforms where decision-makers actively engage, ensuring quality lead flow.",
    link: "",
  },
  {
    icon: <FaHeartbeat className="text-gray-600" />,
    title: "Intent Leads",
    description:
      "QuoreB2B specializes in high-quality intent leads, helping businesses target ready-to-buy prospects. Our AI-powered platform identifies real-time buyer signals, ensuring higher conversions.",
    link: "",
  },
  {
    icon: <FaEnvelope className="text-gray-600" />,
    title: "Email Marketing",
    description:
      "QuoreB2B transforms email marketing with AI-powered precision, delivering hyper-targeted campaigns that convert. Our platform automates personalized outreach, boosts engagement, and maximizes ROI—so you focus on closing deals.",
    link: "",
  },
];

export default function QuoreB2BSection() {
  return (<>
  <Head>
        <title>Solution</title>
        <meta property="og:title" content="Solution" />
        <meta property="og:description" content=" QuoreB2B’s comprehensive suite of solutions empowers your business to
            achieve measurable growth." />
        <meta property="og:image" content="" />
        {/* <meta property="og:url" content={currentUrl} /> */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="QuoreB2B solution" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <section className="w-full bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Convert More. Grow Faster.{" "}
            <span className="text-[#00F0B5]">QuoreB2B</span> Solutions Deliver
          </h2>
          <div className="w-10 h-1 bg-[#00F0B5] mb-4 rounded-sm"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            QuoreB2B’s comprehensive suite of solutions empowers your business to
            achieve measurable growth. Our email marketing campaigns connect with
            decision-makers, while our intent leads identify prospects actively
            searching for your solutions. Through strategic content syndication, we
            expand your reach to new audiences, and our sales qualified leads
            program delivers prospects ready for meaningful conversations. With
            QuoreB2B as your partner, you’ll transform your marketing efforts into
            a powerful engine for sustainable business growth.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/solns.webp" // You should place your image in public/images
            alt="Team collaborating on business strategy"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
     <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* Left Text */}
           
          <div className="flex-1 space-y-4 mt-28">
            <h2 className="text-3xl font-semibold text-gray-800">
              We integrate powerful{" "}
              <span className="text-[#00d9a6]">B2B marketing solutions</span> to
              drive growth:{" "}
              <span className="text-[#00d9a6]">Intent-Based Lead Generation</span>,
              Targeted Advertising, AI-Powered Email Campaigns, and Strategic
              Content Distribution.
            </h2>
          </div>

          {/* Right Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => {
              const Wrapper = card.link ? Link : "div";
              const wrapperProps = card.link ? { href: card.link } : {};
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Wrapper
                    {...wrapperProps}
                    className="group block h-full"
                  >
                    <div className="h-full flex flex-col justify-between p-6 border border-gray-200 rounded-xl bg-white group-hover:bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] group-hover:text-white transition-all duration-300 shadow hover:shadow-lg">
                      <div>
                        <div className="mb-3 text-[#00d9a6] group-hover:text-white">
                          {card.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-600">{card.description}</p>
                      </div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

     <section className="bg-[#fdfdfd] py-20 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
           className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl p-4 shadow-lg  hover:shadow-[0_0_40px_0_#00d9a6] transition-all duration-300"
          >
            <div className="md:w-1/2 relative h-80 w-full rounded-3xl overflow-hidden shadow-md">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <Link href={service.link}>
                <h3 className="text-2xl font-bold text-[#111827] hover:text-[#00BFA6] transition-colors duration-200">{service.icon} {service.title}</h3>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              <div className="w-full h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={service.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={12} />
                    <YAxis fontSize={12} domain={[0, 520]} />
                    <Tooltip contentStyle={{ fontSize: 12 }} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={service.stroke}
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <LogoScroll/>
    </>

  );
}
