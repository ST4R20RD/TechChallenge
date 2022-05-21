import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai';

export function Navbar() {
  return (
    <nav>
      <Link to="/"><AiFillHome size={50}/></Link>
    </nav>
  );
}
