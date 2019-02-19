$(function() {
  function buildHTML(message){
    var html =`<p class=chat-area__message__user-name>
                ${message.user_name}
              </p>
              <p class=chat-area__message__date>
                ${message.created_at}
              </p>
              <p class=chat-area__message__text>
                ${ message.text ? message.text : ''}
                ${ message.image.url !== null ?
                  `<img class = "lower-message__image", src="${message.image.url}">` :
                  ''}
              </p>
              `
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-area__message').append(html);
      $('.text').val('')
      $('.file').val('')
      $('.chat-area__message').animate({scrollTop: $('.chat-area__message')[0].scrollHeight}, 500, 'swing')
    })
    .fail(function(){
      alert('error');
    })
    .always(function(){
      $(".button").removeAttr("disabled");
    });
  })
});

