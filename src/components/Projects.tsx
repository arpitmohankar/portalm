"use client";
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Github, Link2 } from 'lucide-react';

const projects = [
  {
    title: 'FoldamTree',
    desc: 'Extract Folder-File Structure of Project By Right-Clicking on VS code Explorer.',
    tech: ['Typescript', 'Node.js inbuilt modules'],
    github: 'https://github.com/arpitmohankar/foldamTree',
    live: 'https://marketplace.visualstudio.com/items?itemName=arpitmohankar.foldamtree',
    image: '/assets/projects/foldamtree.png'
  },
  {
    title: 'SolarpFaucet',
    desc: 'Airdrop Solana in Devnet Wallet',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/arpitmohankar/solarpfaucet.git',
    live: 'https://solanafaucet.arpitsocials.in/',
    image: '/assets/projects/solarpfaucet.png'
  },
  {
    title: 'Shehealth',
    desc: 'Next Gen Personalized Wellness',
    tech: ['Next.js 15'
      ,'TypeScript'
      ,'Tailwind'
      ,'Shadcn UI'
      ,'Spline 3D'],
    github: 'https://github.com/arpitmohankar/shehealth.git',
    live: 'https://shehealth.arpitsocials.in/',
    image: '/assets/projects/shehealth.png'
  },
  {
    title: 'AMoogle',
    desc: 'Clone of Omegle for random video chatting with strangers',
    tech: ['WebRTC', 'Socket.io', 'RTCPeerConnection'],
    github: 'https://github.com/arpitmohankar/AMoogle.git',
    live: 'https://amoogle.arpitsocials.in/',
    image: '/assets/projects/amoogle.png'
  },
  {
    title: 'CatchTheArpit',
    desc: 'Click fast to catch the moving Arpit',
    tech: ['html', 'css', 'javascript'],
    github: 'https://github.com/arpitmohankar/CatchTheRabbit.git',
    live: 'https://arpitmbucket1.s3.ap-south-1.amazonaws.com/index.html',
    image: '/assets/projects/catcharpit.png'
  },
  {
    title: 'AMzego Project',
    desc: '1v1/group Video Calling Website with shared link',
    tech: ['ZegoCloud', 'WebRTC'],
    github: 'https://github.com/arpitmohankar/AMZEGOprj.git',
    live: 'https://amzegoprj.netlify.app/',
    image: '/assets/projects/amzegoprj.png'
  },
  {
    title: 'AMspeechToText',
    desc: 'Convert your Voice into Text form using Web Speech API',
    tech: ['Web Speech API', 'React'],
    github: 'https://github.com/arpitmohankar/AmSpeechToText.git',
    live: 'https://amspeechtotxt.netlify.app/',
    image: '/assets/projects/amspeechtotxt.png'
  },
  {
    title: 'AmapboxPj',
    desc: 'India Map location lat-long-cap with Mapbox API',
    tech: ['Mapbox api', 'js', 'html'],
    github: 'https://github.com/arpitmohankar/amapboxpj.git',
    live: 'https://amapboxpj.vercel.app/',
    image: '/assets/projects/amappj.png'
  }
];

export function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 ">
        
      {projects.map((project) => (
        <Card key={project.title} className="animate-trail p-4 bg-white/5 border border-gold-500/20">
          <Image 
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="rounded-t-lg h-40 lg:h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gold-500 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.desc}</p>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" className="flex items-center gap-2 hover:text-gold-500">
                <Github size={18} /> Code
              </a>
              <a href={project.live} target="_blank" className="flex items-center gap-2 hover:text-gold-500">
                <Link2 size={18} /> Live
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
