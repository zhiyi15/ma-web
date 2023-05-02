import { PresentationChartBarIcon, CircleStackIcon, CommandLineIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Collect Data',
    description:
      'Automated data collection (endpoints + routes) for your project.',
    href: '#',
    icon: CircleStackIcon,
  },
  {
    name: 'Analyze Data',
    description:
      'Parse data to auto-generate tests, which will test endpoints and store data.',
    href: '#',
    icon: CommandLineIcon,
  },
  {
    name: 'Visuals',
    description:
      'Visualize performance, errors, and other data.',
    href: '#',
    icon: PresentationChartBarIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#06d6a0]">Build and test faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Exactly what you need to test middleware
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Middle-Aware captures request and response data in a readable format and visualize the request-response cycle and the correlation to their endpoints.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-[#06d6a0]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
