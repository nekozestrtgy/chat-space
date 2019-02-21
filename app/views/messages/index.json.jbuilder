if @new_message.present?
  json.array!
  {
    json.id @new_message.id
    json.text  @new_message.content
    json.image  @new_message.image
    json.user_name  @new_message.user.name
    json.created_at  @new_message.created_at.strftime("%Y/%m/%d %H:%M")
  }
end
