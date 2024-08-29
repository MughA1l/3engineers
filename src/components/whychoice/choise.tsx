import { CheckCircle } from "lucide-react"

const reasons = [
  "Innovative Training Programs",
  "Expert Guidance",
  "Cutting-Edge Solutions",
  "Comprehensive Support",
  "Enhanced ROI",
]

export default function WhyChooseUs() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Why Choose 3 Engineers?</h2>
      <div className="max-w-2xl mx-auto ">
        <ul className="space-y-4">
          {reasons.map((item, index) => (
            <li key={index} className="flex items-center gap-2  shadow-sm rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 " />
              <span className="text-black  dark:text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}