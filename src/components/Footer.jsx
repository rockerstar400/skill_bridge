import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Briefcase, TrendingUp } from 'lucide-react';
import logo from "../assets/logo.png"; // Logo ka path check karlein



const Footer = () => {
    return (

        <footer id="contact" className="relative bg-[#0C1C2C] text-white pt-24 pb-12 overflow-hidden">

            {/* 1. BACKGROUND DECORATION (Subtle Mesh Glow) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F99D2B]/5 rounded-full blur-[100px] -z-0"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* 2. PRE-FOOTER CTA (The "Ready to Scale" section) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row justify-between items-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 mb-24"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black mb-2 tracking-tighter">Ready to scale your business?</h2>
                        <p className="text-slate-400 font-medium">Let's build your operational excellence together.</p>
                    </div>
                    <button className="mt-8 md:mt-0 bg-[#F99D2B] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
                        Start a Conversation
                    </button>
                </motion.div>

                <div className="grid lg:grid-cols-4 gap-16 mb-24">

                    {/* 3. LOGO & DIRECTOR CARD */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* 1. LOGO SECTION - Enhanced visibility */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            className="inline-block"
                        >
                            <img
                                src={logo}
                                alt="Skill Bridge Logo"
                                className="h-20 md:h-24 w-auto object-contain transition-all duration-500"
                            /* 
                               TIPS: 
                               - Agar logo dark hai aur dark background par nahi dikh raha, 
                                 toh niche wali line use karein:
                               className="h-20 md:h-24 w-auto object-contain brightness-0 invert" 
                               - Agar sirf white box dikh raha hai, toh filters hata kar 
                                 asli logo hi rehne dein (jaisa upar code mein hai).
                            */
                            />
                        </motion.div>

                        {/* 2. EXECUTIVE DIRECTOR CARD - Luxury Glassmorphism */}
                        <div className="relative group max-w-sm">
                            {/* Dynamic Glow behind the card */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-teal-400/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

                            <div className="relative p-10 bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[3rem] hover:border-white/20 transition-all duration-500 shadow-2xl">
                                {/* Label */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="h-px w-8 bg-indigo-500"></span>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Executive Director</h4>
                                </div>

                                {/* Name & Company */}
                                <div className="space-y-2">
                                    <p className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                                        Ashutosh Mishra
                                    </p>
                                    <p className="text-slate-500 font-bold text-[11px] uppercase tracking-[0.2em] opacity-80">
                                        Skill Bridge Consulting Pvt. Ltd.
                                    </p>
                                </div>

                                {/* Interactive Social/Action Icons */}
                                <div className="mt-8 flex gap-4">
                                    <motion.div
                                        whileHover={{ y: -5, backgroundColor: '#F99D2B', color: '#fff' }}
                                        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 transition-all cursor-pointer shadow-lg"
                                    >
                                        <Briefcase size={20} />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5, backgroundColor: '#57C1CC', color: '#fff' }}
                                        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 transition-all cursor-pointer shadow-lg"
                                    >
                                        <TrendingUp size={20} />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Subtle Decorative Badge */}
                            <div className="absolute -top-3 -right-3 bg-[#F99D2B] text-[10px] font-black px-4 py-1.5 rounded-full text-white uppercase tracking-widest shadow-lg shadow-orange-500/20">
                                Leader
                            </div>
                        </div>
                    </div>

                    {/* 4. COMPANY INFO */}
                    {/* <div className="space-y-10">
                                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#57C1CC]">Company Information</h4>
                                    <div className="space-y-6 text-[15px] font-medium text-slate-300">
                                        <div className="flex gap-4 items-start group cursor-pointer">
                                            <div className="p-3 rounded-xl bg-white/5 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                                <MapPin size={20} />
                                            </div>
                                            <p className="leading-relaxed">Gaya, Bihar, India</p>
                                        </div>
                                        <div className="flex gap-4 items-start group cursor-pointer">
                                            <div className="p-3 rounded-xl bg-white/5 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                                <Mail size={20} />
                                            </div>
                                            <p className="break-all">ceo@skillbridgeconsultingindia.in</p>
                                        </div>
                                        <div className="flex gap-4 items-start group cursor-pointer">
                                            <div className="p-3 rounded-xl bg-white/5 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                                <Phone size={20} />
                                            </div>
                                            <p>+91 7295954384</p>
                                        </div>
                                    </div>
                                </div> */}
                    {/* 4. COMPANY INFO */}
                    <div className="space-y-10">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#57C1CC]">Company Information</h4>
                        <div className="space-y-6 text-[15px] font-medium text-slate-300">

                            {/* Updated Address with Flag */}
                            <div className="flex gap-4 items-start group cursor-pointer">
                                <div className="p-3 rounded-xl bg-white/5 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <MapPin size={20} />
                                </div>
                                <p className="leading-relaxed flex items-center gap-2">
                                    Gaya, Bihar, India
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-6 h-4 rounded-sm shadow-sm">
                                        <path fill="#f93" d="M0 0h640v160H0z" />
                                        <path fill="#fff" d="M0 160h640v160H0z" />
                                        <path fill="#128807" d="M0 320h640v160H0z" />
                                        <g transform="translate(320 240)">
                                            <circle r="70" fill="none" stroke="#000080" strokeWidth="8" />
                                            <g id="d">
                                                <g id="c">
                                                    <g id="b">
                                                        <g id="a">
                                                            <circle r="7" fill="#000080" transform="rotate(7.5) translate(0 -70)" />
                                                            <path fill="#000080" d="M0 0l3 11 3-11z" transform="rotate(7.5) translate(0 -70)" />
                                                        </g>
                                                        <use href="#a" transform="rotate(15)" />
                                                    </g>
                                                    <use href="#b" transform="rotate(30)" />
                                                </g>
                                                <use href="#c" transform="rotate(60)" />
                                            </g>
                                            <use href="#d" transform="rotate(120)" />
                                            <use href="#d" transform="rotate(240)" />
                                        </g>
                                    </svg>
                                </p>
                            </div>

                            <div className="flex gap-4 items-start group cursor-pointer">
                                <div className="p-3 rounded-xl bg-white/5 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <p className="break-all">ceo@skillbridgeconsultingindia.in</p>
                            </div>

                            <div className="flex gap-4 items-start group cursor-pointer">
                                <div className="p-3 rounded-xl bg-white/5 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <Phone size={20} />
                                </div>
                                <p>+91 7295954384</p>
                            </div>

                        </div>
                    </div>

                    {/* 5. QUICK LINKS */}
                    <div className="space-y-10">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#57C1CC]">Expertise</h4>
                        <ul className="space-y-5 text-[15px] font-bold text-slate-400">
                            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                                    >
                                        <span className="w-0 h-[2px] bg-[#F99D2B] group-hover:w-4 transition-all"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 6. COPYRIGHT BAR */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.4em]">
                        © 2026 Skill Bridge Consulting. <span className="text-slate-700 mx-2">|</span> All Rights Reserved.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <a href="#" className="hover:text-[#57C1CC] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#57C1CC] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;