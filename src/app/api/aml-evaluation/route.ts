import { NextResponse } from 'next/server'

export async function GET() {
  const amlSamples = [
  {
    name: "LOK, Wing Ching",
    amlStatus: "HIGH",
    pep: true,
    sanctions: false,
    adverseMedia: true,
    screeningDate: "2025-08-04T13:10:06.379Z"
  },
  {
    name: "Maria Fernandez",
    amlStatus: "LOW",
    pep: false,
    sanctions: false,
    adverseMedia: false,
    screeningDate: "2025-08-04T13:12:45.103Z"
  },
  {
    name: "Carlos Tan",
    amlStatus: "MEDIUM",
    pep: false,
    sanctions: false,
    adverseMedia: true,
    screeningDate: "2025-08-04T13:13:27.842Z"
  },
  {
    name: "Fatima Al Zahra",
    amlStatus: "HIGH",
    pep: true,
    sanctions: true,
    adverseMedia: true,
    screeningDate: "2025-08-04T13:20:01.000Z"
  },
  {
    name: "John Miller",
    amlStatus: "LOW",
    pep: false,
    sanctions: false,
    adverseMedia: false,
    screeningDate: "2025-08-04T13:21:45.000Z"
  },
  {
    name: "Nguyen Thi Hoa",
    amlStatus: "MEDIUM",
    pep: false,
    sanctions: true,
    adverseMedia: false,
    screeningDate: "2025-08-04T13:22:30.000Z"
  }
]


  return NextResponse.json(amlSamples)
}
