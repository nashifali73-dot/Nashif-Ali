import React from 'react';

const Pricing = () => {
    return (
        <section className="relative min-h-screen py-24 px-6 overflow-hidden" id="pricing">
            {/* Decorative Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="floating-blob blob-1"></div>
                <div className="floating-blob blob-2"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
                <div className="w-full mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
                            My Pricing <span className="text-primary">Mode</span>
                        </h1>
                        <p className="text-slate-500 max-w-md text-lg font-medium">
                            Clean, transparent pricing models designed to scale your digital presence with precision.
                        </p>
                    </div>
                    <a href="#" className="group flex items-center gap-3 bg-primary hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40">
                        Get Started
                        <span className="material-icons text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
                    {/* Basic Plan */}
                    <div className="anti-gravity-card rounded-xl p-8 flex flex-col bg-white">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Basic</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold text-slate-900">$10</span>
                                <span className="text-slate-500 font-medium">/hour</span>
                            </div>
                            <p className="mt-4 text-slate-500 text-sm leading-relaxed">Perfect for individuals starting their digital journey and personal branding.</p>
                        </div>
                        <div className="space-y-4 flex-grow">
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-primary text-sm">check_circle</span>
                                <span className="text-slate-700 text-sm font-medium">Social Media Audit</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-primary text-sm">check_circle</span>
                                <span className="text-slate-700 text-sm font-medium">Basic Content Calendar</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-primary text-sm">check_circle</span>
                                <span className="text-slate-700 text-sm font-medium">Email Support</span>
                            </div>
                            <div className="flex items-center gap-3 opacity-40">
                                <span className="material-icons text-sm">cancel</span>
                                <span className="text-slate-500 text-sm font-medium">Ad Campaign MGMT</span>
                            </div>
                        </div>
                        <button className="mt-10 w-full py-3 rounded-xl border-2 border-primary/20 hover:border-primary/50 text-primary font-bold transition-all duration-300">
                            Choose Basic
                        </button>
                    </div>

                    {/* Standard Plan (Popular) */}
                    <div className="anti-gravity-card featured-card rounded-xl p-10 flex flex-col relative z-20 md:-translate-y-4 md:scale-105 bg-white">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                            Most Popular
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-black mb-2 text-slate-900">Standard</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-black text-slate-900">$20</span>
                                <span className="text-slate-500 font-medium">/hour</span>
                            </div>
                            <p className="mt-4 text-slate-500 text-sm leading-relaxed font-medium">The ideal balance for growing startups and medium-sized businesses.</p>
                        </div>
                        <div className="space-y-5 flex-grow">
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-primary">check_circle</span>
                                <span className="text-slate-900 font-bold">Full Digital Strategy</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-primary">check_circle</span>
                                <span className="text-slate-900 font-bold">Ad Campaign Management</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-primary">check_circle</span>
                                <span className="text-slate-900 font-bold">Weekly Performance Reports</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-primary">check_circle</span>
                                <span className="text-slate-900 font-bold">Priority Support</span>
                            </div>
                        </div>
                        <button className="mt-10 w-full py-4 rounded-xl bg-primary hover:bg-blue-600 text-white font-black shadow-xl shadow-primary/25 transition-all duration-300">
                            Choose Standard
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="anti-gravity-card rounded-xl p-8 flex flex-col bg-white">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Premium</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold text-slate-900">$50</span>
                                <span className="text-slate-500 font-medium">/hour</span>
                            </div>
                            <p className="mt-4 text-slate-500 text-sm leading-relaxed">Unrestricted access for market dominance and high-scale operations.</p>
                        </div>
                        <div className="space-y-4 flex-grow">
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-primary text-sm">check_circle</span>
                                <span className="text-slate-700 text-sm font-medium">Omnichannel Marketing</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-primary text-sm">check_circle</span>
                                <span className="text-slate-700 text-sm font-medium">Custom Content Creation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-primary text-sm">check_circle</span>
                                <span className="text-slate-700 text-sm font-medium">24/7 Dedicated Support</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-primary text-sm">check_circle</span>
                                <span className="text-slate-700 text-sm font-medium">ROI Optimization</span>
                            </div>
                        </div>
                        <button className="mt-10 w-full py-3 rounded-xl border-2 border-primary/20 hover:border-primary/50 text-primary font-bold transition-all duration-300">
                            Choose Premium
                        </button>
                    </div>
                </div>

                {/* Dashboard Preview & Divider */}
                <div className="mt-32 w-full max-w-5xl relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-200 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative bg-white rounded-2xl overflow-hidden aspect-video flex items-center justify-center border border-slate-200 shadow-2xl">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWwPKRPjKVbNGg2_5D8Kg2Pti_Ddax07uBPtHvzc1Nkm_FL6I9VcqwZ2VyrkrPaXQ6PntIImyhgIjqayQUlAk84m6C-5OgVcnpYilEtc3-Nf84bE59879IOWZYcLwGg_FC6_XyycCXxFOdfiP2nxjuw8G-pTfxGzL0VC7TDUcqr0oWsgd7cjyoEJf-HSjib60vffYH8NmDpkOKUgGq2Nd4ElAdsBgcSJ47zLZyRfMK3RQNnhlkx9e-J4n-xASF2Mh6h6zn1oPrA3Oa"
                            alt="Marketing Dashboard"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
                            <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-black mb-3">Nashif Ali Analytics</p>
                            <h4 class="text-2xl font-extrabold text-navy-deep">Data-Driven Excellence</h4>
                        </div>
                    </div>
                </div>

                <div className="w-full py-16 flex justify-center opacity-60">
                    <div className="flex gap-6 items-center">
                        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                        <div className="w-16 h-px bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/60"></div>
                        <div className="w-16 h-px bg-slate-200"></div>
                        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
