function getJSON(path, func) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      var data = null;
      if (req.status == 200) {
        data = JSON.parse(req.responseText);
      }
      func(data);
    }
  };
  req.open("GET", path, false);
  // HTTPメソッドとアクセスするサーバーのURLを指定
  req.send(null);
}