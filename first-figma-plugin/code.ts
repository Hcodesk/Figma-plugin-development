figma.showUI(__html__)

figma.ui.resize(500,500)

figma.ui.onmessage = pluginMessage => {
    console.log(pluginMessage.name)
    console.log(pluginMessage.username)
    console.log(pluginMessage.description)   
    console.log(pluginMessage.darkModeState)    
    console.log(pluginMessage.imageVariant)  

    //stocker l'ensemble des composants dans une variable

    const postComponentSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "post" ) as ComponentSetNode
     //ComponentSetNode pour s'assurer que lorsque le typeScript file est compilé ,la variable sera toujour considérée comme un ensemble de composants juste au cas ou js le codère comme un noeud différent

     const defaultVariant = postComponentSet.defaultVariant as ComponentNode
     //defaultVariant c'est le composant par defaut en haut a gauche du component set
     const defaultDark = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=none, Dark mode =true" ) as ComponentNode
     //selectionner un autre composant


    defaultVariant.createInstance() 
    //création d'une instance

    if(pluginMessage.darkModeState === true) { 
        console.log("welcome to the dark side")
        defaultDark.createInstance()
    } else {
        defaultVariant.createInstance()
    }

    figma.closePlugin()
} 