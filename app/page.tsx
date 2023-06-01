import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import MainContents from "./components/contents/MainContents";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div>
      <ClientOnly>
        <Container>
          <ClientOnly>
            <MainContents currentUser={currentUser} />
          </ClientOnly>
        </Container>
      </ClientOnly>
    </div>
  );
}
