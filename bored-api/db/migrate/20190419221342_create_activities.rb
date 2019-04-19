class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :title
      t.string :type
      t.integer :participants
      t.integer :price

      t.timestamps
    end
  end
end
