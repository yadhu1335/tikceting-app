import {
  faHome,
  faHomeAlt,
  faHomeLg,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">yadhu@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;

//The use of component folder is that we cannot navigate to that unlike ticket page. So we store
//files such as borders, etc that we dont want to be navigated.
