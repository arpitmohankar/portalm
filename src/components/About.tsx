// src/components/About.tsx
'use client';
import { motion} from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis,ResponsiveContainer } from 'recharts';
import Image from 'next/image';
import Head from 'next/head';

const skillsData = [
  { name: 'Frontend', value: 25 },
  { name: 'Backend', value: 40 },
  { name: 'DevOps', value: 25 },
  { name: 'Database', value: 10 },
];

const proficiencyData = [
  { skill: 'React/front', level: 64 },
  { skill: 'Node/back', level: 78 },
  { skill: 'AWS', level: 74 },
  { skill: 'DevOps', level: 52 },
  { skill: 'Mongo/pg', level: 68 },
];

const skills = [
    { name: 'React', logo: '/logos/react-svgrepo-com.svg' },
    { name: 'TypeScript', logo: '/logos/typescript-svgrepo-com.svg' },
    { name: 'Node.js', logo: '/logos/node-js-svgrepo-com.svg' },
    { name: 'MongoDB', logo: '/logos/mongodb-svgrepo-com.svg' },
    { name: 'Java', logo: '/logos/java-svgrepo-com.svg' },
    { name: 'Express', logo: '/logos/express-svgrepo-com.svg' },
    { name: 'Next.js', logo: '/logos/next-js-svgrepo-com.svg' },
    { name: 'Material-UI', logo: '/logos/material-ui-svgrepo-com.svg' },
    { name: 'PostgreSQL', logo: '/logos/postgresql-svgrepo-com.svg' },
    { name: 'Spring', logo: '/logos/spring-svgrepo-com.svg' },
    { name: 'Tailwind CSS', logo: '/logos/tailwind-svgrepo-com.svg' },
    { name: 'CSS3', logo: '/logos/css-3-svgrepo-com.svg' },
    { name: 'HTML5', logo: '/logos/html-5-logo-svgrepo-com.svg' },
    { name: 'JavaScript', logo: '/logos/javascript-svgrepo-com.svg' },
    { name: 'AWS', logo: '/logos/aws-svgrepo-com.svg' },
    { name: 'Docker', logo: '/logos/docker-svgrepo-com.svg' },
    { name: 'Grafana', logo: '/logos/grafana-svgrepo-com.svg' },
    { name: 'Jenkins', logo: '/logos/jenkins-svgrepo-com.svg' },
    { name: 'Kubernetes', logo: '/logos/kubernetes-svgrepo-com.svg' },
    { name: 'Linux', logo: '/logos/linux-svgrepo-com.svg' },
    { name: 'Prometheus', logo: '/logos/prometheus-svgrepo-com.svg' },
    { name: 'Terraform', logo: '/logos/terraform-svgrepo-com.svg' },
    { name: 'Ansible', logo: '/logos/ansible-svgrepo-com.svg' }
  ];
  
  interface AboutProps {
    setActiveTab: (tab: string) => void;
  }
export function About({ setActiveTab }: AboutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 h-[calc(100vh-4rem)]"
    >
      <Head>
        <title>Arpit | Full Stack Developer & DevOps Engineer</title>
        <meta 
          name="description" 
          content="Portfolio of Arpit, a Full Stack Developer and DevOps Engineer specializing in React, Node.js, AWS, and devops."
        />
        <meta property="og:title" content="Arpit | Full Stack Developer & DevOps Engineer" />
        <meta 
          property="og:description" 
          content="Explore Arpit's portfolio showcasing web development and DevOps projects."
        />
        <meta property="og:image" content="https://i.ibb.co/S7KpxzXK/amimg.jpg" />
      </Head>
      {/* Left Column */}
      <div className="space-y-8 ">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="relative w-48 h-48 mx-auto"
        >
          <Image
            src="https://i.ibb.co/S7KpxzXK/amimg.jpg" // Add your photo path
            alt="Arpit's Photo"
            fill
            className="rounded-full border-4 border-gold-500 object-cover"
          />
          <motion.div
            className="absolute inset-0 border-4 border-transparent rounded-full"
            animate={{
              borderColor: ['#FFD70000', '#FFD700', '#FFD70000'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
       
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          className="space-y-4 text-center"
        >
          <h1 className="text-4xl font-bold text-gold-500">Arpit Mohankar</h1>
          <p className="text-xl text-gray-300">Towards Full Stack Developer & DevOps Engineer</p>
          
          <div className="space-y-2 text-gray-400">
            <p>Parul University, Vadodara</p>
            <p>B.Tech in CSE with Cyber Security</p>
            <p>Current CGPA: 7.73</p>
            <div className="flex gap-4 justify-center mt-4">
    <a
      href="https://docs.google.com/document/d/1qdQxsmFT5yugz0DxvlWrW42nWuHIGDWyWsujmP7lECE/edit?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 bg-gold-500/10 hover:bg-gold-500/20 text-gold-500 rounded-full transition-all border border-gold-500/30 hover:border-gold-500/50"
    >
      My Resume
    </a>
    <button
      onClick={() => setActiveTab('contact')}
      className="px-6 py-2 bg-gold-500/10 hover:bg-gold-500/20 text-gold-500 rounded-full transition-all border border-gold-500/30 hover:border-gold-500/50"
    >
      Say Hi
    </button>
  </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-6 bg-black/20 rounded-xl border border-gold-500/30"
        >
          <h3 className="text-2xl text-gold-400 mb-4">Interests</h3>
          <div className="flex flex-wrap gap-3">
            {['Backend', 'DevOps', 'Frontend', 'Web 3','Full Stack Developer', 'CyberStuff','AI Integrations','Leading Project'].map((interest) => (
              <motion.div
                key={interest}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gold-500/10 rounded-full"
              >
                <span className="text-gold-500">{interest}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="space-y-8 scrollbar-hide lg:overflow-y-auto w-auto h-auto">
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="p-6 bg-black/20 rounded-xl border border-gold-500/30"
        >
          <h3 className="text-2xl text-gold-400 mb-6">Skills Distribution</h3>
          <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full h-[200px] relative">
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={skillsData}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
      >
        {skillsData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={`rgba(255, 215, 0, ${0.2 + (index * 0.2)})`}
          />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
  <div
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs"
  >
    {skillsData.map((entry, index) => (
      <div key={entry.name} className="flex items-center mb-1">
        <div
          style={{ backgroundColor: `rgba(255, 215, 0, ${0.2 + (index * 0.2)})` }}
          className="w-2 h-2 mr-1"
        />
        <span>{entry.name}</span>
      </div>
    ))}
  </div>
</div>
                
            
            <div className="w-full h-[200px]">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={proficiencyData}
      margin={{ top: 20, right: 10, left: 10, bottom: 20 }} 
    >
      <XAxis
        dataKey="skill"
        stroke="#FFD700"
        tick={{ fontSize: 12 }}
        interval={0}
        angle={-30} 
        textAnchor="end" 
      />
      <YAxis
        stroke="#FFD700"
        tick={{ fontSize: 12 }}
        width={40}
      />
      <Bar
        dataKey="level"
        fill="rgba(255, 215, 0, 0.6)"
        animationBegin={800}
        radius={[4, 4, 0, 0]}
      />
    </BarChart>
  </ResponsiveContainer>
</div>

           
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="p-6 bg-black/20 rounded-xl border border-gold-500/30"
        >
          <h3 className="text-2xl text-gold-400 mb-6">Technical Arsenal(Am I Pro at all🤔, Test it🙂...)</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="flex flex-col items-center p-4 bg-gold-500/5 rounded-lg hover:bg-gold-500/10 transition-colors"
              >
                <div className="relative w-12 h-12 mb-2">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
