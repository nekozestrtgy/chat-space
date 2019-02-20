$(function() {

function appendUser(user) {
  var html = `<div class="chat-group-user clearfix">
              <p class="chat-group-user__name">${user.name}</p>
              <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
              </div>`
  $("#user-search-result").append(html);
}

function appendNoUser(user) {
  var html =
    `<div class='user-search-add chat-group-user__btn chat-group-user__btn--add'>
    ${ user }
    </div>`
  $("#user-search-result").append(html);
}

function appendAddUser(user_name, user_id) {
  var html = `
      <div class='chat-group-user clearfix js-chat-member' id='chat-group-user'>
        <input name='group[user_ids][]' type='hidden' value='${user_id}'>
        <p class='chat-group-user__name'>${user_name}</p>
        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
      </div>
    `
  $("#chat-group-users-adduser").append(html);
}

  $("#user-search-field").on("keyup", function() {
    var input = $(this).val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !==0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendNoUser("一致するユーザーは存在しません")
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました')
    })
  });
  $(document).on("click", ".user-search-add",function() {
    var user_name = $(".user-search-add").attr('data-user-name')
    var user_id = $(".user-search-add").attr('data-user-id')
    console.log(user_name,user_id)
    $("#user-search-result").empty();
    appendAddUser(user_name, user_id);
    $("#user-search-field").val("");
  });
  $(document).on("click", ".user-search-remove",function() {
    $("#chat-group-user").remove();
  });
});
