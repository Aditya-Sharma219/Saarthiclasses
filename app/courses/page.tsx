'use client'

export default function Courses() {
  const courses = [
    {
      title: 'JEE Main + Advanced',
      description: '2-year integrated coaching for JEE aspirants with mock tests, DPPs, and doubt sessions.',
      target: 'Class 11 & 12',
    },
    {
      title: 'NEET UG',
      description: 'Comprehensive NEET preparation with NCERT coverage, test series, and concept-building.',
      target: 'Class 11 & 12 (PCB)',
    },
    {
      title: 'Class 12 Board - PCM',
      description: 'Focused board-level preparation with test papers, revision sessions, and guidance.',
      target: 'Class 12',
    },
    {
      title: 'Foundation Course',
      description: 'Start early for Olympiads, NTSE, and base-building for JEE/NEET.',
      target: 'Class 8-10',
    },
  ]

  return (
    <section className="w-full bg-gray-50 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Our Courses</h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 md:p-8 transition hover:scale-[1.02] hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="text-sm text-indigo-600 font-medium bg-indigo-50 inline-block px-3 py-1 rounded-full">
              {course.target}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
