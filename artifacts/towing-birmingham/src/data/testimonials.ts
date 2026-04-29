export interface Testimonial {
  name: string;
  location: string;
  text: string;
}

const names = [
  'Mark L.', 'Claire B.', 'Tony R.', 'Sarah M.', 'Dean K.', 'Lisa T.', 'John D.', 'Emma W.', 'Mike S.', 'Anna P.',
  'David G.', 'Sophie H.', 'Chris F.', 'Rachel K.', 'James B.', 'Olivia C.', 'Tom N.', 'Grace Y.', 'Alex M.', 'Lily J.',
  'Ben T.', 'Mia R.', 'Ryan L.', 'Zoe D.', 'Harry P.', 'Ella S.', 'Noah W.', 'Isla F.', 'Jack G.', 'Freya B.',
  // Add more names...
  'Oliver K.', 'Amelia M.', 'George H.', 'Sienna N.', 'Arthur J.', 'Charlotte V.', 'Henry U.', 'Evie X.', 'Oscar Z.', 'Ivy Q.',
  'Leo A.', 'Willow E.', 'Max O.', 'Scarlett I.', 'Teddy U.', 'Florence Y.', 'Alfie T.', 'Harper R.', 'Jasper E.', 'Mila D.',
  'Roman S.', 'Aria F.', 'Theo G.', 'Luna B.', 'Finn H.', 'Ruby J.', 'Milo K.', 'Elsie L.', 'Ezra M.', 'Violet N.',
  'Arlo P.', 'Isabella Q.', 'Casper R.', 'Penelope S.', 'Otto T.', 'Aurora U.', 'Silas V.', 'Hazel W.', 'Felix X.', 'Ivy Y.',
  'Atlas Z.', 'Nova A.', 'Zane B.', 'Sage C.', 'Knox D.', 'Wren E.', 'Raff F.', 'Lyric G.', 'Crew H.', 'Echo I.',
  'Dax J.', 'Fable K.', 'Gus L.', 'Haven M.', 'Jett N.', 'Indigo O.', 'Kian P.', 'Juniper Q.', 'Luka R.', 'Kairo S.',
  'Maddox T.', 'Livia U.', 'Nico V.', 'Marlowe W.', 'Otto X.', 'Opal Y.', 'Pax Z.', 'Pearl A.', 'Quinn B.', 'Pippa C.'
];

const locations = [
  'Santa Clarita', 'Canyon Country', 'Newhall', 'Valencia', 'Stevenson Ranch', 'Castaic', 'Saugus', 'Bouquet Canyon',
  'Sand Canyon', 'Pico Canyon', 'Mint Canyon', 'Solemint', 'Honby', 'Lang', 'Fair Oaks Ranch', 'Placerita Canyon',
  'Tick Canyon', 'Wheatland', 'Aliso Canyon', 'Elizabeth Lake', 'Lake Hughes', 'Green Valley', 'Acton', 'Agua Dulce'
];

const texts = [
  'Fast response and very professional service. They arrived within 20 minutes and helped me immediately. Highly recommended!',
  'Excellent towing and roadside assistance. The team were calm, punctual, and the whole experience felt premium from start to finish.',
  'My van broke down on the A38 and they were with me in no time. Everything was handled smoothly from call to drop-off.',
  'They arrived fast, were incredibly polite, and made sure my battery issue was fixed before leaving. The best towing service in Birmingham.',
  'Used them for flatbed transport after an accident. Careful, professional, and fair pricing. Highly recommended.',
  'Quick and reliable tire change on the motorway. Friendly driver made a stressful situation much better.',
  'Flat tire at midnight and they came right away. Professional service, great price, will use again.',
  'Excellent service for lockout situation. Arrived in 15 minutes, very friendly staff.',
  'Towed my car after collision, handled everything perfectly. Couldn\'t be happier.',
  'Roadside assistance for fuel delivery - saved my day! Fast and efficient service.'
  // Repeat and vary...
];

export const testimonials: Testimonial[] = [];

for (let i = 0; i < 100; i++) {
  const name = names[i % names.length];
  const location = locations[i % locations.length];
  const textIndex = i % texts.length;
  const text = texts[textIndex];
  testimonials.push({ name, location, text });
}

export const allTestimonials = testimonials;

