var phrase  = "<h1>Anti-Hacking 101</h1><br>By: Briana Huynh and Jocelyn Martinez <br> <p>Companies, such as Instagram and Facebook, use encryption, hashing, and salt to protect your passwords.cAlthough these three methods all provide security, that’s where the differences end. Encryption is meant to be decoded, a two-way function, while hashing is a one way function.</p><br> Salting is an additional part towards hashing, and changes the hash value produced. <br> Encryption is the process of taking information and changing it into a code; a system of scrambled data that can be unscrambled. Meanwhile, hashes are added symbols that further encrypt data. <br> Some examples of hashes are SHA1 and MD. <br> Tips for a strong password: Have passwords that consist of the same style but are specific for each site <br>(for example, use Enter4Y2hoo for yahoo, and Enter4Gm2il for gmail) Experiment with your keyboard, and use emoticons if allowed! <br>The longer your password is, the harder it is to decrypt!";
var display = phrase.split("");
var emptystring = ''
document.onkeypress = function(){
    if (display.length > 0) {
        emptystring+= display.shift()
        document.getElementById("secret-text").innerHTML=emptystring;
    } else {
        return false;
    }
}
