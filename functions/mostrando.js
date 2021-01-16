function Pesoa(name) {
    this.name = name
    this.walk = function() {
        return `${this.name} Está andando e cantando`
    }
        
    
    
}

const Mario = new Pesoa('Mário')

console.log(Mario.walk())