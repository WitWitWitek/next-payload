const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`);
  return res.json();
};

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <div>Hello Marian!</div>
    </main>
  );
}
