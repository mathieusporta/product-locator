import NextAuth from "next-auth";
import Providers from "next-auth/providers";
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
      // console.log(user.email);
      // console.log("----------------------------------------------");
      // console.log(account);
      // console.log("----------------------------------------------");
      // console.log(profile);
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return Promise.resolve(true);
      } else {
        // Return false to display a default error message
        return Promise.resolve(false);
        // You can also Reject this callback with an Error or with a URL:
        // return Promise.reject(new Error('error message')) // Redirect to error page
        // return Promise.reject('/')        // Redirect to a URL
      }
    },

    redirect: async (url, baseUrl) => {
      return Promise.resolve("http://localhost:3000/");
    },
  },
  // A database is optional, but required to persist accounts in a database
  //   database: process.env.DATABASE_URL,
};
export default (req, res) => NextAuth(req, res, options);
