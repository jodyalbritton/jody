class Post < ActiveRecord::Base
	extend FriendlyId
	friendly_id :title, use: :slugged
	include Authority::Abilities
end
