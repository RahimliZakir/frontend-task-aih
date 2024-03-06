//* Images
import Logo from "../../assets/imgs/logo.png";
//* Third Party Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header>
      <nav className="custom-container bg-[color:var(--nav-color)] flex justify-between items-center py-5 border-b-[2px] border-solid border-[color:var(--border-color)]">
        <div className="flex items-center">
          <div className="w-[7.5%]">
            <img className="w-full" src={Logo} alt="Fake Store Logo" />
          </div>
          <h1 className="text-2xl font-semibold ms-2">Fake Store</h1>
        </div>
        <div>
          <a
            className="text-[color:var(--linkedin-icon-color)] text-[1.2rem] font-medium"
            href="https://linkedin.com/in/rahimlizakir"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> Zakir Rahimli
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
