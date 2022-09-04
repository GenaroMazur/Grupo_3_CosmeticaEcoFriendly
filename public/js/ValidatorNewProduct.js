
    let formCreateProduct = document.getElementById('form_create');

    let inputName = document.getElementById('nameProduct');
    let inputDescription = document.getElementById('description');
    let inputCategory = document.getElementById('Category');
    let inputImage = document.getElementById('image');
    let inputFragrance = document.getElementById('fragrance');
    let inputIngredients = document.getElementById('ingredients');
    let inputModeOfUse = document.getElementById('modeOfUser');
    let inputGrams = document.getElementById('grams');
    let inputPrice = document.getElementById('price');

  

    let arrayInput = [inputName, inputImage, inputIngredients, inputModeOfUse, inputPrice];
    let textArea = inputDescription;
    let arraySelect = [inputCategory, inputFragrance, inputGrams];


    formCreateProduct.addEventListener('submit', function(e){

        let errores = 0;
        
        arrayInput.forEach(function(input){
            input.nextElementSibling.innerHTML = ''
            if(input.value.length == 0){
                input.classList.add('is-invalid');
                errores++;
                input.nextElementSibling.innerHTML = 'El campo no puede estar vacío'
                return;
            }

            if(input.value != ''){
                input.classList.remove('is-invalid');
                input.nextElementSibling.innerHTML = ''
            }

        });

        //aca evaluar la descripcion
        inputDescription.addEventListener('blur', function(){
            if(inputDescription.value < 20){
                inputDescription.classList.add('is-invalid');
                inputDescription.nextElementSibling.innerHTML = 'Debe contener al menos 20 caracteres la descripción'

            }
        })
        arraySelect.forEach(function(select){
            //aca evaluar los select
            if(select.value == ''){

            }
            if(select.value != ''){

            }
        })

        if(errores > 0){
            e.preventDefault();

        }
        
    })

    arrayInput.forEach(function(input){
        input.addEventListener('blur', function(){
            if(input.value == ''){
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                input.nextElementSibling.innerHTML = 'El campo no puede estar vacío'
            }

            if(input.value != ''){
                input.classList.add('is-valid');
                input.classList.remove('is-invalid');
                input.nextElementSibling.innerHTML = ''
            }

        })
    })
