export default function ID({ id }) {
  return <div>{id}</div>;
}
export async function getStaticProps({ params }) {
  const id = params.id;
  return {
    props: {
      id,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: "ii" },
      },
    ],
    fallback: true,
  };
}
