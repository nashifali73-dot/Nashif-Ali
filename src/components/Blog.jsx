import React from 'react';

const Blog = () => {
    return (
        <>
            <section className="py-24 px-6 relative" id="blog">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[2px] bg-primary"></span>
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Insights & Updates</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
                            Our Latest News <span className="text-slate-400">& Blogs</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-xl font-medium leading-relaxed">
                            Exploring the intersection of performance marketing, consumer psychology, and the future of digital retail.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Blog Post 1 */}
                        <article className="group blog-card anti-gravity-1">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500">
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-C-uoPypUmgwyCIa42e0qbOWU-BPIFTcKzQB_DjoyA9sfJTm7P6KcGCB--TTFoX1JYPcRK6G9NjLcAD5VxGFwuvQb15zsJ0rc-Gu9qkC9h849JTD2r3Og2ItC0pTDIV4poRuNXnDLzXlMpEycVTPyxjFex9xmiNDy-RACfSNvmJlWNLlRpoBMhRqnE-PkQ3il5F9UOEDPPSTb0__HjGtHU9QzDWViWx_iA261y0Hn2o0NU9yNGbTlGlPd_roYQGzm5fXMz1CF_t85"
                                        alt="Marketing Trends"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="glass-tag text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Strategy</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                        <span className="material-icons text-sm">calendar_today</span>
                                        <span>October 24, 2023</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors leading-tight">Mastering E-commerce Retention in 2024</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                        Discover the shift from acquisition-heavy models to community-driven retention strategies that actually stick in a crowded marketplace.
                                    </p>
                                    <a href="#" className="inline-flex items-center text-primary font-bold text-sm group/link">
                                        Read More
                                        <span className="material-icons ml-1 text-lg group-hover/link:translate-x-1 transition-transform">chevron_right</span>
                                    </a>
                                </div>
                            </div>
                        </article>

                        {/* Blog Post 2 */}
                        <article className="group blog-card anti-gravity-2">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500">
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJHBqNBdhjKY8ftksjvOPIAJ-uv5t7PdLlzSQwn0yz81f-qMMpd2mhzP_NzXbfy8MHaF9r3eG-473FJ9u61kbXShy94xKHZXm76ri5FLaJAqTrgRWzuUk9OUuyRS5ThU29QwFnGnb7ZzKfwg-ZOiapQKy_dv_Qs3867AN3es83Bh-IsnCu6a-B4ddQfdke0Rq1tioxpK6BEFENocc6kXukqXaY6cS_GKVksU_xwdMIGdIVbe2lc6cbwsk15pTv1Pou4eaEBj-14GGR"
                                        alt="Data Analytics"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="glass-tag text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Analytics</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                        <span className="material-icons text-sm">calendar_today</span>
                                        <span>October 12, 2023</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors leading-tight">The Death of Third-Party Cookies</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                        How digital marketers are pivoting to first-party data collection and contextual advertising to maintain campaign performance.
                                    </p>
                                    <a href="#" className="inline-flex items-center text-primary font-bold text-sm group/link">
                                        Read More
                                        <span className="material-icons ml-1 text-lg group-hover/link:translate-x-1 transition-transform">chevron_right</span>
                                    </a>
                                </div>
                            </div>
                        </article>

                        {/* Blog Post 3 */}
                        <article className="group blog-card anti-gravity-3">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500">
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCePJmDKw7C3ELOCS_WIJwMtrBZERSVcCYch68JalLSNcCCOJ-swAvMrWDsxoBRVALRmHBivvisDChyVp4FsXG5L9gxh8jWEKu3QuKLTFpSlmE3UcaYS0lMYlF4S8pfl_VTAjr4cbK8OPlXOF_ec9E7EJM5bwbG9jfq9VHG7U45ejtn7xh0MYrNObflfWeg_HUbfWd3pXnr0-BENM4NBqju7TD7MEHyUGgWlevDtIDICvLHQYHispsOWfBrBsrBujyl7czF7pl1waJM"
                                        alt="Branding"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="glass-tag text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Branding</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                        <span className="material-icons text-sm">calendar_today</span>
                                        <span>September 28, 2023</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors leading-tight">Minimalist Branding: Less is More</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                        Analyzing why high-end perfume and beauty brands are opting for stark, minimalist aesthetics to convey premium value.
                                    </p>
                                    <a href="#" className="inline-flex items-center text-primary font-bold text-sm group/link">
                                        Read More
                                        <span className="material-icons ml-1 text-lg group-hover/link:translate-x-1 transition-transform">chevron_right</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-6 bg-slate-50" id="faq">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Questions? <span className="text-primary">Look Here</span></h2>
                        <p className="text-slate-500 font-medium">Clear answers to common inquiries about my workflow and services.</p>
                    </div>
                    <div className="space-y-4">
                        <details className="group accordion-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm" open>
                            <summary className="accordion-trigger flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg select-none transition-colors text-slate-900">
                                What marketing services do you specialize in?
                                <span className="material-icons transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                I specialize in end-to-end digital marketing solutions including performance ads, brand strategy, e-commerce optimization, and data-driven content marketing tailored for premium brands and tech startups.
                            </div>
                        </details>

                        <details className="group accordion-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <summary className="accordion-trigger flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg select-none transition-colors text-slate-900">
                                How long does a typical project take?
                                <span className="material-icons transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                Project timelines vary depending on complexity. A comprehensive brand audit usually takes 2 weeks, while a full GTM (Go-To-Market) strategy and implementation can range from 2 to 4 months.
                            </div>
                        </details>

                        <details className="group accordion-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <summary className="accordion-trigger flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg select-none transition-colors text-slate-900">
                                Do you work with international clients?
                                <span className="material-icons transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                Yes, I work with brands worldwide. Being based in India allows me to provide global quality marketing strategies with a unique perspective on diverse markets.
                            </div>
                        </details>

                        <details className="group accordion-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <summary className="accordion-trigger flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg select-none transition-colors text-slate-900">
                                What industries do you have experience in?
                                <span className="material-icons transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                I have extensive experience in Beauty & Personal Care, Luxury Goods, EdTech, and Clean Energy startups. I thrive on translating complex value propositions into clear, high-converting digital campaigns.
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
