"use client"
import {Search, User, Settings} from "lucide-react"
import { Input } from "@/components/ui/input"



// import * as React from "react"
// import Link from "next/link"

// import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@//components/ui/button"


export function Navbar() {
  return (
    <>
    <div className="z-10 my-5 flex justify-between">
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
      <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger>Order</NavigationMenuTrigger>
              
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger>Integration</NavigationMenuTrigger>
            
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tracking</NavigationMenuTrigger>
            <NavigationMenuContent>
                 
              </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger>Partner With us</NavigationMenuTrigger>
              
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
   
      <div className="flex items-center">
      <Search size={36} />
      <Input type="text" placeholder="Search" className="mx-3" />
        <Button variant="ghost">
        <User className="mr-2 h-4 w-4" /> Account
        </Button>
        <Button variant="ghost">
          <Settings className="mr-2 h-4 w-4" /> Settings
         
        </Button>
      </div>
      </div>
      <div className="bg-slate-800 w-full h-0.5"></div>
    </>
  )
}

