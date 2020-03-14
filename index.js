function main() {
  for (var i = 0; i < 25; i++) {
    if (i%5 == 0) $("#center").append(`<div class="row justify-content-center">`);
    //for (var j = 0; j < 5; j++) {
      $(".row:last").append(`
        <div class="card bg-light text-center col-2 m-1">
          <div class="card-body">
            <h5 class="card-title" id="${i}"></h5>
          </div>
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary" type="button"></button>
            </div>
            <input type="text" class="form-control btn-outline-secondary" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TM</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Rosso</a>
                <a class="dropdown-item" href="#">Blu</a>
                <div role="separator" class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Bianco</a>
                <a class="dropdown-item" href="#">Nero</a>

              </div>
            </div>
          </div>
        </div>
      `);
    //}
  }
}
