//calcul factoriel
let fact = prompt("quel nombre factoriel voulez-vous ?");

function factorielle(num)
{
    if (num === 0)
    { 
        return 1; 
    }
    else
    { 
        return num * factorielle( num - 1 ); 
    }
}

console.log(`Le résultat est : ${factorielle(fact)}`);
