import User from "@/models/user";

import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { MongodbConnection } from "../../../../lib/mongodb";
export const authOptions = {
  providers: [
    // CredentialsProvider({
    //     // ** The name to display on the sign in form (e.g. 'Sign in with...')
    //     name: 'Credentials',
    //     type: 'credentials',

    //     /*
    //      * As we are using our own Sign-in page, we do not need to change
    //      * username or password attributes manually in following credentials object.
    //      */
    //     credentials: {},

    //   async authorize(credentials) {
    //     const { email, password } = credentials;

    //    try {
    //       await MongodbConnection();
    //       const user = await User.findOne({ email });

    //       if (!user) {
    //         return null;
    //       }

    //       const passwordsMatch = await bcrypt.compare(password, user.password);

    //       if (!passwordsMatch) {
    //         return null;
    //       }

    //       return user;
    //     } catch (error) {
    //       console.log("Error: ", error);
    //     }
    //   },
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      // async authorize(credentials) {
      //   console.log("We are here just");
      //   if (!credentials?.email || !credentials?.password) {
      //     throw new Error("Invalid Credentials");
      //   }
      //   await MongodbConnection();

      //   const user = await User.find({
      //     email: credentials.email,
      //   })

      //   if (!user || !user[0]?.password) {
      //     throw new Error("Invalid Credentials");
      //   }
      //   const isCorrectPassword = await bcrypt.compare(
      //     credentials.password,
      //     user[0].password
      //   );
      //   if (!isCorrectPassword) {
      //     console.log()
      //     throw new Error("Invalid Credentials");
      //   }

      //   console.log('user is a :',user)

      //   return user;
      // },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Invalid Credentials");
          }

          await MongodbConnection();

          const user = await User.findOne({ email: credentials.email }).select(
            "+password"
          );


          if (!user) {
            throw (
              (new Error("User not found"),
              console.log("hey there this is error"))
            );
          }

          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isCorrectPassword) {
            throw new Error("Incorrect password");
          }

          // console.log("User found:", user);

          return user;
        } catch (error) {
          console.error("Authorization error:", error);
          return null; // Return null on error
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",

    // ** 30 days
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
