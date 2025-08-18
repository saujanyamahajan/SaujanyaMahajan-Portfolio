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
        {/* SDE-2 / Technical Product Role */}
        <div>
          <h2 className="text-xl font-semibold">CG Infinity – Delhi, India</h2>
          <p className="text-sm text-gray-500">Software Development Engineer / Technical Product · Apr 2024 – Present</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Drove enhancements in payment processing modules impacting 15,000+ daily transactions, reducing failures by 20%.</li>
            <li>Launched a new installment eligibility feature with MuleSoft APIs, enabling thousands of users monthly to adopt flexible payment plans.</li>
            <li>Built an automated billing document generation system, reducing manual errors by 40% and saving operations 20+ hrs/week.</li>
            <li>Defined requirements and integrated transactional messaging APIs, cutting delivery latency by 60% and boosting satisfaction scores.</li>
            <li>Partnered with business stakeholders to prioritize self-service features, decreasing call center volume by 10%.</li>
          </ul>
        </div>

        {/* Associate SDE */}
        <div>
          <h2 className="text-xl font-semibold">CG Infinity – Delhi, India</h2>
          <p className="text-sm text-gray-500">Associate Software Development Engineer · May 2022 – Mar 2024</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Introduced a pricing visualization feature that boosted engagement by 25%.</li>
            <li>Optimized billing stored procedures, improving efficiency and increasing user interactions by 10%.</li>
            <li>Developed automation jobs for complex data integration, ensuring seamless platform handling.</li>
            <li>Implemented a self-service feature for impact pricing, increasing portal engagement by 30%.</li>
          </ul>
        </div>

        {/* Internship */}
        <div>
          <h2 className="text-xl font-semibold">CG Infinity – Delhi, India</h2>
          <p className="text-sm text-gray-500">Intern · Nov 2021 – Apr 2022</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Enhanced the Commissions portal, enabling accurate bill calculations and boosting business profits.</li>
            <li>Helped deploy a .NET-based web application, improving user productivity by 5%.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

