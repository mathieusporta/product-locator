import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";


export const Header = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const styles = {
    header: {
      margin: 20,
      padding: 10,
      border: "1px solid #DDD",
    },
    link: {
      margin: 15,
    },
    active: {
      cursor: "pointer",
      margin: 15,
      color: "blue",
    },
    imageProfile: {
      borderRadius: "50px",
    },
  };
  return (

    <div className="navbar" style={styles.header}>
      <div>
        <Link href="/" passHref>
          <span style={router.pathname === "/" ? styles.active : styles.link}>
            Home
          </span>
        </Link>
        <Link href="/listeProduits" passHref>
          <span
            style={
              router.pathname === "/listeProduits" ? styles.active : styles.link
            }
          >
            Liste produit
          </span>
        </Link>
        <Link href="/admin/admin" passHref>
          <span style={router.pathname === "/admin/admin" ? styles.active : styles.link}>
            Admin
          </span>
        </Link>
      </div>

      <div>
        <span className="">
          {!session && (
            <>
              <span className="mr-2">Not signed in</span>

              <button className="btn btn-primary btn-sm" onClick={signIn}>
                Sign in
              </button>
            </>
          )}
          {session && (
            <>
              {session.user.name ? (
                <span className="mr-2">{session.user.name}</span>
              ) : (
                <span className="mr-2">{session.user.email}</span>
              )}
              {session.user.image ? (
                <img
                  src={session.user.image}
                  width="40px"
                  style={styles.imageProfile}
                />
              ) : null}
              <button className="btn btn-primary ml-2 btn-sm" onClick={signOut}>
                Sign out
              </button>
            </>
          )}
        </span>
      </div>

    </div>
  );
};
