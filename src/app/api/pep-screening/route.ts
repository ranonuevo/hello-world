import { NextRequest, NextResponse } from 'next/server'

// Mock PEP list
const pepList = [
  'Juan de la Cruz',
  'Maria del Rosario',
  'Lee Wei Sheng',
  'Fatima al-Zahra',
  'Carlos Dela Vega',
  'Wing Ching Lok',
]

// Normalize and reorder if needed
function normalizeName(name: string): string {
  const trimmed = name.trim().replace(/\s+/g, ' ')

  if (trimmed.includes(',')) {
    const [last, first] = trimmed.split(',').map(s => s.trim())
    return `${first} ${last}`.toLowerCase()
  }

  return trimmed.toLowerCase()
}

export async function POST(req: NextRequest) {
  const { fullName } = await req.json()

  if (!fullName || typeof fullName !== 'string') {
    return NextResponse.json(
      { error: 'Invalid or missing fullName' },
      { status: 400 }
    )
  }

  const normalizedInput = normalizeName(fullName)

  const match = pepList.some(
    (pepName) => normalizeName(pepName) === normalizedInput
  )

  const matchedName = match
    ? pepList.find((name) => normalizeName(name) === normalizedInput)
    : null

  const result = {
    fullName,
    pepStatus: match,
    matchedName,
    screeningDate: new Date().toISOString(),
  }

  return NextResponse.json(result)
}
