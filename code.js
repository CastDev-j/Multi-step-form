var i = document.getElementsByClassName('item');
var nombre, email, phone, plan;
let quemador = true;
function selecciona(numero) {
    for (let item in i) {
        i[item].className = "item desseleccionado";
        if (i[item].innerHTML == numero) {
            i[item].className = "item seleccionado";

            switch (numero) {
                case 1:
                    document.getElementById('fi-step').className = "step step1 advice-appears zindex-1";
                    document.getElementById('s-step').className = "step step2 advice-disappears zindex-0";
                    document.getElementById('t-step').className = "step step3 advice-disappears zindex-0";
                    document.getElementById('fo-step').className = "step step4 advice-disappears zindex-0";
                    document.getElementById('f-step').className = "step step5 advice-disappears zindex-0";
                    break;
                case 2:
                    document.getElementById('fi-step').className = "step step1 advice-disappears zindex-0";
                    document.getElementById('s-step').className = "step step2 advice-appears zindex-1";
                    document.getElementById('t-step').className = "step step3 advice-disappears zindex-0";
                    document.getElementById('fo-step').className = "step step4 advice-disappears zindex-0";
                    document.getElementById('f-step').className = "step step5 advice-disappears zindex-0";
                    break;
                case 3:
                    document.getElementById('fi-step').className = "step step1 advice-disappears zindex-0";
                    document.getElementById('s-step').className = "step step2 advice-disappears zindex-0";
                    document.getElementById('t-step').className = "step step3 advice-appears zindex-1";
                    document.getElementById('fo-step').className = "step step4 advice-disappears zindex-0";
                    document.getElementById('f-step').className = "step step5 advice-disappears zindex-0";
                    break;
                case 4:
                    document.getElementById('fi-step').className = "step step1 advice-disappears zindex-0";
                    document.getElementById('s-step').className = "step step2 advice-disappears zindex-0";
                    document.getElementById('t-step').className = "step step3 advice-disappears zindex-0";
                    document.getElementById('fo-step').className = "step step4 advice-appears zindex-1";
                    document.getElementById('f-step').className = "step step5 advice-disappears zindex-0";
                    break;
                case 5:
                    document.getElementById('fi-step').className = "step step1 advice-disappears zindex-0";
                    document.getElementById('s-step').className = "step step2 advice-disappears zindex-0";
                    document.getElementById('t-step').className = "step step3 advice-disappears zindex-0";
                    document.getElementById('fo-step').className = "step step4 advice-disappears zindex-0";
                    document.getElementById('f-step').className = "step step5 advice-appears zindex-1";
                    break;
            }


        }
    }
}
for (let item in i) {
    if (i[item].innerHTML >= 0) {
        console.log(i[item].innerHTML);
    }
}
function innputStepOne(nombre) {
    document.getElementById('advice-' + nombre).className = "right advice advice-disappears";
    document.getElementById(nombre).className = "step1-input border-normal";

}
function stepOne() {
    nombre = document.getElementById('nombre').value;
    email = document.getElementById('correo').value;
    phone = document.getElementById('telefono').value;

    if (nombre != '' && email != '' && phone != '') {
        console.log(nombre, email, phone);
        document.getElementById('fi-step').className = "step step1 advice-disappears zindez-0";
        document.getElementById('s-step').className = "step step2 advice-appears zindex-1";
        selecciona(2);
    } else {
        if (nombre == '') {
            document.getElementById('advice-nombre').className = "right advice advice-appears";
            document.getElementById('nombre').className = "step1-input border-red";
        } else {
            document.getElementById('advice-nombre').className = "right advice advice-disappears";
            document.getElementById('nombre').className = "step1-input border-normal";
        }
        if (email == '') {
            document.getElementById('advice-correo').className = "right advice advice-appears";
            document.getElementById('correo').className = "step1-input border-red";
        } else {
            document.getElementById('advice-correo').className = "right advice advice-disappears";
            document.getElementById('correo').className = "step1-input border-normal";
        }
        if (phone == '') {
            document.getElementById('advice-telefono').className = "right advice advice-appears";
            document.getElementById('telefono').className = "step1-input border-red";
        } else {
            document.getElementById('advice-telefono').className = "right advice advice-disappears";
            document.getElementById('telefono').className = "step1-input border-normal";
        }
    }
}

function checkcard(number) {
    let nose = document.getElementsByClassName('card-my');
    for (let i = 0; i <= 2; i++) {
        if (nose[i].className == "card card-my extendido" || nose[i].className == "card card-my extendido checked" || nose[i].className == "card card-my extendido notchecked") {
            nose[i].className = "card card-my extendido notchecked";
            if (number == i) {
                nose[i].className = "card card-my extendido checked";
            }
        } else {
            nose[i].className = "card card-my notchecked";
            if (number == i) {
                nose[i].className = "card card-my checked";
            }
        }
    }
}
let extendido = false;
function extender() {
    if (extendido == false) {
        let nose = document.getElementsByClassName('card-my');
        for (let i = 0; i <= 2; i++) {
            nose[i].className = "card card-my extendido";
            //console.log(document.getElementById('plan-price-'+i).textContent);
            let valor = parseFloat(document.getElementById('plan-price-' + i).textContent);
            valor = valor * 10;
            document.getElementById('plan-price-' + i).innerHTML = valor;
        }
        extendido = true;
    } else {
        let nose = document.getElementsByClassName('card-my');
        for (let i = 0; i <= 2; i++) {
            nose[i].className = "card card-my noextendido";
            // console.log(document.getElementById('plan-price-'+i).textContent);
            let valor = parseFloat(document.getElementById('plan-price-' + i).textContent);
            valor = valor / 10;
            document.getElementById('plan-price-' + i).innerHTML = valor;
        }
        extendido = false;
    }
}
let activo = false;
function decidir() {
    if (activo == false) {
        document.getElementById('ladefinitiva86').className = 'decidir';
        document.getElementById('check-yearly').className = 'azul';
        document.getElementById('check-monthly').className = 'gris';
        activo = true;
    } else {
        document.getElementById('ladefinitiva86').className = 'nodecidir';
        document.getElementById('check-yearly').className = 'gris';
        document.getElementById('check-monthly').className = 'azul';
        activo = false;
    }

}
var planS;
var planconcluido;
var planSeleccionado;
function almacena(number) {
    let data = document.getElementsByName('plan');
    let moy = document.getElementsByName('year-month');
    let addonValue = document.getElementsByClassName('add-prices');
    let addonPlan = document.getElementsByClassName('add-plans');
    for (let i = 0; i < data.length; i++) {
        plann = ['Arcade','Advanced','Pro']
        if (data[i].checked) {
            
            plan = data[i].value;
            if (moy[0].checked) {
                plan = plan * 10;
                planS = 'yr';
                planconcluido = "$"+plan+"/"+planS;
                planSeleccionado = plann[i]+' (Yearly)';
                for (let i = 0; i < addonValue.length; i++) {

                    if (parseInt(addonValue[i].textContent) >= 10) {
                        addonValue[i].innerHTML = parseInt(addonValue[i].textContent) * 1;
                        addonPlan[i].innerHTML = planS;
                    } else {
                        addonValue[i].innerHTML = parseInt(addonValue[i].textContent) * 10;
                        addonPlan[i].innerHTML = planS;
                        quemador = false;
                    }
                }
            } else {
                plan = parseInt(plan);
                planS = 'mo';
                planconcluido = "$"+plan+"/"+planS;
                planSeleccionado = plann[i]+' (monthly)';
                for (let i = 0; i < addonValue.length; i++) {
                    if (quemador == false) {

                        if (parseInt(addonValue[i].textContent) <= 2) {
                            addonValue[i].innerHTML = parseInt(addonValue[i].textContent) / 1;
                            addonPlan[i].innerHTML = planS;
                        } else {
                            addonValue[i].innerHTML = parseInt(addonValue[i].textContent) / 10;
                            addonPlan[i].innerHTML = planS;
                            quemador = true;
                        }
                    } else {
                        addonValue[i].innerHTML = parseInt(addonValue[i].textContent) * 1;
                        addonPlan[i].innerHTML = planS;
                    }
                    quemador = false;
                }
            }
            selecciona(number);
        }
    }
}
let service, storage, profile;
let cortador = 1;
function addon(number) {
     service = document.getElementById('service');
     storage = document.getElementById('storage');
     profile = document.getElementById('profile');

       //     document.getElementById('services').className = 'service-icon service-icon-notactive'; 
        //    document.getElementById('serviceq').className = 'addons addons-notactive'; 
        
    switch (number) {
        case 0:
            if(service.checked == true){
                document.getElementById('services').className = 'service-icon service-icon-active'; 
                document.getElementById('serviceq').className = 'addons addons-active';
            }else{
                document.getElementById('services').className = 'service-icon service-icon-notactive'; 
                document.getElementById('serviceq').className = 'addons addons-notactive'; 
            }   
            break;
        case 1:
            if(storage.checked == true){
                document.getElementById('storages').className = 'service-icon service-icon-active'; 
                document.getElementById('storageq').className = 'addons addons-active'; 
            }else{
                document.getElementById('storages').className = 'service-icon service-icon-notactive'; 
                document.getElementById('storageq').className = 'addons addons-notactive';  
            }
            break;
        case 2:
            if(profile.checked == true){
                document.getElementById('profiles').className = 'service-icon service-icon-active'; 
                document.getElementById('profileq').className = 'addons addons-active'; 
            }else{
                document.getElementById('profiles').className = 'service-icon service-icon-notactive'; 
                document.getElementById('profileq').className = 'addons addons-notactive';  
            }
            break;
    }    
}

let addservice = false, addstorage = false, addprofile = false;
function addAddons(number){
    let total = 0;
    total += parseInt(plan);
    service = document.getElementById('service');
    storage = document.getElementById('storage');
    profile = document.getElementById('profile');
    if(service.checked == true){
        addservice = true;
        document.getElementById('service-final').className = 'final-addons display-block';
        document.getElementById('addon-price-time').innerHTML = document.getElementById('noseservicio').textContent;
        let queseso = parseInt(document.getElementById('yaquetermines1').textContent);
        total += queseso;
    }else{
        addservice = false;
        document.getElementById('service-final').className = 'final-addons display-none';
    }
    if(storage.checked == true){
        addstorage = true;
        document.getElementById('storage-final').className = 'final-addons display-block';
        document.getElementById('storage-price-time').innerHTML = document.getElementById('nosestorage').textContent;
        let queseso = parseInt(document.getElementById('yaquetermines2').textContent);
        total += queseso;
    }else{
        addstorage = false;
        document.getElementById('storage-final').className = 'final-addons display-none';
    }
    if(profile.checked == true){
        addprofile = true;
        document.getElementById('profile-final').className = 'final-addons display-block';
        document.getElementById('profile-price-time').innerHTML = document.getElementById('noseprofile').textContent;
        let queseso = parseInt(document.getElementById('yaquetermines3').textContent);
        total += queseso;
    }else{
        addprofile = false;
        document.getElementById('profile-final').className = 'final-addons display-none';
    }
    console.log();
    document.getElementById('title-ended').innerHTML = planSeleccionado;
    document.getElementById('price-ended').innerHTML = planconcluido;
    document.getElementById('ya-termino').innerHTML = "+$"+total+"/"+planS;
    selecciona(number);
}





