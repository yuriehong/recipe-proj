# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize

    
    
  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }

  # end

  private 
  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: {errors: ["Not authorized - please login"]}, status: :unauthorized unless @current_user
  end

end