import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Button } from "@/components/ui/button"

interface CardCompProps {
  title: string;
  body: string;
  action: string;
}


const CardComp: React.FC<CardCompProps> = ({ title, body, action }) => {
  return (
    <Card className="z-10 mx-5 grid grid-flow-col-1 content-between">
      <CardHeader >
        <CardTitle >{title}</CardTitle>
      </CardHeader>
      <CardContent >
        <p>{body}</p>
      </CardContent>
      <CardFooter>
        <Button>{action}</Button>
      </CardFooter>
    </Card>
  );
};

export default CardComp;