import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import MainContents from "./components/contents/MainContents";

export default async function Home() {
  return (
    <div>
      <ClientOnly>
        <Container>
          <MainContents />
        </Container>
      </ClientOnly>
    </div>
  );
}
