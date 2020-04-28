//in order to get the dashboard to respect the client side routes in gatsby
//we need to use an api hook called onCreatePage

//whenever we hit /dashboard/profile, for example it will redirect to
//the private route /dashboard

//this let us create a dashboard that has private routing in it
exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = "/dashboard/*";
    actions.createPage(page);
  }
};
