import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Header from "../components/Header"; // Header import
import  Footer from "../components/Footer"

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
};

const Careers = () => {
    // Page load hone par scroll ko top par le jane ke liye
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const jobs = [
        {
            title: "HR Recruiter",
            exp: "5+ Years",
            loc: "Gaya, Bihar, India",
            responsibilities: [
                "End-to-end recruitment & bulk hiring", 
                "Sourcing, interviews, offers & onboarding"
            ],
            requirements: [
                "Graduate/Postgraduate (HR preferred)", 
                "5+ years recruitment experience (BPO preferred)", 
                "Strong communication & portal hiring skills"
            ]
        },
        {
            title: "Operations Manager – BPO",
            exp: "5–6 Years",
            loc: "Gaya, Bihar, India",
            responsibilities: [
                "Manage BPO operations, team & SLAs", 
                "Ensure quality, productivity & client satisfaction"
            ],
            requirements: [
                "5–6 years BPO operations experience", 
                "Strong leadership, KPI & MIS knowledge", 
                "Excellent communication & problem-solving skills"
            ]
        },
        {
            title: "Team Leader – Sales BPO",
            exp: "3+ Years",
            loc: "Gaya, Bihar, India",
            responsibilities: [
                "Lead sales team and achieve targets", 
                "Monitor performance, quality & productivity", 
                "Coach agents and handle escalations"
            ],
            requirements: [
                "Experience as TL in Sales BPO", 
                "Strong sales, leadership & communication skills", 
                "Target-driven and result-oriented"
            ]
        }
    ];

    return (
        <div className="bg-[#F9FEFF] min-h-screen">
            {/* 1. HEADER INTEGRATION */}
            <Header />

            {/* 2. CAREERS CONTENT SECTION */}
            <section id="careers" className="pt-40 pb-32 px-6 lg:px-12 relative overflow-hidden">
                
                {/* Background Luxury Blur (Behind Content) */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#57C1CC]/5 rounded-full blur-[140px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F99D2B]/5 rounded-full blur-[120px] -z-10" />
                
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-24">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            className="inline-block px-5 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6"
                        >
                            <span className="text-indigo-600 text-[11px] font-black uppercase tracking-[0.3em]">Join Our Elite Team</span>
                        </motion.div>
                        
                        <motion.h2 
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            className="text-5xl lg:text-7xl font-black text-[#0C1C2C] tracking-tighter leading-tight"
                        >
                            Explore Open <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-[#57C1CC]">Vacancies.</span>
                        </motion.h2>
                        
                        <motion.p 
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            className="mt-6 text-slate-500 font-medium max-w-2xl mx-auto"
                        >
                            We are looking for professionals who want to make a global impact. 
                            Build your career with Skill Bridge Consulting Pvt Ltd.
                        </motion.p>
                    </div>

                    {/* Job Cards List */}
                    <div className="space-y-12">
                        {jobs.map((job, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white border border-slate-100 rounded-[3.5rem] p-10 lg:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden"
                            >
                                <div className="flex flex-col xl:flex-row justify-between gap-12 relative z-10">
                                    
                                    <div className="flex-1">
                                        {/* Job Meta Info */}
                                        <div className="flex flex-wrap gap-4 mb-8">
                                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-600 text-xs font-bold border border-slate-100">
                                                <Briefcase size={14} className="text-[#F99D2B]" /> {job.exp}
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-600 text-xs font-bold border border-slate-100">
                                                <MapPin size={14} className="text-[#57C1CC]" /> {job.loc} 🇮🇳
                                            </div>
                                        </div>

                                        <h3 className="text-3xl md:text-5xl font-black text-[#0C1C2C] mb-10 group-hover:text-indigo-600 transition-colors duration-500 leading-[1.1]">
                                            {job.title}
                                        </h3>

                                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                                            {/* Responsibilities */}
                                            <div className="space-y-6">
                                                <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                                    <Target size={18} className="text-[#F99D2B]" /> Responsibilities
                                                </h4>
                                                <ul className="space-y-4">
                                                    {job.responsibilities.map((res, i) => (
                                                        <li key={i} className="flex items-start gap-4 text-slate-500 text-[15px] font-medium leading-relaxed">
                                                            <span className="w-2 h-2 rounded-full bg-[#F99D2B] mt-2 shrink-0 opacity-40" />
                                                            {res}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Requirements */}
                                            <div className="space-y-6">
                                                <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                                    <CheckCircle size={18} className="text-[#57C1CC]" /> Requirements
                                                </h4>
                                                <ul className="space-y-4">
                                                    {job.requirements.map((req, i) => (
                                                        <li key={i} className="flex items-start gap-4 text-slate-500 text-[15px] font-medium leading-relaxed">
                                                            <CheckCircle size={14} className="mt-1.5 text-[#57C1CC] shrink-0" />
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Apply Button */}
                                    <div className="flex flex-col items-center justify-center min-w-[240px] border-t xl:border-t-0 xl:border-l border-slate-100 pt-10 xl:pt-0 xl:pl-10">
                                        <motion.button 
                                            whileHover={{ y: -5, backgroundColor: '#0C1C2C', color: '#fff' }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full bg-[#F9FEFF] border-2 border-[#0C1C2C] text-[#0C1C2C] py-5 px-8 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                                        >
                                            Apply Now
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </motion.button>
                                        <p className="mt-6 text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] text-center">
                                            Skill Bridge Careers
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Corner Decoration */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50/20 to-transparent rounded-tr-[3.5rem] -z-0 transition-transform duration-700 group-hover:scale-110" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
            
        </div>
    );
};

export default Careers;