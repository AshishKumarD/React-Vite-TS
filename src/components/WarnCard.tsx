import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"
  import { Button } from "@/components/ui/button"
  import { AlertTriangle } from "lucide-react";
  
  interface CardCompProps {
    title: string;
    body: string;
    action: string;
  }
  
  
  const WarnCard: React.FC<CardCompProps> = ({ title, body, action }) => {
    return (
      <Card className="z-10 mx-5 bg-amber-100 grid grid-flow-col-1 content-between">
        <div>
        <CardHeader >
        
          <CardTitle className="flex flex-nowrap">  <AlertTriangle className="mr-3"/> {title}</CardTitle>
        </CardHeader>
        <CardContent >
       
          <p>{body}</p>
        </CardContent>
        </div>
        <CardFooter>
       
          <Button>{action}</Button>
        </CardFooter>
      </Card>
    );
  };
  
  export default WarnCard;