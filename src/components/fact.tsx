import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"
  import { Button } from "@/components/ui/button"
//   import { AlertCircle} from "lucide-react";
  
  interface CardCompProps {
    title: string;
    action: string;
  }
  
  
  const FactCard: React.FC<CardCompProps> = ({title,action}) => {
    return (
      <Card className="z-10 mx-5 bg-amber-600 grid grid-flow-col-1 content-between">
        <div>
        <CardHeader >
        
          <CardTitle className="flex flex-nowrap">{title}</CardTitle>
        </CardHeader>
        <CardContent >
          <p>There are 8 shipments that have been in out for delivery for more than 3 days.</p>
          <br/>
          <p>There are 5 shipments in exception right now</p>
          <br/>
          <p>The maximum chargebacks are from Miami.</p>
        </CardContent>
        </div>

        <CardFooter >
          <Button variant="ghost" className="bg-white mr-3">{action}</Button>
         
        </CardFooter>
      </Card>
    );
  };
  
  export default FactCard;