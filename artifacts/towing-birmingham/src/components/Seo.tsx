import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  url?: string;
}

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    if (property) {
      element.setAttribute("property", name);
    } else {
      element.name = name;
    }
    document.head.appendChild(element);
  }
  element.content = content;
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

export default function Seo({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "/opengraph.jpg",
  url,
}: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("robots", "index, follow");
    setMeta("og:type", "website", true);
    setMeta("og:locale", "en_GB", true);
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:image", ogImage, true);
    if (url) {
      setMeta("og:url", url, true);
    }
    setMeta("twitter:card", "summary_large_image");
    setLink("canonical", canonical);
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, url]);

  return null;
}
