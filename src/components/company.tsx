import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card'

import type { CompanyData } from '@/data/companyData'

function extractInitials(name: string) {
  return (name || '')
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export function Company({ company }: { company: CompanyData }) {
  const year = '2023'
  const emissions = company.emissions[year]
  const totalEmissions =
    emissions &&
    (emissions.scope1.emissions || 0) +
      (emissions.scope2.emissions ||
        emissions.scope2.mb ||
        emissions.scope2.lb ||
        0) +
      (emissions.scope3.emissions || 0)
  return (
    <div className="flex flex-col bg-gray-950 dark:bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-gray-950 dark:bg-background sm:flex" />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <Card
              className="sm:col-span-2 bg-gray-950 dark:bg-background"
              x-chunk="dashboard-05-chunk-0"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      alt="Company Logo"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>
                      {extractInitials(company.companyName)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{company.companyName}</CardTitle>
                    <div className="text-sm text-gray-400 dark:text-gray-500">
                      {company.description}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl">Totala utsläpp {year}</div>
                      <div className="text-2xl font-bold flex items-center gap-2">
                        <div className="rounded-full bg-gray-800 dark:bg-gray-800 p-2">
                          {totalEmissions.toLocaleString('sv-se')}
                        </div>
                      </div>
                    </div>
                    {/*<LineChart className="aspect-[9/4]" />*/}
                  </div>
                  <div className="grid gap-4">
                    <div className="font-semibold">Scope 1 and 2 utsläpp</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Scope 1 utsläpp</div>
                          <div className="text-sm text-gray-400 dark:text-gray-500">
                            Utsläpp från egna källor eller kontrollerade av
                            organisationen.
                          </div>
                        </div>
                        <div className="text-2xl font-bold flex items-center gap-2">
                          <div className="rounded-full bg-gray-800 dark:bg-gray-800 p-2">
                            {emissions.scope1.emissions.toLocaleString('sv-se')}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Scope 2 Emissions</div>
                          <div className="text-sm text-gray-400 dark:text-gray-500">
                            Indirekta utsläpp från produktion av köpt el, ånga,
                            värme och kyla som konsumeras av organisationen.
                          </div>
                        </div>
                        <div className="text-2xl font-bold flex items-center gap-2">
                          <div className="rounded-full bg-gray-800 dark:bg-gray-800 p-2">
                            {emissions.scope2.emissions.toLocaleString('sv-se')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="font-semibold">
                      Scope 3 Utsläppskategorier
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-800 dark:bg-gray-800">
                            <TruckIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">
                              Köpta varor och tjänster
                            </div>
                            <div className="text-sm text-gray-400 dark:text-gray-500">
                              Utsläpp från produktion av varor och tjänster som
                              köpts av organisationen.
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold mt-2 flex items-center gap-2 justify-end">
                          <div className="rounded-full bg-gray-800 dark:bg-gray-800 p-2">
                            {emissions.scope3.categories[
                              '1_purchasedGoods'
                            ]?.toLocaleString('sv-se')}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-800 dark:bg-gray-800">
                            <PlaneIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Affärsresor</div>
                            <div className="text-sm text-gray-400 dark:text-gray-500">
                              Utsläpp från transport av anställda för
                              affärsrelaterade aktiviteter.
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold mt-2 flex items-center gap-2 justify-end">
                          <div className="rounded-full bg-gray-800 dark:bg-gray-800 p-2">
                            {emissions.scope3.categories[
                              '6_businessTravel'
                            ]?.toLocaleString('sv-se')}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-800 dark:bg-gray-800">
                            <CompassIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">
                              Anställdas pendling
                            </div>
                            <div className="text-sm text-gray-400 dark:text-gray-500">
                              Utsläpp från transport av anställda mellan deras
                              hem och arbetsplatser.
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold mt-2 flex items-center gap-2 justify-end">
                          <div className="text-2xl font-bold flex items-center gap-2 justify-end">
                            <div className="rounded-full bg-gray-800 dark:bg-gray-800 p-2">
                              {emissions.scope3.categories[
                                '7_employeeCommuting'
                              ]?.toLocaleString('sv-se')}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-800 dark:bg-gray-800">
                            <WarehouseIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">
                              Uppströms transporter och distribution
                            </div>
                            <div className="text-sm text-gray-400 dark:text-gray-500">
                              Utsläpp från transport och distribution av
                              produkter som köpts av organisationen, dvs från
                              sina leverantörer.
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold mt-2 flex items-center gap-2 justify-end">
                          <div className="rounded-full bg-gray-800 dark:bg-gray-800 p-2">
                            {emissions.scope3.categories[
                              '4_upstreamTransportationAndDistribution'
                            ]?.toLocaleString('sv-se')}
                          </div>
                        </div>
                      </div>
                      <div>
                        {newFunction()}
                        <div className="text-2xl font-bold mt-2 flex items-center gap-2 justify-end">
                          <div className="rounded-full bg-gray-800 dark:bg-gray-800 p-2">
                            {emissions.scope3.categories[
                              '5_wasteGeneratedInOperations'
                            ]?.toLocaleString('sv-se')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold">Ranking</div>
                    <div className="text-2xl font-bold">3rd</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-center">2028</div>
                    <div className="text-center text-gray-400 dark:text-gray-500">
                      According to current emissions, Acme Inc will run out of
                      its CO2 budget by 2028.
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="font-semibold">
                      Våra initiativ och löften
                    </div>
                    <ul className="grid gap-2">
                      {company.initiatives.map((initiative, i) => (
                        <li key={i} className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-800 dark:bg-gray-800">
                            <CheckIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">
                              {initiative.title}
                            </div>
                            <div className="text-sm text-gray-400 dark:text-gray-500">
                              {initiative.description}%
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function newFunction() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-800 dark:bg-gray-800">
        <WormIcon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-medium">Avfall genererat i verksamheten</div>
        <div className="text-sm text-gray-400 dark:text-gray-500">
          Utsläpp från avfall som genereras av organisationens verksamhet.
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}
/*
function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: 'Desktop',
            data: [
              { x: 'Jan', y: 43 },
              { x: 'Feb', y: 137 },
              { x: 'Mar', y: 61 },
              { x: 'Apr', y: 145 },
              { x: 'May', y: 26 },
              { x: 'Jun', y: 154 },
            ],
          },
          {
            id: 'Mobile',
            data: [
              { x: 'Jan', y: 60 },
              { x: 'Feb', y: 48 },
              { x: 'Mar', y: 177 },
              { x: 'Apr', y: 78 },
              { x: 'May', y: 96 },
              { x: 'Jun', y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: 'point',
        }}
        yScale={{
          type: 'linear',
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={['#2563eb', '#e11d48']}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        role="application"
      />
    </div>
  )
}*/

function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}

function WarehouseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="12" height="12" x="6" y="10" />
    </svg>
  )
}

function WormIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 12-1.5 3" />
      <path d="M19.63 18.81 22 20" />
      <path d="M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z" />
    </svg>
  )
}