'use client'

export default function Notes() {
  const notes = [
    {
      subject: 'Physics Class 12',
      description: 'All NCERT + Extra Notes for Class 12 Boards & NEET',
      downloadLink: '/notes/physics-class12.pdf',
    },
    {
      subject: 'Chemistry Class 11',
      description: 'Quick revision notes for JEE + NEET aspirants',
      downloadLink: '/notes/chemistry-class11.pdf',
    },
    {
      subject: 'Maths Class 10',
      description: 'Formula sheets and solved examples for boards',
      downloadLink: '/notes/maths-class10.pdf',
    },
    {
      subject: 'Biology NEET',
      description: 'Most important diagrams, flowcharts & NCERT highlights',
      downloadLink: '/notes/biology-neet.pdf',
    },
  ]

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Download Free Notes</h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{note.subject}</h3>
            <p className="text-gray-600 mb-4">{note.description}</p>
            <a
              href={note.downloadLink}
              download
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
