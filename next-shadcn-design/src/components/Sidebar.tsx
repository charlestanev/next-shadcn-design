import UserItem from "./UserItem";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from "../components/ui/command";
import { group } from "console";
import { link } from "fs";
import { Bell, Download, LockIcon, Mail, Settings, User } from "lucide-react";

export default function Sidebar() {
    const menuList = [
        {
            group: "Suggestions",
            items: [
                {
                    link: "/",
                    icon: <User />,
                    text: "Profile"
                    
                },
                {
                    link: "/",
                    icon: <Mail />,
                    text: "Inbox"
                },
                {
                    link: "/",
                    icon: <Bell />,
                    text: "Notifications"
                },
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    icon: <Settings />,
                    text: "General"
                },
                {
                    link: "/",
                    icon: <LockIcon />,    
                    text: "Privacy"
                },
                {
                    link: "/",
                    icon: <Download />,    
                    text: "Logs"
                },
            ]
        }
    ]

    return <div className="flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4">
        <div>
            <UserItem />
        </div>
        <div className="grow">
            <Command style={{overflow: "visible"}}>
                <CommandList style={{overflow: "visible"}}>
                    {menuList.map((menu: any, key: number) => (
                        <CommandGroup key={key} heading={menu.group}>
                            {menu.items.map((option: any, optionKey: number) => (
                                <CommandItem key={optionKey} className="flex gap-2 cursor-pointer"> 
                                    { option.icon }
                                    { option.text }
                                </CommandItem> 
                            ))}
                        </CommandGroup>
                    ))}
                </CommandList>
            </Command>
        </div>
    </div>
};
