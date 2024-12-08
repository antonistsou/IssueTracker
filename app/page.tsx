import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function Home() {

  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>{session && <span> {session.user?.name}</span>}</h1>
      <ProductCard></ProductCard>
    </main>
  );
}
