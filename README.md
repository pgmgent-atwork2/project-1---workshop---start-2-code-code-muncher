# **HTML5 Game**
### An interactive learning game, based around the HTML5 coding language.

#### *Application made for Artevelde University of Aplied Sciences* 
#### *by Mila Duterloo and Brecht Van Damme*


# Assignment link
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/XiFIQTfY)



#JAVASCRIPT
Dit is een stukje JavaScript-code dat wordt uitgevoerd wanneer de pagina volledig is geladen doormiddel van (window.onload).

De code haalt elementen op met de class 'el' en slaat ze op in de variabele otherElements met behulp van de querySelectorAll-methode.

Laten we als eerst uitleggen hoe we de audio hebben gemaakt. We halen als eerst de dom elementen audio en audio source op doormiddel van getElementById. 

Hierop volgt een functie playSound deze functie gaat ervoor zorgen dat de juist audio wordt afgespeeld. 

De setAttribute zorgt ervoor dat de src vervangt naar de zin die daarop volgt ${type} zorgt ervoor dat daar de juiste data-item komt en dat de juiste geluid wordt afgespeeld

currentTime zorgt ervoor dat het geluid vanaf het begint start..

De load() methode van het audio element laadt het audiobestand dat in de src attribuut is genoemd. Door deze methode aan te roepen, zorgt de browser ervoor dat het audiobestand wordt gedownload en klaar is om afgespeeld te worden.
De play() methode van het audio element start het afspelen van het audiobestand. 
