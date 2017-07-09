$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/danichk.json',
    dataType: 'jsonp',
    success: function(response) {
      var output = '';

      $(response.courses.completed).each(function () {
        var title = '<h3 class="title">' + this.title + '</h3>';
        var badge = '<img src="' + this.badge + '" alt="' + this.title + '">';
        var link = '<a href="' + this.url + '" target="_blank" class="btn btn-primary">See Course</a>';

        output += '<div class="course">' + title + badge + link + '</div>';
      });

      $('#badges').append(output);
    }
  });

});
