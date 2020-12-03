import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";

export const Header = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const [user, setUser] = React.useState<{ admin: boolean, enseigne_id: string }>();

  useEffect(() => {
    fetch("/api/user")
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        // setUser(user.enseigne_id);
        setUser(user);
      });
  }, [session]);



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
        <Link href="/enseignes/liste-enseignes" passHref>
          <span
            style={
              router.pathname === "/enseignes/liste-enseignes" ? styles.active : styles.link
            }
          >
            Select shop
          </span>
        </Link>


        {session && user?.admin ? (
          <Link href="/admin/[admin]" as={`/admin/${user.enseigne_id}`}  passHref>
            <span
              style={
                router.pathname === "/admin/admin" ? styles.active : styles.link
              }
            >
              Admin
            </span>
          </Link>
        ) : null}
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
              <Link href="/user/[update]" as={`/user/${session.user.email}`}>

              <button className="btn btn-primary ml-2 btn-sm">Update your Profile</button>
              </Link>
            </>
          )}
        </span>
      </div>
    </div>
  );
};
