require "spec_helper"
require "rails_helper"

describe Sivel2Gen::Admin::VinculosestadoController do
  routes { Sivel2Gen::Engine.routes }
  render_views
  describe "index" do
    before(:each) do
      u = build(:usuario)
      controller.stub(:current_usuario).and_return(u)
    end
    it "al pedir indice presenta plantilla de indice" do
      get :index, use_route: "sivel2_gen"
      expect(response).to render_template("admin/basicas/index")
    end
  end
end
