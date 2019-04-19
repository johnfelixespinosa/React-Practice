class ChangeActivityTypeToActivityType < ActiveRecord::Migration[5.2]
  def change
    rename_column :Activities, :type, :activity_type
  end
end
