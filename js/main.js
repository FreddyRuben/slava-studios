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
});