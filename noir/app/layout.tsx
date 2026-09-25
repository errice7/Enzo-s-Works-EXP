import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"NOIR — Seu ritmo. Suas regras.",description:"Streetwear essencial. Explore camisetas, moletons, jeans e peças urbanas da NOIR.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
