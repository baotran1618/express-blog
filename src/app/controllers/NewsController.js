class NewsController {
  index(red, res) {
    res.render("news");
  }

  // Get news/:slug
  show(req,res){
    res.send('New Details');
  }
}

module.exports = new NewsController;
