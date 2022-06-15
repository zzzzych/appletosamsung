(() => {
    //mobile menu
    let btnHam = document.querySelector(".gnb.mob button");
    let lnbContent = document.querySelector('.lnb');
    let gnbMobHeader = document.querySelector('.gnb.mob');
    let gnbMobContent = document.querySelector('.gnb.mob .slide-down');
    btnHam.addEventListener('click', () => {
        if(btnHam.childNodes[1].classList.contains("fa-bars")) {
            btnHam.childNodes[1].classList.remove("fa-bars");
            btnHam.childNodes[1].classList.add("fa-close");
            lnbContent.style.display = "none";
            gnbMobHeader.style.background = 'rgba(0,0,0,1)';
            gnbMobHeader.style.position = 'fixed';
            gnbMobContent.style.height = 'auto';
            gnbMobContent.style.paddingTop = 46 + 'px';
        } else {        
            btnHam.childNodes[1].classList.remove("fa-close");
            btnHam.childNodes[1].classList.add("fa-bars");
            lnbContent.style.display = "block";
            gnbMobHeader.style.background = 'rgba(0,0,0,0.8)'
            gnbMobHeader.style.position = 'relative';
            gnbMobContent.style.height = 0;
            gnbMobContent.style.paddingTop = 0;
        }
    });
    
    //accordion
    let accordion = document.querySelector('.accordion-wrap');
    function accordionHandler(e) {
        let accordionItem = e.target;
        accordionItem.classList.toggle('active');
        let panel = accordionItem.nextElementSibling;
        if(panel.style.height == 0) {
            panel.style.height = panel.scrollHeight +'px';
        } else {
            panel.style.height = null;
        }
        
    }
    accordion.addEventListener("click", accordionHandler);

    //video
    let ctrlVideoBtn = document.querySelector('.video-control');
    let section02Video = document.querySelector('.section02 > video');
    ctrlVideoBtn.addEventListener('click', (e) => {
        let changeBtn = e.target;
        if(section02Video.paused == false) {
            section02Video.pause();
            changeBtn.classList.remove('fa-pause');
            changeBtn.classList.add('fa-play');
        } else {
            section02Video.play();
            changeBtn.classList.remove('fa-play');
            changeBtn.classList.add('fa-pause');
        }
    });

    //scroll
    let gnbHeight = document.querySelector('.gnb').clientHeight;
    let lnbHeight = document.querySelector('.lnb').clientHeight;
    let navHeight = gnbHeight + lnbHeight;
    
    function scrollEffect() {
        let eyeLevel = scrollY + (window.innerHeight / 2); //eyeLevel Browser Half
        let browserBottom = scrollY + window.innerHeight; //Browser Bottom      
        let textLi = document.querySelectorAll('.section02 .text-wrap li');
        let textP = document.querySelector('.section02 .text-wrap .txt-final');

        //section02
        let textOne = scrollY + textLi[0].getBoundingClientRect().top;
        let textTwo = scrollY + textLi[1].getBoundingClientRect().top;
        let textThree = scrollY + textLi[2].getBoundingClientRect().top;
        let textFour = scrollY + textP.getBoundingClientRect().top;

        if(eyeLevel >= textOne - navHeight && eyeLevel < textTwo) {
            textLi[0].classList.add('active');
        } else {
            textLi[0].classList.remove('active');
        }
        if(eyeLevel >= textTwo && eyeLevel < textThree) {
            textLi[1].classList.add('active');
        } else {
            textLi[1].classList.remove('active');
        }
        if(eyeLevel >= textThree && eyeLevel < textFour - navHeight) {
            textLi[2].classList.add('active');
        } else {
            textLi[2].classList.remove('active');
        }
        if(eyeLevel >= textFour - navHeight && eyeLevel < textFour + (navHeight * 5)) {
            textP.classList.add('active');
        } else {
            textP.classList.remove('active');
        }
        let sectionThree = scrollY + document.querySelector('.section03').getBoundingClientRect().bottom;
        let displayInfo = scrollY + document.querySelector('.section03 .display-info').getBoundingClientRect().top;
        let openFlip = document.querySelector('.section03 .display-info .open');
        let closeFlip = document.querySelector('.section03 .display-info .close');
        if(eyeLevel >= displayInfo && eyeLevel < sectionThree) {
            openFlip.style.left = 1.5 + 'em';
            closeFlip.style.right = 1.5 + 'em';
        } else {
            openFlip.style.left = 4 + 'em'
            closeFlip.style.right = 4 +'em'
        }
    }

    //slide
    let slideBtns = document.querySelector('.section04 .slide-info .slide-btn-group');
    let slideBtn = document.querySelectorAll('.section04 .slide-btn-group button');
    let slideTxt = document.querySelectorAll('.section04 .slide-text .text');
    let changeImg = document.querySelectorAll('.section04 .slide-group div[data-index]');
    let slideUl = document.querySelector('.section04 ul.slide');

    function clickBtnHandler(e) {
        let slideWidth = slideUl.childNodes[1].clientWidth;
        let slideNum = 0;
        let clickBtn = e.target;
        slideNum = clickBtn.getAttribute('data-index');
        if(clickBtn === slideBtns) {
            return false;
        } else {
        for(i=0; i<slideBtn.length; i++) {
            slideBtn[i].classList.remove("active");
            slideTxt[i].classList.remove("active");
            changeImg[i].style.opacity = 0;
        }
            slideBtn[slideNum].classList.add("active");
            slideTxt[slideNum].classList.add("active");
            changeImg[slideNum].style.opacity = 1;
            slideUl.style.left = - slideWidth * slideNum + 'px';
        }
    }

    //layout
    function setLayout() {
        if(matchMedia("all and (max-width:768px)").matches) {
            for(i=0; i<slideBtn.length; i++){
                slideTxt[i].classList.add("active");
            }
        } else {
            for(i=0; i<slideBtn.length; i++){
                slideBtn[i].classList.remove("active");
                slideTxt[i].classList.remove("active");
                changeImg[i].style.opacity = 0;
            }
            slideBtn[0].classList.add("active");
            slideTxt[0].classList.add("active");
            changeImg[0].style.opacity = 1;
            slideUl.style.left = 0;
        }
    }

    //footer
    let footerNavGroup = document.querySelector(".footer .directory");
    function footerNav(e) {
        let clickNav = e.target;
        if(clickNav.classList.contains('more-btn')) {
            let navUl = clickNav.parentNode.nextElementSibling;
            if(navUl.clientHeight == 0) {
                clickNav.style.transform = "rotate(90deg)"
                navUl.style.height = 'auto'
            } else {
                clickNav.style.transform = "rotate(0deg)";
                navUl.style.height = 0;
            }
        } else {
            return false;
        }
    }
    footerNavGroup.addEventListener('click', footerNav);
    slideBtns.addEventListener('click', clickBtnHandler);
    window.addEventListener('scroll' , scrollEffect);
    window.addEventListener('load',() => {
        setLayout();
        document.body.classList.remove("loaded");
    });
    window.addEventListener('resize',setLayout);
    document.querySelector('.loading').addEventListener('transitionend', (e) => {
        document.body.removeChild(e.currentTarget);
    })
})();