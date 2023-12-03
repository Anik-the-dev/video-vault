'use client';

import SignIn from "./signIn";
import Link from "next/link";

import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { User } from "firebase/auth";
import Image from "next/image";


function NavBar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);


  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span className={styles.logoContainer}>
          <Image className={styles.logo} src="/vup.png" alt="My Logo" width={80} height={80}/>
        </span>
      </Link>
      <SignIn user={user} />
    </nav>
  );
}

export default NavBar;
