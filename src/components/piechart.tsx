"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {Circle} from "lucide-react"  
import { Button } from "@//components/ui/button"
import piechart from "@/assets/Group.png"


export function Chart() {
  return (
    <>
    <Card  className="z-10 mx-5 grid grid-flow-col-1 content-between">
  <CardHeader className="z-10 my-5 flex flex-row justify-between">
    <CardTitle>Shipment Updates</CardTitle>
    <CardDescription>Total Orders: 394</CardDescription>
  </CardHeader>
  <div className="ml-10 flex overflow-auto justify-start gap-2 mb-10">
    <Button variant="outline">Lifetime</Button>
    <Button variant="outline">Last Week</Button>
    <Button variant="outline">Last Month</Button>
    <Button variant="outline">Last Year</Button>
    <Button variant="outline">
          Customize Time Line 
    </Button>
    </div>
  <CardContent className="flex justify-around">
  <img src={piechart} alt="piechart" />
  </CardContent>
  <CardFooter>
  <div className="flex flex-wrap">
  
    <Button variant="ghost"> <Circle className="h-3 w-3 mr-1 fill-amber-800 stroke-none"/>Exception</Button>
    <Button variant="ghost"><Circle className="h-3 w-3 mr-1 fill-amber-700 stroke-none"/>Intransit</Button>
    <Button variant="ghost"><Circle className="h-3 w-3 mr-1 fill-amber-600 stroke-none"/>Pending</Button>
    <Button variant="ghost"><Circle className="h-3 w-3 mr-1 fill-amber-400 stroke-none"/>Delivered</Button>
    <Button variant="ghost">
    <Circle className="h-3 w-3 mr-1 fill-amber-100 stroke-none"/>
       Out for delivery 
    </Button>
    </div>
  </CardFooter>
</Card>
    </>
  )
}

