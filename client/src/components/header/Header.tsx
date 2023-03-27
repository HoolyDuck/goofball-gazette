import { Link } from "react-router-dom";
import goofLogo from "../../assets/gooflogo.svg";

import "./Header.css";
import { useAppSelector } from "../../store/hooks/redux";

export default function Header() {
  const user = useAppSelector((state) => state.userReducer);

  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <img
            src={goofLogo}
            alt="logo"
            draggable="false"
            
          />
        </div>
        {user.isAuth ? (
          <div className="header__profile">
            <Link to="/profile">Profile</Link>
          </div>
        ) : (
          <div className="header__login">
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </header>
  );
}
