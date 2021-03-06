class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.datetime :published_at
      t.string :summary
      t.text :content

      t.timestamps
    end
  end
end
