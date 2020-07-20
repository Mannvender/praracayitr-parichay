import Homepage from "pages/home"
import Article from "pages/article"

export default [
  {
    path: "/",
    exact: true,
    component: Homepage,
    public: true,
    private: false,
    publicOnly: false,
    layout: "StackLayout",
  },
  {
    path: "/article",
    exact: true,
    component: Article,
    public: true,
    private: false,
    publicOnly: false,
    layout: "StackLayout",
  },
]
