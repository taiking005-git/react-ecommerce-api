import Container from "./components/Container";
import Layout from "./components/Layout";
import IndexCategories from "./components/index/IndexCategories";
import IndexHero from "./components/index/IndexHero";

function App() {
  return (
    <>
      <Layout>
        <Container>
        <div className="flex gap-4 flex-col">
          <IndexHero />
          <IndexCategories />
          <IndexCategories flash />
          </div >
        </Container>
      </Layout>

    </>
  );
}

export default App;
