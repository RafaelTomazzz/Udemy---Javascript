function meuEscopo (){
    const texto = document.querySelector('.data')
    const data = new Date()

    let diaSemana = data.getDay();

    function getWeekDay (diaSemana)
    {
        let diaSemanaTexto;
        
        switch(diaSemana){
            case 0:
                diaSemanaTexto = 'Domingo';
                break;
            case 1:
                diaSemanaTexto = 'Segunda';
                break;
            case 2:
                diaSemanaTexto = 'Terça';
                break;
            case 3:
                diaSemanaTexto = 'Quarta';
                break;
            case 4:
                diaSemanaTexto = 'Quinta';
                break;
            case 5:
                diaSemanaTexto = 'Sexta';
                break;
            case 6:
                diaSemanaTexto = 'Sábado'
        }

        return diaSemanaTexto;
    }

    let mes = data.getMonth()

    function GetMonth(mes)
    {
        let mesTexto;

        switch(mes)
        {
            case 0:
                mesTexto = 'Janeiro'
                break
            case 1:
                mesTexto = 'Fevereiro'
                break
            case 2:
                mesTexto = 'Março'
                break
            case 3:
                mesTexto = 'Abril'
                break
            case 4:
                mesTexto = 'Maio'
                break
            case 5:
                mesTexto = 'Junho'
                break
            case 6:
                mesTexto = 'Julho'
                break
            case 7:
                mesTexto = 'Agosto'
                break
            case 8:
                mesTexto = 'Setembro'
                break
            case 9:
                mesTexto = 'Outubro'
                break
            case 10:
                mesTexto = 'Novembro'
                break
            case 11:
                mesTexto = 'Dezembro'
                break 
        }

        return mesTexto;
    }

    const diaSemanaTexto = getWeekDay(data.getDay())
    const mesTexto = GetMonth(data.getMonth())

    texto.innerHTML = `${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
}  

meuEscopo()