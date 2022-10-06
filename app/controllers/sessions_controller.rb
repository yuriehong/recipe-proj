class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    before_action :authorize
    skip_before_action :authorize, only: :create
    def create
        user = User.find_by!(username:params[:username])
        
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        session.destroy :user_id
        head :no_content
    end

    private
  
    def not_found
        render json: { error: "Invalid username or password"}, status: :not_found
    end
end
