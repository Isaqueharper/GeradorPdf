
//converter imagem para 64
function ConverterImagem() {
    
    // Receber o arquivo do formulario
    var receberArquivo = document.getElementById("imagem-usuario").files;
    console.log(receberArquivo);

    //Verificar arquivo
    if(receberArquivo.length > 0){

        //Carregar imagem
       var Carregarimagem = receberArquivo[0];
       console.log(receberArquivo);

       //FileReader - permite ler o conteudo do arquivo do computador do usuario
       var lerArquivo = new FileReader(); 

       //o evento onload ocorre quando um objeto hecarregado
       lerArquivo.onload  = function(arquivoCarregado){

        //converter para 64
        var imagemBase64 = arquivoCarregado.target.result;
        
        var novaImagem = document.createElement('img');

        novaImagem.src = imagemBase64;

        document.getElementById('apresentar-Imagem').innerHTML = novaImagem.outerHTML;

        //Instanciar o jsPDF
         var doc = new jsPDF();

          //texto que deve estar no pdf 
         doc.text('@isaqueharper', 70, 200);

         //imagem no pdf
         doc.addImage(imagemBase64, 15, 15, 150, 150);


         doc.save('HP.pdf');

       }
       lerArquivo.readAsDataURL(Carregarimagem);

    }  
}