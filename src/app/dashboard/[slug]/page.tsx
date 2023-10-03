export default function Dashboard({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
