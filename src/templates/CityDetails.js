import * as React from "react";
import { graphql, Link } from "gatsby";

export default function CityDetails({ data }) {
  const { strapiCity } = data;
  return (
    <div className="container my-5">
      <div className="bg-emerald-900 p-10 rounded-lg">
        <h1 className="text-2xl mb-5">{strapiCity.title}</h1>
        <p>{strapiCity.heroTitle}</p>
        <p>{strapiCity.heroDescription}</p>
        <div className="my-5">
          <h2 className="text-xl font-bold mb-5">Articles</h2>
          {strapiCity.articles.map((article) => (
            <div
              className="bg-emerald-400 p-5 rounded-lg bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0.27) 0%,rgba(0, 0, 0, 0.80) 100%), url(http://localhost:1337${article.cover.url})`,
              }}
            >
              <div>
                <Link to={`/article/${article.slug}`} key={article.slug}>
                  <h3 className="text-md font-bold">{article.title}</h3>
                </Link>

                <h4>{article.city.title}</h4>
                <p>{article.shortDescription}</p>
                <p>FEAT: {JSON.stringify(article.featured)}</p>
              </div>
            </div>
          ))}
        </div>
        <pre>{JSON.stringify(strapiCity, null, 2)}</pre>
      </div>
    </div>
  );
}

export const query = graphql`
  query ($slug: String) {
    strapiCity(slug: { eq: $slug }) {
      heroTitle
      heroDescription
      slug
      title
      articles {
        shortDescription
        slug
        title
        featured
        article_tags {
          name
        }
        city {
          title
        }
        cover {
          url
          formats {
            large {
              url
            }
            medium {
              url
            }
            small {
              url
            }
            thumbnail {
              url
            }
          }
        }
      }
    }
  }
`;
