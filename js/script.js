function readURL(input, id) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    var image = document.getElementById(id).firstElementChild;

    reader.onload = function (e) {
      image.setAttribute("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function openFile(id) {
  document.getElementById(id).click();
}

function saveImage() {
  if (
    typeof document.getElementById("canvas") != "undefined" &&
    document.getElementById("canvas") != null
  ) {
    document.getElementById("canvas").remove();
  }
  html2canvas(document.getElementById("chart"), { useCORS: true }).then(
    (canvas) => {
      document.body.appendChild(canvas).setAttribute("id", "canvas");
      var c = document.getElementById("canvas");
      c.setAttribute("crossorigin", "anonymous");
      const link = document.createElement("a");
      link.download = "download.png";
      link.href = c.toDataURL();
      link.click();
      link.delete;
    }
  );
}
