"use client";
import { Card } from "@/components/ui/card";
import Image from 'next/image';
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", logo: "/logos/react-svgrepo-com.svg" },
      { name: "TypeScript", logo: "/logos/typescript-svgrepo-com.svg" },
      { name: "Next.js", logo: "/logos/next-js-svgrepo-com.svg" },
      { name: "Tailwind", logo: "/logos/tailwind-svgrepo-com.svg" },
      { name: "Material UI", logo: "/logos/material-ui-svgrepo-com.svg" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", logo: "/logos/node-js-svgrepo-com.svg" },
      { name: "Express", logo: "/logos/express-svgrepo-com.svg" },
      { name: "Spring Boot", logo: "/logos/spring-svgrepo-com.svg" },
      { name: "AWS", logo: "/logos/aws-svgrepo-com.svg" },
      { name: "Docker", logo: "/logos/docker-svgrepo-com.svg" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", logo: "/logos/mongodb-svgrepo-com.svg" },
      { name: "PostgreSQL", logo: "/logos/postgresql-svgrepo-com.svg" }
    ]
  },
  {
    category: "DevOps",
    items: [
      { name: "Kubernetes", logo: "/logos/kubernetes-svgrepo-com.svg" },
      { name: "Terraform", logo: "/logos/terraform-svgrepo-com.svg" },
      { name: "Jenkins", logo: "/logos/jenkins-svgrepo-com.svg" },
      { name: "Grafana", logo: "/logos/grafana-svgrepo-com.svg" },
      { name: "Prometheus", logo: "/logos/prometheus-svgrepo-com.svg" }
    ]
  }
];

export function Skills() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gold-500">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="bg-black/20 border border-gold-500/30 p-6">
            <h3 className="text-xl font-semibold text-gold-400 mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gold-500/10 rounded-full">
                  <Image 
                    src={item.logo} 
                    alt={item.name} 
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-gray-300">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
