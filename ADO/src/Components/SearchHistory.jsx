import Container from "./Container";

const SearchHistory = () => {
  return (
    <Container>
      <h1>Search History</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Story</th>
            <th scope="col">Title</th>
            <th scope="col">Assigned To</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>64640</td>
            <td>
              2024 Rewards | OH Medicaid | Kids First | Program Activity | Well
              Child Visit: 18 months - 30 months
            </td>
            <td>@Shivesh</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>105173</td>
            <td>
              2024 Rewards | OH Medicaid | KidsFirst | Parameter Tables Part 2
            </td>
            <td>@Vaihav</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>70267</td>
            <td>
              2024 Rewards | OH Medicaid | Babies First | Program Activity |
              Well-Baby Visit 4
            </td>
            <td>@Shivangi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>65432</td>
            <td>
              2024 Rewards | OH Medicaid | Babies First | Program Activity |
              Well-Baby Visit 3
            </td>
            <td>@Shiva</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default SearchHistory;
