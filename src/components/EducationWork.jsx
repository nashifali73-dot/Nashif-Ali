import React from 'react';

const EducationWork = () => {
    return (
        <section className="py-24 px-6 relative" id="education-work">
            <main className="max-w-7xl mx-auto">
                <header className="mb-16">
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        <span className="w-8 h-px bg-primary"></span>
                        Education & Work
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        My Academic and <br className="hidden md:block" /> Professional <span className="text-primary">Journey</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Education Column */}
                    <section>
                        <div className="flex items-center gap-3 mb-10">
                            <span className="material-icons text-primary bg-blue-100 p-2 rounded-lg">school</span>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Education</h2>
                        </div>

                        <div className="relative space-y-8 pl-4">
                            {/* Timeline Line */}
                            <div className="absolute left-[23px] top-2 bottom-2 w-0.5 bg-blue-200"></div>

                            {/* Item 1 */}
                            <div className="relative pl-12 group">
                                <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                                    <span className="material-icons text-primary text-xl">school</span>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <span className="inline-block text-primary font-medium text-sm mb-2 px-3 py-1 bg-blue-50 rounded-full">Feb 2026 - May 2026</span>
                                    <h3 className="text-xl font-bold mb-1 text-slate-900">Digital Marketing Certification</h3>
                                    <p className="text-slate-600 font-medium">Beegains Academy</p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="relative pl-12 group">
                                <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                                    <span className="material-icons text-primary text-xl">workspace_premium</span>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <span className="inline-block text-primary font-medium text-sm mb-2 px-3 py-1 bg-blue-50 rounded-full">2026</span>
                                    <h3 className="text-xl font-bold mb-1 text-slate-900">Meta Certified Digital Marketing Associate</h3>
                                    <p className="text-slate-600 font-medium">Meta</p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="relative pl-12 group">
                                <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                                    <span className="material-icons text-primary text-xl">history_edu</span>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <span className="inline-block text-primary font-medium text-sm mb-2 px-3 py-1 bg-blue-50 rounded-full">2020 - 2023</span>
                                    <h3 className="text-xl font-bold mb-1 text-slate-900">BA Economics</h3>
                                    <p className="text-slate-600 font-medium">University</p>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="relative pl-12 group">
                                <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                                    <span className="material-icons text-primary text-xl">military_tech</span>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <span className="inline-block text-primary font-medium text-sm mb-2 px-3 py-1 bg-blue-50 rounded-full">2024</span>
                                    <h3 className="text-xl font-bold mb-1 text-slate-900">Google & HubSpot Certifications</h3>
                                    <p className="text-slate-600 font-medium">Online</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Work Column */}
                    <section>
                        <div className="flex items-center gap-3 mb-10">
                            <span className="material-icons text-primary bg-blue-100 p-2 rounded-lg">work</span>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Work Experience</h2>
                        </div>

                        <div className="relative space-y-8 pl-4">
                            {/* Timeline Line */}
                            <div className="absolute left-[23px] top-2 bottom-2 w-0.5 bg-blue-200"></div>

                            {/* Current Job */}
                            <div className="relative pl-12 group">
                                <div className="absolute left-0 top-0 w-12 h-12 bg-primary border-4 border-white rounded-full flex items-center justify-center z-10 shadow-lg">
                                    <span className="material-icons text-white text-xl">business_center</span>
                                </div>
                                <div className="bg-primary p-8 rounded-3xl shadow-xl shadow-blue-500/20 text-white relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                                    <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
                                    <div className="relative z-10">
                                        <span className="inline-block text-blue-100 font-medium text-sm mb-3 px-3 py-1 bg-white/20 rounded-full">2026 - Present</span>
                                        <h3 className="text-2xl font-bold mb-1">Digital Marketing Intern</h3>
                                        <p className="text-blue-100 font-medium mb-4">Beegains IT Solutions</p>
                                        <p className="text-blue-50 leading-relaxed text-sm opacity-90">
                                            Managing social media campaigns, creating content strategies, and optimizing ad performance for clients. Focused on driving measurable ROI through data-backed strategies.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Future Placeholder */}
                            <div className="relative pl-12 group opacity-50">
                                <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center z-10">
                                    <span className="material-icons text-slate-400 text-xl">add</span>
                                </div>
                                <div className="border-2 border-dashed border-slate-200 p-6 rounded-2xl">
                                    <h3 className="text-slate-400 font-medium italic">Building my professional future...</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </section>
    );
};

export default EducationWork;
