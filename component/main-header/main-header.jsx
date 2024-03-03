import Link from "next/link";
import React from "react";
import logoImage from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image src={logoImage} alt="logo-image" priority />
          <div className={styles.nextLevelFoodText}>NextLevel Food</div>
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meal</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
