import axios from 'axios';

function getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}`);
}

var helpers = {
    getGithubInfos(username) {
        return axios.all([getRepos(username), getUserInfo(username)])
            .then(axios.spread((repos, userInfo) => {
                return {
                    repos: repos.data,
                    bio: userInfo.data
                }
            }))
    },
    setSession(key, data, menu = false){
        let panierSession, index, item;
        if (menu) {
            if (sessionStorage.getItem(key) !== null) {
                panierSession = JSON.parse(sessionStorage.getItem(key));
                panierSession.forEach((item, i)=> {
                    if(item.menu !== null){
                        index = i;
                    }
                });
                if(panierSession.menu !== null){
                    panierSession[index].menu.push(data);
                    sessionStorage.setItem(key, JSON.stringify(panierSession));
                    return panierSession;
                }
                index = panierSession.push({ menu: []});
                panierSession[index -1].menu.push(data);
                sessionStorage.setItem(key, JSON.stringify(panierSession));
                return data;
            }
            panierSession = [];
            index = panierSession.push({ menu: []});
            panierSession[index -1].menu.push(data);
            sessionStorage.setItem(key, JSON.stringify(panierSession));
            return data;
        }
        if (sessionStorage.getItem(key) !== null) {
            panierSession = [];
            panierSession.push(JSON.parse(sessionStorage.getItem(key)));
            panierSession.push(data);
            sessionStorage.setItem(key, JSON.stringify(panierSession));
            return panierSession;
        }
        sessionStorage.setItem(key, JSON.stringify(data));
        return data;
    }

};
export default helpers;