import RichText from "@/components/RichText/RichText";
import Link from "next/link";
import payload from "payload";

export default async function Home() {
  const { docs: posts } = await payload.find({ collection: "posts" });
  return (
    <main>
      {posts.map((post) => (
        <section key={post.id}>
          <h2>{post.title}</h2>
          <hr />
          <Link href={`posts/${post.slug}`}>więcej...</Link>
        </section>
      ))}
    </main>
  );
}
