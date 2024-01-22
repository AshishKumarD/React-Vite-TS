// import Na from '../components/navbar';
import CardComp from '../components/card';
import WarnCard from '@/components/WarnCard';
import BlueCard from '@/components/RedCard';
import illustration from '../assets/bg illustration.svg';
function Welcome() {
  return (
    <>
    
    <img className="absolute bg-amber-30 w-full" src={illustration} alt="illustration" />
    <h2 className="relative z-20 ml-10 my-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
    Welcome, John Mathew!!
    </h2>

    <div className="grid grid-flow-col justify-stretch mx-10 pb-20">
    <CardComp
      title="Order Sync Successful!"
      body="Your order details from the last 30 days have been successfully synced. Check them out now!"
      action="Explore Your Orders"
    />
     <WarnCard 
      title="Customize Customer Notification"
      body="Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers"
      action="Configure Notifications"
    />
     <BlueCard
      title="Your Tracking Link has been generated"
      body="Include the to Your Store's Navigation Menu."
      action="Explore Your Orders"
    />
    </div>     
      
      </>
  );
}

export default Welcome;