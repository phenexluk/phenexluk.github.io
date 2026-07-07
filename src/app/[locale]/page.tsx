import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { getMessages } from "@/lib/data";
import { isValidLocale, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const messages = getMessages(locale);
  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      languages: {
        en: "/en/",
        zh: "/zh/",
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Phenex Luk — PL",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.title,
      description: messages.meta.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const messages = getMessages(locale);

  return (
    <>
      <AuroraBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header locale={locale as Locale} messages={messages} />
        <main>
          <Hero messages={messages} />
          <SkillsMarquee />
          <Projects messages={messages} />
          <Experience locale={locale as Locale} messages={messages} />
          <Contact messages={messages} />
        </main>
        <Footer messages={messages} />
      </div>
    </>
  );
}
