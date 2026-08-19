import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata = {
  title: "سياسة الخصوصية | كلينر جو - Cleaner Jo",
  description:
    "سياسة الخصوصية الخاصة بموقع كلينر جو لخدمات التنظيف الاحترافية في الأردن. تعرف على كيفية حماية بياناتك ومعلوماتك الشخصية.",
  openGraph: {
    title: "سياسة الخصوصية | كلينر جو - Cleaner Jo",
    description:
      "نلتزم في كلينر جو لحلول التنظيف بحماية بياناتك وخصوصيتك بأعلى معايير الأمان.",
    url: "https://cleaner-jo.com/privacy-policy",
    siteName: "Cleaner Jo",
    locale: "ar_JO",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
