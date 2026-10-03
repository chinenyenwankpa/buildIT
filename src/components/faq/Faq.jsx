import styles from "./faq.module.css";

import { useState } from "react";

import plus from "../../assets/img/plus.svg";
import minus from "../../assets/img/minus.svg";

const accordionData = [
  {
    id: 1,
    label: "What services does BuildIT provide?",
    items: [
      {
        caption:
          "BuildIT offers end-to-end solutions across the construction and real estate value chain. Our services include real estate sales, urban development, property management, interior design, building finishing, and high-quality construction material supply.",
      },
    ],
  },
  {
    id: 2,
    label: "What makes BuildIT different from other service providers?",
    items: [
      {
        caption:
          "We combine technology-driven processes with hands-on expertise, ensuring efficiency, affordability, and top-quality results. Beyond business, we’re committed to social impact, dedicating a portion of profits to support people in need.",
      },
    ],
  },
  {
    id: 3,
    label: "Do you only work on large projects, or do you also handle smaller jobs?",
    items: [
      {
        caption:
          "We handle both. From individual homes and office renovations to large-scale urban developments, our team tailors solutions to match the scale and needs of each client.",
      },
    ],
  },
  {
    id: 4,
    label: "What types of properties do you manage?",
    items: [
      {
        caption:
          "We manage residential, commercial, and mixed-use properties, covering leasing, tenant relations, maintenance, and overall asset management to ensure long-term value.",
      },
    ],
  },
  {
    id: 5,
    label: "Can BuildIT help me buy or sell a property?",
    items: [
      {
        caption:
          "Yes. We assist with property sales, acquisitions, and investment advisory, ensuring transparency and maximizing returns for both buyers and sellers.",
      },
    ],
  },
  {
    id: 6,
    label: "Does BuildIT provide real estate investment guidance?",
    items: [
      {
        caption:
          "Absolutely. We advise investors on the best opportunities in residential, commercial, and urban development projects, with a focus on profitability and sustainability.",
      },
    ],
  },
  {
    id: 7,
    label: "What does “building finishing” include?",
    items: [
      {
        caption:
          "Building finishing covers the final touches that make a structure ready for use—such as flooring, painting, fittings, ceilings, partitions, and custom detailing.",
      },
    ],
  },
  {
    id: 8,
    label: "Can I choose my own design and finishes?",
    items: [
      {
        caption:
          "Yes. We collaborate closely with clients to bring their vision to life, offering professional recommendations while respecting personal preferences.",
      },
    ],
  },
  {
    id: 9,
    label: "Does BuildIT work on both new constructions and renovations?",
    items: [
      {
        caption:
          "Yes. Whether it’s a new build or a renovation, our team delivers quality finishes that improve functionality, comfort, and aesthetics.",
      },
    ],
  },
  {
    id: 10,
    label: " What types of spaces does BuildIT design?",
    items: [
      {
        caption:
          "We design homes, offices, and commercial spaces, tailoring interiors to reflect the client’s personality, brand identity, or functional needs.",
      },
    ],
  },
  {
    id: 11,
    label: "Can BuildIT handle both design and execution?",
    items: [
      {
        caption:
          "Yes. From concept development and material selection to installation and finishing, we manage the entire interior design process.",
      },
    ],
  },
  {
    id: 12,
    label: "What kind of construction materials does BuildIT supply?",
    items: [
      {
        caption:
          "We supply a wide range of high-quality materials, including cement, steel, tiles, wood, fittings, and premium finishes for both small and large projects.",
      },
    ],
  },
  {
    id: 13,
    label: "Does BuildIT deliver materials to project sites?",
    items: [
      {
        caption:
          "Yes. We handle sourcing, supply, and on-time delivery of materials directly to your site, ensuring convenience and efficiency.",
      },
    ],
  },
  {
    id: 14,
    label: "What is BuildIT’s approach to urban development?",
    items: [
      {
        caption:
          "We focus on creating sustainable communities by integrating modern housing, commercial spaces, and infrastructure, while prioritizing functionality, resilience, and long-term growth.",
      },
    ],
  },
  {
    id: 15,
    label: " Does BuildIT give back to society?",
    items: [
      {
        caption:
          "Yes. We allocate a percentage of our profits to social initiatives that provide support and hope for people in need, reinforcing our commitment to building both communities and futures.",
      },
    ],
  },

];

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleSection = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className={styles.heroSection}>
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className={styles.accordionContainer}>
        {accordionData.map(({ id, label, items }) => (
          <div className={styles.accordion} key={id}>
            <button
              type="button"
              onClick={() => toggleSection(id)}
              aria-expanded={openId === id}
            >
              {label}
              <img src={openId === id ? minus : plus} alt="" />
            </button>

            {openId === id && (
              <div className={styles.answer}>
                {items.map((item, index) => (
                  <p key={index}>{item.caption}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;