function main() {
  $("#start").hide();
  for (var i = 0; i < 25; i++) {
    if (i%5 == 0) $("#center").append(`<div class="row justify-content-center">`);
    //for (var j = 0; j < 5; j++) {
      $(".row:last").append(`
        <div class="card bg-light text-center col-2 m-1" id="${i}">
          <div class="card-body">
            <h5 class="card-title"></h5>
          </div>
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary" type="button" onclick="add_word(${i},'ciao')"></button>
            </div>
            <input type="text" class="form-control btn-outline-secondary" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="input-${i}">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TM</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:show(${i},'danger')">Rosso</a>
                <a class="dropdown-item" href="javascript:show(${i},'primary')">Blu</a>
                <div role="separator" class="dropdown-divider"></div>
                <a class="dropdown-item" href="javascript:show(${i},'secondary')">Bianco</a>
                <a class="dropdown-item" href="javascript:show(${i},'dark')">Nero</a>

              </div>
            </div>
          </div>
        </div>
      `);
    //}
  }
}

function show(id, color){
  console.log("ciao")
  $(`#${id}`).removeClass("bg-light");
  $(`#${id}`).addClass(`bg-${color}`);
  $(`#${id} input`).addClass(`bg-${color}`);

}

function add_word(id){
  var text = document.getElementById("input-"+id).value
  $(`#${id} h5`).append(text);
}
