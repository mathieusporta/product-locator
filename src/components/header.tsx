import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const styles = {
    header: {
      margin: 20,
      padding: 20,
      border: "1px solid #DDD",
    },
    link: {
      margin: 15,
    },
    active: {
      cursor:"pointer",
      margin: 15,
      color: "blue",
    },
  };

  return (
    <div style={styles.header}>
      <Link href="/" passHref>
        <span style={router.pathname === "/" ? styles.active : styles.link}>
          Home
        </span>
      </Link>

      <Link href="/magasins" passHref>

    
        <span style={router.pathname === "/" ? styles.active : styles.link}>
          Magasin
        </span>
      </Link>
      <Link href="/" passHref>
        <span style={router.pathname === "/" ? styles.active : styles.link}>
          Rayon
        </span>
      </Link>
      <Link href="/" passHref>
        <span style={router.pathname === "/" ? styles.active : styles.link}>
          Connexion
        </span>
      </Link>
      
    </div>
  );
};
