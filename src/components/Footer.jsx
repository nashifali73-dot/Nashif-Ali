import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-slate-200/60 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Top Section: CTA & Socials */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <div className="space-y-6">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase bg-primary/10 rounded-full">Available for Projects</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-none text-slate-900">
                            Let's Connect <span className="block italic text-primary/80">There</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                        {/* Social Link 1 - LinkedIn */}
                        <a href="#" className="anti-gravity-float group relative flex items-center justify-center w-14 h-14 bg-white rounded-full border border-slate-200 hover:border-primary transition-colors shadow-sm">
                            <svg className="w-6 h-6 text-slate-600 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
                        </a>

                        {/* Social Link 2 - Instagram */}
                        <a href="#" className="anti-gravity-float group relative flex items-center justify-center w-14 h-14 bg-white rounded-full border border-slate-200 hover:border-primary transition-colors shadow-sm">
                            <svg className="w-6 h-6 text-slate-600 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.349-2.619-6.78-6.98-6.98-1.28-.059-1.688-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                            </svg>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Instagram</span>
                        </a>

                        {/* Social Link 3 - X / Twitter */}
                        <a href="#" className="anti-gravity-float group relative flex items-center justify-center w-14 h-14 bg-white rounded-full border border-slate-200 hover:border-primary transition-colors shadow-sm">
                            <svg className="w-5 h-5 text-slate-600 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">X / Twitter</span>
                        </a>

                        {/* Social Link 4 - Email */}
                        <a href="mailto:hello@nashif.me" className="anti-gravity-float group relative flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full border border-transparent hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                            <span className="material-icons text-xl">alternate_email</span>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Email Me</span>
                        </a>
                    </div>
                </div>

                {/* Middle Section: Context & Map Hint */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-slate-200/40">
                    <div className="space-y-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Location</p>
                        <div className="flex items-start gap-3">
                            <span className="material-icons text-primary text-sm mt-1">place</span>
                            <div>
                                <p className="text-sm font-medium text-slate-700">Mumbai, India</p>
                                <p className="text-xs text-slate-500">Available for remote worldwide</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Newsletter</p>
                        <form className="flex max-w-xs border-b border-slate-300 pb-1 focus-within:border-primary transition-colors">
                            <input type="email" placeholder="Join the waitlist" className="bg-transparent border-none text-sm p-0 focus:ring-0 w-full placeholder:text-slate-400 text-slate-700" />
                            <button type="submit" className="text-slate-400 hover:text-primary transition-colors">
                                <span className="material-icons text-sm">arrow_forward</span>
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col items-start md:items-end justify-center">
                        <div className="relative w-full h-24 md:w-48 overflow-hidden rounded-xl bg-slate-100">
                            <div className="absolute inset-0 opacity-40 mix-blend-multiply">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_HH4pJphTSdQsFM5QRD1xA8WwmdepDutftcUUmwZhiuB1n9-EBorhQiiGDqjLLX_F5PufKhRPNCVKRXKP2xm5AsGoPYHmT_GYXB0SBTJxwLEsWv6lKLLomKpUtaN6X9AGpWO3K9AekkzpDvoubuXdjxrqIwoKtHHZKsD-C2WTDLDinAVlVM8rFt8N2dMem-MYRzaLcOka5Icm0F_cbtYqivWU-8ShdtTjCIEA_xfGPgc0hNR6XVX6f936XicXil3CVTONTxr-8X4w"
                                    alt="Minimalist abstract map of India"
                                    className="w-full h-full object-cover grayscale brightness-110"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute"></div>
                                <div className="w-3 h-3 bg-primary rounded-full relative shadow-[0_0_15px_rgba(19,146,236,0.6)]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Legal & Back to Top */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-[11px] font-medium tracking-widest uppercase text-slate-400">
                        <span className="flex items-center gap-1">© 2026 Nashif Ali</span>
                        <a href="#" className="hover:text-primary transition-colors">All Rights Reserved</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="h-[1px] w-12 bg-slate-200 hidden md:block"></div>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-2 group text-xs font-semibold tracking-widest uppercase text-slate-500 hover:text-primary transition-all"
                        >
                            Back to top
                            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-icons text-sm">expand_less</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
