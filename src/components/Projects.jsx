import React from 'react';

const Projects = () => {
    return (
        <section className="py-24 px-6 md:px-0" id="projects">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-12 h-[2px] bg-primary"></span>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">Digital Marketer Portfolio</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
                            Selected Work
                        </h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            Strategically scaling brands through data-driven e-commerce marketing and disruptive clean tech campaigns.
                        </p>
                    </div>
                    <div className="flex items-center group cursor-pointer">
                        <a href="#" className="text-primary font-bold text-sm tracking-widest uppercase group-hover:mr-2 transition-all">View all projects</a>
                        <span className="material-icons text-primary text-xl ml-2 group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                    {/* Project 1 */}
                    <div className="group cursor-pointer">
                        <div className="project-card bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-C-uoPypUmgwyCIa42e0qbOWU-BPIFTcKzQB_DjoyA9sfJTm7P6KcGCB--TTFoX1JYPcRK6G9NjLcAD5VxGFwuvQb15zsJ0rc-Gu9qkC9h849JTD2r3Og2ItC0pTDIV4poRuNXnDLzXlMpEycVTPyxjFex9xmiNDy-RACfSNvmJlWNLlRpoBMhRqnE-PkQ3il5F9UOEDPPSTb0__HjGtHU9QzDWViWx_iA261y0Hn2o0NU9yNGbTlGlPd_roYQGzm5fXMz1CF_t85"
                                    alt="Aura Beauty Project"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-10">
                                <div className="flex gap-2 mb-4">
                                    <span className="glass-tag text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Branding</span>
                                    <span className="glass-tag text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">E-Commerce</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">Aura Beauty</h3>
                                <p className="text-slate-500 line-clamp-1 mb-0">Redefining luxury organic skincare with a mobile-first digital shopping experience.</p>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group cursor-pointer">
                        <div className="project-card bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCePJmDKw7C3ELOCS_WIJwMtrBZERSVcCYch68JalLSNcCCOJ-swAvMrWDsxoBRVALRmHBivvisDChyVp4FsXG5L9gxh8jWEKu3QuKLTFpSlmE3UcaYS0lMYlF4S8pfl_VTAjr4cbK8OPlXOF_ec9E7EJM5bwbG9jfq9VHG7U45ejtn7xh0MYrNObflfWeg_HUbfWd3pXnr0-BENM4NBqju7TD7MEHyUGgWlevDtIDICvLHQYHispsOWfBrBsrBujyl7czF7pl1waJM"
                                    alt="Scent & Co Project"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-10">
                                <div className="flex gap-2 mb-4">
                                    <span className="glass-tag text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Ads</span>
                                    <span className="glass-tag text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Growth</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">Scent & Co.</h3>
                                <p className="text-slate-500 line-clamp-1 mb-0">Multi-channel performance marketing for a direct-to-consumer fragrance disruptor.</p>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="group cursor-pointer">
                        <div className="project-card bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJHBqNBdhjKY8ftksjvOPIAJ-uv5t7PdLlzSQwn0yz81f-qMMpd2mhzP_NzXbfy8MHaF9r3eG-473FJ9u61kbXShy94xKHZXm76ri5FLaJAqTrgRWzuUk9OUuyRS5ThU29QwFnGnb7ZzKfwg-ZOiapQKy_dv_Qs3867AN3es83Bh-IsnCu6a-B4ddQfdke0Rq1tioxpK6BEFENocc6kXukqXaY6cS_GKVksU_xwdMIGdIVbe2lc6cbwsk15pTv1Pou4eaEBj-14GGR"
                                    alt="Masterclass Pro Project"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-10">
                                <div className="flex gap-2 mb-4">
                                    <span className="glass-tag text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Marketing</span>
                                    <span className="glass-tag text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Strategy</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">Masterclass Pro</h3>
                                <p className="text-slate-500 line-clamp-1 mb-0">Elevating authority through content strategy and precision-targeted ad funnels.</p>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="group cursor-pointer">
                        <div className="project-card bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBceXhcTLOiuWMbcUAWqTcjMYigUh8pZqwkkBb200C4xmloqCqmMgsmeNd3c5jCoYlRPa96LZWi3Wo4a6Mru_rU5K57pfwEmkSYolxp8NDCadVG2or7vwn3cwEqhGXR5t37gypUHvTlJfkAe9Jx-ROdYDvHuWVNCzRLtJJ0yf7uo4WfaYQ_6B_D0_-MatN0dV8axoUxNJNBRKhZHebgUSZgo4HZQ5vVxH2VCkONoS8AEXdr-QfH8Gm3Vou2r-7hEjn-16qdiq2uwMZA"
                                    alt="EcoDrive Systems Project"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-10">
                                <div className="flex gap-2 mb-4">
                                    <span className="glass-tag text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Sustainability</span>
                                    <span className="glass-tag text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">GTM Strategy</span>
                                </div>
                                <h3 class="text-2xl font-bold mb-3 text-slate-900">EcoDrive Systems</h3>
                                <p class="text-slate-500 line-clamp-1 mb-0">GTM strategy for a next-gen renewable energy solution targeting urban centers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-32 text-center">
                    <button className="bg-primary text-white font-bold px-10 py-5 rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 text-lg">
                        Get My Full Deck
                    </button>
                    <p className="mt-6 text-sm font-semibold text-slate-400 uppercase tracking-widest">Available for new opportunities in 2024</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
