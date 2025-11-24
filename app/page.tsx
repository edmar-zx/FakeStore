// app/page.tsx (Server Component)
import { redirect } from "next/navigation";

export default function Home() {
  // redireciona imediatamente para /products
  redirect("/products");
}
