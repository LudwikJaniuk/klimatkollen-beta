import React from 'react'

interface Emission {
  subtitle: string
  description: string
  value: number | null
}

interface ScopeEmissionsProps {
  title: string
  emissions: Emission[]
}

export function ScopeEmissions({ title, emissions }: ScopeEmissionsProps) {
  return (
    <div className="grid gap-4">
      <div className="font-semibold">{title}</div>
      <div className="grid gap-4">
        {emissions.map((emission, index) =>
          emission.value ? (
            <div key={index} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{emission.subtitle}</div>
                <div className="text-sm text-muted">{emission.description}</div>
              </div>
              <div className="flex items-center gap-2 text-lg font-bold sm:text-2xl">
                <div className="rounded-full bg-gray-800 p-2">
                  {emission.value.toLocaleString('sv-se')}
                </div>
              </div>
            </div>
          ) : null,
        )}
      </div>
    </div>
  )
}

export default ScopeEmissions