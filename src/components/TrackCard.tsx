"use client"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Inbox , Eye} from 'lucide-react';

  export function TrackCard() {
    return (
      <Card className="">
        <CardHeader>
          <CardTitle>Tracking Page Views Vs Orders</CardTitle>
          <CardDescription>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</CardDescription>
        </CardHeader>
        <Card className="m-3 grid grid-cols-2 items-center justify-between bg-orange-200">
            <div className="p-3">
                <p className="font-medium text-xs">Orders</p>
                <p className="font-bold text-4xl">80</p>
            </div>
            <Inbox className="justify-self-end mr-5" />
        </Card>
        <Card className="m-3 grid grid-cols-2 items-center justify-between bg-orange-300">
            <div className="p-3">
                <p className="font-medium text-xs">Tracking Page Views</p>
                <p className="font-bold text-4xl">44</p>
            </div>
            
            <Eye className="justify-self-end mr-5" />
        </Card>
      </Card>
    )
  }