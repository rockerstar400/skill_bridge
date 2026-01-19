




import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "./assets/logo.png";
import { Link } from 'react-router-dom';
import Header from "./components/Header"
import { NavHashLink } from 'react-router-hash-link';
import {
    Headphones, Database, MessageSquare, Users,
    TrendingUp, ShieldCheck, Mail, Phone, MapPin,
    CheckCircle, Target, Eye, Menu, X, ArrowRight, Briefcase,Server,PhoneCall, Cloud, Lock, Activity, Cpu 
} from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
};

// --- PREMIUM HEADER ---
// const Header = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => setIsScrolled(window.scrollY > 20);
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'
//             }`}>
//             <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
//                 <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
//                     <img src={logo} alt="Skill Bridge Logo" className="h-16 md:h-24 w-auto object-contain" />
//                 </motion.div>
//                 <div className="hidden md:flex items-center space-x-12">
//                     {['Home', 'About', 'Services', 'Contact'].map((item) => (
//                         <a key={item} href={`#${item.toLowerCase()}`} className="text-[15px] font-bold text-slate-800 hover:text-[#57C1CC] transition-colors uppercase tracking-widest">
//                             {item}
//                         </a>
//                     ))}
//                     <button className="bg-[#0C1C2C] text-white px-10 py-3.5 rounded-full text-sm font-bold hover:bg-indigo-600 transition-all shadow-2xl">
//                         Connect Now
//                     </button>
//                 </div>
//                 <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900">
//                     {isOpen ? <X size={32} /> : <Menu size={32} />}
//                 </button>
//             </div>
//         </nav>
//     );
// };


// const Header = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => setIsScrolled(window.scrollY > 20);
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const navLinks = [
//         { name: 'Home', id: 'home' },
//         { name: 'About', id: 'about' },
//         { name: 'Services', id: 'services' },
//        { name: 'Careers', path: '/careers' },
//        { name: 'Contact', id: 'contact' },
//     ];

//     return (
//         <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out ${isScrolled
//                 ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3 border-b border-slate-100'
//                 : 'bg-transparent py-7'
//             }`}>
//             <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">

//                 {/* 1. PREMIUM LOGO DESIGN */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     whileHover={{ scale: 1.05 }}
//                     className="flex items-center cursor-pointer"
//                 >
//                     <img src={logo} alt="Skill Bridge Logo" className="h-14 md:h-20 w-auto object-contain drop-shadow-sm" />
//                                        <div className="flex flex-col justify-center border-l-2 border-slate-200 pl-3 md:pl-4">
//                         <span className="text-sm md:text-xl font-black text-[#0C1C2C] leading-none tracking-tighter uppercase group-hover:text-indigo-600 transition-colors">
//                             Skill Bridge
//                         </span>
//                         <span className="text-[8px] md:text-[10px] font-bold text-[#f89623] uppercase tracking-[0.15em] mt-1">
//                             Consulting Pvt Ltd
//                         </span>
//                     </div>
//                 </motion.div>

//                 {/* 2. DESKTOP NAVIGATION (Glassmorphism links) */}
//                 <div className="hidden md:flex items-center space-x-10">
//                     {/* <div className="flex items-center space-x-8">
//                         {navLinks.map((link) => (
//                             <a 
//                                 key={link.name} 
//                                 href={`#${link.id}`} 
//                                 className="relative text-[14px] font-bold text-slate-800 uppercase tracking-[0.15em] transition-colors duration-300 hover:text-indigo-600 group"
//                             >
//                                 {link.name}

//                                 <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-500 ease-out group-hover:w-full"></span>
//                             </a>
//                         ))}
//                     </div> */}

//                     <div className="flex items-center space-x-8">
//                         {navLinks.map((link) => (
//                             <a
//                                 key={link.name}
//                                 href={`#${link.id}`}
//                                 className={`relative text-[14px] font-bold uppercase tracking-[0.15em] transition-all duration-300 group ${link.name === 'Home'
//                                         ? 'text-[#f89623]'
//                                         : 'text-slate-800 hover:text-indigo-600'
//                                     }`}
//                             >
//                                 {link.name}

//                                 {/* Elegant Underline Logic */}
//                                 <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-500 ease-out ${link.name === 'Home'
//                                         ? 'w-full bg-[#f89623]'
//                                         : 'w-0 bg-indigo-600 group-hover:w-full'
//                                     }`}></span>
//                             </a>
//                         ))}
//                     </div>
//                     {/* hnfhjhhjhdshd?jfdhfdjjdf jksdpsd sduji f dorie fmm  ksdofire fd hdff dfdj      fh */}

//                     {/* 3. PREMIUM CTA BUTTON */}
//                     <motion.button
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="relative overflow-hidden bg-[#0C1C2C] text-white px-8 py-3.5 rounded-full text-[13px] font-black uppercase tracking-widest flex items-center gap-3 group shadow-xl hover:shadow-indigo-200/50 transition-all duration-500"
//                     >
//                         <span className="relative z-10">Connect Now</span>
//                         <ArrowRight size={16} className="relative z-10 transition-transform duration-500 group-hover:translate-x-1" />
//                         {/* Subtle Shine Effect */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                     </motion.button>
//                 </div>

//                 {/* 4. MOBILE TOGGLE (Custom Icon) */}
//                 <div className="md:hidden">
//                     <button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="text-slate-900 p-2 focus:outline-none"
//                     >
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={isOpen ? 'close' : 'open'}
//                                 initial={{ opacity: 0, rotate: -90 }}
//                                 animate={{ opacity: 1, rotate: 0 }}
//                                 exit={{ opacity: 0, rotate: 90 }}
//                                 transition={{ duration: 0.2 }}
//                             >
//                                 {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
//                             </motion.div>
//                         </AnimatePresence>
//                     </button>
//                 </div>
//             </div>

//             {/* 5. PREMIUM MOBILE MENU OVERLAY */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//                         className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-slate-100 shadow-2xl overflow-hidden"
//                     >
//                         <div className="flex flex-col p-8 space-y-6">
//                             {navLinks.map((link, index) => (
//                                 <motion.a
//                                     initial={{ opacity: 0, x: -20 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     transition={{ delay: index * 0.1 }}
//                                     key={link.name}
//                                     href={`#${link.id}`}
//                                     onClick={() => setIsOpen(false)}
//                                     className="text-2xl font-black text-[#0C1C2C] uppercase tracking-tighter hover:text-indigo-600 transition-colors"
//                                 >
//                                     {link.name}
//                                 </motion.a>
//                             ))}
//                             <button className="bg-[#0C1C2C] text-white w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-lg">
//                                 Connect Now
//                             </button>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </nav>
//     );
// };

const Home = () => {
    const services = [
        { title: "Voice Process", icon: <Headphones />, desc: "Inbound & Outbound expertise to handle complex customer interactions." },
        { title: "Non-Voice Process", icon: <Database />, desc: "Efficient Back Office & Data Support for high-volume operations." },
        { title: "Chat & Email Support", icon: <MessageSquare />, desc: "Seamless 24/7 digital support for modern consumer engagement." },
        { title: "Customer Experience", icon: <Users />, desc: "Strategic management to elevate satisfaction and brand loyalty." },
        { title: "Sales & Lead Generation", icon: <TrendingUp />, desc: "Driving exponential business growth through targeted lead acquisition." },
        { title: "Collection Services", icon: <ShieldCheck />, desc: "Ethical and professional follow-up & collection recovery services." },
         { 
        title: "IT Infrastructure Support", 
        icon: <Server />, 
        desc: "Reliable infrastructure and end-to-end technology support to ensure uninterrupted BPO operations." 
    },
    { 
        title: "CRM & Dialer Setup", 
        icon: <PhoneCall />, 
        desc: "Deploying and managing industry-leading CRM systems and auto-dialers to maximize productivity." 
    },
    { 
        title: "Cloud & Remote Solutions", 
        icon: <Cloud />, 
        desc: "Secure cloud-based environments supporting remote and hybrid BPO teams with seamless scalability." 
    },
    { 
        title: "Security & Compliance", 
        icon: <Lock />, 
        desc: "Strict data protection standards to safeguard client information and meet international outsourcing requirements." 
    },
    { 
        title: "System Monitoring", 
        icon: <Activity />, 
        desc: "Dedicated IT support monitoring systems to prevent downtime and ensure smooth 24/7 operations." 
    },
    { 
        title: "Software Automation", 
        icon: <Cpu />, 
        desc: "Integrating applications and automating workflows to improve efficiency and turnaround time." 
    },
    ];

    return (
        <div className="bg-[#F9FEFF] text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden">
            <Header />

            {/* 1. HERO SECTION */}
            {/* <section id="home" className="relative min-h-screen flex items-center pt-28">
                <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                    <motion.div animate={{ x: [0, 50, 0], scale: [1, 1.2, 1] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#57C1CC]/10 rounded-full blur-[120px]" />
                    <motion.div animate={{ y: [0, -50, 0], scale: [1, 1.1, 1] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#F99D2B]/10 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
                        <motion.div variants={fadeInUp} className="inline-block px-5 py-2 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm">
                            Operational Excellence
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-6xl lg:text-[90px] font-black text-[#0C1C2C] leading-[0.9] tracking-tighter">
                            BPS & <br /> <span className="text-indigo-600">Growth.</span>
                        </motion.h1>
                        <motion.div variants={fadeInUp} className="mt-10 border-l-4 border-[#F99D2B] pl-8">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-[#F99D2B] mb-2">Short Mission Statement</h4>
                            <p className="text-lg text-slate-500 leading-relaxed font-medium italic">
                                "To deliver reliable and scalable Business Process Services by deeply understanding client needs
                                and providing innovative, cost-effective solutions that drive operational excellence and business growth."
                            </p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="mt-12">
                            <button className="bg-[#0C1C2C] text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-indigo-600 transition-all flex items-center gap-4">
                                View Services <ArrowRight />
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
                        <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-white">
                            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1000" alt="BPO Team" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                </div>
            </section> */}

            {/* --- ULTRA PREMIUM HERO SECTION --- */}
            <section id="home" className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-[#F9FEFF]">

                {/* 1. DYNAMIC BACKGROUND LAYER */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                    {/* Animated Mesh Blobs */}
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.2, 1],
                            rotate: [0, 45, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-[#57C1CC]/20 to-indigo-500/10 rounded-full blur-[140px]"
                    />
                    <motion.div
                        animate={{
                            x: [0, -80, 0],
                            y: [0, 100, 0],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-[#F99D2B]/15 to-orange-200/5 rounded-full blur-[120px]"
                    />

                    {/* Subtle Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

                    {/* 2. LEFT CONTENT (TEXT) */}
                    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>

                        {/* Premium Tag */}
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-xl shadow-indigo-100/50 border border-indigo-50 mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                            <span className="text-indigo-600 text-[11px] font-black uppercase tracking-[0.3em]">Operational Excellence</span>
                        </motion.div>

                        {/* High-Impact Headline */}
                        <motion.h1 variants={fadeInUp} className="text-7xl lg:text-[100px] font-black text-[#0C1C2C] leading-[0.85] tracking-tighter">
                            <span className="relative inline-block">
                                BPS
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#57C1CC]/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 0 100 5" stroke="currentColor" strokeWidth="10" fill="transparent" /></svg>
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-[#57C1CC]">Growth.</span>
                        </motion.h1>

                        {/* Mission Statement Block */}
                        <motion.div variants={fadeInUp} className="mt-10 relative">
                            <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-[#F99D2B] to-orange-300 rounded-full"></div>
                            <div className="pl-8">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-[#F99D2B] mb-3">Short Mission Statement</h4>
                                <p className="text-xl text-slate-500 leading-relaxed font-medium italic max-w-lg">
                                    "To deliver reliable and scalable Business Process Services by deeply understanding client needs
                                    and providing <span className="text-slate-900 not-italic font-bold">innovative solutions.</span>"
                                </p>
                            </div>
                        </motion.div>

                        {/* Buttons & Stats Link */}
                        <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap items-center gap-8">
                            {/* <button className="bg-[#0C1C2C] text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_20px_40px_-10px_rgba(12,28,44,0.4)] hover:bg-indigo-600 hover:translate-y-[-5px] transition-all duration-300 flex items-center gap-4 group">
                                View Services
                                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                            </button> */}
                            <NavHashLink 
    smooth 
    to="/#services" 
    className="bg-[#0C1C2C] text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_20px_40px_-10px_rgba(12,28,44,0.4)] hover:bg-indigo-600 hover:translate-y-[-5px] transition-all duration-300 flex items-center gap-4 group cursor-pointer inline-flex"
>
    View Services
    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
</NavHashLink>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-[#0C1C2C]">500+ Businesses</p>
                                    <p className="text-slate-400 text-xs tracking-wide uppercase font-bold">Trusted Globally</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* 3. RIGHT CONTENT (IMAGE & CARDS) */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Main Floating Image */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[15px] border-white group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1000"
                                alt="BPO Team"
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Image Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </motion.div>

                        {/* HIGH-END FLOATING STATS CARD (Glassmorphism) */}


                        {/* DECORATIVE CIRCLE (Small) */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F99D2B] rounded-full -z-10 opacity-20 blur-2xl"></div>
                    </motion.div>
                </div>
            </section>

            {/* 2. VISION & ABOUT US SECTION (CONTENT ADDED HERE) */}
            {/* --- NEW PREMIUM ABOUT US SECTION (AS PER REFERENCE) --- */}
            <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto overflow-visible">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE: IMAGE MONTAGE (Exactly like your reference) */}
                    <div className="relative h-[500px] md:h-[600px]">
                        {/* Main Image (Top) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 right-0 w-3/4 h-[300px] z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" alt="Team" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Left Image (Bottom Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-10 left-0 w-2/3 h-[280px] z-20 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white"
                        >
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800" alt="Consulting" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Small Detail Image (Bottom Right) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute bottom-0 right-10 w-1/3 h-[180px] z-30 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white hidden md:block"
                        >
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800" alt="BPO" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* DECORATIVE ELEMENTS (Blobs) */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-[40%] left-[-20px] w-6 h-6 bg-[#F99D2B] rounded-full z-0"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="absolute bottom-[-20px] left-10 w-24 h-24 bg-[#F99D2B] rounded-full z-0 opacity-80"
                        />
                    </div>

                    {/* RIGHT SIDE: CONTENT */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    >
                        <motion.span variants={fadeInUp} className="text-[#57C1CC] font-bold uppercase tracking-[0.2em] text-sm">
                            ABOUT US
                        </motion.span>

                        <motion.h2 variants={fadeInUp} className="text-4xl lg:text-6xl font-black text-[#0C1C2C] mt-4 mb-8 leading-tight">
                            Bridging Talent, <br /> Technology & Success.
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                            Skill Bridge Consulting Pvt. Ltd. is a professionally managed Business Process Services (BPS) and consulting organization based in Gaya, Bihar, India. We specialize in delivering end-to-end outsourcing solutions that help businesses streamline operations.
                        </motion.p>

                        {/* Vision & Mission Points (01, 02 Style) */}
                        <div className="space-y-10">
                            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                                <div className="text-xl font-black text-[#0C1C2C] flex items-center gap-4">
                                    <span className="text-[#0C1C2C] border-b-2 border-[#F99D2B]">01.</span> Our Vision
                                </div>
                                <p className="text-slate-500 font-medium pl-10">
                                    To become a trusted global BPS partner, empowering businesses across industries by bridging talent, technology, and process excellence.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                                <div className="text-xl font-black text-[#0C1C2C] flex items-center gap-4">
                                    <span className="text-[#0C1C2C] border-b-2 border-[#F99D2B]">02.</span> Our Commitment
                                </div>
                                <p className="text-slate-500 font-medium pl-10">
                                    Choose us for reliable support! Our team ensures your work runs smoothly, with backups ready to step in whenever needed to create sustainable value.
                                </p>
                            </motion.div>
                        </div>

                        {/* <motion.button
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 bg-[#F99D2B] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-orange-100 hover:bg-[#e88d1a] transition-all"
                        >
                            Read More
                        </motion.button> */}
                    </motion.div>
                </div>
            </section>

            {/* 3. SERVICES SECTION */}
            {/* <section id="services" className="py-32 px-6 lg:px-12 bg-[#0C1C2C] text-white rounded-[5rem] mx-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-2xl mb-20">
                        <h2 className="text-5xl lg:text-7xl font-black mb-6">Expert <br /> <span className="text-[#57C1CC]">Our Services</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <motion.div key={i} whileHover={{ y: -15 }} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-500 group">
                                <div className="w-16 h-16 rounded-2xl bg-[#57C1CC]/20 text-[#57C1CC] flex items-center justify-center mb-10 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    {s.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                                <p className="opacity-60 text-sm leading-relaxed group-hover:opacity-80">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            <section id="services" className="py-32 px-6 lg:px-12 bg-[#0C1C2C] text-white rounded-[5rem] mx-4 relative overflow-hidden">
    {/* Decorative Background Glow */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#57C1CC]/10 rounded-full blur-[120px] -z-0"></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-20">
            <motion.span 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                className="text-[#57C1CC] font-black uppercase tracking-[0.4em] text-xs mb-4 block"
            >
                End-to-End Solutions
            </motion.span>
            <h2 className="text-5xl lg:text-7xl font-black mb-6">
                Process & <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57C1CC] to-indigo-400">
                    Technology Services.
                </span>
            </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -15 }} 
                    className="p-10 rounded-[3.5rem] bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-500 group cursor-default"
                >
                    <div className="w-16 h-16 rounded-2xl bg-[#57C1CC]/20 text-[#57C1CC] flex items-center justify-center mb-10 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg">
                        {React.cloneElement(s.icon, { size: 28 })}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{s.title}</h3>
                    <p className="opacity-60 text-sm leading-relaxed group-hover:opacity-80 font-medium">
                        {s.desc}
                    </p>
                    
                    {/* Subtle arrow that appears on hover */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                        <ArrowRight size={20} className="text-indigo-600" />
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
</section>

            {/* 4. WHY CHOOSE US SECTION (CONTENT ADDED HERE) */}
            {/* <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
           <h2 className="text-5xl font-black text-[#0C1C2C]">Why Choose Us?</h2>
           <div className="h-1.5 w-24 bg-[#F99D2B] mx-auto mt-6 rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Client-centric approach", 
            "Trained workforce", 
            "Cost-effective operations", 
            "Strong process control", 
            "Data security", 
            "Flexible engagement models"
          ].map((item, i) => (
            <motion.div key={i} whileInView="visible" initial="hidden" variants={fadeInUp} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex items-center gap-6 group hover:bg-white hover:shadow-2xl transition-all">
               <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0">
                  <CheckCircle size={28} />
               </div>
               <span className="font-bold text-slate-700 text-lg leading-tight">{item}</span>
            </motion.div>
          ))}
        </div>
      </section> */}


            {/* --- LUXURY WHY CHOOSE US SECTION --- */}
            <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-b from-white to-[#F3FBFC]">

                {/* Background Decorative Blobs for Luxury Feel */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#57C1CC]/5 rounded-full blur-[100px] -z-10" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#F99D2B]/5 rounded-full blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-16 items-center mb-20">
                        <div className="lg:col-span-2">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-[#57C1CC] font-black uppercase tracking-[0.4em] text-xs mb-4 block"
                            >
                                The Skill Bridge Edge
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-5xl lg:text-7xl font-black text-[#0C1C2C] leading-tight"
                            >
                                Why Choose
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C1C2C] to-[#F99D2B]"> Us.</span>
                            </motion.h2>
                        </div>
                        <div className="lg:col-span-1">
                            <p className="text-slate-500 font-medium leading-relaxed border-l-2 border-[#F99D2B] pl-6">
                                We combine industry-leading process control with a client-first philosophy to deliver measurable business impact.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                t: "Client-Centric Approach",
                                d: "Tailored strategies that align perfectly with your unique business goals.",
                                icon: <Users className="w-8 h-8" />
                            },
                            {
                                t: "Trained Workforce",
                                d: "Domain experts undergoes rigorous training to maintain global standards.",
                                icon: <Briefcase className="w-8 h-8" />
                            },
                            {
                                t: "Cost-Effective Operations",
                                d: "Optimized workflows that significantly reduce overheads without quality loss.",
                                icon: <TrendingUp className="w-8 h-8" />
                            },
                            {
                                t: "Strong Process Control",
                                d: "Six-sigma inspired methodologies for error-free delivery and management.",
                                icon: <Target className="w-8 h-8" />
                            },
                            {
                                t: "Data Security",
                                d: "Enterprise-grade encryption and strict protocols to keep your data safe.",
                                icon: <ShieldCheck className="w-8 h-8" />
                            },
                            {
                                t: "Flexible Engagement",
                                d: "Scalable models that grow with your business needs and requirements.",
                                icon: <Database className="w-8 h-8" />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.05)] hover:shadow-[0_40px_80px_rgba(8,_112,_184,_0.1)] transition-all duration-500 overflow-hidden"
                            >
                                {/* Hover Accent Glow */}
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#F99D2B]/5 rounded-full group-hover:bg-[#F99D2B]/10 transition-colors duration-500" />

                                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-[#F99D2B] flex items-center justify-center mb-8 group-hover:bg-[#F99D2B] group-hover:text-white transition-all duration-500 shadow-inner">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-black text-[#0C1C2C] mb-4 group-hover:text-[#F99D2B] transition-colors">
                                    {item.t}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    {item.d}
                                </p>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#F99D2B] group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* 5. FOOTER */}
            {/* <footer id="contact" className="bg-white border-t border-slate-100 pt-32 pb-12 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-4 gap-20 mb-24">
                        <div className="lg:col-span-2">
                            <img src={logo} alt="Skill Bridge Logo" className="h-20 mb-10" />
                            <div className="mt-10 p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
                                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2 tracking-widest">Director</h4>
                                <p className="text-3xl font-black text-[#0C1C2C]">Ashutosh Mishra</p>
                                <p className="text-indigo-600 font-bold mt-1 uppercase text-xs tracking-widest">Skill Bridge Consulting Pvt. Ltd.</p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <h4 className="font-black text-[#0C1C2C] mb-8 uppercase text-xs tracking-[0.3em]">Company Info</h4>
                            <div className="space-y-6 text-sm font-bold text-slate-500">
                                <div className="flex gap-4 items-start"><MapPin className="text-indigo-600 shrink-0" /> Khairat ahmad road piperpanti Gaya</div>
                                <div className="flex gap-4 items-start"><Mail className="text-indigo-600 shrink-0" /> ceo@skillbridgeconsultingindia.in</div>
                                <div className="flex gap-4 items-start"><Phone className="text-indigo-600 shrink-0" /> +91 7295954384</div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-black text-[#0C1C2C] mb-8 uppercase text-xs tracking-[0.3em]">Quick Links</h4>
                            <ul className="space-y-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
                                <li><a href="#home" className="hover:text-indigo-600 transition-colors">Home</a></li>
                                <li><a href="#about" className="hover:text-indigo-600 transition-colors">About</a></li>
                                <li><a href="#services" className="hover:text-indigo-600 transition-colors">Services</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-slate-50 text-center">
                        <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.3em]">© 2026 Skill Bridge Consulting Pvt. Ltd. All Rights Reserved.</p>
                    </div>
                </div>
            </footer> */}


            {/* --- ULTRA PREMIUM FOOTER --- */}
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
                            Get a Start
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
                                {['Home', 'About', 'Services',  'Contact'].map((link) => (
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
        </div>
    );
};

export default Home;