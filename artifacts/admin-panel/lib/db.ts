import fs from 'node:fs/promises';
import path from 'node:path';

const dataDirectory = path.join(process.cwd(), 'data');
const fileMap = {
  leads: 'leads.json',
  services: 'services.json',
  cities: 'cities.json',
  pages: 'pages.json',
  media: 'media.json'
} as const;

type DataType = keyof typeof fileMap;

async function readData<T>(key: DataType): Promise<T> {
  const filePath = path.join(dataDirectory, fileMap[key]);
  try {
    const json = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(json) as T;
  } catch {
    return [] as unknown as T;
  }
}

async function writeData<T>(key: DataType, data: T) {
  const filePath = path.join(dataDirectory, fileMap[key]);
  await fs.mkdir(dataDirectory, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export type Lead = {
  id: string;
  name: string;
  phone: string;
  message: string;
  date: string;
  contacted: boolean;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  keywords: string[];
};

export type CityArea = {
  id: string;
  name: string;
  slug: string;
  seoContent: string;
};

export type PageContent = {
  id: string;
  slug: string;
  title: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  schemaMarkup: string;
};

export type MediaItem = {
  id: string;
  title: string;
  url: string;
  altText: string;
};

export async function getLeads() {
  return readData<Lead[]>('leads');
}

export async function saveLeads(leads: Lead[]) {
  return writeData('leads', leads);
}

export async function getServices() {
  return readData<ServiceItem[]>('services');
}

export async function saveServices(services: ServiceItem[]) {
  return writeData('services', services);
}

export async function getCities() {
  return readData<CityArea[]>('cities');
}

export async function saveCities(cities: CityArea[]) {
  return writeData('cities', cities);
}

export async function getPages() {
  return readData<PageContent[]>('pages');
}

export async function savePages(pages: PageContent[]) {
  return writeData('pages', pages);
}

export async function getMedia() {
  return readData<MediaItem[]>('media');
}

export async function saveMedia(media: MediaItem[]) {
  return writeData('media', media);
}
