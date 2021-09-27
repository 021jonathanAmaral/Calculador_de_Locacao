function IniciarCalculos(){

       
        const abrir = document.querySelector('.modal')
       abrir.classList.add('mudar')
     
      
      
      

        var TempoLocaçãoTXT = document.querySelector('input#TLTXT')
             var ValorAluguelTXT = document.querySelector('input#VATXT')
                  var ValorCalcaoTXT = document.querySelector('input#VCTXT')
                   
                    var TL =Number (TempoLocaçãoTXT.value)
                        var VA =Number (ValorAluguelTXT.value)
                            var VC =Number (ValorCalcaoTXT.value)
        
        
        
         var TaxaAdmTXT = document.querySelector('input#TATXT')
             var CustoManutTXT = document.querySelector('input#CMTXT')
                 var CustoIptuTXT = document.querySelector('input#CITXT')

                    var TA =Number (TaxaAdmTXT.value)
                        var CM =Number (CustoManutTXT.value)
                            var CI =Number (CustoIptuTXT.value)
       
                            

         var CustoMaoObraTXT = document.querySelector('input#MATXT')
             var MaterialTXT = document.querySelector('input#MLTXT')
                 var LogTXT = document.querySelector('input#LOGTXT')
    
                    var MA =Number (CustoMaoObraTXT.value)
                            var ML =Number (MaterialTXT.value)
                                var LOG =Number (LogTXT.value)
        
        
        
        
       var EntradaMensal = TL * VA // Valor acumulado do aluguel durante o periodo de locação
       var EntradaTotal = EntradaMensal+ VC //Aluguel + Calção

       var DespesasMensais = (TA + CM + CI) * TL //Despesas do mês multiplicado pelo tempo de aluguel
       
       var DespesasSaida = MA + ML +LOG

       
       
       
       var ValorFinal = EntradaTotal - DespesasMensais - DespesasSaida
      
       
       var resTE = document.querySelector('#Line1')
       resTE.innerHTML = EntradaTotal

       var resCM = document.querySelector('#Line2')
       resCM.innerHTML = DespesasMensais

       var resS = document.querySelector('#Line3')
       resS.innerHTML = DespesasSaida

       var resF = document.querySelector('#Line4')
       resF.innerHTML = ValorFinal

      
     
       
}
    
    function botao1(){
        const fechar = document.querySelector('.modal')
       fechar.classList.remove('mudar')
    }

   
