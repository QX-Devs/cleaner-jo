"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/components/App.css";

const site = {
  name: "Cleaner Jo",
  nameAr: "كلينر جو",
  phone: "+962790060152",
  phoneDisplay: "+962 790 060 152",
  whatsappUrl: "https://wa.me/962790060152",
};

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

const policySections = [
  {
    id: "overview",
    icon: "📋",
    title: "1. مقدمة ونطاق التطبيق",
    content: `نلتزم في "كلينر جو" (Cleaner Jo) لحلول وخدمات التنظيف الشاملة والاحترافية في المملكة الأردنية الهاشمية بحماية خصوصية زوارنا وعملائنا الكرام بأعلى معايير الأمان والشفافية.

تهدف هذه السياسة إلى توضيح كيفية جمع واستخدام وحماية البيانات الشخصية والمعلومات التي تزودنا بها عند استخدام موقعنا الإلكتروني، أو التواصل معنا عبر الهاتف أو تطبيق واتساب لتنسيق وحجز خدمات التنظيف.`,
  },
  {
    id: "data-collection",
    icon: "🔍",
    title: "2. البيانات التي نجمعها",
    content: `نجمع فقط المعلومات الضرورية والمخصصة لتقديم خدمة تنظيف عالية الجودة وتلبية تطلعاتكم:

• معلومات الاتصال الأساسية: مثل الاسم الشخصي، رقم الهاتف المحمول، وعنوان السكن أو موقع تقديم الخدمة في الأردن.
• تفاصيل طلب الخدمة: مثل نوع الخدمة المطلوب تنفيذها (تنظيف الشقق بعد التشطيب، غسيل الكنب والمراتب، تنظيف الستائر، تنظيف السجاد، أو تنظيف النوافذ والمكاتب)، والموعد المفضل للزيارة.
• المراسلات والاستفسارات: سجل المحادثات والرسائل المتبادلة معنا عبر الواتساب أو الاتصال المباشر لإدارة المواعيد وضمان جودة الخدمة.
• البيانات التقنية التلقائية: معلومات تصفح أساسية غير معرّفة لشخصيتك، مثل نوع المتصفح والجهاز المستخدم لتسريع استجابة الموقع وتسهيل التصفح.`,
  },
  {
    id: "data-usage",
    icon: "⚙️",
    title: "3. كيفية استخدام البيانات",
    content: `نستخدم المعلومات التي نجمعها للأغراض التالية فقط:

1. تنفيذ وتنظيم طلبات التنظيف وتحديد المواعيد المناسبة لك ولفرق العمل لدينا.
2. التواصل المباشر معك لإرسال تأكيدات المواعيد، الإجابة عن استفساراتك، وتقديم استشارات التنظيف المجانية.
3. التنسيق الدقيق مع طاقم التنظيف لتوفير المعدات والمواد الملائمة لطبيعة المكان.
4. قياس مستوى رضا العملاء ومتابعة ملاحظاتكم بعد إتمام الخدمة.
5. تحسين وتطوير أداء الموقع الإلكتروني وجعل تجربة الحجز والتواصل أكثر سهولة وسرعة.`,
  },
  {
    id: "data-protection",
    icon: "🛡️",
    title: "4. أمان البيانات والسرية المطلقة",
    content: `نولي أمان معلوماتك أولوية قصوى ونطبق إجراءات أمنية وفنية لمنع أي وصول غير مصرح به أو تسريب للبيانات:

• نلتزم بصرامة تامة بعدم بيع، أو تأجير، أو تداول، أو مشاركة بياناتك الشخصية مع أي أطراف ثالثة أو شركات تسويقية خارجية تحت أي ظرف.
• تظل كافة تفاصيل عناوين السكن والمعلومات الشخصية محصورة فقط ضمن نطاق إدارة المواعيد وطاقم التنظيف المكلّف بالخدمة.
• يتم التعامل مع جميع البيانات والمعاملات بأعلى درجات السرية والاحترافية.`,
  },
  {
    id: "third-party",
    icon: "🔗",
    title: "5. الروابط والخدمات الخارجية",
    content: `يتضمن موقعنا روابط سريعة ومباشرة للتواصل معنا عبر منصة واتساب (WhatsApp) والمكالمات الهاتفية المباشرة.

يُرجى العلم أن استخدام تطبيق الواتساب يخضع أيضاً لسياسة الخصوصية والشروط الخاصة بـ WhatsApp / Meta. نحن ننصح بمراجعة سياساتها الخاصة عند استخدام التطبيق.`,
  },
  {
    id: "cookies",
    icon: "🍪",
    title: "6. ملفات تعريف الارتباط (Cookies)",
    content: `يستخدم الموقع ملفات تعريف ارتباط (Cookies) تقنية بسيطة لتحسين سرعة تحميل الصفحات وتذكر تفضيلات التصفح العامة. يمكنك في أي وقت تعديل إعدادات المتصفح لديك لرفض ملفات تعريف الارتباط إذا كنت تفضل ذلك، دون أن يؤثر ذلك على تصفح المعلومات الأساسية في الموقع.`,
  },
  {
    id: "user-rights",
    icon: "⚖️",
    title: "7. حقوق العميل والتحكم بالبيانات",
    content: `بصفتك عميلاً محترماً في "كلينر جو"، تتمتع بالحقوق الكاملة التالية:

• حق الاستفسار: معرفة البيانات والمعلومات الشخصية المسجلة لدينا الخاصة برقمك.
• حق التعديل والتحديث: طلب تصحيح أي معلومة أو عنوان أو رقم هاتف في أي وقت.
• حق الحذف: طلب حذف كافة بياناتك ورسائلك من قاعدة بياناتنا فوراً عن طريق التواصل المباشر معنا عبر الواتساب أو الهاتف.`,
  },
  {
    id: "policy-updates",
    icon: "🔄",
    title: "8. التحديثات والتعديلات",
    content: `قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر للتوافق مع التحديثات التقنية أو التنظيمية في الأردن. يتم نشر أي تعديلات جديدة مباشرة على هذه الصفحة مع تحديث تاريخ "آخر تحديث". نوصي بمراجعة هذه الصفحة بشكل دوري.`,
  },
];

export default function PrivacyPolicyContent() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="privacy-page-wrapper">
      {/* ── NAVBAR ── */}
      <nav className="navbar scrolled" role="navigation" aria-label="شريط الملاحة">
        <div className="navbar__inner">
          <Link href="/" className="navbar__brand" aria-label="الصفحة الرئيسية كلينر جو">
            <div className="navbar__logo-img">
              <Image src="/cleaner1.jpeg" alt="شعار كلينر جو" width={42} height={42} />
            </div>
            <span className="navbar__brand-text">
              Cleaner <span>Jo</span>
            </span>
          </Link>

          <div className="navbar__links" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link href="/" className="navbar__link" style={{ fontWeight: 700 }}>
              الرئيسية
            </Link>
            <Link href="/#services" className="navbar__link">
              خدماتنا
            </Link>
            <Link href="/#contact" className="navbar__link">
              تواصل معنا
            </Link>
          </div>

          <Link href="/" className="btn btn--secondary privacy-nav-back">
            <span>← العودة للرئيسية</span>
          </Link>
        </div>
      </nav>

      {/* ── HERO BANNER ── */}
      <header className="privacy-hero">
        <div className="container">
          <div className="privacy-hero__content">
            <div className="privacy-hero__badge">
              <span className="privacy-hero__badge-icon">🛡️</span>
              <span>حماية البيانات والخصوصية</span>
            </div>

            <h1 className="privacy-hero__title">سياسة الخصوصية</h1>

            <p className="privacy-hero__desc">
              نلتزم في <strong>كلينر جو (Cleaner Jo)</strong> بحماية بياناتك وشخصيتك بأعلى معايير السرية والأمان. تشرح هذه الصفحة كيفية جمع واستخدام وحماية معلوماتك الشخصية أثناء تصفحك وطلب خدمات التنظيف لدينا في الأردن.
            </p>

            <div className="privacy-hero__meta">
              <span className="privacy-meta-item">
                <strong>🗓️ تم التحديث:</strong> 19 أغسطس 2026
              </span>
              <span className="privacy-meta-item">
                <strong>📍 النطاق:</strong> المملكة الأردنية الهاشمية
              </span>
              <span className="privacy-meta-item">
                <strong>🔒 الضمان:</strong> سرية تامة 100%
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── HIGHLIGHT CARDS ── */}
      <section className="section-pad privacy-highlights-section">
        <div className="container">
          <div className="privacy-highlights-grid">
            <div className="privacy-card-highlight">
              <div className="privacy-card-highlight__icon">🔒</div>
              <h3>لا مشاركة مع أطراف ثالثة</h3>
              <p>نضمن عدم بيع أو مشاركة رقم هاتفك أو عنوانك مع أي جهة تسويقية أو أطراف خارجية على الإطلاق.</p>
            </div>

            <div className="privacy-card-highlight">
              <div className="privacy-card-highlight__icon">💬</div>
              <h3>تواصل آمن ومباشر</h3>
              <p>تُستخدم بياناتك فقط لتأكيد المواعيد وتوفير خدمة تنظيف ممتازة تلبي احتياجاتك بدقة.</p>
            </div>

            <div className="privacy-card-highlight">
              <div className="privacy-card-highlight__icon">⚖️</div>
              <h3>حقوق كاملة للعميل</h3>
              <p>يمكنك طلب تحديث أو تعديل أو مسح بياناتك وتفاصيل التواصل الخاصة بك في أي وقت بسهولة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ACCORDION / SECTIONS ── */}
      <main className="container privacy-main-content">
        <div className="privacy-layout">
          {/* Sidebar Navigation */}
          <aside className="privacy-sidebar">
            <div className="privacy-sidebar__card">
              <h4 className="privacy-sidebar__title">فهرس السياسة</h4>
              <nav className="privacy-sidebar__nav">
                {policySections.map((sec) => (
                  <a key={sec.id} href={`#${sec.id}`} className="privacy-sidebar__link">
                    <span className="privacy-sidebar__link-icon">{sec.icon}</span>
                    <span>{sec.title}</span>
                  </a>
                ))}
              </nav>

              <div className="privacy-sidebar__contact-box">
                <h5>هل لديك سؤال؟</h5>
                <p>فريقنا جاهز للإجابة عن كافة استفساراتك المتعلقة بالخصوصية والخدمات.</p>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--sm">
                  <WhatsAppIcon className="btn__icon" />
                  تحدث معنا
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Text Articles */}
          <article className="privacy-articles">
            {policySections.map((sec) => (
              <section key={sec.id} id={sec.id} className="privacy-article-card">
                <div className="privacy-article-card__header">
                  <span className="privacy-article-card__icon">{sec.icon}</span>
                  <h2>{sec.title}</h2>
                </div>
                <div className="privacy-article-card__body">
                  {sec.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            {/* Direct Contact Card */}
            <section id="contact-support" className="privacy-contact-card">
              <div className="privacy-contact-card__inner">
                <div className="privacy-contact-card__badge">تواصل معنا المباشر</div>
                <h2>هل لديك أي ملاحظة أو استفسار حول سياسة الخصوصية؟</h2>
                <p>
                  يمكنك التواصل الفوري مع قسم خدمة العملاء والدعم الفني في <strong>كلينر جو</strong> لمعالجة أي استفسار أو طلب يتعلق ببياناتك الشخصية.
                </p>

                <div className="privacy-contact-card__buttons">
                  <a href={`tel:${site.phone}`} className="btn btn--primary">
                    📞 اتصل بنا: {site.phoneDisplay}
                  </a>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp"
                  >
                    <WhatsAppIcon className="btn__icon" />
                    واتساب مباشر
                  </a>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer" role="contentinfo" style={{ marginTop: "4rem" }}>
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand-col">
              <div className="footer__logo">
                <Image src="/cleaner1.jpeg" alt="شعار كلينر جو" width={44} height={44} />
                <span>Cleaner Jo</span>
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
                <Link href="/" className="footer__link">
                  الرئيسية
                </Link>
                <Link href="/#services" className="footer__link">
                  خدماتنا
                </Link>
                <Link href="/#how-it-works" className="footer__link">
                  كيف نعمل
                </Link>
                <Link href="/#why-us" className="footer__link">
                  لماذا نحن
                </Link>
                <Link href="/#contact" className="footer__link">
                  تواصل معنا
                </Link>
                <Link href="/privacy-policy" className="footer__link" style={{ color: "var(--green)" }}>
                  سياسة الخصوصية
                </Link>
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
              <p className="footer__hours">
                <span aria-hidden="true">🕐</span> يومياً 8 ص – 8 م
              </p>
            </div>
          </div>

          <div className="footer__bottom">
            <p>
              © {new Date().getFullYear()} كلينر جو — جميع الحقوق محفوظة |{" "}
              <Link href="/privacy-policy" style={{ textDecoration: "underline", color: "inherit" }}>
                سياسة الخصوصية
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
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
    </div>
  );
}
