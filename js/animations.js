$(document).ready(function () {
  var tweettext;
  var tweet;
  var image = $('.avatar').attr('src');
  var name = $('#profile-summary p').text();
  var timestamp = new Date();
  var month = new Array();
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "Mar";
      month[3] = "Apr";
      month[4] = "May";
      month[5] = "Jun";
      month[6] = "Jul";
      month[7] = "Aug";
      month[8] = "Sep";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";

  $('.tweet-compose').on('focus',function() {
    // reveal count and button
    $('#tweet-controls').removeClass('hide');

    // double the text box size
    $(this).css({"height": "5em"});
  });

  $('.tweet-compose').on('keyup',function() {
    // change count
    // change to red if over limit
    var charcount = $(this).val().length;
    charcount = 140 - charcount;

    if (charcount <= 10) {
      $('#char-count').css({'color':'#ff3333','font-weight':'bold'});
      if (charcount < 0){
        $('#char-count').text(charcount * -1 + ' over');
        $('#tweet-submit').removeClass('button');
        $('#tweet-submit').addClass('button:disabled');
      }
      else {
        $('#char-count').text(charcount);
        $('#tweet-submit').addClass('button');
        $('#tweet-submit').removeClass('button:disabled');
      }

    }
    else {
      $('#char-count').css({'color':'#999','font-weight':'normal'});
      $('#char-count').text(charcount);
      $('#tweet-submit').addClass('button');
      $('#tweet-submit').removeClass('button:disabled');
    }

  });

// should use clone next time and then replace the text
  $('#tweet-submit').on('click', function() {
    tweettext = $('#tweet-content textarea').val();
    tweet = '<div class="tweet">' +
    '<div class="content">' +
      '<img class="avatar" src="' + image + '" />' +
      '<strong class="fullname">' + name + ' </strong>' +
      '<span class="username">@YourHandle</span>' +
      '<p class="tweet-text">' + tweettext + '</p>' +
      '<div class="tweet-actions">' +
        '<ul>' +
          '<li><span class="icon action-reply"></span> Reply</li>' +
          '<li><span class="icon action-retweet"></span> Retweet</li>' +
          '<li><span class="icon action-favorite"></span> Favorite</li>' +
          '<li><span class="icon action-more"></span> More</li>' +
        '</ul>' +
      '</div>' +
      '<div class="stats">' +
        '<div class="retweets">' +
          '<p class="num-retweets">0</p>' +
          '<p>RETWEETS</p>' +
        '</div>' +
        '<div class="favorites">' +
          '<p class="num-favorites">0</p>' +
          '<p>FAVORITES</p>' +
        '</div>' +
        '<div class="users-interact">' +
          '<div>' +
          '</div>' +
        '</div>' +
        '<div class="time">' +
        (timestamp.getHours() - 12)
          + ':' + timestamp.getMinutes()
          + ' ' + (timestamp.getHours() > 11 ? 'PM' : 'AM')
          + ' - ' + timestamp.getDay()
          + ' ' + month[timestamp.getMonth()]
          + ' ' + timestamp.getFullYear().toString().substr(2,2) +
        '</div>' +
      '</div>' +
      '<div class="reply">' +
        '<img class="avatar" src="' + image + '" />' +
        '<textarea class="tweet-compose" placeholder="Reply to @YourHandle"/></textarea>' +
      '</div>' +
    '</div>' +
  '</div>'
    console.log( );
    $('#stream').prepend(tweet);
    $('#tweet-controls').addClass('hide');
    $('.tweet-compose').css({"height": "2.5em"});
    $('#tweet-content textarea').val('');
    $('#char-count').text('140');
    $('#char-count').css({'color':'#999','font-weight':'normal'});
  });

  $('.tweet').hover(function(){
    $(this).find('.tweet-actions').animate({opacity: '1'})
  }
  ,function(){
    $(this).find('.tweet-actions').animate({opacity: '0'},700)
  });

  $('.tweet').children().filter('div').on('click',function(){
    console.log(this);
    $(this).find('.stats').slideToggle(400,function(){});
  });




});
