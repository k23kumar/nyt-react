import axios from "axios";


const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const APIKEY =  "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";


export default {
  search: function(query) {
    return axios.get(BASEURL, {
        params: {
            q: query.q,
            fq: `document_type: ("article")`,
            begin_date: query.begin_date,
            end_date: query.end_date,
            "api-key": APIKEY
        }
    });
  },

    // Gets all articles
    getArticles: function() {
      return axios.get("/api/articles");
    },
    // Gets the article with the given id
    getArticle: function(id) {
      return axios.get("/api/articles/" + id);
    },
    // Deletes the article with the given id
    deleteArticle: function(id) {
      return axios.delete("/api/articles/" + id);
    },
    // Saves a article to the database
    saveArticle: function(articleData) {
      return axios.post("/api/articles", articleData);
    }
};