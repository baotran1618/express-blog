class SiteController {
  index(red, res) {
    res.render('home');
  }


  search(req,res){
    res.render('search');
  }
}

module.exports = new SiteController;
