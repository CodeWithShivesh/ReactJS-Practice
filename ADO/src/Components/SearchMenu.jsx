import Container from "./Container";

const SearchMenu = () => {
  return (
    <Container>
      <div>
        <input
          type="url"
          name="ADO_LINK"
          id="link"
          placeholder="Paste the Ado link here....."
        />
        <button className="btn btn-primary px-3 button" type="button">
          Fetch Details
        </button>
      </div>
    </Container>
  );
};

export default SearchMenu;
