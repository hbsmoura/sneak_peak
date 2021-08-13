var verNovos = () =>{
    var ano = new Date;
    ano = ano.getFullYear();
    var novos = [];
    for(obra of obras){
        if(obra.ultimaEdicao === ano){        
            novos.push(obra);
        }
    }
    return novos;
}
var listarNovos = () => {
    var listaNovos = document.getElementById('c1');
    for(obra of verNovos(obras)){
        var item = document.createElement('div');
        listaNovos.appendChild(item);
        item.classList = "item";
        item.style.backgroundImage = "linear-gradient(to right, black, transparent), url('src/img/"+obra.id+".jpg')";

        var wrapper = document.createElement("div");
        item.appendChild(wrapper);
        wrapper.classList = "container wrapper";
        var titulo = document.createElement('h3');
        wrapper.appendChild(titulo);
        titulo.classList = "titulo";
        titulo.innerText = obra.titulo;
        var info = document.createElement('div');
        wrapper.appendChild(info);
        info.classList = "info";
        info.innerText = obra.nota+" - "+obra.lancamento+" - "+obra.duracao;
        var descricao = document.createElement('p');
        wrapper.appendChild(descricao);
        descricao.classList = "descricao";
        descricao.innerText = obra.descricao;

        var botoes = document.createElement('div');
        wrapper.appendChild(botoes);
        botoes.classList = "botoes";
        
        var maisInfo = document.createElement('button');
        botoes.appendChild(maisInfo);
        maisInfo.classList = "botao";
        maisInfo.setAttribute("role", "button");
        maisInfo.setAttribute("onclick", "abrirModal('"+obra.id+"')");
        maisInfo.innerHTML = "<i class='fas fa-info'></i>MAIS INFORMAÇÕES";

        if(obra.partes.length === 1){
            var play = document.createElement('button');
            botoes.appendChild(play);
            play.classList = "botao";
            play.setAttribute("role", "button");
            play.setAttribute("onclick", "assistir('"+obra.id+"', '"+obra.partes+"', 0)");
            play.innerHTML = "<i class='fas fa-play'></i>ASSISTIR AGORA";
        }else{
            var playBotoes = document.createElement('div');
            botoes.appendChild(playBotoes);
            playBotoes.classList = "playBotoes";           
            for(var v in obra.partes){
                v = Number(v);
                var play = document.createElement('button');
                botoes.appendChild(play);
                play.classList = "botao";
                play.setAttribute("role", "button");
                play.setAttribute("onclick", "assistir('"+obra.id+"', '["+obra.partes+"]', "+v+")");
                play.innerHTML = "<i class='fas fa-play'></i> "+(v+1)+"ª TEMPORADA";
            }
        }      
        
    }
}

var temLista = () => {
    lista = localStorage.getItem('lista');
    if(lista === null || lista === ""){
        return false;
    }else{
        return true;
    }
}

var temNaLista = id => {
    if(temLista()){
        arrList = lista.split(",").find(arg => arg === id);
        if(arrList === undefined){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
    
}

var verLista = () => {
    if (temLista()) {
        var lista = localStorage.getItem("lista");
        lista = lista.split(",");
        return lista.reverse();
    }
}

var refreshLista = () => {
    $('#c2').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
}

var mostrarLista = () => {    
    var lista = verLista();
    var sectionLista = document.getElementById('minhaLista');
    sectionLista.innerHTML = "";

    if(temLista()){        
        var titulo = document.createElement('h3');
        sectionLista.appendChild(titulo);
        titulo.classList = "container titulo2";
        titulo.innerText = "Minha lista";

        var c2 = document.createElement('div');
        sectionLista.appendChild(c2);
        c2.setAttribute("id", "c2");
        c2.classList = "owl-carousel owl-theme";

        for(e of lista){
            var item = document.createElement('div');
            c2.appendChild(item);
            item.classList = "item";
            item.setAttribute("onclick", "abrirModal('"+e+"')");

            var img = document.createElement('img');
            item.appendChild(img);
            img.classList = "box-filme";
            img.setAttribute("src", "src/img/thumb/"+e+".jpg");

        }
    
        refreshLista();
    } 
}

var adicionarLista = (b, id) => {
    if(temLista()){
        if(!temNaLista(id)){
            var lista = localStorage.getItem('lista');
            localStorage.setItem('lista', lista+","+id);
            b.classList = "botao remove";
            b.setAttribute("onclick", "removerLista(this, '"+obra.id+"')");
            b.innerHTML = "<i class='fas fa-trash-alt'></i> REMOVER DA MINHA LISTA";
            mostrarLista();
        }
    }else{
        localStorage.setItem("lista", id);
        b.classList = "botao remove";
        b.setAttribute("onclick", "removerLista(this, '"+id+"')");
        b.innerHTML = "<i class='fas fa-trash-alt'></i> REMOVER DA MINHA LISTA";
        mostrarLista();
    }
}

var removerLista = (b, id) => {
    if (temLista()) {
        if (temNaLista(id)) {
            var lista = localStorage.getItem("lista");
            lista = lista.split(',').filter(arg => arg !== id);
            lista = lista.join(',');
            localStorage.setItem('lista', lista);
    
            b.classList = "botao";
            b.setAttribute("onclick", "adicionarLista(this, '"+id+"')");
            b.innerHTML = "<i class='fas fa-plus'></i>ADICIONAR À MINHA LISTA";
            mostrarLista();
        }        
    }    
}

var verCategorias = () => {
    var categorias = [];
    for(obra of obras){
        categorias = [...categorias, ...obra.categoria];
    }
    categorias = categorias.filter((este, i) => categorias.indexOf(este) === i).sort();
    return categorias;
}

var verFilmes = () => {
    var filmes = [];
    for(obra of obras){
        if(obra.tipo === "filme" && obra.segmento === "ficcional"){        
            filmes.push(obra);
        }
    }
    return filmes;
}

var listarFilmes = () => {
    var listaFilmes = document.getElementById('c4');
    for(obra of verFilmes(obras)){
        var item = document.createElement('div');
        listaFilmes.appendChild(item);
        item.classList = "item";
        item.setAttribute("onclick", "abrirModal('"+obra.id+"')");

        var img = document.createElement('img');
        item.appendChild(img);
        img.setAttribute("src", "src/img/thumb/"+obra.id+".jpg");        
    }
}

var verSeries = () => {
    var series = [];
    for(obra of obras){
        if(obra.tipo === "série" && obra.segmento === "ficcional"){        
            series.push(obra);
        }
    }
    return series;
}

var listarSeries = () => {
    var listaSeries = document.getElementById('c5');
    for(obra of verSeries(obras)){
        var item = document.createElement('div');
        listaSeries.appendChild(item);
        item.classList = "item";
        item.setAttribute("onclick", "abrirModal('"+obra.id+"')");

        var img = document.createElement('img');
        item.appendChild(img);
        img.setAttribute("src", "src/img/thumb/"+obra.id+".jpg");        
    }
}

var verDocumentarios = () => {
    var documentarios = [];
    for(obra of obras){
        if(obra.tipo === "filme" && obra.segmento === "documental"){        
            documentarios.push(obra);
        }
    }
    return documentarios;
}

var listarDocumentarios = () => {
    var listaDocumentarios = document.getElementById('c6');
    for(obra of verDocumentarios(obras)){
        var item = document.createElement('div');
        listaDocumentarios.appendChild(item);
        item.classList = "item";
        item.setAttribute("onclick", "abrirModal('"+obra.id+"')");

        var img = document.createElement('img');
        item.appendChild(img);
        img.setAttribute("src", "src/img/thumb/"+obra.id+".jpg");        
    }
}

var verSeriesDocumentais = () => {
    var seriesDocumentais = [];
    for(obra of obras){
        if(obra.tipo === "série" && obra.segmento === "documental"){        
            seriesDocumentais.push(obra);
        }
    }
    return seriesDocumentais;
}

var listarSeriesDocumentais = () => {
    var listaseriesDocumentais = document.getElementById('c7');
    for(obra of verSeriesDocumentais(obras)){
        var item = document.createElement('div');
        listaseriesDocumentais.appendChild(item);
        item.classList = "item";
        item.setAttribute("onclick", "abrirModal('"+obra.id+"')");

        var img = document.createElement('img');
        item.appendChild(img);
        img.setAttribute("src", "src/img/thumb/"+obra.id+".jpg");        
    }
}

var verNacionais = () => {
    var nacionais = [];
    for(obra of obras){
        if(obra.pais === "Brasil"){        
            nacionais.push(obra);
        }
    }
    return nacionais;
}

var listarNacionais = () => {
    var listaNacionais = document.getElementById('c8');
    for(obra of verNacionais(obras).reverse()){
        var item = document.createElement('div');
        listaNacionais.appendChild(item);
        item.classList = "item";
        item.setAttribute("onclick", "abrirModal('"+obra.id+"')");

        var img = document.createElement('img');
        item.appendChild(img);
        img.setAttribute("src", "src/img/thumb/"+obra.id+".jpg");        
    }
}

var abrirModal = id => {
    for(obra of obras){
        if(obra.id === id){
            var modal = document.getElementById("modal");
            modal.style.display = "block";

            var conteudoModal = document.getElementById("conteudoModal");
            conteudoModal.style.backgroundImage = "linear-gradient(to right, black, transparent), url('src/img/"+obra.id+".jpg')";
            conteudoModal.innerHTML = "<span class='close' onclick='fecharModal()'>&times;</span>";

            tituloModal = document.createElement("h3");
            conteudoModal.appendChild(tituloModal);
            tituloModal.classList = "titulo";
            tituloModal.innerText = obra.titulo+" ("+obra.lancamento+")";

            var tipoModal = document.createElement("div");
            conteudoModal.appendChild(tipoModal);
            tipoModal.innerText = (obra.tipo+" "+obra.segmento).toUpperCase()+" ("+obra.pais+")";

            var categoriaModal = document.createElement("div");
            conteudoModal.appendChild(categoriaModal);
            categoriaModal.innerText = obra.categoria.join(" | ");

            var avaliaModal = document.createElement("div");
            conteudoModal.appendChild(avaliaModal);
            avaliaModal.innerText = "Avaliação dos usuários: "+obra.nota+"%";

            var duracaoModal = document.createElement("div");
            conteudoModal.appendChild(duracaoModal);
            duracaoModal.innerText = "Duração: "+obra.duracao;

            var descricaoModal = document.createElement("div");
            conteudoModal.appendChild(descricaoModal);
            descricaoModal.innerText = obra.descricao;            

            var botoes = document.createElement('div');
            conteudoModal.appendChild(botoes);
            botoes.classList = "botoes";
            
            var botaoLista = document.createElement("button");
            botoes.appendChild(botaoLista);
            botaoLista.setAttribute("role", "button");
            
            if(temNaLista(obra.id)){
                botaoLista.classList = "botao remove";
                botaoLista.setAttribute("onclick", "removerLista(this, '"+obra.id+"')");
                botaoLista.innerHTML = "<i class='fas fa-trash-alt'></i> REMOVER DA MINHA LISTA";
            }else{
                
                botaoLista.classList = "botao";
                botaoLista.setAttribute("onclick", "adicionarLista(this, '"+obra.id+"')");
                botaoLista.innerHTML = "<i class='fas fa-plus'></i>ADICIONAR À MINHA LISTA";
            }

            if(obra.partes.length === 1){
                var play = document.createElement('button');
                conteudoModal.appendChild(play);
                play.classList = "botao";
                play.setAttribute("role", "button");
                play.setAttribute("onclick", "assistir('"+obra.id+"', '"+obra.partes+"', 0)");
                play.innerHTML = "<i class='fas fa-play'></i>ASSISTIR AGORA";
            }else{
                var playBotoes = document.createElement('div');
                conteudoModal.appendChild(playBotoes);
                playBotoes.classList = "playBotoes";           
                for(var v in obra.partes){
                    v = Number(v);
                    var play = document.createElement('button');
                    botoes.appendChild(play);
                    play.classList = "botao";
                    play.setAttribute("role", "button");
                    play.setAttribute("onclick", "assistir('"+obra.id+"', '["+obra.partes+"]', "+v+")");
                    play.innerHTML = "<i class='fas fa-play'></i> "+(v+1)+"ª TEMPORADA";
                }
            }  
            
        }
    }
}

var fecharModal = () => {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    var conteudoModal = document.getElementById("conteudoModal");
    conteudoModal.innerHTML = "";
}

var assistir = (id, url, p) => {
    url = url.replace("[", "");
    url = url.replace("]", "");
    url = url.split(",");
    var video = document.getElementById("video");
    video.style.display = "block";
    video.innerHTML = "";
    
    var voltar = document.createElement("button");
    video.appendChild(voltar);
    voltar.setAttribute("role", "button");
    voltar.setAttribute("onclick", "fecharVideo()");
    voltar.classList = "botao";
    voltar.innerHTML = "<i class='fas fa-chevron-left fa-lg'></i>";

    var frame = document.createElement("iframe");
    video.appendChild(frame);
    frame.setAttribute("title", "YouTube video player");
    frame.setAttribute("frameborder", "0");
    frame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    frame.setAttribute("allowfullscreen", true);
    frame.setAttribute("src", url[p]+"?autoplay=1");

    var controles = document.createElement('div');
    video.appendChild(controles);
    controles.classList = "controles";

    var add = document.createElement("button");
    controles.appendChild(add);
    add.setAttribute("role", "button");
    add.setAttribute("onclick", "adicionarLista('"+id+"')");
    add.classList = "botao";
    add.innerHTML = "<i class='fas fa-plus'></i>ADICIONAR À MINHA LISTA";

    if(url.length > 1){
        if(p > 0){
            var previous = document.createElement("button");
            controles.appendChild(previous);
            previous.setAttribute("role", "button");
            previous.setAttribute("onclick", "pular('"+id+"', "+p+", -1)");
            previous.classList = "botao";
            previous.innerHTML = "<i class='fas fa-angle-double-left'></i></i>Anterior";
        }
        
        if(p < url.length-1){
            var next = document.createElement("button");
            controles.appendChild(next);
            next.setAttribute("role", "button");
            next.setAttribute("onclick", "pular('"+id+"', "+p+", 1)");
            next.classList = "botao";
            next.innerHTML = "Próximo <i class='fas fa-angle-double-right'></i></i>";
        }        
    }
}

var pular = (id, n, o) => {
    t = n+o;
    for(obra of obras){
        if(obra.id === id){     
            var url = obra.partes.join(",");
        }
    }
    assistir(id, url, t);
}

var fecharVideo = () => {
    var video = document.getElementById("video");
    video.innerHTML = "";
    video.style.display = "none";
}

listarNovos();
listarFilmes();
listarSeries();
listarDocumentarios();
listarSeriesDocumentais();
listarNacionais();
mostrarLista();
