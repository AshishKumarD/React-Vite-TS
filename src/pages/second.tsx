// import Na from '../components/navbar';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { Chart } from '@/components/piechart';
import FactCard from '@/components/fact';
import { TrackCard } from '@/components/TrackCard';
// import illustration from '../assets/bg illustration.svg';
function Second() {
  return (
    <>
    
    <div className="absolute py-10 bg-orange-50 w-full h-screen" />
    <h2 className="relative z-15 ml-10 my-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
    Instant Dive into Your Performance Metrics
    </h2>
    <div className="relative z-15 ml-10 grid grid-flow-col justify-start gap-2 mb-10">
    <Button variant="outline">Lifetime</Button>
    <Button variant="outline">Last Week</Button>
    <Button variant="outline">Last Month</Button>
    <Button variant="outline">Last Year</Button>
    <Button variant="outline">
          Customize Time Line <Settings className="ml-2 h-4 w-4" /> 
    </Button>
    </div>

    <div className="flex flex-row mx-10 relative z-15">
        <div className="w-1/2">
        <Chart/>
        </div>
    <div className="w-1/4">
        <FactCard 
                      title="Star Facts about your orders!!!"
                      action={'Check Orders Page'}/>
    </div>
        <div className="w-1/2">
        <TrackCard/>
        </div>
  
     
    
    </div>     
      
      </>
  );
}

export default Second;