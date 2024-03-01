const loadAllCategory = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((x) => {
      console.log(x);
      let categoryArr = x.data.news_category;
      console.log(categoryArr);
      const container = document.getElementById("category-bar-container");

      //
      for (i = 0; i < categoryArr.length; i++) {
        //for id
        const div1 = document.createElement("div1");
        div1.innerText = categoryArr[i].category_id;
        div1.classList.add("div1_btn");
        container.appendChild(div1);
        // for class
        const div2 = document.createElement("div2");
        div2.innerText = categoryArr[i].category_name;
        div2.classList.add("div2_btn");
        container.appendChild(div2);
      }
    });
};

loadAllCategory();
