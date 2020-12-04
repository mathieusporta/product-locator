import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { getDatabase } from "../../../database";
const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
    {
      id: "connect",
      name: "Connect",
      type: "oauth",
      version: "2.0",
      scope: "openid phone email",
      params: { grant_type: "authorization_code" },
      authorizationUrl:
        "https://fewlines.connect.prod.fewlines.tech/oauth/authorize?response_type=code",
      accessTokenUrl: "https://fewlines.connect.prod.fewlines.tech/oauth/token",
      profile: (profile) => {
        return {
          id: profile.sub,
          email: profile.email,
        };
      },
      clientId: process.env.CONNECT_CLIENT_ID,
      clientSecret: process.env.CONNECT_CLIENT_SECRET,
      idToken: true,
    },
  ],

  callbacks: {
    /**
     * @param  {object} user     User object
     * @param  {object} account  Provider account
     * @param  {object} profile  Provider profile
     * @return {boolean}         Return `true` (or a modified JWT) to allow sign in
     *                           Return `false` to deny access
     */
    signIn: async (user, account, profile) => {
      const isAllowedToSignIn = true;
      const mongodb = await getDatabase();
      const userDb = await mongodb
        .db()
        .collection("users")
        .findOne({ email: profile.email });
      if (isAllowedToSignIn) {
        if (userDb === null) {
          const newUser = {
            email: profile.email,
            name: "",
            firstname: "",
            enseigne: "",
            admin: false,
          };
          mongodb.db().collection("users").insertOne(newUser);
        }
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    },

    redirect: async (url, baseUrl) => {
      return Promise.resolve("http://localhost:3000/");
    },
  },
};
export default (req, res) => NextAuth(req, res, options);
