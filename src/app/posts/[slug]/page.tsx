import RichText from "@/components/RichText/RichText";
import payload from "payload";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params;

  const { docs: posts } = await payload.find({
    collection: "posts",
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const [post] = posts;
  return <RichText content={post.content} />;
};

export default Page;
