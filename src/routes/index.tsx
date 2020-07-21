import Homepage from "pages/home"
import Article from "pages/article"
import Search from "pages/search"
import { homepage, article, search } from "routes/list"

export default [
  {
    path: homepage,
    exact: true,
    component: Homepage,
    public: true,
    private: false,
    publicOnly: false,
    layout: "StackLayout",
  },
  {
    path: article,
    exact: true,
    component: Article,
    public: true,
    private: false,
    publicOnly: false,
    layout: "StackLayout",
  },
  {
    path: search,
    exact: true,
    component: Search,
    public: true,
    private: false,
    publicOnly: false,
    layout: "StackLayout",
  },
]
