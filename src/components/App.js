"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import "./App.css";

/* ═══════════════════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════════════════ */
const site = {
  name:         "Cleaner Jo",
  nameAr:       "كلينر جو",
  phone:        "+962790350319",
  phoneDisplay: "+962 790 350 319",
  whatsappUrl:  "https://wa.me/962790350319",
  instagramUrl: "https://www.instagram.com/cleaner.for.cleaning?igsh=aXEyaGNzZ3Z0OXRs",
  facebookUrl:  "https://www.facebook.com/share/18eAL3JLfV/",
};

const navLinks = [
  { id: "hero",         labelAr: "الرئيسية"   },
  { id: "services",     labelAr: "خدماتنا"    },
  { id: "how-it-works", labelAr: "كيف نعمل"  },
  { id: "why-us",       labelAr: "لماذا نحن"  },
  { id: "about",        labelAr: "من نحن"     },
  { id: "contact",      labelAr: "تواصل معنا" },
];

const postConstruction = [
  { title: "تنظيف الشقق",     image: "/t222.webp" },
  { title: "تنظيف المكاتب",   image: "/office.jpg" },
  { title: "تنظيف المطاعم",   image: "/coffee222.webp"  },
  { title: "تنظيف الشاليهات", image: "/Chalets222.jpg" },
  { title: "تنظيف الواجهات الزجاجية", image: "/glass222.jpg" },
    { title: "جلي الحجر", image: "/stone222.jpeg" },
];

const dryCleaning = [
  { title: "دراكلين الفرشات",  image: "/mattress222.jpg" },
  { title: "دراكلين الكنب",    image: "/sofa222.jpeg" },
  { title: "دراكلين الستائر",  image: "/brady222.jpg" },
  { title: "دراكلين السيارات", image: "/car222.jpg" },
  { title: "دراكلين السجاد",  image: "/carpet222.jpg"  },
];

const serviceGroups = [
  {
    label:     "تنظيف الشقق بعد التشطيب",
    desc:      "تنظيف عميق للمساحات بعد التشطيب أو الانتقال، مع عناية بالتفاصيل الدقيقة.",
    items:     postConstruction,
    gridClass: "",
  },
  {
    label:     "دراكلين المفروشات والأثاث",
    desc:      "تنظيف جاف وعملي للمفروشات اليومية لتعود بمظهر أنظف وأكثر راحة.",
    items:     dryCleaning,
    gridClass: "services__grid--5",
  },
];

const heroStats = [
  { value: "+5",   label: "سنوات الخبرة"  },
  { value: "+10K", label: "عميل راضٍ"    },
  { value: "100%", label: "جودة مضمونة" },
];

const checklistItems = [
  "كادر محترف ومدرّب على أعلى المستويات",
  "مواد تنظيف صديقة للبيئة وآمنة للأطفال",
  "أسعار تنافسية وشفافة بدون رسوم خفية",
  "ضمان الرضا 100% أو إعادة الخدمة مجاناً",
  "دعم عملاء متاح على مدار اليوم",
];

const highlights = [
  { value: "+5",   titleAr: "سنوات الخبرة", descAr: "في مجال التنظيف الاحترافي"  },
  { value: "+10K", titleAr: "عميل راضٍ",    descAr: "خدمنا آلاف العملاء بنجاح"  },
  { value: "100%", titleAr: "جودة مضمونة", descAr: "رضاك هو أولويتنا الأولى"   },
];

const whyChooseUs = [
  { icon: "👥", title: "فريق مدرب",         desc: "كادر متخصص مدرب على أعلى معايير التنظيف الاحترافي." },
  { icon: "⚙️", title: "معدات حديثة",       desc: "نستخدم أحدث الأجهزة والمواد الفعّالة والآمنة." },
  { icon: "🗓️", title: "مواعيد مرنة",       desc: "نلتزم بمواعيدك ونتكيف مع جدولك بكل سهولة." },
  { icon: "💰", title: "أسعار مناسبة",      desc: "خدمات عالية الجودة بأسعار تنافسية تناسب الجميع." },
  { icon: "🔍", title: "اهتمام بالتفاصيل",  desc: "نعتني بكل زاوية وبقعة حتى تكتمل الصورة تماماً." },
  { icon: "⚡", title: "تواصل سريع",        desc: "ردود فورية عبر واتساب والهاتف في أي وقت." },
];

const workSteps = [
  { num: "01", title: "تواصل معنا",            desc: "اتصل بنا أو راسلنا عبر واتساب وأخبرنا بما تحتاجه." },
  { num: "02", title: "اختر الخدمة",            desc: "نساعدك في اختيار باقة التنظيف المناسبة لمساحتك." },
  { num: "03", title: "نحدد الموعد",            desc: "نتفق على الوقت المناسب لك ونلتزم به تماماً." },
  { num: "04", title: "نستلم التنظيف باحتراف", desc: "يصل فريقنا ويُنجز المهمة بأعلى مستوى من الجودة." },
];

const beforeAfterItems = [
  {
    label:  "كنب عائلي",
    before: "/sofa before.jpeg",
    after:  "/sofa after.jpeg",
  },
  {
    label:  "شقة بعد تشطيب",
    before: "/tbefore222.jpeg",
    after:  "/tafter222.jpeg",
  },
  {
    label:  " سيارة ",
    before: "/car before.jpeg",
    after:  "/car after.jpeg",
  },
];

const faqItems = [
  { q: "هل تقدمون تنظيف بعد التشطيب؟",  a: "نعم، نقدم خدمة تنظيف شاملة بعد التشطيب تشمل إزالة الأتربة والبقايا من جميع الأسطح والزوايا والأرضيات." },
  { q: "هل يوجد تنظيف كنب وفرشات؟",      a: "بالطبع، نمتلك معدات تنظيف جاف متخصصة للكنب والمراتب والسجاد تُعيد لها نضارتها ونظافتها." },
  { q: "كيف يتم الحجز؟",                 a: "يمكنك التواصل معنا عبر الهاتف أو واتساب أو ملء النموذج أدناه، وسنرتب الموعد المناسب لك فوراً." },
  { q: "هل يمكن التواصل عبر واتساب؟",    a: "نعم، نحن متاحون على واتساب طوال اليوم. فقط اضغط على زر الواتساب وابدأ المحادثة مباشرة." },
  { q: "هل الأسعار ثابتة؟",              a: "الأسعار تعتمد على حجم المساحة ونوع الخدمة، لكننا نضمن دائماً أسعاراً شفافة ومنافسة بدون أي تكاليف خفية." },
];

const serviceOptions = [
  "تنظيف شقة / منزل",
  "تنظيف بعد التشطيب",
  "تنظيف مكتب / مطعم / شاليه",
  "تنظيف كنب",
  "تنظيف فرشات / مراتب",
  "تنظيف ستائر",
  "تنظيف سيارة",
  "تنظيف نوافذ",
  "خدمة أخرى",
];

/* ═══════════════════════════════════════════════════════════
   HOOK: scroll-reveal via IntersectionObserver
═══════════════════════════════════════════════════════════ */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ═══════════════════════════════════════════════════════════
   WhatsApp SVG Icon
═══════════════════════════════════════════════════════════ */
function WhatsAppIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.739 5.476 2.034 7.783L0 32l8.465-2.018A15.92 15.92 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.538a13.463 13.463 0 01-6.822-1.823l-.49-.29-5.023 1.198 1.22-4.89-.32-.502A13.465 13.465 0 012.46 16C2.46 8.556 8.556 2.46 16 2.46S29.538 8.556 29.538 16 23.444 29.538 16 29.538zm7.4-10.052c-.405-.203-2.396-1.182-2.768-1.316-.372-.135-.643-.203-.913.202-.27.405-1.047 1.316-1.283 1.587-.236.27-.473.304-.878.101-.405-.203-1.71-.63-3.255-2.011-1.203-1.074-2.015-2.4-2.25-2.806-.236-.405-.025-.624.177-.826.182-.18.405-.473.608-.71.202-.236.27-.405.405-.675.135-.27.067-.506-.034-.71-.101-.203-.913-2.2-1.25-3.012-.33-.792-.665-.684-.913-.697l-.778-.013c-.27 0-.71.101-1.08.506-.372.405-1.42 1.385-1.42 3.38s1.453 3.921 1.655 4.192c.203.27 2.86 4.367 6.932 6.12.969.418 1.725.666 2.313.853.972.308 1.858.264 2.558.16.78-.116 2.397-.981 2.736-1.929.338-.947.338-1.76.236-1.929-.101-.168-.371-.27-.776-.472z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════ */
function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }, []);

  return (
    <nav
      className={`navbar${scrolled ? " scrolled" : ""}`}
      role="navigation"
      aria-label="القائمة الرئيسية"
    >
      <div className="navbar__inner">
        <button
          className="navbar__brand"
          onClick={() => scrollTo("hero")}
          aria-label="العودة إلى الصفحة الرئيسية"
        >
          <div className="navbar__logo-img">
            <Image src="/cleaner1.jpeg" alt="شعار كلينر جو" width={42} height={42} />
          </div>
          <span className="navbar__brand-text" dir="ltr">
            Cleaner <span>Jo</span>
          </span>
          <span className="navbar__brand-ar" dir="rtl">كلينر <span>جو</span></span>
        </button>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="navbar__link">
              {link.labelAr}
            </button>
          ))}
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          <svg
            className={`hamburger-icon${isOpen ? " open" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`navbar__mobile-menu${isOpen ? " open" : ""}`} aria-hidden={!isOpen}>
        <div className="navbar__mobile-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="navbar__mobile-link"
              tabIndex={isOpen ? 0 : -1}
            >
              {link.labelAr}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════ */
function Hero() {
  // Array of images to rotate automatically
  const heroImages = [
    "/cleaner1.jpeg",
    "/tbefore222.jpeg",
     "/car222.jpg",
    "/sofa222.jpeg",
    "/mattress222.jpg",
   "/car52.jpg",
    "/brady222.jpg",
    "/carpet222.jpg",
    "/car51.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    e.currentTarget.style.transform          = `rotateX(${-y * 14}deg) rotateY(${x * 14}deg)`;
    e.currentTarget.style.animationPlayState = "paused";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform          = "";
    e.currentTarget.style.animationPlayState = "running";
  };

  return (
    <section id="hero" className="hero" aria-label="قسم الرئيسية" style={{ minHeight: 'max(100svh, 600px)' }}>
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />
      <div className="hero__ring"               aria-hidden="true" />
      <div className="hero__ring hero__ring--2" aria-hidden="true" />

      <div className="hero__content">
        {/* ── Left: Image ── */}
        <div className="hero__image-col">
          <div className="hero__image-wrap">
            <div
              className="hero__image-frame"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              role="img"
              aria-label="صورة موظفة كلينر جو"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt="كلينر جو - خدمات تنظيف احترافية"
                width={320}
                height={320}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          <p className="hero__tagline">من أصعب البقع لأدق التفاصيل ✨</p>
          <div className="hero__stats" aria-label="إحصائيات الشركة">
            {heroStats.map((s) => (
              <div className="hero__stat" key={s.label}>
                <div className="hero__stat-value">{s.value}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Text ── */}
        <div className="hero__text-col">
          <span className="hero__eyebrow">{site.name} | خدمات تنظيف احترافية</span>
          <h1 className="hero__title">
            شركة كلينر جو
            <br />
            <span className="hero__title-accent glitter-text">لنظافة تفوق التوقعات</span>
          </h1>
          <ul className="hero__services-list" aria-label="أبرز خدماتنا">
            <li className="hero__service-item glitter-text">تنظيف الكنب والسجاد باحترافية عالية</li>
            <li className="hero__service-item glitter-text">تنظيف الشقق والمنازل بعد التشطيب</li>
            <li className="hero__service-item glitter-text">تنظيف المكاتب والمطاعم والشاليهات</li>
            <li className="hero__service-item glitter-text">استخدام أحدث المعدات وبكادر متخصص</li>
          </ul>
          <p className="hero__desc glitter-text">
            نحن في <strong>{site.nameAr}</strong> نقدم خدمات تنظيف متكاملة بأعلى معايير الجودة.
            من أصعب البقع إلى أدق التفاصيل، نحرص على تقديم أفضل النتائج لنمنحك بيئة نظيفة وصحية.
          </p>
          <div className="hero__cta-row">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              aria-label="احجز عبر واتساب"
            >
              <WhatsAppIcon className="btn__icon" />
              احجز الآن
            </a>
            <a href={`tel:${site.phone}`} className="btn btn--outline" aria-label="اتصل بنا">
              اتصل بنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SERVICE CARD
═══════════════════════════════════════════════════════════ */
function ServiceCard({ item }) {
  return (
    <article className="service-card" aria-label={item.title}>
      <div className="service-card__image">
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="service-card__label">{item.title}</div>
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════
   SERVICES
═══════════════════════════════════════════════════════════ */
function Services() {
  const [ref, visible] = useReveal();
  return (
    <section
      id="services"
      className={`services section-pad reveal${visible ? " visible" : ""}`}
      aria-label="قسم الخدمات"
      ref={ref}
    >
      <div className="container">
        <header className="services__header">
          <span className="section-label">SERVICES</span>
          <h2 className="section-title ar">خدماتنا المتميزة</h2>
          <p className="section-subtitle ar">نقدم خدمات تنظيف احترافية لجميع احتياجاتك</p>
        </header>

        {serviceGroups.map((group) => (
          <div className="services__group" key={group.label}>
            <h3 className="services__group-title">{group.label}</h3>
            <div className={`services__grid${group.gridClass ? ` ${group.gridClass}` : ""}`}>
              {group.items.map((item) => (
                <ServiceCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   BEFORE / AFTER
═══════════════════════════════════════════════════════════ */
function BeforeAfter() {
  const [ref, visible] = useReveal();
  return (
    <section
      id="before-after"
      className={`before-after section-pad reveal${visible ? " visible" : ""}`}
      aria-label="قبل وبعد التنظيف"
      ref={ref}
    >
      <div className="container">
        <header className="services__header">
          <span className="section-label">RESULTS</span>
          <h2 className="section-title ar">قبل وبعد التنظيف</h2>
          <p className="section-subtitle ar">شاهد الفرق الحقيقي الذي تصنعه يد كلينر جو</p>
        </header>

        <div className="ba__grid">
          {beforeAfterItems.map((item) => (
            <div className="ba__card" key={item.label}>
              <div className="ba__split">
                <div className="ba__half ba__half--before">
                  <Image
                    src={item.before}
                    alt={`قبل تنظيف ${item.label}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 90vw, 33vw"
                  />
                  <span className="ba__badge ba__badge--before">قبل</span>
                </div>
                <div className="ba__divider" aria-hidden="true">
                  <div className="ba__divider-line" />
                  <div className="ba__divider-icon">↔</div>
                </div>
                <div className="ba__half ba__half--after">
                  <Image
                    src={item.after}
                    alt={`بعد تنظيف ${item.label}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 90vw, 33vw"
                  />
                  <span className="ba__badge ba__badge--after">بعد</span>
                </div>
              </div>
              <div className="ba__caption">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   HOW IT WORKS
═══════════════════════════════════════════════════════════ */
function HowItWorks() {
  const [ref, visible] = useReveal();
  return (
    <section
      id="how-it-works"
      className={`how-it-works section-pad reveal${visible ? " visible" : ""}`}
      aria-label="كيف نعمل"
      ref={ref}
    >
      <div className="container">
        <header className="services__header">
          <span className="section-label">PROCESS</span>
          <h2 className="section-title ar">كيف نعمل؟</h2>
          <p className="section-subtitle ar">أربع خطوات بسيطة تفصلك عن مساحة نظيفة تماماً</p>
        </header>

        <div className="steps__grid">
          {workSteps.map((step, i) => (
            <div
              className="step-card"
              key={step.num}
              style={{ "--delay": `${i * 0.1}s` }}
            >
              <div className="step-card__num" aria-hidden="true">{step.num}</div>
              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__desc">{step.desc}</p>
              {i < workSteps.length - 1 && (
                <div className="step-card__arrow" aria-hidden="true">←</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   WHY CHOOSE US
═══════════════════════════════════════════════════════════ */
function WhyChooseUs() {
  const [ref, visible] = useReveal();
  return (
    <section
      id="why-us"
      className={`why-choose section-pad reveal${visible ? " visible" : ""}`}
      aria-label="لماذا تختارنا"
      ref={ref}
    >
      <div className="container">
        <header className="services__header">
          <span className="section-label">WHY US</span>
          <h2 className="section-title ar">لماذا تختار كلينر جو؟</h2>
          <p className="section-subtitle ar">ستة أسباب تجعلنا الخيار الأول لآلاف العملاء</p>
        </header>

        <div className="why__grid">
          {whyChooseUs.map((item, i) => (
            <div
              className="why-card"
              key={item.title}
              style={{ "--delay": `${i * 0.08}s` }}
            >
              <div className="why-card__icon" aria-hidden="true">{item.icon}</div>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════════ */
function About() {
  const [ref, visible] = useReveal();
  return (
    <section
      id="about"
      className={`about section-pad reveal${visible ? " visible" : ""}`}
      aria-label="قسم من نحن"
      ref={ref}
    >
      <div className="container">
        <div className="about__grid">
          <div className="about__text-col">
            <span className="section-label">ABOUT US</span>
            <span className="about__accent-line" aria-hidden="true" />
            <h2 className="about__title">من نحن؟</h2>
            <p className="about__body">
              <strong>كلينر جو</strong> شركة تنظيف احترافية متخصصة في تقديم خدمات التنظيف الشامل
              للمنازل والمكاتب والمطاعم والشاليهات في الأردن. نعمل بكادر مدرّب وذو خبرة عالية،
              ونستخدم أحدث المعدات ومواد التنظيف الصديقة للبيئة.
            </p>
            <p className="about__body">
              نؤمن بأن الثقة هي أساس العلاقة مع عملائنا. لذلك نلتزم بأعلى معايير الجودة والمهنية
              في كل خدمة نقدمها، ونضمن رضاك التام أو نعيد الخدمة مجاناً.
            </p>
            <ul className="about__checklist" aria-label="التزاماتنا">
              {checklistItems.map((item) => (
                <li key={item} className="about__check-item">
                  <span>{item}</span>
                  <span className="about__check-icon" aria-hidden="true">✓</span>
                </li>
              ))}
            </ul>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              aria-label="تواصل معنا عبر واتساب"
            >
              تواصل معنا الآن
            </a>
          </div>

          <div className="about__highlights" aria-label="إحصائيات الشركة">
            {highlights.map((h) => (
              <div key={h.titleAr} className="highlight-card">
                <div className="highlight-card__value">{h.value}</div>
                <div className="highlight-card__info">
                  <div className="highlight-card__title">{h.titleAr}</div>
                  <div className="highlight-card__desc">{h.descAr}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FAQ  (accordion with smooth animation)
═══════════════════════════════════════════════════════════ */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, visible] = useReveal();

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id="faq"
      className={`faq section-pad reveal${visible ? " visible" : ""}`}
      aria-label="الأسئلة الشائعة"
      ref={ref}
    >
      <div className="container">
        <header className="services__header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title ar">الأسئلة الشائعة</h2>
          <p className="section-subtitle ar">إجابات على أكثر الأسئلة التي يسألها عملاؤنا</p>
        </header>

        <div className="faq__list" dir="rtl">
          {faqItems.map((item, i) => (
            <div
              className={`faq__item${openIndex === i ? " faq__item--open" : ""}`}
              key={item.q}
            >
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{item.q}</span>
                <span className="faq__chevron" aria-hidden="true">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className="faq__answer"
                role="region"
                aria-hidden={openIndex !== i}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT  (WhatsApp prefilled message + service dropdown)
═══════════════════════════════════════════════════════════ */
function Contact() {
  const [ref, visible] = useReveal();
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });
  const [error,    setError]    = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, service, message } = formData;
    if (!name.trim())    return setError("يرجى إدخال اسمك الكامل.");
    if (!phone.trim())   return setError("يرجى إدخال رقم هاتفك.");
    if (!service)        return setError("يرجى اختيار الخدمة المطلوبة.");
    if (!message.trim()) return setError("يرجى كتابة رسالتك.");

    const cleanServiceOptions = [
      "تنظيف شقة / منزل",
      "تنظيف بعد التشطيب",
      "تنظيف مكتب / مطعم / شاليه",
      "تنظيف كنب",
      "تنظيف فرشات / مراتب",
      "تنظيف ستائر",
      "تنظيف سيارة",
      "تنظيف نوافذ",
      "خدمة أخرى",
    ];
    const serviceIndex = serviceOptions.indexOf(service);
    const cleanService = cleanServiceOptions[serviceIndex] || service.trim();

    const whatsappMessage = [
      "مرحباً كلينر جو",
      "",
      `الاسم: ${name.trim()}`,
      `الهاتف: ${phone.trim()}`,
      `الخدمة المطلوبة: ${cleanService}`,
      `الرسالة: ${message.trim()}`,
    ].join("\n");

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`${site.whatsappUrl}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
    setFormData({ name: "", phone: "", service: "", message: "" });
    setError("");
  };

  return (
    <section
      id="contact"
      className={`contact section-pad reveal${visible ? " visible" : ""}`}
      aria-label="قسم التواصل"
      ref={ref}
    >
      <div className="container">
        <header className="contact__header">
          <span className="section-label">CONTACT</span>
          <h2 className="section-title ar">تواصل معنا</h2>
          <p className="section-subtitle ar">نحن هنا لخدمتك — تواصل معنا الآن واحصل على عرض سعر مجاني</p>
        </header>

        <div className="contact__grid">
          {/* Info card */}
          <div className="glass-panel">
            <h3 className="contact__info-title">معلومات التواصل</h3>

            <div className="contact__detail">
              <div className="contact__detail-icon" aria-hidden="true">📞</div>
              <div className="contact__detail-text">
                <div className="contact__detail-label">رقم الهاتف</div>
                <a href={`tel:${site.phone}`} className="contact__detail-value" dir="ltr" style={{unicodeBidi:'isolate'}}>{site.phoneDisplay}</a>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon" aria-hidden="true">💬</div>
              <div className="contact__detail-text">
                <div className="contact__detail-label">واتساب</div>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact__detail-value">
                  تحدث معنا على واتساب
                </a>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon" aria-hidden="true">🕐</div>
              <div className="contact__detail-text">
                <div className="contact__detail-label">أوقات العمل</div>
                <div className="contact__detail-value">يومياً من 8 صباحاً – 6 مساءً</div>
              </div>
            </div>

            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp contact__wa-btn"
              aria-label="احجز عبر واتساب"
            >
              <WhatsAppIcon className="btn__icon" />
              احجز عبر واتساب
            </a>
          </div>

          {/* Form card */}
          <div className="glass-panel contact__form-card">
            <div className="contact__form-head">
              <span className="contact__form-badge">طلب خدمة</span>
              <h3 className="contact__form-title">أرسل لنا رسالة</h3>
              <p className="contact__form-note">
                املأ البيانات وسيتم فتح واتساب برسالة جاهزة ومنظمة.
              </p>
            </div>

            {error && <div className="form-error" role="alert">{error}</div>}

            <form onSubmit={handleSubmit} noValidate dir="rtl" className="contact__form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">الاسم الكامل</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="الاسم الكامل :"
                    className="form-input"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="مثال: 0790000000"
                    className="form-input"
                    autoComplete="tel"
                    dir="ltr"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">الخدمة المطلوبة</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">اختر الخدمة...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">رسالتك</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب تفاصيل المكان أو الخدمة المطلوبة..."
                  rows={5}
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary btn--full contact__submit-btn">
                <WhatsAppIcon className="btn__icon" />
                إرسال عبر واتساب
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════ */
function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand-col">
            <div className="footer__logo">
              <Image src="/cleaner1.jpeg" alt="شعار كلينر جو" width={44} height={44} />
              <span dir="ltr">Cleaner Jo</span>
            </div>
            <p className="footer__tagline">خدمات تنظيف احترافية في الأردن — لمساحة أنظف وحياة أفضل.</p>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp footer__wa"
              aria-label="تواصل معنا عبر واتساب"
            >
              <WhatsAppIcon className="btn__icon" />
              واتساب
            </a>
          </div>

          {/* Quick links */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">روابط سريعة</h4>
            <nav aria-label="روابط التذييل">
              {navLinks.slice(0, 5).map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)} className="footer__link">
                  {link.labelAr}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer__contact-col">
            <h4 className="footer__col-title">تواصل معنا</h4>
            <a href={`tel:${site.phone}`} className="footer__contact-item" aria-label="اتصل بنا">
  <span className="footer__icon" aria-hidden="true">📞</span>
  <span className="footer__phone" dir="ltr">{site.phoneDisplay}</span>
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer__contact-item" aria-label="واتساب">
              <span aria-hidden="true">💬</span> واتساب
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer__contact-item" aria-label="انستقرام">
              <span aria-hidden="true">📷</span> انستقرام
            </a>
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="footer__contact-item" aria-label="فيسبوك">
              <span aria-hidden="true">👍</span> فيسبوك
            </a>
            <p className="footer__hours">
              <span aria-hidden="true">🕐</span> يومياً 8 ص – 6 م
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} كلينر جو — جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   FLOATING WHATSAPP
═══════════════════════════════════════════════════════════ */
function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="تحدث معنا على واتساب"
      title="تحدث معنا على واتساب"
    >
      <WhatsAppIcon />
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════
   MOBILE CTA BAR  (mobile-only sticky bottom bar)
═══════════════════════════════════════════════════════════ */
function MobileCtaBar() {
  return (
    <div className="mobile-cta" role="complementary" aria-label="أزرار التواصل السريع">
      <a
        href={`tel:${site.phone}`}
        className="mobile-cta__btn mobile-cta__btn--call"
        aria-label="اتصل بنا الآن"
      >
        <span className="mobile-cta__icon-text" aria-hidden="true">📞</span>
        اتصال
      </a>
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta__btn mobile-cta__btn--wa"
        aria-label="تواصل عبر واتساب"
      >
        <WhatsAppIcon className="mobile-cta__icon" />
        واتساب
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP ROOT
═══════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Navbar />
      <main dir="rtl">
        <Hero />
        <Services />
        <BeforeAfter />
        <HowItWorks />
        <WhyChooseUs />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileCtaBar />
    </>
  );
}
