let imgMenuAtivo = '../assets/icons/menu_hover.png';
let imgMenuDesativado = '../assets/icons/menu.png';


document.querySelector('.menu__acesso__icone').addEventListener('click', e => {
    document.querySelector('#menu__navegacao').style.height = '10vh';
    document.querySelector('#btnClose').style.height = '100%';
    document.querySelector('.menu__acesso__icone').style.backgroundImage = 'url('+imgMenuAtivo+')';
})

document.querySelector('#btnClose').addEventListener('click', e => {
    document.querySelector('#menu__navegacao').style.height = '0vh';
    document.querySelector('#btnClose').style.height = '100%';
    document.querySelector('.menu__acesso__icone').style.backgroundImage = 'url('+imgMenuDesativado+')';
})

document.querySelector('#linkHome').addEventListener('click', async () => {
    const arquivoRequisicao = await fetch('home.html');
    const sobreText = await arquivoRequisicao.text();
    document.querySelector('main').innerHTML = sobreText;
    document.querySelector('header').innerHTML = '<div id=\'conteudo\'><span>Home</span></div>';
})

document.querySelector('#linkSobre').addEventListener('click', async () => {
    const arquivoRequisicao = await fetch('sobre.html');
    const sobreText = await arquivoRequisicao.text();
    document.querySelector('main').innerHTML = sobreText;
})

document.querySelector('#linkHabilidades').addEventListener('click', async () => {
    const arquivoRequisicao = await fetch('home.html');
    const sobreText = await arquivoRequisicao.text();
    document.querySelector('main').innerHTML = sobreText;
})

document.querySelector('#linkContato').addEventListener('click', async () => {
    const arquivoRequisicao = await fetch('contato.html');
    const sobreText = await arquivoRequisicao.text();
    document.querySelector('main').innerHTML = sobreText;
})

/*async function recebendoLink(link){
    const arquivoRequisicao = await fetch(link);
    const arquivoText = await arquivoRequisicao.text();
    document.querySelector('main').innerHTML = arquivoText;
}*/