require 'civic_plus_service'

class EventsController < ApplicationController
  def index
  	events = civic_plus.all_events
  	render json: events['items']
  end

  private

  def civic_plus
  	CivicPlusService.new(REQUEST_PREFIX)
  end
end
