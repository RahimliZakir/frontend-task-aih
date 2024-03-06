//* Images
import Logo from "../../assets/imgs/logo.png";
//* Third Party Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header>
      <nav className="bg-[color:var(--nav-color)] py-5 border-b-[2px] border-solid border-[color:var(--border-color)]">
        <div className="custom-container flex justify-between items-center">
          <div className="w-1/2 flex items-center">
            <div className="w-[45px]">
              <img className="w-full" src={Logo} alt="Fake Store Logo" />
            </div>
            <h1 className="text-2xl font-semibold ms-2">Fake Store</h1>
          </div>
          <div className="w-1/2 text-right">
            <a
              className="text-[color:var(--linkedin-icon-color)] text-[1.2rem] font-medium"
              href="https://linkedin.com/in/rahimlizakir"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> Zakir Rahimli
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
