$(document).ready(function () {
    var arriba = false;
    var abajo = true;
    var menu = $('#headMenu');
    var menuIconosLado = $('.menuIconosLado ul');
    var home = $('.home');

    $(".menuIconosLado ul>li>a").mouseleave(function () {
        $(this).find('span').hide();
        $('.menuIconosLado ul>li>a').find('img').css({
            "width": "50%"
        });
    });
    $(".menuIconosLado ul>li>a").mouseover(function () {
        $('.menuIconosLado ul>li>a').find('span').hide();
        $('.menuIconosLado ul>li>a').find('img').css({
            "width": "55%"
        });
        $(this).find('span').show();
        $(this).find('span').css({
            "left": "85%"
        });
        $(this).find('img').css({
            "width": "80%"
        });
    });
    $('input[name=chkTipo]').click(function () {
        if ($('input:radio[name=chkTipo]:checked').val() == 1) {
            $('body').find('.anonimo').show();
        } else {
            $('body').find('.anonimo').hide();
        }
    });
    $("#btnSubmitPQRSD").on("click", function () {
        if (!$("input:radio[name=chkTipo]").is(':checked')) {
            alertify.alert("No has seleccionado el tipo de solicitante!", function () {
                $("#chkTipo").focus();
            });
            return false;
        }
        if ($('input:radio[name=chkTipo]:checked').val() == 1) {
            if ($("#txtNombre").val().length < 1) {
                alertify.alert("No has ingresado ningun nombre!", function () {
                    $("#txtNombre").focus();
                });
                return false;
            }
            if ($("#cmbTipoDocumento").val() == -1) {
                alertify.alert("No ha seleccionado el tipo de documento!", function () {
                    $("#cmbTipoDocumento").focus();
                });
                return false;
            }
            if ($("#txtNumeroDocumento").val().length < 1) {
                alertify.alert("No ha ingresado el documento!", function () {
                    $("#txtNumeroDocumento").focus();
                });
                return false;
            }
            if ($("#txtEmail").val().length < 1) {
                alertify.alert("No has ingresado ningun email!", function () {
                    $("#txtEmail").focus();
                });
                return false;
            }
            if ($("#txtDireccion").val().length < 1) {
                alertify.alert("No has ingresado ninguna dirección!", function () {
                    $("#txtDireccion").focus();
                });
                return false;
            }
            if ($("#txtMunicipio").val().length < 1) {
                alertify.alert("No has ingresado el municipio!", function () {
                    $("#txtMunicipio").focus();
                });
                return false;
            }
            if ($("#txtPais").val().length < 1) {
                alertify.alert("No has ingresado el país!", function () {
                    $("#txtPais").focus();
                });
                return false;
            }
            if ($("#txtTelefono").val().length < 1) {
                alertify.alert("No has ingresado el teléfono!", function () {
                    $("#txtTelefono").focus();
                });
                return false;
            }
            if ($("#cmbTipoSolicitud").val() == -1) {
                alertify.alert("No has seleccionado el tipo de solicitud!", function () {
                    $("#cmbTipoSolicitud").focus();
                });
                return false;
            }
            if ($("#txtDescripcion").val().length < 1) {
                alertify.alert("No has ingresado ningun mensaje!", function () {
                    $("#txtDescripcion").focus();
                });
                return false;
            }
            if ($("#cmbMedioRespuesta").val() == -1) {
                alertify.alert("No has seleccionado el medio de respuesta!", function () {
                    $("#cmbMedioRespuesta").focus();
                });
                return false;
            }
            if (grecaptcha.getResponse() == "") {
                alertify.alert("No has verificado que no eres un robot!", function () {
                    $("#recaptcha").focus();
                });
                return false;
            } else {
                document.pqrsdf.action = '/sql/ejeInsPqrsd.php';
                document.pqrsdf.submit();
            }
        } else {
            if ($("#cmbTipoSolicitud").val() == -1) {
                alertify.alert("No has seleccionado el tipo de solicitud!", function () {
                    $("#cmbTipoSolicitud").focus();
                });
                return false;
            }
            if ($("#txtDescripcion").val().length < 1) {
                alertify.alert("No has ingresado ningun mensaje!", function () {
                    $("#txtDescripcion").focus();
                });
                return false;
            }
            if ($("#cmbMedioRespuesta").val() == -1) {
                alertify.alert("No has seleccionado el medio de respuesta!", function () {
                    $("#cmbMedioRespuesta").focus();
                });
                return false;
            } else {
                if ($("#cmbMedioRespuesta").val() == 1) {
                    if ($("#txtEmail").val().length < 1) {
                        alertify.alert("No has ingresado ningun email!", function () {
                            $("#txtEmail").focus();
                        });
                        return false;
                    }
                } else {
                    if ($("#txtDireccion").val().length < 1) {
                        alertify.alert("No has ingresado ninguna dirección!", function () {
                            $("#txtDireccion").focus();
                        });
                        return false;
                    }
                }
            }
            if (grecaptcha.getResponse() == "") {
                alertify.alert("No has verificado que no eres un robot!", function () {
                    $("#recaptcha").focus();
                });
                return false;
            } else {
                document.pqrsdf.action = '/sql/ejeInsPqrsd.php';
                document.pqrsdf.submit();
            }
        }
    });
});
$(function () {
    $("#tabs").tabs();
    $("#accordion-1").accordion();
    $("#accordion-2").accordion();
    $("#accordion-3").accordion();
    $("#accordion-4").accordion();
    $("#accordion-5").accordion();
    $("#accordion-6").accordion();
    $("#accordion-7").accordion();
    $("#accordion-8").accordion();
    $("#accordion-9").accordion();
    $("#accordion-10").accordion();
    $('#preloader').fadeOut('slow');

    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
    $(".campofecha").datepicker();
});