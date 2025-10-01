import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Experience",
  description: "Saujanya's Work History",
};

export default function Experience() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Experience</h1>

      <div className="space-y-8">
        {/* SDE-2 */}
        <div>
          <h2 className="text-xl font-semibold">CG Infinity – Delhi, India</h2>
          <p className="text-sm text-gray-500">
            Software Development Engineer · Apr 2024 – Present
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Engineered payment processing modules handling 15,000+ daily transactions, reducing failures by 20%.</li>
            <li>Integrated MuleSoft APIs for installment eligibility, enabling thousands of users monthly to adopt flexible payment plans.</li>
            <li>Built an automated billing document generation system, reducing manual errors by 40% and saving operations 20+ hrs/week.</li>
            <li>Developed scalable transactional messaging APIs, cutting delivery latency by 60% and improving customer satisfaction.</li>
            <li>Delivered self-service payment features that decreased call center volume by 10%.</li>
          </ul>
        </div>

        {/* SDE-1 */}
        <div>
          <h2 className="text-xl font-semibold">CG Infinity – Delhi, India</h2>
          <p className="text-sm text-gray-500">
            Associate Software Development Engineer · May 2022 – Mar 2024
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Developed a pricing visualization feature, boosting customer engagement by 25%.</li>
            <li>Optimized billing stored procedures, improving processing efficiency and increasing interactions by 10%.</li>
            <li>Automated complex data integration jobs, ensuring seamless cross-platform data handling.</li>
            <li>Implemented impact pricing self-service, driving a 30% increase in portal engagement.</li>
          </ul>
        </div>

        {/* Internship */}
        <div>
          <h2 className="text-xl font-semibold">CG Infinity – Delhi, India</h2>
          <p className="text-sm text-gray-500">
            Intern · Nov 2021 – Apr 2022
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Enhanced the Commissions portal, enabling accurate bill calculations and improving business profits.</li>
            <li>Developed and deployed a .NET-based web application, improving user productivity by 5%.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
