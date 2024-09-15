import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <form action='' className='flex-1 flex flex-col min-w-64 gap-5'>
      <h1 className='self-start font-bold text-3xl'>Sign in</h1>
      <p>Don&apos;t have an account? <Link className='text-blue-500 inline' href='/sign-up'>Sign Up</Link></p>
      <div>
        <label className='font-bold' htmlFor="email">Email:</label>
        <input className='block w-full h-10 mt-1 border-2 rounded-md p-3' id="email" name="email" type="email" placeholder="Email" />
      </div>
      <div>
        <label className='font-bold' htmlFor="password">Password:</label>
        <input className='block w-full h-10 mt-1 border-2 rounded-md p-3' id="password" name="password" type="password" placeholder='Password'/>
      </div>
      <button className='h-10 border-2 bg-black text-white rounded-lg' type="submit">Sign in</button>
    </form>
    
    
    
  )
}
