"use client";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Valueye Technologies, Mumbai",
    role: "Full Stack Developer (Remote Paid)",
    duration: "Sep 2024 - Feb 2025",
    points: [
      "Developed Rich WhatsApp Editor using React Draft JS and Material UI",
      "Implemented WhatsApp Bulk Messaging Service with Google Sheet API",
      "Created WhatsApp Template Creator with S3 bucket integration",
      "Current - Working on Side Project(Backend) - Housing Valuation System for Local Banks"
    ]
  },
  {
    company: "PU AI SOCIETY, Parul University",
    role: "Backend Developer (On-site Paid)",
    duration: "June 2024 - Jan 2025",
    points: [
      "Built Event/Hackathon Registration System with Email Notifications",
      "Developed Admin Panel and BotPress Chatbot integration",
      "Core team member handling both backend and frontend"
    ]
  }
];

export function Experience() {
    return (
      <div className="space-y-8 p-4 lg:p-6">
        <h2 className="text-3xl font-bold text-gold-500 flex items-center gap-2">
          <Briefcase className="w-6 h-6" /> Experience
        </h2>
        
        {experiences.map((exp, index) => (
          <Card
          key={index}
          className={`animate-trail p-4 lg:p-6 bg-black/20 border border-gold-500/30`}
          
        >
            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gold-400">{exp.company}</h3>
                <p className="text-gray-300 mt-1">{exp.role}</p>
                <p className="text-sm text-gold-500/80 mt-2">{exp.duration}</p>
                <ul className="mt-4 space-y-2 list-disc pl-5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-400">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }
