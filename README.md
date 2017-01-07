# Sparklemotion
Reusable animation CSS for web
http://unjust.github.io/sparklemotion/

## Installation

1. clone the repo
1. from inside the repo directory, run `npm install` to get all the modules
1. setup jekyll for building docs [see githubs article for more](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
	1. have Ruby 2.1.0 or higher installed (I used [rvm](https://github.com/rvm/rvm) to get 2.1)
	2. install bundler `gem install bundler`
	3. run `bundle install` which will use the Gemfile to get jekyll

## Building the project
  `grunt` or `grunt compile` cleans and builds the sass  
  `dist/animation.css` is then available for use

## Building the docs
  `grunt docs-local` compiles the sass and builds the docs with jekyll
   you should then be able to open your browser to preview the docs

  `grunt docs` compiles the sass and builds the docs for the `gh-pages` branch *and pushes*
  
## Resources

### Performance related

Chrome Devtools: https://www.youtube.com/watch?v=U9xfYbKxosI  
http://blogs.adobe.com/webplatform/2014/03/18/css-animations-and-transitions-performance/
http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
https://developers.google.com/web/fundamentals/design-and-ui/animations/animations-and-performance?hl=en
http://www.html5rocks.com/en/tutorials/speed/rendering/
https://www.smashingmagazine.com/2013/03/animating-web-gonna-need-bigger-api/
https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108#.rvx1z9na8

### Design / interaction related

http://www.slideshare.net/CrowChick/communicating-animation-slides
https://material.google.com/motion/material-motion.html#
https://medium.com/@adaptivepath/jedi-principles-of-ui-animation-2b88423b1dac#.rkjkb08go
https://www.smashingmagazine.com/2016/03/integrate-motion-design-animation-ux-workflow/
http://alistapart.com/article/motion-with-meaning-semantic-animation-in-interface-design
http://valhead.com/2016/05/05/how-fast-should-your-ui-animations-be/

### From Designing Interface Animation
* Making Instructional Animations More Effective: A Cognitive Load Approach, Paul Ayres and Fred Paas: http://rfld.me/1ScKuLV. 
* Attention Cueing as a Means to Enhance Learning from an Animation, B.B. de Koning (Björn), H.K. Tabbers (Huib), R.M.J.P. Rikers (Remy),  and G.W.C. Paas (Fred) 2008-04-10: http://rfld.me/1S9UUtF.
* Optimising Learning from Animations by Minimising Cognitive Load: Cognitive and Affective Consequences of Signalling and Segmentation Methods, Roxana Moreno: http://rfld.me/1YvF54j
* Does Animation in User Interfaces Improve Decision Making? Cleotilde Gonzalez: http://rfld.me/1Qa1VbH.
* Does Animation Help Users Build Mental Maps of Spatial Information? Benjamin B. Bederson, and Angela Boltman: http://rfld.me/23IkGwh
* Animating Anthropomorphism: Giving Minds to Geometric Shapes, Jason G. Goldman on March 8, 2013: http://rfld.me/1Si0aRa or https://archive.is/aojec.
* The film from the Fritz Heider and Marianne Simmel study: http://rfld.me/1MwhYpu.

### Possible libs

http://anime-js.com/

## Animation catalogue

A list of animations we should have:  
fade / opacity (currently needed on landing page, maybe start flow)



