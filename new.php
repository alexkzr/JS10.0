<?php 
/*

    Template Name: Calculator

*/?>

<?php get_header(); ?>
<div class="containerWrap">
  <form>
    <div class="form-select">
      <div class="form-group">
        <label for="selectAuto">Выберите автомобиль</label>
        <select class="form-control" id="selectAuto">
          <option></option>
        </select>
      </div>
      <div class="form-group">
        <label for="selectModel">Выберите модель</label>
        <select class="form-control" id="selectModel" disabled>
          <option></option>
        </select>
      </div>
    </div>

    <div class="cost">

      <img src="<?php echo get_template_directory_uri();?>/img/part-initial.png" alt="" class="cost__parts-item-initial">
      <svg class="cost__parts-item-overlay" viewBox="0 0 644 215" xmlns="http://www.w3.org/2000/svg">
        <g />
        <path id="part-1"
          d="M 492.967 134.219 C 491.694 135.947 490.373 137.599 488.967 139.219 C 486.492 142.071 483.819 144.744 480.967 147.219 C 461.327 148.926 442.315 150.241 422.967 151.219 C 402.953 152.23 376.021 152.773 355.967 154.219 C 345.481 154.975 333.894 155.79 324.967 156.219 C 313.835 156.754 303.015 157.083 291.967 157.219 C 292.126 155.376 292.142 153.524 292.015 151.678 C 291.799 149.506 291.449 147.349 290.967 145.219 C 289.88 139.073 288.206 133.045 285.967 127.219 C 284.073 122.663 281.728 118.308 278.967 114.219 L 271.967 114.219 C 272.687 115.874 273.344 117.519 273.967 119.219 C 276.787 126.589 278.473 134.344 278.967 142.219 C 279.167 148.284 278.493 154.346 276.967 160.219 C 275.98 164.003 274.641 167.686 272.967 171.219 C 278.275 170.883 283.581 170.549 288.885 170.219 C 356.53 166.009 423.261 162.377 490.967 159.219 C 490.947 157.875 490.947 156.563 490.967 155.219 C 491.075 148.177 491.744 141.155 492.967 134.219 Z"
          style="mix-blend-mode: multiply; fill-rule: evenodd;" class="cost__parts-item cost__parts-item--active" />
        <path id="part-2"
          d="M 281.707 57.693 C 278.529 61.904 274.423 65.326 269.707 67.693 C 266.863 69.11 263.833 70.12 260.707 70.693 C 234.872 73.093 200.085 76.577 183.707 78.693 C 178.23 79.362 172.856 80.705 167.707 82.693 C 163.114 84.507 158.751 86.856 154.707 89.693 C 150.703 90.021 146.703 90.355 142.707 90.693 C 135.027 91.343 127.383 92.007 119.707 92.693 C 113.867 89.525 107.35 87.81 100.707 87.693 L 98.707 86.693 C 86.818 84.506 74.787 83.169 62.707 82.693 C 56.012 82.429 49.407 82.429 42.707 82.693 C 56.891 76.625 71.625 71.937 86.707 68.693 C 105.934 64.554 134.422 61.435 157.707 59.693 C 162.084 59.347 166.429 58.678 170.707 57.693 C 173.079 57.129 175.401 56.465 177.707 55.693 C 184.735 56.078 191.674 56.408 198.707 56.693 C 226.555 57.818 253.821 58.147 281.707 57.693 Z"
          style="mix-blend-mode: multiply; fill-rule: evenodd;" class="cost__parts-item cost__parts-item--active" />
        <path id="part-3"
          d="M 303.248 59.785 C 302.208 61.277 301.524 62.988 301.248 64.785 C 300.88 67.322 301.538 69.037 302.248 71.785 C 302.688 73.429 303.022 75.099 303.248 76.785 C 303.528 79.11 303.528 81.461 303.248 83.785 L 303.248 157.785 L 475.248 149.785 C 482.736 149.344 489.325 144.693 492.248 137.785 C 493.574 134.893 495.033 132.723 496.248 129.785 C 500.255 120.091 511.524 99.112 516.248 87.785 C 517.861 83.284 518.85 78.583 519.185 73.813 C 519.359 69.985 518.914 66.755 517.185 63.756 C 515.92 61.598 514.217 59.729 512.185 58.27 C 511.043 57.448 509.185 56.442 509.185 56.441 C 509.185 56.44 509.185 56.441 507.185 52.784 C 486.73 52.871 466.685 53.2 446.242 53.784 C 436.888 54.051 417.528 54.832 403.042 55.384 C 388.49 55.943 373.965 56.404 359.242 56.784 C 355.245 59.034 350.812 60.398 346.242 60.784 C 344.578 60.919 342.906 60.919 341.242 60.784 L 338.242 65.784 C 331.601 67.615 327.091 66.802 326.242 64.784 C 325.666 63.415 326.774 61.484 328.242 59.784 L 303.248 59.784 Z"
          style="mix-blend-mode: multiply; fill-rule: evenodd;" class="cost__parts-item cost__parts-item--active" />
        <path id="part-4"
          d="M 600.66 69.304 C 599.327 77.637 597.993 85.97 596.66 94.304 L 605.66 94.304 C 605.327 96.97 604.993 99.637 604.66 102.304 C 601.347 103.438 598.048 104.428 594.66 105.304 C 589.72 106.583 584.712 107.584 579.66 108.304 C 577.342 102.989 573.936 98.22 569.66 94.304 C 561.23 86.625 550.067 83.004 538.66 83.304 C 542.536 76.668 543.952 68.879 542.66 61.304 L 571.66 61.304 C 571.293 59.216 570.619 57.194 569.66 55.304 C 568.02 52.102 565.616 49.354 562.66 47.304 C 567.159 49.165 571.856 50.507 576.66 51.304 C 582.185 52.204 587.133 53.415 592.66 54.304 C 598.927 55.102 603.862 60.036 604.66 66.304 L 600.378 68.445 C 600.48 68.728 600.58 69.012 600.66 69.304 Z"
          style="mix-blend-mode: multiply; fill-rule: evenodd;" class="cost__parts-item cost__parts-item--active" />
        <path id="part-5"
          d="M 259.702 14.556 C 274.501 10.376 289.525 7.037 304.702 4.556 C 360.93 -4.625 430.01 2.892 446.702 5.556 C 457.14 7.222 467.339 9.196 477.702 11.556 L 486.702 21.556 C 463.302 15.129 439.024 11.071 415.702 10.556 C 399.855 10.206 385.202 11.237 374.702 13.556 C 367.896 15.06 361.211 17.065 354.702 19.556 C 354.227 16.071 351.219 13.493 347.702 13.556 C 335.763 13.087 323.875 12.756 311.702 12.556 C 299.027 12.242 286.343 12.576 273.702 13.556 C 270.334 13.841 267.052 14.169 263.702 14.556 L 259.702 14.556 Z"
          style="mix-blend-mode: multiply; fill-rule: evenodd;" class="cost__parts-item cost__parts-item--active" />
        <path id="part-6"
          d="M 302.461 60.004 C 296.142 57.377 289.273 56.347 282.461 57.004 C 275.632 65.423 265.3 70.22 254.461 70.004 C 260.691 72.155 266.221 75.957 270.461 81.004 C 272.453 83.404 276.432 90.804 278.461 99.004 C 279.672 103.916 280.343 108.946 280.461 114.004 C 288.164 127.457 292.615 142.524 293.461 158.004 L 303.461 158.004 L 303.461 128.004 C 303.461 128.004 303.368 113.895 303.461 111.004 C 303.883 97.88 304.98 88.047 303.461 75.004 C 303.185 72.638 302.861 70.34 302.461 68.004 L 302.461 60.004 Z"
          style="mix-blend-mode: multiply; fill-rule: evenodd;" class="cost__parts-item" />
        <path id="part-7"
          d="M 495.954 124.545 C 502.308 107.197 513.033 94.878 517.954 91.545 C 525.009 86.607 533.347 83.828 541.954 83.545 C 552.21 83.253 562.203 86.822 569.954 93.545 C 574.27 97.404 580.233 105.65 582.954 118.545 C 585.016 128.541 584.325 138.911 580.954 148.545 L 570.954 150.545 C 578.207 131.27 575.328 112.893 564.954 102.545 C 560.294 97.94 554.381 94.81 547.954 93.545 C 541.564 92.277 534.94 92.974 528.954 95.545 C 510.512 103.894 501.936 132.768 500.954 145.545 C 500.795 147.615 500.454 154.145 495.954 157.545 C 494.483 158.624 492.763 159.312 490.954 159.545 C 490.599 155.219 490.599 150.871 490.954 146.545 C 491.613 139.018 493.295 131.617 495.954 124.545 Z M 162.954 175.545 C 161.536 166.265 161.536 156.824 162.954 147.545 C 166.274 126.126 175.554 104.77 193.954 93.545 C 204.462 87.135 218.854 82.95 233.954 85.545 C 241.874 86.841 249.396 89.918 255.954 94.545 C 271.676 105.824 277.478 125.516 278.954 139.545 C 279.976 149.258 278.886 156.674 276.954 162.545 C 275.925 165.671 274.585 168.686 272.954 171.545 L 263.954 171.545 C 265.544 169.015 266.884 166.335 267.954 163.545 C 275.054 144.979 271.297 118.091 252.954 104.545 C 246.777 100.081 239.535 97.322 231.954 96.545 C 216.099 94.786 202.776 101.606 194.954 108.545 C 179.974 121.835 174.562 143.921 173.954 157.545 C 173.774 161.574 173.698 171.371 167.954 174.545 C 166.418 175.353 164.682 175.7 162.954 175.545 Z"
          style="mix-blend-mode: multiply; fill-rule: evenodd;" class="cost__parts-item" />
      </svg>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox0" value="option0" checked="checked">
      <label class="form-check-label flex" id="switch" for="inlineCheckbox0">
        <img class="img-switch" id="switch-off" src="<?php echo get_template_directory_uri();?>/img/switch-off.png" alt="img">
        <img class="img-switch" id="switch-on" src="<?php echo get_template_directory_uri();?>/img/switch-on.png" alt="img">
        Пакет "Комплексная шумоизоляция"
        <span class="priceoption0"></span>
      </label>
    </div>

   
  <div class="form-line">
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked="checked">
      <label class="form-check-label" id="label1" for="inlineCheckbox1">
        <img class="img-radio on" id="radio-on-1" src="<?php echo get_template_directory_uri();?>/img/radio-on.png"
          alt="radio" data-img="<?php echo get_template_directory_uri();?>/img/radio-off.png">
        Пол
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked="checked">
      <label class="form-check-label" id="label2" for="inlineCheckbox2">
        <img class="img-radio on" id="radio-on-2" src="<?php echo get_template_directory_uri();?>/img/radio-on.png"
          alt="radio" data-img="<?php echo get_template_directory_uri();?>/img/radio-off.png">
        Капот
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" checked="checked">
      <label class="form-check-label" id="label3" for="inlineCheckbox3">
        <img class="img-radio on" id="radio-on-3" src="<?php echo get_template_directory_uri();?>/img/radio-on.png"
          alt="radio" data-img="<?php echo get_template_directory_uri();?>/img/radio-off.png">
        Двери
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" checked="checked">
      <label class="form-check-label" id="label4" for="inlineCheckbox4">
        <img class="img-radio on" id="radio-on-4" src="<?php echo get_template_directory_uri();?>/img/radio-on.png"
          alt="radio" data-img="<?php echo get_template_directory_uri();?>/img/radio-off.png">
        Багажник
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" checked="checked">
      <label class="form-check-label" id="label5" for="inlineCheckbox5">
        <img class="img-radio on" id="radio-on-5" src="<?php echo get_template_directory_uri();?>/img/radio-on.png"
          alt="radio" data-img="<?php echo get_template_directory_uri();?>/img/radio-off.png">
        Крышка багажника
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6" checked="checked">
      <label class="form-check-label" id="label6" for="inlineCheckbox6">
        <img class="img-radio on" id="radio-on-6" src="<?php echo get_template_directory_uri();?>/img/radio-on.png"
          alt="radio" data-img="<?php echo get_template_directory_uri();?>/img/radio-off.png">
        Крыша
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="option7">
      <label class="form-check-label" id="label7" for="inlineCheckbox7">
        <img class="img-radio on" id="radio-on-7"
          src="<?php echo get_template_directory_uri();?>/img/radio-off.png" alt="radio" data-img="<?php echo get_template_directory_uri();?>/img/radio-on.png">
          
        Передняя панель
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox8" value="option8">
      <label class="form-check-label" id="label8" for="inlineCheckbox8">
        <img class="img-radio on" id="radio-on-8"
          src="<?php echo get_template_directory_uri();?>/img/radio-off.png" alt="radio" data-img="<?php echo get_template_directory_uri();?>/img/radio-on.png">
          
        Арки
      </label>
    </div>
  </div>
  </form>


  <div class="form-sum" style="display: none;">
    <div class="table">
      <div class="el" id="el1">
        <span>Пол</span>
        <span class="priceoption1 color"></span>
      </div>
      <div class="el" id="el2">
        <span>Капот</span>
        <span class="priceoption2 color"></span>
      </div>
      <div class="el" id="el3">
        <span>Двери</span>
        <span class="priceoption3 color"></span>
      </div>
      <div class="el" id="el4">
        <span>Багажник</span>
        <span class="priceoption4 color"></span>
      </div>
      <div class="el" id="el5">
        <span>Крышка багажника</span>
        <span class="priceoption5 color"></span>
      </div>
      <div class="el" id="el6">
        <span>Крыша</span>
        <span class="priceoption6 color"></span>
      </div>
      <div class="el active" id="el7">
        <span>Передняя панель</span>
        <span class="priceoption7 color"></span>
      </div>
      <div class="el active" id="el8">
        <span>Арки</span>
        <span class="priceoption8 color"></span>
      </div>
    </div>
    <div class="sum" id="disc" style="display: none;">
      <span>Скидка <span class="disc_1"></span>%</span>
      <pre class="json"></pre>
      <h2 class="disc_2"></h2>
    </div>
    <div class="sum" id="sum">
      <span>Итог</span>
      <pre class="json"></pre>
      <h2 class="summ"></h2>
    </div>
	  	<?php the_content(); ?>
  </div>
</div>

<?php get_footer();?>
<!--
<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="js/main.js"></script>
<script src="/js/switch.js"></script>-->
