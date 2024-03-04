import Logo from "../assets/imgs/header/logo.png";

const Header = () => {
  return (
    <header>
      <nav className="custom-container py-5 border-b-[2px] border-solid border-[color:var(--border-color)]">
        <div className="flex">
          <div className="w-[3.5%]">
            <img className="w-full" src={Logo} alt="Fake Store Logo" />
          </div>
          <h1 className="text-2xl font-semibold ms-2">Fake Store</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
