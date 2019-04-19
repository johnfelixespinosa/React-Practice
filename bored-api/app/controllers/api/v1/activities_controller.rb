class Api::V1::ActivitiesController < ApplicationController
  def index
    activities = Activity.order("created_at DESC")
    render json: activities
  end

  def create
    activity = Activity.create(activity_param)
    render json: activity
  end

  def update
    activity = Activity.find(params[:id])
    activity.update_attributes(activity_param)
    render json: activity
  end

  def destroy
    activity = Activity.find(params[:id])
    activity.destroy
    head :no_content, status: :ok
  end
  
  private
    def activity_param
      params.require(:activity).permit(:title, :type, :participants, :price)
    end
end