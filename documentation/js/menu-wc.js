'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">structure documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/_SteroidsModule.html" data-type="entity-link" >_SteroidsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-3f6e9dfa0a74836e70fce3e1413d9ea800cae18af44901e5bf0e4525721865633a391f8050d4e3374df3c72ebaeba738bee643e20a800606c909e3243fe0e797"' : 'data-bs-target="#xs-controllers-links-module-AppModule-3f6e9dfa0a74836e70fce3e1413d9ea800cae18af44901e5bf0e4525721865633a391f8050d4e3374df3c72ebaeba738bee643e20a800606c909e3243fe0e797"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3f6e9dfa0a74836e70fce3e1413d9ea800cae18af44901e5bf0e4525721865633a391f8050d4e3374df3c72ebaeba738bee643e20a800606c909e3243fe0e797"' :
                                            'id="xs-controllers-links-module-AppModule-3f6e9dfa0a74836e70fce3e1413d9ea800cae18af44901e5bf0e4525721865633a391f8050d4e3374df3c72ebaeba738bee643e20a800606c909e3243fe0e797"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-3f6e9dfa0a74836e70fce3e1413d9ea800cae18af44901e5bf0e4525721865633a391f8050d4e3374df3c72ebaeba738bee643e20a800606c909e3243fe0e797"' : 'data-bs-target="#xs-injectables-links-module-AppModule-3f6e9dfa0a74836e70fce3e1413d9ea800cae18af44901e5bf0e4525721865633a391f8050d4e3374df3c72ebaeba738bee643e20a800606c909e3243fe0e797"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3f6e9dfa0a74836e70fce3e1413d9ea800cae18af44901e5bf0e4525721865633a391f8050d4e3374df3c72ebaeba738bee643e20a800606c909e3243fe0e797"' :
                                        'id="xs-injectables-links-module-AppModule-3f6e9dfa0a74836e70fce3e1413d9ea800cae18af44901e5bf0e4525721865633a391f8050d4e3374df3c72ebaeba738bee643e20a800606c909e3243fe0e797"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticlesModule.html" data-type="entity-link" >ArticlesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ArticlesModule-a48fd59cc89ed5a70bd84d41c36f5423e21e8920518dd8ba3824f90c8ae693564cfeb387034d420691ed9652e44fb385a0dd8985db552b2e3952f5407893efdb"' : 'data-bs-target="#xs-controllers-links-module-ArticlesModule-a48fd59cc89ed5a70bd84d41c36f5423e21e8920518dd8ba3824f90c8ae693564cfeb387034d420691ed9652e44fb385a0dd8985db552b2e3952f5407893efdb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ArticlesModule-a48fd59cc89ed5a70bd84d41c36f5423e21e8920518dd8ba3824f90c8ae693564cfeb387034d420691ed9652e44fb385a0dd8985db552b2e3952f5407893efdb"' :
                                            'id="xs-controllers-links-module-ArticlesModule-a48fd59cc89ed5a70bd84d41c36f5423e21e8920518dd8ba3824f90c8ae693564cfeb387034d420691ed9652e44fb385a0dd8985db552b2e3952f5407893efdb"' }>
                                            <li class="link">
                                                <a href="controllers/ArticlesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticlesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ArticlesModule-a48fd59cc89ed5a70bd84d41c36f5423e21e8920518dd8ba3824f90c8ae693564cfeb387034d420691ed9652e44fb385a0dd8985db552b2e3952f5407893efdb"' : 'data-bs-target="#xs-injectables-links-module-ArticlesModule-a48fd59cc89ed5a70bd84d41c36f5423e21e8920518dd8ba3824f90c8ae693564cfeb387034d420691ed9652e44fb385a0dd8985db552b2e3952f5407893efdb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ArticlesModule-a48fd59cc89ed5a70bd84d41c36f5423e21e8920518dd8ba3824f90c8ae693564cfeb387034d420691ed9652e44fb385a0dd8985db552b2e3952f5407893efdb"' :
                                        'id="xs-injectables-links-module-ArticlesModule-a48fd59cc89ed5a70bd84d41c36f5423e21e8920518dd8ba3824f90c8ae693564cfeb387034d420691ed9652e44fb385a0dd8985db552b2e3952f5407893efdb"' }>
                                        <li class="link">
                                            <a href="injectables/ArticlesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticlesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthenticationModule-7f6d216bb35e3e7ccd9604624b6135d8f5465ecd90e31775a15306956b7448fcabe9b99ae2f410fbf455cbdcaa502766f7d308585557e06f4a171548365d9d0b"' : 'data-bs-target="#xs-controllers-links-module-AuthenticationModule-7f6d216bb35e3e7ccd9604624b6135d8f5465ecd90e31775a15306956b7448fcabe9b99ae2f410fbf455cbdcaa502766f7d308585557e06f4a171548365d9d0b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-7f6d216bb35e3e7ccd9604624b6135d8f5465ecd90e31775a15306956b7448fcabe9b99ae2f410fbf455cbdcaa502766f7d308585557e06f4a171548365d9d0b"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-7f6d216bb35e3e7ccd9604624b6135d8f5465ecd90e31775a15306956b7448fcabe9b99ae2f410fbf455cbdcaa502766f7d308585557e06f4a171548365d9d0b"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthenticationModule-7f6d216bb35e3e7ccd9604624b6135d8f5465ecd90e31775a15306956b7448fcabe9b99ae2f410fbf455cbdcaa502766f7d308585557e06f4a171548365d9d0b"' : 'data-bs-target="#xs-injectables-links-module-AuthenticationModule-7f6d216bb35e3e7ccd9604624b6135d8f5465ecd90e31775a15306956b7448fcabe9b99ae2f410fbf455cbdcaa502766f7d308585557e06f4a171548365d9d0b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-7f6d216bb35e3e7ccd9604624b6135d8f5465ecd90e31775a15306956b7448fcabe9b99ae2f410fbf455cbdcaa502766f7d308585557e06f4a171548365d9d0b"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-7f6d216bb35e3e7ccd9604624b6135d8f5465ecd90e31775a15306956b7448fcabe9b99ae2f410fbf455cbdcaa502766f7d308585557e06f4a171548365d9d0b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoriesModule-7f75fa4a81937b8d4a1ba84aacf4ad6cab5660e374e77a1f9047882ea6aa4ee0aef13761879942d02df99b296495be8a5b6b76a67f17d253b8dd0af53231d172"' : 'data-bs-target="#xs-controllers-links-module-CategoriesModule-7f75fa4a81937b8d4a1ba84aacf4ad6cab5660e374e77a1f9047882ea6aa4ee0aef13761879942d02df99b296495be8a5b6b76a67f17d253b8dd0af53231d172"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-7f75fa4a81937b8d4a1ba84aacf4ad6cab5660e374e77a1f9047882ea6aa4ee0aef13761879942d02df99b296495be8a5b6b76a67f17d253b8dd0af53231d172"' :
                                            'id="xs-controllers-links-module-CategoriesModule-7f75fa4a81937b8d4a1ba84aacf4ad6cab5660e374e77a1f9047882ea6aa4ee0aef13761879942d02df99b296495be8a5b6b76a67f17d253b8dd0af53231d172"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriesModule-7f75fa4a81937b8d4a1ba84aacf4ad6cab5660e374e77a1f9047882ea6aa4ee0aef13761879942d02df99b296495be8a5b6b76a67f17d253b8dd0af53231d172"' : 'data-bs-target="#xs-injectables-links-module-CategoriesModule-7f75fa4a81937b8d4a1ba84aacf4ad6cab5660e374e77a1f9047882ea6aa4ee0aef13761879942d02df99b296495be8a5b6b76a67f17d253b8dd0af53231d172"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-7f75fa4a81937b8d4a1ba84aacf4ad6cab5660e374e77a1f9047882ea6aa4ee0aef13761879942d02df99b296495be8a5b6b76a67f17d253b8dd0af53231d172"' :
                                        'id="xs-injectables-links-module-CategoriesModule-7f75fa4a81937b8d4a1ba84aacf4ad6cab5660e374e77a1f9047882ea6aa4ee0aef13761879942d02df99b296495be8a5b6b76a67f17d253b8dd0af53231d172"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommentsModule.html" data-type="entity-link" >CommentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CommentsModule-54b14030502b952d1540267843925ffb016f4e513112390fc3c52bc958388c0c4e18dd1d364986fcec923a49152133c29b859fc81973598c5a0a00959361ff38"' : 'data-bs-target="#xs-controllers-links-module-CommentsModule-54b14030502b952d1540267843925ffb016f4e513112390fc3c52bc958388c0c4e18dd1d364986fcec923a49152133c29b859fc81973598c5a0a00959361ff38"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CommentsModule-54b14030502b952d1540267843925ffb016f4e513112390fc3c52bc958388c0c4e18dd1d364986fcec923a49152133c29b859fc81973598c5a0a00959361ff38"' :
                                            'id="xs-controllers-links-module-CommentsModule-54b14030502b952d1540267843925ffb016f4e513112390fc3c52bc958388c0c4e18dd1d364986fcec923a49152133c29b859fc81973598c5a0a00959361ff38"' }>
                                            <li class="link">
                                                <a href="controllers/CommentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CommentsModule-54b14030502b952d1540267843925ffb016f4e513112390fc3c52bc958388c0c4e18dd1d364986fcec923a49152133c29b859fc81973598c5a0a00959361ff38"' : 'data-bs-target="#xs-injectables-links-module-CommentsModule-54b14030502b952d1540267843925ffb016f4e513112390fc3c52bc958388c0c4e18dd1d364986fcec923a49152133c29b859fc81973598c5a0a00959361ff38"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommentsModule-54b14030502b952d1540267843925ffb016f4e513112390fc3c52bc958388c0c4e18dd1d364986fcec923a49152133c29b859fc81973598c5a0a00959361ff38"' :
                                        'id="xs-injectables-links-module-CommentsModule-54b14030502b952d1540267843925ffb016f4e513112390fc3c52bc958388c0c4e18dd1d364986fcec923a49152133c29b859fc81973598c5a0a00959361ff38"' }>
                                        <li class="link">
                                            <a href="injectables/CommentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonNamesModule.html" data-type="entity-link" >CommonNamesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CommonNamesModule-f42b2e6f977ab105939615c8a31e410458664abe9b5bde71a8b7814fc497ca642379824bd9246f1e19733b22b301b118c403b4fe2597c8fd657d98035644d7f8"' : 'data-bs-target="#xs-controllers-links-module-CommonNamesModule-f42b2e6f977ab105939615c8a31e410458664abe9b5bde71a8b7814fc497ca642379824bd9246f1e19733b22b301b118c403b4fe2597c8fd657d98035644d7f8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CommonNamesModule-f42b2e6f977ab105939615c8a31e410458664abe9b5bde71a8b7814fc497ca642379824bd9246f1e19733b22b301b118c403b4fe2597c8fd657d98035644d7f8"' :
                                            'id="xs-controllers-links-module-CommonNamesModule-f42b2e6f977ab105939615c8a31e410458664abe9b5bde71a8b7814fc497ca642379824bd9246f1e19733b22b301b118c403b4fe2597c8fd657d98035644d7f8"' }>
                                            <li class="link">
                                                <a href="controllers/CommonNamesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonNamesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CommonNamesModule-f42b2e6f977ab105939615c8a31e410458664abe9b5bde71a8b7814fc497ca642379824bd9246f1e19733b22b301b118c403b4fe2597c8fd657d98035644d7f8"' : 'data-bs-target="#xs-injectables-links-module-CommonNamesModule-f42b2e6f977ab105939615c8a31e410458664abe9b5bde71a8b7814fc497ca642379824bd9246f1e19733b22b301b118c403b4fe2597c8fd657d98035644d7f8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommonNamesModule-f42b2e6f977ab105939615c8a31e410458664abe9b5bde71a8b7814fc497ca642379824bd9246f1e19733b22b301b118c403b4fe2597c8fd657d98035644d7f8"' :
                                        'id="xs-injectables-links-module-CommonNamesModule-f42b2e6f977ab105939615c8a31e410458664abe9b5bde71a8b7814fc497ca642379824bd9246f1e19733b22b301b118c403b4fe2597c8fd657d98035644d7f8"' }>
                                        <li class="link">
                                            <a href="injectables/CommonNamesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonNamesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ManufacturersModule.html" data-type="entity-link" >ManufacturersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ManufacturersModule-8ca47a8625b6bea2a8673fe5554e0ec5a5aba5c8e7e16e816e948779cd7325656eeb671cdabd6326f199c20246d078679c476e2d8ed3aa1a3d85652de8aa79d5"' : 'data-bs-target="#xs-controllers-links-module-ManufacturersModule-8ca47a8625b6bea2a8673fe5554e0ec5a5aba5c8e7e16e816e948779cd7325656eeb671cdabd6326f199c20246d078679c476e2d8ed3aa1a3d85652de8aa79d5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ManufacturersModule-8ca47a8625b6bea2a8673fe5554e0ec5a5aba5c8e7e16e816e948779cd7325656eeb671cdabd6326f199c20246d078679c476e2d8ed3aa1a3d85652de8aa79d5"' :
                                            'id="xs-controllers-links-module-ManufacturersModule-8ca47a8625b6bea2a8673fe5554e0ec5a5aba5c8e7e16e816e948779cd7325656eeb671cdabd6326f199c20246d078679c476e2d8ed3aa1a3d85652de8aa79d5"' }>
                                            <li class="link">
                                                <a href="controllers/ManufacturersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManufacturersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ManufacturersModule-8ca47a8625b6bea2a8673fe5554e0ec5a5aba5c8e7e16e816e948779cd7325656eeb671cdabd6326f199c20246d078679c476e2d8ed3aa1a3d85652de8aa79d5"' : 'data-bs-target="#xs-injectables-links-module-ManufacturersModule-8ca47a8625b6bea2a8673fe5554e0ec5a5aba5c8e7e16e816e948779cd7325656eeb671cdabd6326f199c20246d078679c476e2d8ed3aa1a3d85652de8aa79d5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ManufacturersModule-8ca47a8625b6bea2a8673fe5554e0ec5a5aba5c8e7e16e816e948779cd7325656eeb671cdabd6326f199c20246d078679c476e2d8ed3aa1a3d85652de8aa79d5"' :
                                        'id="xs-injectables-links-module-ManufacturersModule-8ca47a8625b6bea2a8673fe5554e0ec5a5aba5c8e7e16e816e948779cd7325656eeb671cdabd6326f199c20246d078679c476e2d8ed3aa1a3d85652de8aa79d5"' }>
                                        <li class="link">
                                            <a href="injectables/ManufacturersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManufacturersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReviewsModule.html" data-type="entity-link" >ReviewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ReviewsModule-98c8a4e15f6e0e0402d96e47239b6cc7a48e97746c213bfe8ab96160fc47886a23d5d3b69346ddbbabd06a96120f4a3c24e0d54308cf76eb37f21818c7c7d489"' : 'data-bs-target="#xs-controllers-links-module-ReviewsModule-98c8a4e15f6e0e0402d96e47239b6cc7a48e97746c213bfe8ab96160fc47886a23d5d3b69346ddbbabd06a96120f4a3c24e0d54308cf76eb37f21818c7c7d489"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReviewsModule-98c8a4e15f6e0e0402d96e47239b6cc7a48e97746c213bfe8ab96160fc47886a23d5d3b69346ddbbabd06a96120f4a3c24e0d54308cf76eb37f21818c7c7d489"' :
                                            'id="xs-controllers-links-module-ReviewsModule-98c8a4e15f6e0e0402d96e47239b6cc7a48e97746c213bfe8ab96160fc47886a23d5d3b69346ddbbabd06a96120f4a3c24e0d54308cf76eb37f21818c7c7d489"' }>
                                            <li class="link">
                                                <a href="controllers/ReviewsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ReviewsModule-98c8a4e15f6e0e0402d96e47239b6cc7a48e97746c213bfe8ab96160fc47886a23d5d3b69346ddbbabd06a96120f4a3c24e0d54308cf76eb37f21818c7c7d489"' : 'data-bs-target="#xs-injectables-links-module-ReviewsModule-98c8a4e15f6e0e0402d96e47239b6cc7a48e97746c213bfe8ab96160fc47886a23d5d3b69346ddbbabd06a96120f4a3c24e0d54308cf76eb37f21818c7c7d489"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReviewsModule-98c8a4e15f6e0e0402d96e47239b6cc7a48e97746c213bfe8ab96160fc47886a23d5d3b69346ddbbabd06a96120f4a3c24e0d54308cf76eb37f21818c7c7d489"' :
                                        'id="xs-injectables-links-module-ReviewsModule-98c8a4e15f6e0e0402d96e47239b6cc7a48e97746c213bfe8ab96160fc47886a23d5d3b69346ddbbabd06a96120f4a3c24e0d54308cf76eb37f21818c7c7d489"' }>
                                        <li class="link">
                                            <a href="injectables/ReviewsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SharedModule-7f4331e89d9ceaac725b86573d4784d3191e932964cf02f8dc6ec4163c078505c65cbea2d1bf9a142ceb2c64718ba454bc7ac47c9c937bb3a7377673b83e811d"' : 'data-bs-target="#xs-injectables-links-module-SharedModule-7f4331e89d9ceaac725b86573d4784d3191e932964cf02f8dc6ec4163c078505c65cbea2d1bf9a142ceb2c64718ba454bc7ac47c9c937bb3a7377673b83e811d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-7f4331e89d9ceaac725b86573d4784d3191e932964cf02f8dc6ec4163c078505c65cbea2d1bf9a142ceb2c64718ba454bc7ac47c9c937bb3a7377673b83e811d"' :
                                        'id="xs-injectables-links-module-SharedModule-7f4331e89d9ceaac725b86573d4784d3191e932964cf02f8dc6ec4163c078505c65cbea2d1bf9a142ceb2c64718ba454bc7ac47c9c937bb3a7377673b83e811d"' }>
                                        <li class="link">
                                            <a href="injectables/GeneratorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneratorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidatorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidatorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SourcesModule.html" data-type="entity-link" >SourcesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SourcesModule-6f69a270eff1421f95d530c8267b945af8ca793316cb732b80ac2e4b603353eabde818c281893a99e1749a106882ed703eb3a2a4eaab7bffed65755b6a269cec"' : 'data-bs-target="#xs-controllers-links-module-SourcesModule-6f69a270eff1421f95d530c8267b945af8ca793316cb732b80ac2e4b603353eabde818c281893a99e1749a106882ed703eb3a2a4eaab7bffed65755b6a269cec"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SourcesModule-6f69a270eff1421f95d530c8267b945af8ca793316cb732b80ac2e4b603353eabde818c281893a99e1749a106882ed703eb3a2a4eaab7bffed65755b6a269cec"' :
                                            'id="xs-controllers-links-module-SourcesModule-6f69a270eff1421f95d530c8267b945af8ca793316cb732b80ac2e4b603353eabde818c281893a99e1749a106882ed703eb3a2a4eaab7bffed65755b6a269cec"' }>
                                            <li class="link">
                                                <a href="controllers/SourcesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SourcesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SourcesModule-6f69a270eff1421f95d530c8267b945af8ca793316cb732b80ac2e4b603353eabde818c281893a99e1749a106882ed703eb3a2a4eaab7bffed65755b6a269cec"' : 'data-bs-target="#xs-injectables-links-module-SourcesModule-6f69a270eff1421f95d530c8267b945af8ca793316cb732b80ac2e4b603353eabde818c281893a99e1749a106882ed703eb3a2a4eaab7bffed65755b6a269cec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SourcesModule-6f69a270eff1421f95d530c8267b945af8ca793316cb732b80ac2e4b603353eabde818c281893a99e1749a106882ed703eb3a2a4eaab7bffed65755b6a269cec"' :
                                        'id="xs-injectables-links-module-SourcesModule-6f69a270eff1421f95d530c8267b945af8ca793316cb732b80ac2e4b603353eabde818c281893a99e1749a106882ed703eb3a2a4eaab7bffed65755b6a269cec"' }>
                                        <li class="link">
                                            <a href="injectables/SourcesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SourcesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SteroidsModule.html" data-type="entity-link" >SteroidsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SteroidsModule-bb7e413d3fe282f860a75b8737dcb2c0fa36a48bd48099a3790a2fea3a5b4e2dd33ae7b95c5f0c83a16d202a4549382f4caf2fabdac98f4a2bc5a3ae409b5faf"' : 'data-bs-target="#xs-controllers-links-module-SteroidsModule-bb7e413d3fe282f860a75b8737dcb2c0fa36a48bd48099a3790a2fea3a5b4e2dd33ae7b95c5f0c83a16d202a4549382f4caf2fabdac98f4a2bc5a3ae409b5faf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SteroidsModule-bb7e413d3fe282f860a75b8737dcb2c0fa36a48bd48099a3790a2fea3a5b4e2dd33ae7b95c5f0c83a16d202a4549382f4caf2fabdac98f4a2bc5a3ae409b5faf"' :
                                            'id="xs-controllers-links-module-SteroidsModule-bb7e413d3fe282f860a75b8737dcb2c0fa36a48bd48099a3790a2fea3a5b4e2dd33ae7b95c5f0c83a16d202a4549382f4caf2fabdac98f4a2bc5a3ae409b5faf"' }>
                                            <li class="link">
                                                <a href="controllers/SteroidsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SteroidsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SteroidsModule-bb7e413d3fe282f860a75b8737dcb2c0fa36a48bd48099a3790a2fea3a5b4e2dd33ae7b95c5f0c83a16d202a4549382f4caf2fabdac98f4a2bc5a3ae409b5faf"' : 'data-bs-target="#xs-injectables-links-module-SteroidsModule-bb7e413d3fe282f860a75b8737dcb2c0fa36a48bd48099a3790a2fea3a5b4e2dd33ae7b95c5f0c83a16d202a4549382f4caf2fabdac98f4a2bc5a3ae409b5faf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SteroidsModule-bb7e413d3fe282f860a75b8737dcb2c0fa36a48bd48099a3790a2fea3a5b4e2dd33ae7b95c5f0c83a16d202a4549382f4caf2fabdac98f4a2bc5a3ae409b5faf"' :
                                        'id="xs-injectables-links-module-SteroidsModule-bb7e413d3fe282f860a75b8737dcb2c0fa36a48bd48099a3790a2fea3a5b4e2dd33ae7b95c5f0c83a16d202a4549382f4caf2fabdac98f4a2bc5a3ae409b5faf"' }>
                                        <li class="link">
                                            <a href="injectables/SteroidsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SteroidsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-a612cfd9c5061462ed389576fcfcf04c578edbe0cb198638d53327454c717f107acf13398f1d40ee82d0ab69ad1b13543065a25e332f530b8d3074d20181c5af"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-a612cfd9c5061462ed389576fcfcf04c578edbe0cb198638d53327454c717f107acf13398f1d40ee82d0ab69ad1b13543065a25e332f530b8d3074d20181c5af"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-a612cfd9c5061462ed389576fcfcf04c578edbe0cb198638d53327454c717f107acf13398f1d40ee82d0ab69ad1b13543065a25e332f530b8d3074d20181c5af"' :
                                            'id="xs-controllers-links-module-UsersModule-a612cfd9c5061462ed389576fcfcf04c578edbe0cb198638d53327454c717f107acf13398f1d40ee82d0ab69ad1b13543065a25e332f530b8d3074d20181c5af"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-a612cfd9c5061462ed389576fcfcf04c578edbe0cb198638d53327454c717f107acf13398f1d40ee82d0ab69ad1b13543065a25e332f530b8d3074d20181c5af"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-a612cfd9c5061462ed389576fcfcf04c578edbe0cb198638d53327454c717f107acf13398f1d40ee82d0ab69ad1b13543065a25e332f530b8d3074d20181c5af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-a612cfd9c5061462ed389576fcfcf04c578edbe0cb198638d53327454c717f107acf13398f1d40ee82d0ab69ad1b13543065a25e332f530b8d3074d20181c5af"' :
                                        'id="xs-injectables-links-module-UsersModule-a612cfd9c5061462ed389576fcfcf04c578edbe0cb198638d53327454c717f107acf13398f1d40ee82d0ab69ad1b13543065a25e332f530b8d3074d20181c5af"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ArticlesController.html" data-type="entity-link" >ArticlesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriesController.html" data-type="entity-link" >CategoriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CommentsController.html" data-type="entity-link" >CommentsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CommonNamesController.html" data-type="entity-link" >CommonNamesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ManufacturersController.html" data-type="entity-link" >ManufacturersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ReviewsController.html" data-type="entity-link" >ReviewsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SourcesController.html" data-type="entity-link" >SourcesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SteroidsController.html" data-type="entity-link" >SteroidsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Article.html" data-type="entity-link" >Article</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArticleDto.html" data-type="entity-link" >ArticleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArticleQueryDto.html" data-type="entity-link" >ArticleQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Base.html" data-type="entity-link" >Base</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseDto.html" data-type="entity-link" >BaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryDto.html" data-type="entity-link" >CategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryQueryDto.html" data-type="entity-link" >CategoryQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentDto.html" data-type="entity-link" >CommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentQueryDto.html" data-type="entity-link" >CommentQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonName.html" data-type="entity-link" >CommonName</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonNameDto.html" data-type="entity-link" >CommonNameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonNameQueryDto.html" data-type="entity-link" >CommonNameQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateArticleDto.html" data-type="entity-link" >CreateArticleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommentDto.html" data-type="entity-link" >CreateCommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommonNameDto.html" data-type="entity-link" >CreateCommonNameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateManufacturerDto.html" data-type="entity-link" >CreateManufacturerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReviewDto.html" data-type="entity-link" >CreateReviewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSourceDto.html" data-type="entity-link" >CreateSourceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSteroidDto.html" data-type="entity-link" >CreateSteroidDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileNotImageException.html" data-type="entity-link" >FileNotImageException</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeneratorProvider.html" data-type="entity-link" >GeneratorProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginPayloadDto.html" data-type="entity-link" >LoginPayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Manufacturer.html" data-type="entity-link" >Manufacturer</a>
                            </li>
                            <li class="link">
                                <a href="classes/ManufacturerDto.html" data-type="entity-link" >ManufacturerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ManufacturerQueryDto.html" data-type="entity-link" >ManufacturerQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationQueryDto.html" data-type="entity-link" >PaginationQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Review.html" data-type="entity-link" >Review</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReviewDto.html" data-type="entity-link" >ReviewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReviewQueryDto.html" data-type="entity-link" >ReviewQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Source.html" data-type="entity-link" >Source</a>
                            </li>
                            <li class="link">
                                <a href="classes/SourceDto.html" data-type="entity-link" >SourceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SourceQueryDto.html" data-type="entity-link" >SourceQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Steroid.html" data-type="entity-link" >Steroid</a>
                            </li>
                            <li class="link">
                                <a href="classes/SteroidCommentsCountDto.html" data-type="entity-link" >SteroidCommentsCountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SteroidDto.html" data-type="entity-link" >SteroidDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SteroidQueryDto.html" data-type="entity-link" >SteroidQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenPayloadDto.html" data-type="entity-link" >TokenPayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateArticleDto.html" data-type="entity-link" >UpdateArticleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCommentDto.html" data-type="entity-link" >UpdateCommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCommonNameDto.html" data-type="entity-link" >UpdateCommonNameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateManufacturerDto.html" data-type="entity-link" >UpdateManufacturerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateReviewDto.html" data-type="entity-link" >UpdateReviewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSourceDto.html" data-type="entity-link" >UpdateSourceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSteroidDto.html" data-type="entity-link" >UpdateSteroidDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserQueryDto.html" data-type="entity-link" >UserQueryDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArticlesService.html" data-type="entity-link" >ArticlesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentsService.html" data-type="entity-link" >CommentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonNamesService.html" data-type="entity-link" >CommonNamesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CrudService.html" data-type="entity-link" >CrudService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeneratorService.html" data-type="entity-link" >GeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManufacturersService.html" data-type="entity-link" >ManufacturersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReviewsService.html" data-type="entity-link" >ReviewsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SourcesService.html" data-type="entity-link" >SourcesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SteroidsService.html" data-type="entity-link" >SteroidsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidatorService.html" data-type="entity-link" >ValidatorService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IApiFile.html" data-type="entity-link" >IApiFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFieldOptions.html" data-type="entity-link" >IFieldOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFile.html" data-type="entity-link" >IFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INumberFieldOptions.html" data-type="entity-link" >INumberFieldOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStringFieldOptions.html" data-type="entity-link" >IStringFieldOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});