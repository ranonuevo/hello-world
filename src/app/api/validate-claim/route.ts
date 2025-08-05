import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  const { claim_amount, max_can_claim_amount } = body

  if (
    typeof claim_amount !== 'number' ||
    typeof max_can_claim_amount !== 'number'
  ) {
    return NextResponse.json(
      { error: 'Invalid input. claim_amount and max_can_claim_amount must be numbers.' },
      { status: 400 }
    )
  }

  const isValid = claim_amount <= max_can_claim_amount

  return NextResponse.json({ result: isValid })
}
