import { useContext } from "react";
import { AuthContext } from "context";
import styles from "./Home.module.css";
import { PhoneList } from "components/PhoneList";
import { Navbar } from "components";

export function Home() {
  return (
    <div>
      <PhoneList/>
    </div>
  );
}
