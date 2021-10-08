exports.getHead = function (extension) {
  switch (extension) {
    case ".html":
      return "text/html"
    case ".js":
      return "text/javascript"
    case ".css":
      return "text/css"
    default:
      "text/html"
  }
}