import React from 'react';

const Contact = () => {
    return (
        <section className="min-h-screen flex items-center justify-center py-6 relative overflow-hidden" id="contact">
            {/* Decorative Background Elements */}
            <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl w-full mx-auto relative z-10 px-6">
                {/* Anti-Gravity Floating Elements */}
                <div className="absolute -top-16 -right-12 w-32 h-32 anti-gravity-float hidden lg:block opacity-60">
                    <div className="w-full h-full bg-gradient-to-br from-primary/40 to-transparent rounded-xl rotate-12 flex items-center justify-center border border-primary/30 backdrop-blur-sm">
                        <span className="material-icons text-primary text-5xl">mail_outline</span>
                    </div>
                </div>
                <div className="absolute -bottom-12 -left-12 w-24 h-24 anti-gravity-float-delayed hidden lg:block opacity-40">
                    <div className="w-full h-full bg-gradient-to-tr from-primary/30 to-transparent rounded-full -rotate-12 flex items-center justify-center border border-primary/20 backdrop-blur-sm">
                        <span className="material-icons text-primary text-4xl">send</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Side: Contact Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                                Contact <span className="text-primary">Us</span>
                            </h1>
                            <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                                Let's talk for your next project. We combine data-driven strategies with creative excellence to scale your brand.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Phone */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <span className="material-icons">call</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Phone</p>
                                    <a href="tel:+919567483538" className="text-xl font-medium text-slate-900 hover:text-primary transition-colors">+91 95674 83538</a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <span className="material-icons">alternate_email</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Email</p>
                                    <a href="mailto:nashifali73@gmail.com" className="text-xl font-medium text-slate-900 hover:text-primary transition-colors">nashifali73@gmail.com</a>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <span className="material-icons">share</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">LinkedIn</p>
                                    <a href="https://linkedin.com/in/nashifali" target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-slate-900 hover:text-primary transition-colors">/in/nashifali</a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <span className="material-icons">place</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Location</p>
                                    <p className="text-xl font-medium text-slate-900">Malappuram, Kerala, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Subtle Map Preview */}
                        <div className="rounded-2xl overflow-hidden glass-panel h-32 relative group">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrPd3EHPh41jujWZPJhqG6hmW4RXApqUsWIst-N74n49qA-ttzXH2CHGtIAd1vo75Jc09muE8RXMxJpjHt-Wsfmdw2OevX2BZjCQPRVv10ghsEPDsK99BbsoQxeFPuj2eCmI__cKNzFOepfvpT2Gz_1p1cj9Vxlam_60lzMpcWSvPZCNd3qgTk9BZtoDO86Lh-qSKccc_Ew5sIYoFlDoo09vI12zVMplTVZLJVi5lHu_lZd36_442lyOqOa5sQS7euIvuxUTx5P4sn"
                                alt="Map of Malappuram Kerala"
                                className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-sm font-semibold tracking-wider text-primary bg-primary/10 px-4 py-2 rounded-full backdrop-blur-md border border-primary/20">VIEW ON MAP</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Enquiry Form */}
                    <div className="lg:col-span-7">
                        <form className="glass-panel p-8 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden bg-white/50">
                            {/* Inner Glow Decor */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

                            <div className="grid md:grid-cols-2 gap-6 relative z-10">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-400 ml-1">Full Name</label>
                                    <input type="text" placeholder="Nashif Ali" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-0 focus:outline-none input-focus-glow transition-all placeholder:text-slate-400 text-slate-900" />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                                    <input type="email" placeholder="nashif@example.com" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-0 focus:outline-none input-focus-glow transition-all placeholder:text-slate-400 text-slate-900" />
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-400 ml-1">Phone Number</label>
                                    <input type="tel" placeholder="+91 000 000 0000" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-0 focus:outline-none input-focus-glow transition-all placeholder:text-slate-400 text-slate-900" />
                                </div>

                                {/* Interest Dropdown */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-400 ml-1">I'm interested in...</label>
                                    <div className="relative">
                                        <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-0 focus:outline-none input-focus-glow transition-all appearance-none cursor-pointer text-slate-500">
                                            <option disabled selected value="">Select a service</option>
                                            <option value="seo">Search Engine Optimization</option>
                                            <option value="smm">Social Media Marketing</option>
                                            <option value="ppc">Paid Advertising (PPC)</option>
                                            <option value="content">Content Strategy</option>
                                            <option value="full">Full Digital Strategy</option>
                                        </select>
                                        <span className="material-icons absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
                                    </div>
                                </div>

                                {/* Budget */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-400 ml-1">Budget Range</label>
                                    <input type="text" placeholder="e.g. $2,000 - $5,000" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-0 focus:outline-none input-focus-glow transition-all placeholder:text-slate-400 text-slate-900" />
                                </div>

                                {/* Country */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-400 ml-1">Country</label>
                                    <input type="text" placeholder="India" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-0 focus:outline-none input-focus-glow transition-all placeholder:text-slate-400 text-slate-900" />
                                </div>

                                {/* Message */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-slate-400 ml-1">Your Message</label>
                                    <textarea rows="5" placeholder="Tell us about your project goals..." className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-0 focus:outline-none input-focus-glow transition-all placeholder:text-slate-400 resize-none text-slate-900"></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="md:col-span-2 pt-4">
                                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(19,146,236,0.5)] flex items-center justify-center gap-3 group">
                                        <span className="tracking-wide">SEND MESSAGE</span>
                                        <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                    <p className="text-center text-xs text-slate-500 mt-6">
                                        By submitting, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a> and <a href="#" className="text-primary hover:underline">Terms of Service</a>.
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Floating Background Shapes */}
                <div className="absolute top-20 right-[15%] w-4 h-4 bg-primary/20 rounded-full anti-gravity-float opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-40 left-[10%] w-3 h-3 bg-primary/40 rounded-full anti-gravity-float-delayed opacity-20 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default Contact;
