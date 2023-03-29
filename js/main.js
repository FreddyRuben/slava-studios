window.addEventListener('load', () => {
  // Slide superior  
  $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1850
      });

      //Script de opacidad para las tecnologias
      let mouseenterNode = () => {
        tech_node.style.opacity = 0.5;
        tech_node.style.transition = 'all 1s';
      }

      let mouseleaveNode = () => {
        tech_node.style.opacity = 1;
        tech_node.style.transition = 'all 1s'
      }

      let tech_node = document.querySelector("#node");
      tech_node.addEventListener('mouseenter', mouseenterNode);
      tech_node.addEventListener('mouseleave', mouseleaveNode);


      
      let mouseenterAngular = () => {
        tech_angular.style.opacity = 0.5;
        tech_angular.style.transition = 'all 1s';
      }

      let mouseleaveAngular = () => {
        tech_angular.style.opacity = 1;
        tech_angular.style.transition = 'all 1s'
      }

      let tech_angular = document.querySelector("#angular");
      tech_angular.addEventListener('mouseenter', mouseenterAngular);
      tech_angular.addEventListener('mouseleave', mouseleaveAngular);



      let mouseenterJS = () => {
        tech_JS.style.opacity = 0.5;
        tech_JS.style.transition = 'all 1s';
      }

      let mouseleaveJS = () => {
        tech_JS.style.opacity = 1;
        tech_JS.style.transition = 'all 1s'
      }

      let tech_JS = document.querySelector("#javascript");
      tech_JS.addEventListener('mouseenter', mouseenterJS);
      tech_JS.addEventListener('mouseleave', mouseleaveJS);



      let mouseenterPHP = () => {
        tech_PHP.style.opacity = 0.5;
        tech_PHP.style.transition = 'all 1s';
      }

      let mouseleavePHP = () => {
        tech_PHP.style.opacity = 1;
        tech_PHP.style.transition = 'all 1s'
      }

      let tech_PHP = document.querySelector("#php");
      tech_PHP.addEventListener('mouseenter', mouseenterPHP);
      tech_PHP.addEventListener('mouseleave', mouseleavePHP);



      let mouseenterMongo = () => {
        tech_mongo.style.opacity = 0.5;
        tech_mongo.style.transition = 'all 1s';
      }

      let mouseleaveMongo = () => {
        tech_mongo.style.opacity = 1;
        tech_mongo.style.transition = 'all 1s'
      }

      let tech_mongo = document.querySelector("#mongo");
      tech_mongo.addEventListener('mouseenter', mouseenterMongo);
      tech_mongo.addEventListener('mouseleave', mouseleaveMongo);



      let mouseenterLaravel = () => {
        tech_laravel.style.opacity = 0.5;
        tech_laravel.style.transition = 'all 1s';
      }

      let mouseleaveLaravel = () => {
        tech_laravel.style.opacity = 1;
        tech_laravel.style.transition = 'all 1s'
      }

      let tech_laravel = document.querySelector("#laravel");
      tech_laravel.addEventListener('mouseenter', mouseenterLaravel);
      tech_laravel.addEventListener('mouseleave', mouseleaveLaravel);



      let mouseenterMysql = () => {
        tech_mysql.style.opacity = 0.5;
        tech_mysql.style.transition = 'all 1s';
      }

      let mouseleaveMysql = () => {
        tech_mysql.style.opacity = 1;
        tech_mysql.style.transition = 'all 1s'
      }

      let tech_mysql = document.querySelector("#mysql");
      tech_mysql.addEventListener('mouseenter', mouseenterMysql);
      tech_mysql.addEventListener('mouseleave', mouseleaveMysql);



      let mouseenterExpress = () => {
        tech_express.style.opacity = 0.5;
        tech_express.style.transition = 'all 1s';
      }

      let mouseleaveExpress = () => {
        tech_express.style.opacity = 1;
        tech_express.style.transition = 'all 1s'
      }

      let tech_express = document.querySelector("#express");
      tech_express.addEventListener('mouseenter', mouseenterExpress);
      tech_express.addEventListener('mouseleave', mouseleaveExpress);
});