function ThirdRow() {
  let todoTask = "Go to college";
  let todoDate = "4/10/2023";
  return (
    <div class="container ">
      <div class="row todoRow">
        <div class="col-4 item">{todoTask}</div>
        <div class="col-4 item">{todoDate}</div>
        <div class="col-2">
          <button type="button" className="btn btn-danger todoButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdRow;
