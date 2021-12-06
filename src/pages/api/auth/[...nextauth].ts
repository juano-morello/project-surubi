import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
    ],
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    jwt: {
        secret: process.env.SECRET,
    },
})