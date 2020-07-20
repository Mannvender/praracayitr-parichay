import Homepage from "pages/home"
import Article from "pages/article"
import { homepage, article } from "routes/list"

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
]
