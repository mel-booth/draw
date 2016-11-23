
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('imagesTable').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        // knex('imagesTable').insert({id: 1, url: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg'}),
        // knex('imagesTable').insert({id: 2, url: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg'}),
        // knex('imagesTable').insert({id: 3, url: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg'})
      ]);
    });
};
