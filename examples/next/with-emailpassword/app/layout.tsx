"use client";
import SuperTokensReact, { SuperTokensWrapper } from "supertokens-auth-react";
import { frontendConfig } from "../config/frontendConfig";

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

if (typeof window !== "undefined") {
    // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
    SuperTokensReact.init(frontendConfig());
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <SuperTokensWrapper>
                <body suppressHydrationWarning={true}>{children}</body>
            </SuperTokensWrapper>
        </html>
    );
}
