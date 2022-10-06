# config/routes.rb
Rails.application.routes.draw do
  resources :comments, only: [:index, :show, :create, :destroy, :update]
  resources :recipes, only: [:index, :show, :create, :destroy, :update]
  resources :users, only: [:index]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end