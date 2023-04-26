(() => {
  const project = document.querySelector("[data-project]");
  const filtersButton = document.querySelector("[data-filters-button]");

  function listProject() {
    return `  
<!----------------------------- data-web-site --------------------------->

    <li class="project__item" data-web-site>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project1.jpg    1x,
                        ./images/project1-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project1-tab.jpg   1x,
                        ./images/img_tab/project1-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project1-mob.jpg   1x,
                        ./images/img_mob/project1-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project1.jpg"
                      alt="Ноутбук"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Технокряк</h2>
                  <p class="project-container__text">Веб-сайт</p>
                </div>
              </a>
            </li>
<! ------------------------------data-design--------------------------------------------------->
            <li class="project__item" data-design>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project2.jpg    1x,
                        ./images/project2-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project2-tab.jpg   1x,
                        ./images/img_tab/project2-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project2-mob.jpg   1x,
                        ./images/img_mob/project2-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      class="project-img"
                      src="./images/project2.jpg"
                      alt="Два баскетболиста"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">
                    Постер New Orlean vs Golden Star
                  </h2>
                  <p class="project-container__text">Дизайн</p>
                </div>
              </a>
            </li>
<! ---------------------------------data-application----------------------------------------->
            <li class="project__item" data-application>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project3.jpg    1x,
                        ./images/project3-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project3-tab.jpg   1x,
                        ./images/img_tab/project3-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project3-mob.jpg   1x,
                        ./images/img_mob/project3-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project3.jpg"
                      alt="Силуэт рыбы"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Ресторан Seafood</h2>
                  <p class="project-container__text">Приложение</p>
                </div>
              </a>
            </li>
<! ----------------------------data-marketing----------------------------------------------->
            <li class="project__item" data-marketing>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project4.jpg    1x,
                        ./images/project4-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project4-tab.jpg   1x,
                        ./images/img_tab/project4-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project4-mob.jpg   1x,
                        ./images/img_mob/project4-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project4.jpg"
                      alt="Наушники"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Проект Prime</h2>
                  <p class="project-container__text">Маркетинг</p>
                </div>
              </a>
            </li>
<! ---------------------------------data-application----------------------------------------->
            <li class="project__item" data-application>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project5.jpg    1x,
                        ./images/project5-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project5-tab.jpg   1x,
                        ./images/img_tab/project5-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project5-mob.jpg   1x,
                        ./images/img_mob/project5-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project5.jpg"
                      alt="Две коробки"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Проект Boxes</h2>
                  <p class="project-container__text">Приложение</p>
                </div>
              </a>
            </li>
<! --------------------------------------data-web-site-------------------------------------------->
            <li class="project__item" data-web-site>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project6.jpg    1x,
                        ./images/project6-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project6-tab.jpg   1x,
                        ./images/img_tab/project6-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project6-mob.jpg   1x,
                        ./images/img_mob/project6-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project6.jpg"
                      alt="Ноутбук"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">
                    Inspiration has no Borders
                  </h2>
                  <p class="project-container__text">Веб-сайт</p>
                </div>
              </a>
            </li>
<! ------------------------------data-design--------------------------------------------------->
            <li class="project__item" data-design>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project7.jpg    1x,
                        ./images/project7-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project7-tab.jpg   1x,
                        ./images/img_tab/project7-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project7-mob.jpg   1x,
                        ./images/img_mob/project7-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project7.jpg"
                      alt="Розгорнутая книга"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">
                    Издание Limited Edition
                  </h2>
                  <p class="project-container__text">Дизайн</p>
                </div>
              </a>
            </li>
<! ----------------------------data-marketing----------------------------------------------->
            <li class="project__item" data-marketing>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project8.jpg    1x,
                        ./images/project8-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project8-tab.jpg   1x,
                        ./images/img_tab/project8-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project8-mob.jpg   1x,
                        ./images/img_mob/project8-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project8.jpg"
                      alt="Лейба"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Проект LAB</h2>
                  <p class="project-container__text">Маркетинг</p>
                </div>
              </a>
            </li>
<! ---------------------------data-application----------------------------------------------->
            <li class="project__item" data-application>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project9.jpg    1x,
                        ./images/project9-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project9-tab.jpg   1x,
                        ./images/img_tab/project9-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project9-mob.jpg   1x,
                        ./images/img_mob/project9-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project9.jpg"
                      alt="Поиск сайта"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Growing Business</h2>
                  <p class="project-container__text">Приложение</p>
                </div>
              </a>
            </li>`;
  }

  function listProjectWebSite() {
    return `  
<!----------------------------- data-web-site --------------------------->

    <li class="project__item" data-web-site>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project1.jpg    1x,
                        ./images/project1-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project1-tab.jpg   1x,
                        ./images/img_tab/project1-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project1-mob.jpg   1x,
                        ./images/img_mob/project1-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project1.jpg"
                      alt="Ноутбук"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Технокряк</h2>
                  <p class="project-container__text">Веб-сайт</p>
                </div>
              </a>
            </li>
<! --------------------------------------data-web-site-------------------------------------------->
            <li class="project__item" data-web-site>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project6.jpg    1x,
                        ./images/project6-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project6-tab.jpg   1x,
                        ./images/img_tab/project6-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project6-mob.jpg   1x,
                        ./images/img_mob/project6-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project6.jpg"
                      alt="Ноутбук"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">
                    Inspiration has no Borders
                  </h2>
                  <p class="project-container__text">Веб-сайт</p>
                </div>
              </a>
            </li>
`;
  }

  function listProjectAplication() {
    return `  
<! ---------------------------------data-application----------------------------------------->
            <li class="project__item" data-application>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project3.jpg    1x,
                        ./images/project3-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project3-tab.jpg   1x,
                        ./images/img_tab/project3-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project3-mob.jpg   1x,
                        ./images/img_mob/project3-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project3.jpg"
                      alt="Силуэт рыбы"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Ресторан Seafood</h2>
                  <p class="project-container__text">Приложение</p>
                </div>
              </a>
            </li>

<! ---------------------------------data-application----------------------------------------->
            <li class="project__item" data-application>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project5.jpg    1x,
                        ./images/project5-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project5-tab.jpg   1x,
                        ./images/img_tab/project5-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project5-mob.jpg   1x,
                        ./images/img_mob/project5-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project5.jpg"
                      alt="Две коробки"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Проект Boxes</h2>
                  <p class="project-container__text">Приложение</p>
                </div>
              </a>
            </li>

<! ---------------------------data-application----------------------------------------------->
            <li class="project__item" data-application>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project9.jpg    1x,
                        ./images/project9-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project9-tab.jpg   1x,
                        ./images/img_tab/project9-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project9-mob.jpg   1x,
                        ./images/img_mob/project9-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project9.jpg"
                      alt="Поиск сайта"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Growing Business</h2>
                  <p class="project-container__text">Приложение</p>
                </div>
              </a>
            </li>`;
  }

  function listProjectDesign() {
    return `  
<! ------------------------------data-design--------------------------------------------------->
            <li class="project__item" data-design>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project2.jpg    1x,
                        ./images/project2-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project2-tab.jpg   1x,
                        ./images/img_tab/project2-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project2-mob.jpg   1x,
                        ./images/img_mob/project2-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      class="project-img"
                      src="./images/project2.jpg"
                      alt="Два баскетболиста"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">
                    Постер New Orlean vs Golden Star
                  </h2>
                  <p class="project-container__text">Дизайн</p>
                </div>
              </a>
            </li>

<! ------------------------------data-design--------------------------------------------------->
            <li class="project__item" data-design>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project7.jpg    1x,
                        ./images/project7-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project7-tab.jpg   1x,
                        ./images/img_tab/project7-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project7-mob.jpg   1x,
                        ./images/img_mob/project7-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project7.jpg"
                      alt="Розгорнутая книга"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">
                    Издание Limited Edition
                  </h2>
                  <p class="project-container__text">Дизайн</p>
                </div>
              </a>
            </li>
`;
  }

  function listProjectMarketing() {
    return `  
<! ----------------------------data-marketing----------------------------------------------->
            <li class="project__item" data-marketing>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project4.jpg    1x,
                        ./images/project4-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project4-tab.jpg   1x,
                        ./images/img_tab/project4-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project4-mob.jpg   1x,
                        ./images/img_mob/project4-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project4.jpg"
                      alt="Наушники"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Проект Prime</h2>
                  <p class="project-container__text">Маркетинг</p>
                </div>
              </a>
            </li>

<! ----------------------------data-marketing----------------------------------------------->
            <li class="project__item" data-marketing>
              <a class="project-link" href="">
                <div class="project-link__container">
                  <picture>
                    <source
                      srcset="
                        ./images/project8.jpg    1x,
                        ./images/project8-2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/img_tab/project8-tab.jpg   1x,
                        ./images/img_tab/project8-tab2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />
                    <source
                      srcset="
                        ./images/img_mob/project8-mob.jpg   1x,
                        ./images/img_mob/project8-mob2x.jpg 2x
                      "
                      media="(min-width: 480px)"
                    />

                    <img
                      src="./images/project8.jpg"
                      alt="Лейба"
                      width="370"
                      height="294"
                    />
                  </picture>

                  <div class="overley-project">
                    <p class="overley-project__project-link-text">Hello</p>
                  </div>
                </div>

                <div class="project-container">
                  <h2 class="project-container__title">Проект LAB</h2>
                  <p class="project-container__text">Маркетинг</p>
                </div>
              </a>
            </li>
`;
  }

  filtersButton.addEventListener("click", (e) => {
    const type = e.target.value;

    switch (type) {
      case "website":
        project.innerHTML = listProjectWebSite();
        break;
      case "app":
        project.innerHTML = listProjectAplication();
        break;
      case "design":
        project.innerHTML = listProjectDesign();
        break;
      case "marketing":
        project.innerHTML = listProjectMarketing();
        break;
      case "all":
        project.innerHTML = listProject();
        break;
      default:
        project.innerHTML = listProject();
        break;
    }
  });

  project.innerHTML = listProject();
})();
