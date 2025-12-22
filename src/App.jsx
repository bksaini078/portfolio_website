import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import OverviewTab from './components/OverviewTab';
import ExperienceTab from './components/ExperienceTab';
import ResearchTab from './components/ResearchTab';
import PublicationsTab from './components/PublicationsTab';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profile = {
    name: "Bhupender Kumar Saini",
    title: "Applied AI Researcher",
    affiliation: "Fraunhofer IAO • Stuttgart, Germany",
    email: "bksaini078@gmail.com",
    linkedin: "bksaini078",
    github: "bksaini078",
    location: "Stuttgart, Germany",
    photo: "/bhupender_photo.png"
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-serif selection:bg-blue-100">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 border-slate-200 shadow-sm' : 'bg-transparent py-8 border-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-baseline">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight uppercase font-sans">{profile.name}</h1>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{profile.affiliation}</span>
          </div>
          
          <nav className="flex space-x-8 font-sans text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {['overview', 'experience', 'projects', 'publications'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`hover:text-black transition-colors ${activeTab === tab ? 'text-black border-b-2 border-black pb-1' : ''}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-40 pb-24">
        {activeTab === 'overview' && <OverviewTab profile={profile} />}
        {activeTab === 'experience' && <ExperienceTab />}
        {activeTab === 'projects' && <ResearchTab />}
        {activeTab === 'publications' && <PublicationsTab />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-16 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">© {new Date().getFullYear()} Bhupender Kumar Saini</p>
          <div className="flex gap-6">
            <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-black transition-colors"><Mail size={16} /></a>
            <a href={`https://linkedin.com/in/${profile.linkedin}`} className="text-slate-400 hover:text-black transition-colors"><Linkedin size={16} /></a>
            <a href={`https://github.com/${profile.github}`} className="text-slate-400 hover:text-black transition-colors"><Github size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;