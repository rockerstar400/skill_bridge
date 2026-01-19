import logo from "./assets/logo.png";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out ${isScrolled
                ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3 border-b border-slate-100'
                : 'bg-transparent py-7'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">

                {/* 1. PREMIUM LOGO DESIGN */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center cursor-pointer"
                >
                    <img src={logo} alt="Skill Bridge Logo" className="h-14 md:h-20 w-auto object-contain drop-shadow-sm" />
                                       <div className="flex flex-col justify-center border-l-2 border-slate-200 pl-3 md:pl-4">
                        <span className="text-sm md:text-xl font-black text-[#0C1C2C] leading-none tracking-tighter uppercase group-hover:text-indigo-600 transition-colors">
                            Skill Bridge
                        </span>
                        <span className="text-[8px] md:text-[10px] font-bold text-[#f89623] uppercase tracking-[0.15em] mt-1">
                            Consulting Pvt Ltd
                        </span>
                    </div>
                </motion.div>

                {/* 2. DESKTOP NAVIGATION (Glassmorphism links) */}
                <div className="hidden md:flex items-center space-x-10">
                    {/* <div className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={`#${link.id}`} 
                                className="relative text-[14px] font-bold text-slate-800 uppercase tracking-[0.15em] transition-colors duration-300 hover:text-indigo-600 group"
                            >
                                {link.name}
                              
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-500 ease-out group-hover:w-full"></span>
                            </a>
                        ))}
                    </div> */}

                    <div className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.id}`}
                                className={`relative text-[14px] font-bold uppercase tracking-[0.15em] transition-all duration-300 group ${link.name === 'Home'
                                        ? 'text-[#f89623]'
                                        : 'text-slate-800 hover:text-indigo-600'
                                    }`}
                            >
                                {link.name}

                                {/* Elegant Underline Logic */}
                                <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-500 ease-out ${link.name === 'Home'
                                        ? 'w-full bg-[#f89623]'
                                        : 'w-0 bg-indigo-600 group-hover:w-full'
                                    }`}></span>
                            </a>
                        ))}
                    </div>
                    {/* hnfhjhhjhdshd?jfdhfdjjdf jksdpsd sduji f dorie fmm  ksdofire fd hdff dfdj      fh */}

                    {/* 3. PREMIUM CTA BUTTON */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative overflow-hidden bg-[#0C1C2C] text-white px-8 py-3.5 rounded-full text-[13px] font-black uppercase tracking-widest flex items-center gap-3 group shadow-xl hover:shadow-indigo-200/50 transition-all duration-500"
                    >
                        <span className="relative z-10">Connect Now</span>
                        <ArrowRight size={16} className="relative z-10 transition-transform duration-500 group-hover:translate-x-1" />
                        {/* Subtle Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </motion.button>
                </div>

                {/* 4. MOBILE TOGGLE (Custom Icon) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-900 p-2 focus:outline-none"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isOpen ? 'close' : 'open'}
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* 5. PREMIUM MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-slate-100 shadow-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-8 space-y-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={link.name}
                                    href={`#${link.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-black text-[#0C1C2C] uppercase tracking-tighter hover:text-indigo-600 transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <button className="bg-[#0C1C2C] text-white w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-lg">
                                Connect Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};