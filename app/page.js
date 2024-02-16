import TicketCard from "./(components)/TicketCard";

const Dashbord = () => {
  return (
    <div className="p-5 ">
      <div className="lg:grid grid-cols-6 xl:grid grid-cols-4">
        {/* change 6 to 2 */}
        {/* the above div is to make it suitable for both small screens and large screens */}
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashbord;
