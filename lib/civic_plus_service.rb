class CivicPlusService

	include HTTParty
  base_uri 'https://interview.cpdv.ninja'

	def initialize(prefix)
		@request_prefix = prefix
		@auth_token = auth_token
	end

	def all_events(params={})
		response = self.class.get(api_url('Events'), headers: headers, query: params)
		response.parsed_response
	end

	def create_event(params={})
		response = self.class.post(api_url('Events'), headers: headers.merge!({ 'Content-Type' => 'application/json' }), body: params.to_json)
		response.parsed_response
	end

	def event_details(params={})
		response = self.class.post(api_url("Events/#{params[:id]}"), headers: headers)
		response.parsed_response
	end

	private

	def headers
		{
			'Authorization' => "Bearer #{@auth_token}",
			'Accept' => 'application/json'
		}
	end

	def api_url(api)
		"/#{@request_prefix}/api/#{api}"
	end

	def auth_token
		response = self.class.post(api_url('Auth'),
			query: { clientId: CLIENT_ID, clientSecret: CLIENT_SECRET })
		response.parsed_response['access_token']
	end
end