require "application_system_test_case"

class IniciarSesionTest < ApplicationSystemTestCase

  test "iniciar sesión" do
    skip
    Sip::CapybaraHelper.iniciar_sesion(self, root_path, 'sivel2', 'sivel2')
  end

end
