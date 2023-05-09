import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '../../../utils/dbConnect';
import Auth from '../../../models/Auth';
import { compare } from "bcrypt"
export default NextAuth({
    providers: [
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                await dbConnect();
                // check user existance

                const result = await Auth.findOne({ email: credentials.email })
                if (!result) {
                    throw new Error("No user Found with Email?")
                }

                // compare password
                const checkPassword = await compare(credentials.password, result.password)

                // incorrect password
                if (!checkPassword || result.email !== credentials.email) {
                    throw new Error("Username or Password doesn't match!")
                }
                return result;
            }
        })
    ],
    secret: process.env.JWT_SECRET
})