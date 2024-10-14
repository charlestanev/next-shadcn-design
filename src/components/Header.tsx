'use client';

import React, { useState } from 'react'
import { CommandDemo } from './Command'
import { Button } from './ui/button'
import { BellIcon } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { title } from 'process';




function Header() {
    const [notifications, setNotifications] = useState<any>([
        {
            text: "New message",
            date: "2m ago",
            read: true
        },
        {
            text: "New user",
            date: "1h ago",
            read: false
        },
        {
            text: "New user",
            date: "3h ago",
            read: true
        },
        {
            text: "System update",
            date: "5h ago",
            read: false
        },
        {
            text: "New comment",
            date: "1d ago",
            read: true
        },
        {
            text: "Password change",
            date: "2d ago",
            read: false
        },
        {
            text: "Friend request",
            date: "3d ago",
            read: true
        },
        {
            text: "New follower",
            date: "4d ago",
            read: false
        },
        {
            text: "Message sent",
            date: "5d ago",
            read: true
        },
        {
            text: "Account verification",
            date: "1w ago",
            read: false
        },
    ])

    return (
        <div className='grid grid-cols-2 gap-4 p-4 border-b'>
            <CommandDemo />
            <div className='flex items-center justify-end'>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button className='relative' variant="outline" size="icon">
                            <div className={`absolute -top-[10px] -right-[7px] h-3 w-3 rounded-full my-1 ${notifications.find((x: any) => x.read === true) ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
                            <BellIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        {notifications.map((item: any, key: number) => (
                            <DropdownMenuItem key={key} className='py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2'>
                                <div className={`h-3 w-3 rounded-full my-1 ${!item.read ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
                                <div>
                                    <p>{item.text}</p>
                                    <p className='text-xs text-neutral-500'>{item.date}</p>
                                </div>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </div>
    )
}

export default Header