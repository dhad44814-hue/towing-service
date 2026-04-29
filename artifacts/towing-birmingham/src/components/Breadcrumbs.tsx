import { useEffect } from "react";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  useEffect(() => {
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };

    let script = document.head.querySelector<HTMLScriptElement>(
      'script[type="application/ld+json"][data-breadcrumbs]'
    );
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-breadcrumbs", "true");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(breadcrumbList);
  }, [items]);

  return null;
}
