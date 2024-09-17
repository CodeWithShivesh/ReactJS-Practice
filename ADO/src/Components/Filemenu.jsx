import Container from "./Container";

const FileMenu = () => {
  return (
    <Container>
      <div>
        <label htmlFor="file" className="label">
          File:
        </label>
        <input type="file" name="file" id="src_file" />
        <button className="btn btn-primary px-3 button" type="button">
          Validate
        </button>
        <div className="validations">
          <input
            type="checkbox"
            name="null_val"
            id="null_val"
            className="chbx"
          />
          <label htmlFor="null validation" className="label">
            Null Validation
          </label>
          <input
            type="checkbox"
            name="space_val"
            id="space_val"
            className="chbx"
          />
          <label htmlFor="space validation" className="label">
            Space Validation
          </label>
          <input
            type="checkbox"
            name="date_val"
            id="date_val"
            className="chbx"
          />
          <label htmlFor="special validation" className="label">
            Special Character Validation
          </label>
          <input
            type="checkbox"
            name="spl_val"
            id="spl_val"
            className="chbx"
          />
          <label htmlFor="date validation" className="label">
            Date Validation
          </label>
        </div>
      </div>
    </Container>
  );
};

export default FileMenu;
