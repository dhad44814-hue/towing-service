export default function ServiceArea() {
  const areas = [
    "Birmingham City Centre", "Edgbaston", "Harborne", "Kings Heath", "Moseley",
    "Digbeth", "Aston", "Erdington", "Sutton Coldfield", "Great Barr",
    "Handsworth", "Perry Barr", "Selly Oak", "Bournville", "Northfield",
    "Kings Norton", "Yardley", "Sheldon", "Sparkhill", "Tyseley",
    "Solihull", "Wolverhampton", "Walsall", "Dudley", "West Bromwich",
    "Smethwick", "Oldbury", "Halesowen", "Coventry", "Lichfield"
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-3">Service Coverage</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Towing Service Areas Near Birmingham
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We cover all of Birmingham and the surrounding West Midlands region. 
            If you're not on this list, call us — we likely cover your area too.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {areas.map((area) => (
            <span
              key={area}
              className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:border-yellow-400 hover:bg-yellow-50 transition-colors cursor-default"
            >
              📍 {area}
            </span>
          ))}
        </div>

        {/* Google Maps embed */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Birmingham Towing Service Area Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154895.37699938752!2d-2.0607374!3d52.4862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aedc7bfa!2sBirmingham%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
