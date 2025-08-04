import { NextRequest, NextResponse } from 'next/server'

const pepList = ['Wing Ching Lok', 'Juan de la Cruz']
const sanctionsList = ['Abdul Hakim', 'Zhang Wei']
const adverseMediaList = ['Wing Ching Lok', 'Jane Doe']

function normalizeName(name: string): string {
  const trimmed = name.trim().replace(/\s+/g, ' ')
  if (trimmed.includes(',')) {
    const [last, first] = trimmed.split(',').map(s => s.trim())
    return `${first} ${last}`.toLowerCase()
  }
  return trimmed.toLowerCase()
}

function isMatch(name: string, list: string[]): boolean {
  const normalized = normalizeName(name)
  return list.some(entry => normalizeName(entry) === normalized)
}

export async function POST(req: NextRequest) {
  const { fullName, dob } = await req.json()

  if (!fullName || typeof fullName !== 'string') {
    return NextResponse.json({ error: 'Missing fullName' }, { status: 400 })
  }

  const hits = {
    pep: isMatch(fullName, pepList),
    sanctions: isMatch(fullName, sanctionsList),
    adverseMedia: isMatch(fullName, adverseMediaList),
  }

  let amlStatus: 'LOW' | 'MEDIUM' | 'HIGH' = 'LOW'
  const hitCount = Object.values(hits).filter(Boolean).length

  if (hitCount === 1) amlStatus = 'MEDIUM'
  if (hitCount >= 2) amlStatus = 'HIGH'

  return NextResponse.json({
    fullName,
    amlStatus,
    hits,
    screeningDate: new Date().toISOString(),
  })
}
