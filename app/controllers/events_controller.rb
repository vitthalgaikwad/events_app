require 'civic_plus_service'

class EventsController < ApplicationController
  def index
  	events = civic_plus.all_events
  	render json: events['items']
  end

  def create
  	event = civic_plus.create_event(event_params)
  	render json: event
  end

  private

  def civic_plus
  	CivicPlusService.new(REQUEST_PREFIX)
  end

  def event_params
  	params.require(:event).permit(:title, :description, :startDate, :endDate)
  end
end
