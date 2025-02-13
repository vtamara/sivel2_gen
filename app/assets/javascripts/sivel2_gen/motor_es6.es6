'use strict';
// Este se convertirá a ES5 como módulo CommonJS
// Para que no se quiebre antes debe crearse exports y modules

export default class Sivel2GenMotorEs6 {

  static iniciar() {

    /**
     * Detecta eventos click.
     * @param {event} e evento
     */
    document.addEventListener('click', function (e) {
      if (/^boton-añadir-actos/.test(e.target.id)) {
        console.log('OJO click en añadir acto ' + e.target.id);
        e.preventDefault();
        // Con fetch tiende a JSON, toca poner manual el CSRF-Token 
        // y envia a rails en un formato diferente.
        // Por eso seguimos con Rails.ajax aunque sería mejor
        // promesa
        var f = document.querySelector('form');
        var url = window.puntomontaje + 'actos/agregar';
        var idtabla = 'actos_tabla'
        if (e.target.id == 'boton-añadir-actoscolectivos') {
          url = window.puntomontaje + 'actoscolectivos/agregar';
          idtabla = 'actoscolectivos_tabla'
        }

        // https://www.ombulabs.com/blog/learning/javascript/behind-the-scenes-rails-ujs.html
        const datosFormulario = new FormData(f);

        window.Rails.ajax({
          type: 'PATCH',
          url: url,
          data: datosFormulario,
          dataType: 'html',
          success: (resp, estado, xhr) => {
            var e = document.getElementById(idtabla)
            var t = resp.querySelector('table')
            if (t == null) {
              var b = resp.querySelector('body') ? 
                resp.querySelector('body').innerHTML : 'Error con ' + idtabla
              alert(b)
            } else {
              e.innerHTML = t.outerHTML
            }
          },
          error: (req, estado, xhr) => {
            alert('Error= '+req+estado+xhr);
          }
        })
      }

    }, false);


  }
}


