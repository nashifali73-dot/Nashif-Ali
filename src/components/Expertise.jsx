import React from 'react';

const Expertise = () => {
    const services = [
        {
            icon: 'campaign',
            title: 'Marketing Strategy',
            description: 'Comprehensive 360° digital audit and strategic roadmap tailored to your specific business goals and target audience.',
        },
        {
            icon: 'analytics',
            title: 'SEO & Performance',
            description: 'Rank higher on search engines and optimize your paid performance to maximize ROI through data-driven technical SEO.',
        },
        {
            icon: 'brush',
            title: 'Creative Design',
            description: 'Engaging visual content, high-converting ad creatives, and professional video editing that captures and keeps attention.',
        },
    ];

    return (
        <section id="service" className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-2xl">
                    <p className="text-primary font-bold tracking-widest uppercase mb-4">My Expertise</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                        Premium Solutions to <br /> Scale Your Digital Presence
                    </h2>
                </div>
                <div className="pb-2">
                    <p className="text-slate-500 max-w-xs">
                        Crafting bespoke marketing funnels that convert visitors into loyal customers.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-primary transition-all group">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-icons text-3xl">{service.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            {service.description}
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                            Learn more <span className="material-icons">arrow_forward</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Expertise;
