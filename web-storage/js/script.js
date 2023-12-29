window.onload = function(){
    function setBackgroudColor(color){
        let backgroud = document.querySelector('.content')
        backgroud.style.backgroundColor = color
    }

    function setFontColor(color){
        let paragraph = document.querySelectorAll('.paragraph')
        for (let i=0; i<paragraph.length; i++){
            paragraph[i].style.color = color
        }
    }

    function setFontSize(size){
        let paragraph = document.querySelectorAll('.paragraph')
        for (let i=0; i<paragraph.length; i++){
            paragraph[i].style.fontSize = size
        }
    }

    function setLineHeight(height){
        let paragraph = document.querySelectorAll('.paragraph')
        for (let i=0; i<paragraph.length; i++){
            paragraph[i].style.lineHeight = height
        }
    }

    function setFontFamily(fontFamily){
        let paragraph = document.querySelectorAll('.paragraph')
        for (let i=0; i<paragraph.length; i++){
            paragraph[i].style.fontFamily = fontFamily
        }
    }

    //muda a cor de fundo pela selecionada e salva no localStorage
    let backgroudColorButton = document.querySelectorAll('#background-color>button')
    backgroudColorButton.forEach(function(button){
        button.addEventListener('click', function(event){
            setBackgroudColor(event.target.innerHTML)
            localStorage.setItem('backgroundColor', event.target.innerHTML)
        })
    })

    //muda a cor da fonte pela selecionada e salva no localStorage
    let fontColorButton = document.querySelectorAll('#font-color>button')
    fontColorButton.forEach(function(button){
        button.addEventListener('click', function(event){
            setFontColor(event.target.innerHTML)
            localStorage.setItem('fontColor', event.target.innerHTML)
        })
    })

    //muda o tamanho da fonte pelo selecionado e salva no localStorage
    let fontSizeButton = document.querySelectorAll('#font-size>button')
    fontSizeButton.forEach(function(button){
        button.addEventListener('click', function(event){
            setFontSize(event.target.innerHTML)
            localStorage.setItem('fontSize', event.target.innerHTML)
        })
    })

    //muda o espaçamento das linhas pelo selecionado e salva no localStorage
    let lineHeightButton = document.querySelectorAll('#line-height>button')
    lineHeightButton.forEach(function(button){
        button.addEventListener('click', function(event){
            setLineHeight(event.target.innerHTML)
            localStorage.setItem('lineHeight', event.target.innerHTML)
        })
    })

    //muda a fonte do texto pela selecionada e salva no localStorage
    let fontFamilyButton = document.querySelectorAll('#font-family>button')
    fontFamilyButton.forEach(function(button){
        button.addEventListener('click', function(event){
            setFontFamily(event.target.innerHTML)
            localStorage.setItem('fontFamily', event.target.innerHTML)
        })
    })

    //inicia a página com as últimas alterações feitas
    setBackgroudColor(localStorage.getItem('backgroundColor'))
    setFontColor(localStorage.getItem('fontColor'))
    setFontSize(localStorage.getItem('fontSize'))
    setLineHeight(localStorage.getItem('lineHeight'))
    setFontFamily(localStorage.getItem('fontFamily'))
}