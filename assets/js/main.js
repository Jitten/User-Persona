    var skilsList = [{skill:'PHP',efficiency:'strong'},{skill:'Ruby',efficiency:'expert'},{skill:'Javascript',efficiency:'advanced'},{skill:'ActionScript',efficiency:'beginner'}];
    var colorsList = {'strong':'#000000d1','expert':'#373636a8','advanced':'#37363675','beginner':'#ccc'};
    
    function renderSkills(){
        let skillElm  = document.getElementById('skillsList');
        for(var i=0; i<skilsList.length;i++){
            let ind = i;
            var node = document.createElement("LI"); 
            var color = colorsList[skilsList[i].efficiency];
            node.style.cssText = 'background-color:'+color;              
            var textnode = document.createTextNode(skilsList[i].skill); 
            var iconNode = document.createElement('SPAN');
            iconTxt = document.createTextNode('x');
            iconNode.className='cancel_icon';
            iconNode.id = 'icon';
            iconNode.appendChild(iconTxt); 
            iconNode.onclick = function(i){
                removeSkill(ind);
            };  
            node.appendChild(textnode);
            node.appendChild(iconNode);
            skillElm.appendChild(node);
        }
    }
    renderSkills();
    
    function removeSkill(ind){
        skilsList.splice(ind,1);
        var uls = document.getElementById('skillsList');
        uls.innerHTML = '';
        renderSkills();
    }
    
    function toggelNameEdit(t){
        var nameLabel = document.getElementById('name');
        var nameEditElm = document.getElementById('nameEdit'); 
        if(t){
            nameLabel.style.display = 'none';
            nameEditElm.style.display = 'block';
        }else{
            nameLabel.style.display = 'block';
            nameEditElm.style.display = 'none';
            document.getElementById('nameInput').value = nameLabel.innerHTML;
        }
    };

    function toggleAddressEdit(t){
        var addressLabel = document.getElementById('address');
        var addressEditElm = document.getElementById('addressEdit'); 
        if(t){
            addressLabel.style.display = 'none';
            addressEditElm.style.display = 'block';
        }else{
            addressLabel.style.display = 'block';
            addressEditElm.style.display = 'none';
            document.getElementById('addressInput').value = addressLabel.innerHTML;
        }
    };

    function toggleLanguageEdit(t){
        var languageLabel = document.getElementById('language');
        var languageEditElm = document.getElementById('languageEdit'); 
        if(t){
            languageLabel.style.display = 'none';
            languageEditElm.style.display = 'block';
        }else{
            languageLabel.style.display = 'block';
            languageEditElm.style.display = 'none';
            document.getElementById('languageInput').value = languageLabel.innerHTML;
        }
    }

    function updateField(type){
        if(type == 'name'){
            var updatedName = document.getElementById('nameInput').value;
            if(updatedName){
                var nameLabel = document.getElementById('name');
                var nameEditElm = document.getElementById('nameEdit'); 
                nameLabel.innerText = updatedName;
                nameLabel.style.display = 'block';
                nameEditElm.style.display = 'none';
            }
        }else if(type == 'address'){
            var updatedAddress = document.getElementById('addressInput').value;
            if(updatedAddress){
                var addressLabel = document.getElementById('address');
                var addressEditElm = document.getElementById('addressEdit'); 
                addressLabel.innerText = updatedAddress;
                addressLabel.style.display = 'block';
                addressEditElm.style.display = 'none';
            }
        }else if(type == 'language'){
            var updatedLanguage = document.getElementById('languageInput').value;
            if(updatedLanguage){
                var languageLabel = document.getElementById('language');
                var languageEditElm = document.getElementById('languageEdit'); 
                languageLabel.innerText = updatedLanguage;
                languageLabel.style.display = 'block';
                languageEditElm.style.display = 'none';
            }
        }else if(type == 'skills'){
            var skill = document.getElementById('skillInput').value;
            var eff = document.getElementById('eff').value;
            if(skill && eff){
                var obj = {'skill':skill, 'efficiency':eff};
                skilsList.push(obj);

                let skillElm  = document.getElementById('skillsList');
                var node = document.createElement("LI"); 
                var color = colorsList[eff];
                node.style.cssText = 'background-color:'+color;              
                var textnode = document.createTextNode(skill); 
                var iconNode = document.createElement('SPAN');
                iconTxt = document.createTextNode('x');
                iconNode.className='cancel_icon';
                iconNode.id = 'icon';
                iconNode.appendChild(iconTxt); 
                iconNode.onclick = function(i){
                    removeSkill(skilsList.length-1);
                };           
                node.appendChild(textnode);
                node.appendChild(iconNode);
                skillElm.appendChild(node);
                toggleMoreSkills(0);
            }
        }
    }

    function toggleMoreSkills(t){
        var addmoreElm = document.getElementById('addmore');
        var addMoreSec = document.getElementById('addMoreSec');
        var cancelIconsLi = document.getElementById('skillsList').childNodes;
        
        if(t){
            addmoreElm.style.display='none';
            addMoreSec.style.display = 'block';
            cancelIconsLi.forEach(function(elm){
                elm.childNodes[1].style.display = 'block';
            }); 
        }else{
            addmoreElm.style.display='block';
            addMoreSec.style.display = 'none';
            cancelIconsLi.forEach(function(elm){
                elm.childNodes[1].style.display = 'none';
            });
        }
    };