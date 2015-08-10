require 'paratrooper'

 namespace :deploy do
   desc 'Deploy app in production environment'
   task :production do
     deployment = Paratrooper::Deploy.new("shrouded-beyond-6249") do |deploy|
       deploy.tag              = 'production'
     end

     deployment.deploy
   end
 end