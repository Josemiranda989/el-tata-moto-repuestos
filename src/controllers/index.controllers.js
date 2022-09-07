module.exports = {
    home: (req, res) => {
          res.render('home', { title: 'El Tata', style: 'home' });
    }
}