const pessoas = [
    {id: 3, nome:'lucas'},
    {id: 2, nome:'test'},
    {id: 1, nome:'helena'},
]

const novasPessoas = new Map();
for (const pessoa of pessoas) {
        const {id} = pessoa;
        novasPessoas.set(id, {...pessoas})
    }

console.log(novasPessoas);