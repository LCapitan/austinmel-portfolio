import React, { Component } from 'react';
import AstroGame from '../comps/AstroGame';
import Header from '../comps/Header';
import Footer from '../comps/Footer';

class Develop extends Component {
    render() {
        return (
            <div className="develop default">
                <Header/>
                <div className="main-content">
                    <h1>code</h1>
                    <AstroGame/>
                    <div className="content">
                        <div>
                            <h2>Development</h2>
                            <p>Working at an agency has provided me with a wide range of experience as a developer. I primarily work as a web developer, but I also build responsive emails as well as animated ad banners when needed.</p>
                            <p>Some of my specialties include responsive design, animations, and web accessibility. The websites I've been involved with are typically built on CMSs like <a href="https://www.drupal.org/" target="_blank">Drupal</a>, <a href="https://www.sitecore.com/" target="_blank">SiteCore</a>, <a href="https://www.adobe.com/marketing/experience-manager.html" target="_blank">AEM</a> and <a href="https://wordpress.com/" target="_blank">WordPress</a>, which has helped me cultivate a strong sense of modularity in markup so it's flexible and easier for CMS implementation.</p>

                            <div class="dev-apps">
                                <ul>
                                    <li><i class="devicon-html5-plain"></i></li>
                                    <li><i class="devicon-css3-plain"></i></li>
                                    <li><i class="devicon-sass-plain"></i></li>
                                    <li><i class="devicon-less-plain-wordmark"></i></li>
                                    <li><i class="devicon-javascript-plain"></i></li>
                                    <li><i class="devicon-jquery-plain-wordmark"></i></li>
                                    <li><i class="devicon-git-plain"></i></li>
                                    <li><i class="devicon-bitbucket-plain"></i></li>
                                    <li><i class="devicon-sourcetree-plain"></i></li>
                                    <li><i class="devicon-webpack-plain"></i></li>
                                    <li><i class="devicon-grunt-plain"></i></li>
                                    <li><i class="devicon-gulp-plain"></i></li>
                                    <li><i class="devicon-react-plain"></i></li>
                                    <li><i class="devicon-vuejs-plain"></i></li>
                                    <li><i class="devicon-bootstrap-plain"></i></li>
                                    <li><i class="devicon-npm-original-wordmark"></i></li>
                                    <li><i class="devicon-yarn-plain"></i></li>
                                    <li><i class="devicon-bower-plain"></i></li>
                                    <li><i class="devicon-handlebars-plain"></i></li>
                                    <li><i class="devicon-atom-plain"></i></li>
                                    <li><i class="devicon-webstorm-plain"></i></li>
                                    <li><i class="devicon-chrome-plain"></i></li>
                                    <li><i class="devicon-firefox-plain"></i></li>
                                    <li><i class="devicon-safari-plain"></i></li>
                                    <li><i class="devicon-ie10-plain"></i></li>
                                    <li><i class="devicon-slack-plain"></i></li>
                                    <li><i class="devicon-trello-plain"></i></li>
                                    <li><i class="devicon-confluence-plain"></i></li>
                                    <li><i class="devicon-apple-plain"></i></li>
                                    <li><i class="devicon-android-plain"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Develop;