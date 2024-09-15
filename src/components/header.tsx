import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <Link href='/sign-in'>Sign in</Link>
      <Link href='/sign-up'>Sign up</Link>
    </div>
  )
}
