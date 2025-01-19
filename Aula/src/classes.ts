interface IPerson {
    id: number;
    //protect name: string; tirei isso porque nao dar pra definir uma propriedade protect na interface
    // age: number; a mesma coisa com o private
    sayMyName(): string 
}


// implementes para implementar na classe o interface
class Person implements IPerson{
    readonly id: number;
    protected name: string; //protect faz a variavel ser acessada da sua classe ou da sua subClasse
    private age: number; // so poder ser acessada dentro dessa classe
    
    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
    }

    // tipar metodos
    sayMyName(): string {
        return this.name
    }
}

// isso aqui abaixo e tudo mais simplificado e so comparar com o de cima bem menos linhas
class PersonRefect {
    constructor (readonly id: number,
        protected name: string,
        private age: number) {
            
        }
}

// subclasse 
class employe extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age)
    }

    // metodo
    whoAmI() {
        return this.name //age nao da pra ser acessada dentro de uma subClasse apenas da ClassePrincipal
    }
}

const mpessoal = new Person(21234, 'joao', 25)
// mpessoal.id = 2 nao consigo alterar pq esta  readonly 
