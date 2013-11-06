<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//ES" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
  <head>
    <?php include_http_metas() ?>
    <?php include_metas() ?>
    <?php include_title() ?>
    <?php include_stylesheets() ?>
    <?php include_javascripts() ?>
  </head>
  <body>
    <div id="wrapper">  
      <div id="header">
        <div class="inner">
          <div class="logo">
            <a href="<?php echo url_for('@homepage'); ?>">
              <?php echo image_tag('dark-skin/logo.png','alt=WebDevel.cl'); ?>
            </a>
          </div>
          <div class="nav">
            <ul> 
              <li <?php if(sfContext::getInstance()->getRouting()->getCurrentRouteName() == 'homepage')echo "class='current'"; ?>>
                <a href="<?php echo url_for('@homepage'); ?>">Home</a>
              </li>
              <!-- <li <?php  //if(sfContext::getInstance()->getRouting()->getCurrentRouteName() == 'servicios')echo "class='current'"; ?>>
                <a href="<?php //echo url_for('@servicios'); ?>">Servicios</a>
              </li> -->
              <li <?php if(sfContext::getInstance()->getRouting()->getCurrentRouteName() == 'portafolio')echo "class='current'"; ?>>
                <a href="<?php echo url_for('@portafolio'); ?>">Portafolio</a>
              </li>
              <li <?php if(sfContext::getInstance()->getRouting()->getCurrentRouteName() == 'nosotros')echo "class='current'"; ?>>
                <a href="<?php echo url_for('@nosotros'); ?>">Nosotros</a>
              </li>
              <li <?php if(sfContext::getInstance()->getRouting()->getCurrentRouteName() == 'contacto')echo "class='current'"; ?>>
                <a href="<?php echo url_for('@contacto') ?>">Cont&aacute;ctanos</a>
              </li>
            </ul>
          </div>
          <div class="clear"></div> 
        </div>
      </div>
      <div id="main">
        <?php echo $sf_content; ?>
      </div>
      <div id="footer">
        <div class="inner">       
          <div class="one_fourth">
            <?php echo image_tag('dark-skin/logo.png'); ?>
          </div>
          <div class="one_fourth last"> 
            <h5>Informaci&oacute;n de Contacto</h5> 
            <p> 
              Fono: +569 5629 5683<br/> 
              E-Mail: <a href="<?php echo url_for('@contacto') ?>">contacto@webdevel.cl</a> 
            </p> 
          </div>                
        </div>
        <div class="footer_small">             
          <div class="copyright">
            © 2013 <a href="<?php echo url_for('@homepage'); ?>">WebDevel.cl</a> - All rights reserved.
          </div>
          <div class="social"> 
            <a href="http://www.twitter.com/webdevelcl" target="_blank"><?php echo image_tag('social/twitter.png'); ?></a>
            <a href="http://www.facebook.com/webdevel.cl" target="_blank"><?php echo image_tag('social/facebook.png'); ?></a>
          </div> 
        </div>
      </div>    
    </div>
  </body>
</html>