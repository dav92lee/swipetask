require "twitter"

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "OZfNlNLG23gkzdh289KVgg"
  config.consumer_secret     = "ny2OX86jHN80ItBP5lXw631ztHITnFzgvmoOxZqWY"
  config.access_token        = "399747291-gFiRTo6lYJTgIRO6z93XP6Em0KSjF9sEpzP5F7Zk"
  config.access_token_secret = "RZhGjSNencXAYY78UALlNNVhQY3cdVByjjavSyT1L4v8v"
end

client.update("HELLO")