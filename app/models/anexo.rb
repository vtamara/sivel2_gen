# encoding: UTF-8
class Anexo < ActiveRecord::Base
  belongs_to :caso, foreign_key: "id_caso", validate: true
  belongs_to :ffrecuente, foreign_key: "id_ffrecuente", validate: true
  belongs_to :fotra, foreign_key: "id_fotra", validate: true
  belongs_to :caso_ffrecuente, foreign_key: "id_caso_ffrecuente", validate: true

  has_attached_file :adjunto, 
    :path => Sivel2Gen.ruta_anexos + "/:id_:filename"
  validates_attachment_content_type :adjunto, 
    :content_type => ['text/plain', /.*/]
  validates_attachment_presence :adjunto

  validates_presence_of :fecha, :descripcion
end
