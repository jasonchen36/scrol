class OauthsController < ApplicationController

  skip_before_filter :require_login

  def oauth
    login_at(params[:provider])
  end

  def callback
    # binding.pry
    add_provider_to_user(params[:provider])
    auth = current_user.authentications.find_by_provider(params[:provider])

    if auth

      auth.oauth_token = @access_token.token
      auth.oauth_secret = @access_token.secret if @access_token.respond_to?(:secret)
      auth.save
      flash[:notice] = "Your #{params[:provider]} account was successfully connected"

    end

    redirect_to user_path(current_user)

  end

  private

  def auth_params
    params.permit(:code, :provider)
  end

end
