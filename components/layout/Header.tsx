import Container from "./Container";
import FlexLayout from "./FlexLayout";

const Header = () => {
  return (
    <header className="h-[80px] border-b-2 border-b-black">
      <Container>
        <FlexLayout>
          <h1>Logo</h1>
        </FlexLayout>
      </Container>
    </header>
  );
};

export default Header;
