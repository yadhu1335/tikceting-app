import TicketForm from "@/app/(components)/TicketForm";

const TicketPage = ({ params }) => {
  return (
    <div>
      <TicketForm />
      {/* {params.id} */}
    </div>
  );
};

export default TicketPage;
