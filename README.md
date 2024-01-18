# Projekt i JavaScriptbaserad webbutveckling (DT162G)
I detta repository finns källkodsfiler för en klientapplikation som är tänkt att användas för privat bruk för att logga handarbetesprojekt. Webbplatsen är skapad med hjälp av JavaScript-ramverket Vue och konsumerar data från en webbtjänst som också skapades under samma projekt med hjälp av Node.js och Express. Det finns funktionalitet för att både skapa, läsa, uppdatera och radera projekt, verktyg och garn.  På webbplatsen har jag också använt mig av CSS-ramverket Bootstrap.

## Klientapplikation
Roten App innehåller komponenten Header och komponenten RouterView och utgör grunden för webbplatsen.

### Views
- **HomeView**: Innehåller kod för flera olika cards där det informeras om antalet projekt i loggen utifrån projektstatus. Här finns det metod för att hämta alla produkter.
- **ProjectsView**: Innehåller flera exemplar av komponenten AccordionItem, här skrivs alla projekt ut i tre olika grupper beroende på status. Här finns det metod för att hämta alla projekt.
- **AddProjectView**: Innehåller komponenten ProjectForm för att lägga till ny produkt. Här finns metod för att lägga till projekt.
- **UpdateProductView**: Innehåller komponenten ProjectForm för att uppdatera information om projekt. Här finns metoder för att hämta information om ett specifikt projekt samt uppdatera projekt.
- **ToolsView**: Innehåller komponenten ToolForm för att kunna lägga till verktyg samt kod för en tabell där alla sparade verktyg skrivs ut. Här finns metoder för att lägga till, hämta och radera verktyg.
- **UpdateToolView**: Innehåller komponenten ToolForm för att uppdatera information om garn. Här finns metoder för att hämta information om ett specifikt verktyg samt uppdatera verktyg.
- **YarnsView**: Innehåller komponenten YarnForm för att kunna lägga till garn samt kod för en tabell där alla sparade garn skrivs ut. Här finns metoder för att lägga till, hämta och radera garn.
- **UpdateYarnView**: Innehåller komponenten YarnForm för att uppdatera information om garn. Här finns metoder för att hämta information om ett specifikt garn samt uppdatera garn.

Dessa views hanteras med hjälp av en så kallad router, index.js.

### Komponenter
- **BaseButton**: Består av ett button-element. Genom props kan man skicka med vad det ska stå på knappen.
- **BaseInput**: Består av ett label-element och ett input-element. Genom props kan man välja text för label, id på input för att koppla till label, typ av input och namn på v-model.
- **BaseSelect**: Består av ett label-element och ett select-element vars options hämtas i från databasen eller från data direkt i komponenten. Genom props kan man välja text för label, text för disabeld option, id på select för att koppla till label och namn på v-model samt skicka med vad som ska skrivas ut i options.
- **BaseTextarea**: Består av ett label-element och ett textarea-element. Genom props kan man välja text för label, id på input för att koppla till textarea och namn på v-model.
- **SubmitButton**: Består av ett input-element. Genom props kan man välja text på knappen.
- **ProjectForm**: Består av ett form-element där det inkluderas två BaseInput-komponenter av typen texy, tre BaseSelect-komponenter, en BaseTextarea-komponent och en SubmitButton-komponent. Här finns metoder för att hämta alla verktyg och garn.  
- **ToolForm**: Består av ett form-element där det inkluderas två BaseInput-komponenter av typen text, en BaseSelect-komponent och en SubmitButton-komponent.
- **YarnForm**: Består av ett form-element där det inkluderas tre BaseInput-komponenter av typen text och en SubmitButton-komponent.
- **AccordionItem**: Består bland annat av flera div-element, flera button-element (inkludering av två BaseButton-komponenter) och en ul-element med tillhörande li-element. Här finns metod för att radera projekt samt en emit för att göra en ny hämtning av projekten.
- **Header**: Består av ett header-element i vilket det sedan finns ett nav-element i vilken det finns namn på webbplatsen som länkar till startsidan, en dropdownmeny och två vanliga länkar.

## Om repositoriet
Skapat av Sofia Widholm 2022-2023

JavaScriptbaserad webbutveckling, Webbutvecklingsprogrammet, Mittuniversitetet
