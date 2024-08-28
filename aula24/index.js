//avaliacao de curto circuito
/*

&& -> e, todos valores precisam ser verdadeiros
|| -> apenas um dos valores precisa ser verdadeiro

FALSY   -> valores falsos
-false
-null
-undified
-0
-sting vazia
-NaN
*/

function falaOI ()
{
    return "Oi"
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOI())