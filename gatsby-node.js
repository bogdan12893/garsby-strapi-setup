const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const cities = await graphql(`
    query Cities {
      allStrapiCity {
        nodes {
          slug
        }
      }
    }
  `);

  const articles = await graphql(`
    query Articles {
      allStrapiArticle {
        nodes {
          slug
        }
      }
    }
  `);

  cities.data.allStrapiCity.nodes.forEach((node) => {
    console.log(node.slug);
    actions.createPage({
      path: "/" + node.slug,
      component: path.resolve("./src/templates/CityDetails.js"),
      context: { slug: node.slug },
    });
  });

  articles.data.allStrapiArticle.nodes.forEach((node) => {
    console.log(node.slug);
    actions.createPage({
      path: "/article/" + node.slug,
      component: path.resolve("./src/templates/ArticleDetails.js"),
      context: { slug: node.slug },
    });
  });
};
