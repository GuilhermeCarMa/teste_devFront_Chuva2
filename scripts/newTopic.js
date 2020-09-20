// Reconhecendo o botão do novo tópico
var buttonNewTopic = document.getElementById('button-second-article');
//Reconhecendo onde irá aparecer para o usuáro criar um novo tópico
var lugarNewTopic = document.getElementById('second-article');

// Adicionando um evento
buttonNewTopic.addEventListener('click', () => {
    // Começando a criar o ambiente para novo tópico
    lugarNewTopic.innerHTML = 
    "<p id='duvida_sugestao'>"+
        "Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!"+
    "</p>"+
    "<form>"+
        "<label for='subject_name' id='name_subject_topic'>"+
            "Assunto"+
        "</label><br>"+
        "<input class='commom_inputs' name='subject_name' type='text' placeholder='Defina um tópico sucinto para notificar os autores...'><br>"+

        "<label for='content_name'>"+
            "Conteúdo"+
        "</label><br>"+
        "<input class='commom_inputs' id='contentinput' name='content_name' type='text' style='height: 81px; padding-left: 5px; padding-right: 5px;'><br>"+
    "</form>"+
    "<div id='footer-newTopic' style='background-color: #EAF1F; display: flex; width: calc(100% - 36px); height: 31px; margin-left: 18px;'>"+
        "<img src='images/bold.png'>"+
        "<img src='images/italic.png'>"+
        "<button type='submit' id='button_submit_newTopic'>Enviar</button>"+
    "</div>";
});