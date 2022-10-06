class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    before_action :authorize
    skip_before_action :authorize, only: [:index,:show]


    def index
        recipes = Recipe.all
        render json: recipes, status: :ok
    end

    def show
        recipe = recipe.find(params[:id])
        render json: recipe, status: :ok
    end

    def create
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created

    end

    def destroy
        recipe.find(params[:id]).destroy
        head :no_content
    end

    private 
    def recipe_params
       params.permit([:name, :category, :image, :description, :ingredients, :instructions, :user_id]) 
    end

    # def authorize
    #     render json: {error: "Please sign in to add a recipe" }, status: :unauthorized unless session.include? :user_id
    # end
    
    def invalid
        render json: { error: "Invalid" }, status: :unprocessable_entity
    end
end
