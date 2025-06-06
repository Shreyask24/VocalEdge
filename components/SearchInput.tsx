'use client'

import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const SearchInput = () => {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get('topic')

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery) {
                router.push(`/companions?topic=${searchQuery}`)
            } else {
                if (pathname === '/companions') {
                    setSearchQuery('')
                    router.push(`/companions`)
                }
            }
        }, 500)
    }, [searchQuery, pathname, router, searchParams])

    return (
        <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
            <Image src="/icons/search.svg" alt="Search" width={15} height={15} />

            <input placeholder='Search Companions...' className='outline-none' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
    )
}

export default SearchInput