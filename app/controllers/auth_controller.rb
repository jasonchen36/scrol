class AuthController < ApplicationController
  def gettoken
    token = get_token_from_code params[:code]
    session[:azure_access_token] = token.token
    # binding.pry
    session[:user_email] = get_email_from_id_token token.params['id_token']
    # render text: "Access token saved in session cookie."
    redirect_to mail_index_url
  end


  # def gettoken
  #   token = get_token_from_code params[:code]
  #   email = get_email_from_id_token token.params['id_token']
  #   render text: "Email: #{email}, TOKEN: #{token.token}"
  # end

end
