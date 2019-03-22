// enter the below code at the end of the your ssb-interop.js slack file

document.addEventListener('DOMContentLoaded', function() {
 $.ajax({
   url: 'https://raw.githubusercontent.com/NadiaAiraf/CV/master/slack-css-template.css',
   success: function(css) {
     $("<style></style>").appendTo('head').html(css);
   }
 });
});
