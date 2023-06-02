import { Link } from "react-router-dom";
import goofLogo from "../../assets/gooflogo.svg";

import "./Header.css";
import { useAppSelector } from "../../store/hooks/redux";
import { selectUser } from "../../store/reducers/authSlice";

export default function Header() {
  const user = useAppSelector(selectUser);
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
        {user ? (
          <div className="header__profile">
            <Link to="/profile">{user.username}</Link>
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
