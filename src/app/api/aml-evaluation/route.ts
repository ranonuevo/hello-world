import { NextRequest, NextResponse } from 'next/server'

const data = [
  {
    name: 'LOK, Wing Ching',
    birthday: '03-06-1985',
    amlStatus: 'HIGH',
    pep: true,
    sanctions: false,
    adverseMedia: true,
    screeningDate: '2025-08-04T13:10:06.379Z',
  },
  {
    name: 'Maria Fernandez',
    birthday: '14-02-1985',
    amlStatus: 'LOW',
    pep: false,
    sanctions: false,
    adverseMedia: false,
    screeningDate: '2025-08-04T13:12:45.103Z',
  },
  {
    name: 'Carlos Tan',
    birthday: '22-11-1978',
    amlStatus: 'MEDIUM',
    pep: false,
    sanctions: false,
    adverseMedia: true,
    screeningDate: '2025-08-04T13:13:27.842Z',
  },
  {
    name: 'Fatima Al Zahra',
    birthday: '10-07-1992',
    amlStatus: 'HIGH',
    pep: true,
    sanctions: true,
    adverseMedia: true,
    screeningDate: '2025-08-04T13:20:01.000Z',
  },
  {
    name: 'John Miller',
    birthday: '05-04-1995',
    amlStatus: 'LOW',
    pep: false,
    sanctions: false,
    adverseMedia: false,
    screeningDate: '2025-08-04T13:21:45.000Z',
  },
  {
    name: 'Nguyen Thi Hoa',
    birthday: '09-09-1988',
    amlStatus: 'MEDIUM',
    pep: false,
    sanctions: true,
    adverseMedia: false,
    screeningDate: '2025-08-04T13:22:30.000Z',
  },
]

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const name = searchParams.get('name')
  const birthday = searchParams.get('birthday') // format: DD-MM-YYYY

  if (!name || !birthday) {
    return NextResponse.json(
      { error: 'Missing query parameters: name and birthday are required' },
      { status: 400 }
    )
  }

  const matched = data.filter(
    (entry) =>
      entry.name.toLowerCase() === name.toLowerCase() &&
      entry.birthday === birthday
  )

  return NextResponse.json({ result: matched })
}
