<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>Sistema de Multas</h2>
        <input type="text" name="textoVelocidade" id="inputVelocidade">
        <button onClick="validadorVelocidade()">Submit</button>
        <hr>
        <h1 id="resposta"></h1>

        <script>
            function validadorVelocidade(){
                var txtVelocidade = document.querySelector('#inputVelocidade');
                var respostaValidador = document.querySelector('#resposta');
                var numberConverter = Number(txtVelocidade.value)
      

                if ( numberConverter < 30) {
                    respostaValidador.innerHTML = "Você está lento"
                } else {
                    respostaValidador.innerHTML = "Você está rápido"
                }
            }
            
        </script>
        
    </body>
</html>
