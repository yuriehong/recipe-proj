class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    def login
        user = User.find_by!(username:params[:username])
        
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def logout
        session.delete :current_user
        head :no_content
    end

    private

    def not_found
        render json: { error: "Invalid username or password"}, status: :not_found
    end
end
