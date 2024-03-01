const loadAllCategory = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((x) => {
      console.log(x);
      let categoryArr = x.data.news_category;
      console.log(categoryArr);
      const container = document.getElementById("category-bar-container");

      //
    });
};

loadAllCategory();
