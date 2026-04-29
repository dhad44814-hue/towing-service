import { useEffect } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export default function FAQSchema({ items }: FAQSchemaProps) {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    let script = document.head.querySelector<HTMLScriptElement>(
      'script[type="application/ld+json"][data-faq]'
    );
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-faq", "true");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);
  }, [items]);

  return null;
}
