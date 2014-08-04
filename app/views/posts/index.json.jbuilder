json.array!(@posts) do |post|
  json.extract! post, :id, :title, :published_at, :summary, :content
  json.url post_url(post, format: :json)
end
