import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"
  import { Button } from "@/components/ui/button"
  import { AlertCircle} from "lucide-react";
  
  interface CardCompProps {
    title: string;
    body: string;
    action: string;
  }
  
  
  const BlueCard: React.FC<CardCompProps> = ({ title, action }) => {
    return (
      <Card className="z-10 mx-5 bg-blue-100 grid grid-flow-col-1 content-between">
        <div>
        <CardHeader >
        
          <CardTitle className="flex flex-nowrap">  <AlertCircle className="mr-3"/> {title}</CardTitle>
        </CardHeader>
        <CardContent >
       
          <p>Include the <a href={"https://50d72d-5.myshopify.com/password"} target="_blank" rel="noopener noreferrer">link</a> to Your Store's Navigation Menu.</p>
        </CardContent>
        </div>

        <CardFooter >
          <Button variant="ghost" className="bg-white mr-3">Copy Link</Button>
          <Button>{action}</Button>
        </CardFooter>
      </Card>
    );
  };
  
  export default BlueCard;