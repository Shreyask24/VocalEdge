'use client'

import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { subjects } from '@/constants'
import { useRouter, useSearchParams } from 'next/navigation'

const SubjectFilter = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get('topic') || "all"

    const [subject, setSubject] = useState(query)


    useEffect(() => {
        if (subject === query) return; // prevent redundant redirect

        if (subject == "all") {
            router.push(`/companions`)
        } else {
            router.push(`/companions?topic=${subject}`)
        }
    }, [subject])



    console.log("Subject", subject)
    return (
        <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger>
                <SelectValue placeholder="Subject" />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value='all'>All Subjects</SelectItem>
                {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject} className='capitalize'>{subject}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default SubjectFilter