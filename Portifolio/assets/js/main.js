let imgMenuAtivo = '../assets/icons/menu_hover.png';
let imgMenuDesativado = '../assets/icons/menu.png';


document.querySelector('.menu__acesso__icone').addEventListener('click', () => {
    const larguraMenu = document.querySelector('#menu__navegacao').clientWidth;
    //console.log(larguraMenu)
    if(larguraMenu > 360 && larguraMenu > 720){
        document.querySelector('#menu__navegacao').style.height = '10vh';
        document.querySelector('.menu__navegacao__fechar').style.height = '10vh';
    }else{
        document.querySelector('#menu__navegacao').style.height = '30vh';
        document.querySelector('.menu__navegacao__fechar').style.height = '30vh';
    }
    document.querySelector('.menu__acesso__icone').style.backgroundImage = 'url('+imgMenuAtivo+')';
})

document.querySelector('#btnClose').addEventListener('click', () => {
    document.querySelector('#menu__navegacao').style.height = '0vh';
    document.querySelector('.menu__acesso__icone').style.backgroundImage = 'url('+imgMenuDesativado+')';
    document.querySelector('.menu__navegacao__fechar').style.height = '0vh';
})

document.querySelector('#linkHome').addEventListener('click', async () => {
    const arquivoRequisicao = await fetch('home.html');
    const sobreText = await arquivoRequisicao.text();
    document.querySelector('main').innerHTML = sobreText;
    document.querySelector('.cabecalho__titulo').innerHTML = 'Home • • • • •';
})

document.querySelector('#linkSobre').addEventListener('click', async () => {
    const arquivoRequisicao = await fetch('sobre.html');
    const sobreText = await arquivoRequisicao.text();
    document.querySelector('main').innerHTML = sobreText;
    document.querySelector('.cabecalho__titulo').innerHTML = 'Sobre mim • • • • •';
})

document.querySelector('#linkHabilidades').addEventListener('click', async () => {
    const arquivoRequisicao = await fetch('habilidade.html');
    const sobreText = await arquivoRequisicao.text();
    document.querySelector('main').innerHTML = sobreText;
    document.querySelector('.cabecalho__titulo').innerHTML = 'Habilidades • • • • •';
})

document.querySelector('#linkContato').addEventListener('click', async () => {
    const arquivoRequisicao = await fetch('contato.html');
    const sobreText = await arquivoRequisicao.text();
    document.querySelector('main').innerHTML = sobreText;
    document.querySelector('.cabecalho__titulo').innerHTML = 'Contato • • • • •';
})



/*async function recebendoLink(link){
    const arquivoRequisicao = await fetch(link);
    const arquivoText = await arquivoRequisicao.text();
    document.querySelector('main').innerHTML = arquivoText;
}*/