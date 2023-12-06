'use client'

import { FileSearch } from '@phosphor-icons/react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col">
      <div className="flex justify-center items-center gap-4">
        <FileSearch size={44} className="text-color-accent" />
        <h3 className="text-color-accent text-4xl font-bold">Not Found</h3>
      </div>
      <Link
        href="/"
        className="text-color-primary hover:text-color-accent transition-all underline py-4"
      >
        Back
      </Link>
    </div>
  )
}

export default Page
