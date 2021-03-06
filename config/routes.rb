Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create]
    resources :properties, only: [:show, :index]
    resources :cartitems, only: [:index, :create, :update, :destroy]
    resources :favorites, only: [:index, :create, :destroy]
  end
  root to: 'static_pages#root'
  
end
