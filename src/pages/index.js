import * as React from "react";
import { Link, graphql } from "gatsby";

export default function Homepage({ data }) {
  return (
    <div>
      <div className="container">
        <div>
          <h1 className="text-center p-10 text-2xl italic">Homepage</h1>
        </div>
        <div>
          {data.allStrapiCity.nodes.map((item) => (
            <div className="mb-5">
              <Link
                to={`/${item.slug}`}
                key={item.slug}
                className="bg-emerald-500 hover:bg-emerald-600 block rounded-t-xl"
              >
                <h1 className="text-lg font-bold uppercase p-5">
                  {item.title}
                </h1>
              </Link>
              <div
                className="bg-emerald-900 p-5 bg-no-repeat bg-cover bg-center rounded-b-xl"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0.27) 0%,rgba(0, 0, 0, 0.80) 100%), url(http://localhost:1337${item.cover.url})`,
                }}
              >
                <p>{item.heroTitle}</p>
                <p>{item.heroDescription}</p>
                <div>
                  <h2 className="text-lg font-bold my-5">Articles</h2>
                  <div>
                    {item.articles.map((article) => (
                      <Link
                        className="bg-emerald-400 hover:bg-emerald-300 p-5 rounded-lg text-slate-800 block"
                        to={`/article/${article.slug}`}
                        key={article.slug}
                      >
                        <h3 className="text-lg font-bold">{article.title}</h3>
                        <p>{article.shortDescription}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    allStrapiCity {
      nodes {
        slug
        title
        heroTitle
        heroDescription
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
          }
        }
        articles {
          slug
          title
          featured
          shortDescription
        }
      }
    }
  }
`;
