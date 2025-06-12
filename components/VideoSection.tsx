'use client'

export default function VideoSection() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-65"
      >
        <source src="/videos/bg-join.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Join Now
          </h2>
          {/* Optional Button */}
          {/* <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            Enroll Today
          </button> */}
        </div>
      </div>

      {/* Optional dark overlay to increase text visibility */}
      <div className="absolute inset-0 bg-black/30 z-[5]" />
    </section>
  )
}
